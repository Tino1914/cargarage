package com.example.carservice.web;

import com.example.carservice.domain.Car;
import com.example.carservice.services.CarService;
import com.example.carservice.services.MapValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private CarService carService;
    @Autowired
    private MapValidationService mapValidationService;

    @PostMapping("/{backlog_id}")
    public ResponseEntity<?> addCarToBacklog(@Valid @RequestBody Car car, BindingResult result,
                                             @PathVariable String backlog_id)
    {

        ResponseEntity<?> errorMap = mapValidationService.MapValidationService(result);
        if(errorMap != null){
            return errorMap;
        }

        Car car1 = carService.addCar(backlog_id, car);
        return new ResponseEntity<Car>(car1, HttpStatus.CREATED);


    }

    @GetMapping("/{backlog_id}")
    public Iterable<Car> getClientBacklog(@PathVariable String backlog_id){
        return carService.findBacklogId(backlog_id);

        };

    @GetMapping("/{backlog_id}/{car_id}")
    public ResponseEntity<?> getCar(@PathVariable String backlog_id, @PathVariable String car_id){
        Car car = carService.findPTByCarSequence(backlog_id, car_id);
        return  new ResponseEntity<Car>(car, HttpStatus.OK);
    }

    @PatchMapping("/{backlog_id}/{car_id}")
    public ResponseEntity<?> updateCar(@Valid @RequestBody Car car, BindingResult result,
                                       @PathVariable String backlog_id, @PathVariable String car_id){
        ResponseEntity<?> errorMap = mapValidationService.MapValidationService(result);
        if(errorMap != null) { return errorMap;}


            Car updatedCar = carService.updateByCarSequence(car, backlog_id, car_id);
            return new ResponseEntity<Car>(updatedCar, HttpStatus.OK);



    }

    @DeleteMapping("/{backlog_id}/{car_id}")
    public ResponseEntity<?> deleteCar(@PathVariable String backlog_id, @PathVariable String car_id){
       carService.deleteCarByCarSequence(backlog_id, car_id);
       return new ResponseEntity<String>("Car"+car_id+" was deleted successfully", HttpStatus.OK);
    }



}
