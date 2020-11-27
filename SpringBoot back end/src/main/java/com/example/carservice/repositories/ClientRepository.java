package com.example.carservice.repositories;

import com.example.carservice.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    Client findByClientIdentifier(String clientID);

    @Override
    List<Client> findAll();
}
