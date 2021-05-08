package com.example.carservice.web;

import com.example.carservice.domain.Client;
import com.example.carservice.repositories.ClientRepository;
import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
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
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ClientControllerTest {


     @Autowired
     private ClientController clientController;
     @MockBean
     private ClientRepository clientRepository;
     //List<Client> Clients = new ArrayList<Client>(){};
    Client[] clients = new Client[]{new Client().setFirstName("Ivan").setLastName("Cho").setClientIdentifier("2").setUsername("vanko"),new Client().setFirstName("Ivan").setLastName("Cho").setClientIdentifier("2").setUsername("vanko")};
    List<Client>Clients = Arrays.asList(clients);
    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }


    @Test
    public void GetAllClients (){
        Mockito.when(clientRepository.findAll()).thenReturn(Clients);
         List<Client> actualClients = clientController.getAllClients();
        assertEquals(Clients, actualClients);
    }


    @Test
    public void DeleteClient(){

        Client client = Clients.get(0);


        Mockito.when(clientRepository.findByClientIdentifier(client.getClientIdentifier())).thenReturn(client);
        clientRepository.delete(client);
        Mockito.verify(clientRepository).delete(client);


    }



    @Test
    public void  CreateClient(){

        Client client = Clients.get(1);
        BindingResult result = mock(BindingResult.class);
        Mockito.when(clientRepository.save(client)).thenReturn(client);
        ResponseEntity<?> response = clientController.createNewClient(client, result);

        assertEquals(client, response.getBody());
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        Mockito.verify(clientRepository).save(client);


    }



    @Test

    public void FindByIdentifier(){

        Client client = Clients.get(0).setClientIdentifier("123");
        BindingResult result = mock(BindingResult.class);
        Mockito.when(clientRepository.findByClientIdentifier("123")).thenReturn(client);
        ResponseEntity<?> responseClientID = clientController.getClientById("123");

        assertEquals(client, responseClientID.getBody());
        assertEquals(HttpStatus.OK, responseClientID.getStatusCode());
        Mockito.verify(clientRepository).findByClientIdentifier(client.getClientIdentifier());


    }



}