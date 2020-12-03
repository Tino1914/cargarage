package com.example.carservice.domain;
//testing get set
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@SpringBootTest
class CarTest {
Car car;
    @BeforeEach
    void beforeEach() {
        car = new Car().setCarIdentifier("DAA").setId((long)3).setModel("Audi").setLicensePlate("ab123").setEngine("1.6").setCarSequence("3").setStatus("new").setPriority(3);



    }

    @AfterEach
    void tearDown() {

    }
    @Test
    void getId() {
    }

    @Test
    void setId() {
    }

    @Test
    void getModel() {
    }

    @Test
    void setModel() {
    }

    @Test
    void getLicensePlate() {
    }

    @Test
    void setLicensePlate() {
    }

    @Test
    void getEngine() {
    }

    @Test
    void setEngine() {
    }

    @Test
    void getCarSequence() {
    }

    @Test
    void setCarSequence() {
    }

    @Test
    void getStatus() {
    }

    @Test
    void setStatus() {
    }

    @Test
    void getPriority() {
    }

    @Test
    void setPriority() {
    }

    @Test
    void getDueDate() {
    }

    @Test
    void setDueDate() {
    }

    @Test
    void getCarIdentifier() {
    }

    @Test
    void setCarIdentifier() {
    }

    @Test
    void getCreated_At() {
    }

    @Test
    void setCreated_At() {
    }

    @Test
    void getUpdated_At() {
    }

    @Test
    void setUpdated_At() {
    }

    @Test
    void getBacklog() {
    }

    @Test
    void setBacklog() {
    }
}