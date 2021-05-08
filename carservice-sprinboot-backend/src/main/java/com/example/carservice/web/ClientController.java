package com.example.carservice.web;


import com.example.carservice.domain.Appointment;
import com.example.carservice.domain.Client;
import com.example.carservice.services.AppointmentService;
import com.example.carservice.services.ClientService;
import com.example.carservice.services.MapValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/client")
@CrossOrigin
public class ClientController {

    @Autowired
    private ClientService clientService;
    @Autowired
    private MapValidationService mapValidationService;
    @Autowired
    private AppointmentService appointmentService;



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
        return  new ResponseEntity<>(client, HttpStatus.OK);
    }

    @GetMapping("/clientid/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable("id") long id) {
        Optional<Client> clientData = clientService.findById(id);
         System.out.println(clientData.get().toString());
        return clientData.map(client -> new ResponseEntity<>(client, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public List<Client> getAllClients(){return  clientService.findAllClients();
    }
    @DeleteMapping("/{clientID}")
    public ResponseEntity<?> deleteClient(@PathVariable String clientID){
        clientService.deleteClientByIdentifier(clientID);
        return new ResponseEntity<String>("Client was successfully deleted", HttpStatus.OK);
    }



    @PostMapping("/makeAppointment/{id}")
    public ResponseEntity<Appointment> makeAppointment(@PathVariable("id") long personID, @RequestBody Appointment appointment){
        try{

            return new ResponseEntity<>(appointmentService.makeAppointment(personID,appointment.getDate(),appointment.getTime()),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("getAppointmentsForDate/{date}")
    public ResponseEntity<List<Appointment>> getAppointmentsForDate(@PathVariable String date){
        try{
            List<Appointment> appointments = appointmentService.findAppointments(date);
            return new ResponseEntity<>(appointments,HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }












}
