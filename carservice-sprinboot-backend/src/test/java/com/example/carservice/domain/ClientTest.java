package com.example.carservice.domain;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@SpringBootTest
class ClientTest {
 Client client;
    @BeforeEach
     void beforeEach() {
        client = new Client().setClientIdentifier("DAA").setFirstName("Ivan").setId((long)3).setLastName("ivanov").setUsername("pavlin");



    }

    @AfterEach
    void tearDown() {
//nee
    }

    @Test
    void getCar() {
    }

    @Test
    void setCar() {
    }

    @Test
    void getId() {
        assertEquals(3, client.getId());

    }

    @Test
    void setId() {
               client.setId((long) 8);
       assertEquals(8, client.getId());




    }

    @Test
    void getFirstName() {
       assertEquals("Ivan", client.getFirstName());
    }

    @Test
    void setFirstName() {
       client.setFirstName("bate");
       assertEquals("bate", client.getFirstName());
    }

    @Test
    void getLastName() {
       assertEquals("ivanov", client.getLastName());
    }

    @Test
    void setLastName() {
       client.setLastName("bate");
       assertEquals("bate", client.getLastName());
    }

    @Test
    void getUserName() {
       assertEquals("pavlin", client.getUsername());
    }

    @Test
    void setUserName() {
       client.setUsername("bate");
       assertEquals("bate", client.getUsername());
    }

//    @Test
//    void getPassword() {
//       assertEquals("1231312", client.getPassword());
//    }
//
//    @Test
//    void setPassword() {
//       client.setPassword("dadsa12313");
//       assertEquals("dadsa12313", client.getPassword());
//    }



    @Test
    void getClientIdentifier() {
       assertEquals("DAA", client.getClientIdentifier());
    }

    @Test
    void setClientIdentifier() {
       client.setClientIdentifier("test1");
       assertEquals("test1", client.getClientIdentifier());
    }

    @Test
    void getBacklog() {

    }

    @Test
    void setBacklog() {
    }
}