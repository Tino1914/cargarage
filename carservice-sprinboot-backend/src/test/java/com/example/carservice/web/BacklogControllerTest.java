package com.example.carservice.web;

import com.example.carservice.domain.Backlog;
import com.example.carservice.domain.Car;
import com.example.carservice.domain.Client;
import com.example.carservice.repositories.BacklogRepository;
import com.example.carservice.repositories.ClientRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.validation.BindingResult;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

@RunWith(SpringRunner.class)
@SpringBootTest
class BacklogControllerTest {




    @Autowired
    private BacklogController backlogController;
    @MockBean
    private BacklogRepository backlogRepository;
    Backlog[] backlogs = new Backlog[]{new Backlog().setPTS(3).setClientIdentifier("YYY")};
    List<Backlog> Backlogs = Arrays.asList(backlogs);
    Car[] cars = new Car[]{new Car().setClientIdentifier("YYY").setStatus("Ready").setPriority(3).setCarSequence("12").setEngine("Audi").setLicensePlate("uuuu").setModel("GAS")};
    List<Car> Cars = Arrays.asList(cars);

    @Test
    void addCarToBacklog() {

        Backlog backlog = Backlogs.get(1);
        BindingResult result = mock(BindingResult.class);

        Mockito.when(backlogRepository.save(backlog)).thenReturn(backlog);
        ResponseEntity<?> response = backlogController.addCarToBacklog(Cars.get(0),result, Cars.get(0).getBacklog().getBacklogNumber());

        assertEquals(Cars, response.getBody());
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        Mockito.verify(backlogRepository).save(backlog);
    }

    @Test
    void getClientBacklog() {
    }

    @Test
    void getCar() {
    }

    @Test
    void updateCar() {
    }

    @Test
    void deleteCar() {
    }
}