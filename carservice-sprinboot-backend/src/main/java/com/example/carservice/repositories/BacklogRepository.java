package com.example.carservice.repositories;

import com.example.carservice.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {

    Backlog findByClientIdentifier(String Identifier);
}
