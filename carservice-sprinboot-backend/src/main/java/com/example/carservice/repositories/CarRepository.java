package com.example.carservice.repositories;

import com.example.carservice.domain.Car;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends CrudRepository<Car, Long> {

    List<Car> findByClientIdentifierOrderByPriority(String id);
    Car findByCarSequence(String sequence);
}
