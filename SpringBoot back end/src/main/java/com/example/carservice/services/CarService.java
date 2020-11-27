package com.example.carservice.services;


import com.example.carservice.domain.Backlog;
import com.example.carservice.domain.Car;
import com.example.carservice.domain.Client;
import com.example.carservice.exceptions.ClientNotFoundException;
import com.example.carservice.repositories.BacklogRepository;
import com.example.carservice.repositories.CarRepository;
import com.example.carservice.repositories.ClientRepository;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {


    @Autowired
    private BacklogRepository backlogRepository;
    @Autowired
    private CarRepository carRepository;
    @Autowired
    private ClientRepository clientRepository;


    public Car addCar(String clientIdentifier, Car car){
        //Cars to be added to a specific Client, not null Client, Backlog(list of cars) exists
        //set the Backlog to the Car
        //client sequence  to be like : Identifier: 23 = Id:23
        //Update the Backlog sequence
        //Initial priority of what the car should be repaired and stuff

        try {




        Backlog backlog = backlogRepository.findByClientIdentifier(clientIdentifier);

        car.setBacklog(backlog);

        Integer BacklogSequence = backlog.getPTS();

        BacklogSequence++;

        backlog.setPTS(BacklogSequence);

        //Add sequence to the car
        car.setCarSequence(clientIdentifier+"-"+BacklogSequence);
        car.setCarIdentifier(clientIdentifier);


        //priority
        if(car.getPriority()==0 || car.getPriority()==null){
            car.setPriority(3);
        }

        if(car.getStatus()==""|| car.getStatus()==null){
            car.setStatus("TO_DO");
        }

        return carRepository.save(car);
        }catch (Exception e){
            throw new ClientNotFoundException("Client not Found");
        }

    }


   public  Iterable<Car> findBacklogId(String id) {

       Client client = clientRepository.findByClientIdentifier(id);
       if(client==null){
           throw new ClientNotFoundException("Client with ID: '"+id+"' does not exist");
       }
        return carRepository.findByCarIdentifierOrderByPriority(id);

    }


    public Car findPTByCarSequence(String backlog_id, String car_id){
 //sEARCHING FOR AN EXISTING BACKLOG OF A CLIENT
        Backlog backlog = backlogRepository.findByClientIdentifier(backlog_id);
        if(backlog == null){
            throw new ClientNotFoundException("Client with ID: '"+backlog_id+"' does not exist");
        }


        //see if a car exists
        Car car = carRepository.findByCarSequence(car_id);
        if(car == null){
            throw new ClientNotFoundException("Car '"+car_id+"' not found");
        }

        // make sure that the backlog/client id corresponds to right client
        if(!car.getCarIdentifier().equals(backlog_id)){
            throw new ClientNotFoundException("Car '"+car_id+"' does not exist in Client: '"+backlog_id);

        }

        return car;
    }


    public Car updateByCarSequence(Car updatedCar, String backlog_id, String car_id){
        Car car = findPTByCarSequence(backlog_id, car_id);
        car = updatedCar;
        return carRepository.save(car);

    };

    public void deleteCarByCarSequence(String backlog_id, String car_id){
        Car car = findPTByCarSequence(backlog_id, car_id);
//        Backlog backlog = car.getBacklog();
//        List<Car> cars = backlog.getCars();
//        cars.remove(car);
//        backlogRepository.save(backlog);
        carRepository.delete(car);
    }



}
