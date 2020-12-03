package com.example.carservice.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Car {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Please include a car model")
    private String model;
    @NotBlank(message = "Please include a license plate")
    private String licensePlate;
    @NotBlank(message = "Please include a car engine")
    private String engine;
    @Column(updatable = false, unique = true)
    private String carSequence;
    private String status;
    private Integer priority;
    private Date dueDate;
    //Many to one with BackLog
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "backlog_id", updatable = false, nullable = false)
    @JsonIgnore
    private Backlog backlog;


    @Column(updatable = false)
    private String carIdentifier;
    private Date created_At;
    private Date updated_At;


    public Car() {

    }



    @PrePersist
    protected void onCreate(){
        this.created_At = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updated_At = new Date();
    }



    public Long getId() {
        return id;
    }

    public Car setId(Long id) {
        this.id = id;
        return this;
    }

    public String getModel() {
        return model;
    }

    public Car setModel(String model) {
        this.model = model;
        return this;
    }
    public String getLicensePlate() {
        return licensePlate;
    }

    public Car setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
        return this;
    }

    public String getEngine() {
        return engine;
    }

    public Car setEngine(String engine) {
        this.engine = engine;
        return this;
    }

    public String getCarSequence() {
        return carSequence;
    }

    public Car setCarSequence(String carSequence) {
        this.carSequence = carSequence;
        return this;
    }

    public String getStatus() {
        return status;
    }

    public Car setStatus(String status) {
        this.status = status;
        return this;
    }

    public Integer getPriority() {
        return priority;
    }

    public Car setPriority(Integer priority) {
        this.priority = priority;
        return this;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public String getCarIdentifier() {
        return carIdentifier;
    }

    public Car setCarIdentifier(String carIdentifier) {
        this.carIdentifier = carIdentifier;
        return this;
    }

    public Date getCreated_At() {
        return created_At;
    }

    public void setCreated_At(Date created_At) {
        this.created_At = created_At;
    }

    public Date getUpdated_At() {
        return updated_At;
    }

    public void setUpdated_At(Date updated_At) {
        this.updated_At = updated_At;
    }

    public Backlog getBacklog() {
        return backlog;
    }

    public void setBacklog(Backlog backlog) {
        this.backlog = backlog;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", model='" + model + '\'' +
                ", engine='" + engine + '\'' +
                ", carSequence='" + carSequence + '\'' +
                ", status='" + status + '\'' +
                ", priority=" + priority +
                ", dueDate=" + dueDate +
                ", carIdentifier='" + carIdentifier + '\'' +
                ", created_At=" + created_At +
                ", updated_At=" + updated_At +
                '}';
    }
}
