package com.example.carservice.repositories;

import com.example.carservice.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {



    Optional<Client> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    Client findByClientIdentifier(String clientID);



   //  void delete(Optional <Client> client);



    @Override
    List<Client> findAll();


}