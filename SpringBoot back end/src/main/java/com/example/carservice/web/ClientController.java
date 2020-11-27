package com.example.carservice.web;


import com.example.carservice.domain.Client;
import com.example.carservice.services.ClientService;
import com.example.carservice.services.MapValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;


@RestController
@RequestMapping("/api/client")
@CrossOrigin
public class ClientController {

    @Autowired
    private ClientService clientService;
    @Autowired
    private MapValidationService mapValidationService;



    @PostMapping("")
    public ResponseEntity<?> createNewClient(@Valid @RequestBody Client client, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationService.MapValidationService(result);
        if(errorMap!= null) return errorMap;



        Client client1 = clientService.saveOrUpdateClient(client);
        return new ResponseEntity<Client>(client, HttpStatus.CREATED);
    }

    @GetMapping("/{clientID}")
    public ResponseEntity<?>getClientById(@PathVariable String clientID){

        Client client = clientService.findClientByIdentifier(clientID);
        return  new ResponseEntity<Client>(client, HttpStatus.OK);
    }

    @GetMapping("/all")
    public List<Client> getAllClients(){return  clientService.findAllClients();
    }
    @DeleteMapping("/{clientID}")
    public ResponseEntity<?> deleteClient(@PathVariable String clientID){
        clientService.deleteClientByIdentifier(clientID);
        return new ResponseEntity<String>("Client was successfully deleted", HttpStatus.OK);
    }












}
