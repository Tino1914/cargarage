package com.example.carservice.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@SpringBootTest
class AppointmentTest {
Appointment appointment;

    @BeforeEach
    void beforeEach() {
        appointment = new Appointment().setId((long)3).setPersonID((long)1).setDate("date").setTime("time");



    }

    @Test
    void setId() {
        appointment.setId((long) 8);
        assertEquals(8, appointment.getId());
    }

    @Test
    void setPersonID() {
        appointment.setPersonID((long) 8);
        assertEquals(8, appointment.getPersonID());
    }

    @Test
    void setDate() {
        appointment.setDate("date");
        assertEquals("date", appointment.getDate());
    }

    @Test
    void setTime() {
        appointment.setTime("time");
        assertEquals("time", appointment.getTime());
    }

    @Test
    void getId() {
        assertEquals(3 , appointment.getId());
    }

    @Test
    void getPersonID() {
        assertEquals(1 , appointment.getPersonID());
    }

    @Test
    void getDate() {
        assertEquals("date" , appointment.getDate());
    }

    @Test
    void getTime() {
        assertEquals( "time" , appointment.getTime());
    }
}