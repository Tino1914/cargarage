package com.example.carservice.domain;

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
class BacklogTest {
Backlog backlog;

    @BeforeEach
    void beforeEach() {
        backlog = new Backlog().setId((long)3).setClientIdentifier("23").setPTS(23);



    }

    @AfterEach
    void tearDown() {

    }
    @Test
    void getId() {
        assertEquals(3 , backlog.getId());
    }

    @Test
    void setId() {
        backlog.setId((long) 8);
        assertEquals(8, backlog.getId());
    }

    @Test
    void getPTS() {
        assertEquals(23 , backlog.getPTS());
    }

    @Test
    void setPTS() {
        backlog.setPTS(8);
        assertEquals(8, backlog.getPTS());
    }

    @Test
    void getClient() {
    }

    @Test
    void setClient() {
    }

    @Test
    void getClientIdentifier() {
        assertEquals("23" , backlog.getClientIdentifier());
    }

    @Test
    void setClientIdentifier() {
        backlog.setClientIdentifier("tino");
        assertEquals("tino", backlog.getClientIdentifier());
    }


}