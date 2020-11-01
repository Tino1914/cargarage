package com.example.carservice.services;

import com.example.carservice.domain.Client;
import com.example.carservice.exceptions.ClientIdException;
import com.example.carservice.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public Client saveOrUpdateClient(Client client){
        try {
            client.setClientIdentifier(client.getClientIdentifier().toUpperCase());
            return clientRepository.save(client);
        }catch (Exception e){
            throw new ClientIdException("Client ID '"+client.getClientIdentifier().toUpperCase()+"' already exists");
        }



        //Logic

    }

    public Client findClientByIdentifier(String clientID){

        Client client = clientRepository.findByClientIdentifier(clientID.toUpperCase());

        if(client == null){
            throw new ClientIdException("Client does not exists");
        }
        return client;

    }


    public Iterable<Client> findAllClients(){
        return clientRepository.findAll();
    }


    public void deleteClientByIdentifier(String clientID){
        Client client = clientRepository.findByClientIdentifier(clientID);

        if(client == null){
            throw  new ClientIdException("Cannot delete this project, because it does not exists");
        }
        clientRepository.delete(client);




    }






}
