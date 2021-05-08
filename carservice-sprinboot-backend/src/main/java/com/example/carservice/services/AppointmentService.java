package com.example.carservice.services;


import com.example.carservice.domain.Appointment;
import com.example.carservice.repositories.AppointmentJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentJpaRepository appointmentJpaRepository;

    public Appointment makeAppointment(long personID, String date, String time){

        Appointment appointment = new Appointment(personID,date,time);
        appointmentJpaRepository.save(appointment);
        return appointment;
    }
    public List<Appointment> findAppointments(String date){

        List<Appointment> appointments  = appointmentJpaRepository.findAllByDate(date);
        return appointments;
    }


}
