package com.example.carservice.repositories;

import com.example.carservice.domain.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends CrudRepository<Client, Long> {

    Client findByClientIdentifier(String clientID);

    @Override
    Iterable<Client> findAll();
}
