package com.example.carservice.repositories;

import com.example.carservice.domain.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AppointmentJpaRepository  extends JpaRepository<Appointment, Long> {

    Optional<Appointment> findByDate(String date);
    List<Appointment> findAllByDate(String date);

}
