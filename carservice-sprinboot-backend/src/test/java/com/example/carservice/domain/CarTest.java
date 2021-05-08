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
        car = new Car().setClientIdentifier("DAA").setId((long)3).setModel("Audi").setLicensePlate("ab123").setEngine("1.6").setCarSequence("3").setStatus("new").setPriority(3);



    }

    @AfterEach
    void tearDown() {

    }
    @Test
    void getId() {
        assertEquals(3 , car.getId());
    }

    @Test
    void setId() {
        car.setId((long) 8);
        assertEquals(8, car.getId());
    }

    @Test
    void getModel() {
        assertEquals("Audi", car.getModel());
    }

    @Test
    void setModel() {
        car.setModel("audi");
        assertEquals("audi", car.getModel());
    }

    @Test
    void getLicensePlate() {
        assertEquals("ab123", car.getLicensePlate());
    }

    @Test
    void setLicensePlate() {
        car.setLicensePlate("audi");
        assertEquals("audi", car.getLicensePlate());
    }

    @Test
    void getEngine() {
        assertEquals("1.6", car.getEngine());
    }

    @Test
    void setEngine() {
        car.setEngine("audi");
        assertEquals("audi", car.getEngine());
    }

    @Test
    void getCarSequence() {
        assertEquals("3", car.getCarSequence());
    }

    @Test
    void setCarSequence() {
        car.setCarSequence("audi");
        assertEquals("audi", car.getCarSequence());
    }

    @Test
    void getStatus() {
        assertEquals("new", car.getStatus());
    }

    @Test
    void setStatus() {
        car.setStatus("audi");
        assertEquals("audi", car.getStatus());
    }

    @Test
    void getPriority() { assertEquals(3, car.getPriority());

    }

    @Test
    void setPriority() {
        car.setPriority(3);
        assertEquals(3, car.getPriority());
    }


    @Test
    void getClientIdentifier() {
        assertEquals("DAA", car.getClientIdentifier());
    }

    @Test
    void setClientIdentifier() {
        car.setClientIdentifier("audi");
        assertEquals("audi", car.getClientIdentifier());
    }


}