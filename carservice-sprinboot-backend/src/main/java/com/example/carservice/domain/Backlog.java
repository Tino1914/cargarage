package com.example.carservice.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Backlog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer PTS =0;
    private String clientIdentifier;
    private String backlogNumber;

    //OneToOne with client
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "client_id", nullable = false)
    @JsonIgnore
    private Client client;

    //OneToMany cars
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "backlog", orphanRemoval = true)
    private List<Car> cars = new ArrayList<>();




    public Backlog() {
    }

    public Long getId() {
        return id;
    }

    public Backlog setId(Long id) {
        this.id = id;
        return this;
    }

    public Integer getPTS() {
        return PTS;
    }

    public Backlog setPTS(Integer PTS) {
        this.PTS = PTS;
        return this;
    }


    public Client getClient() {
        return client;
    }

    public Backlog setClient(Client client) {
        this.client = client;
        return this;
    }

    public String getClientIdentifier() {
        return clientIdentifier;
    }

    public Backlog setClientIdentifier(String clientIdentifier) {
        this.clientIdentifier = clientIdentifier;
        return this;
    }

    public List<Car> getCars() {
        return cars;
    }

    public Backlog setCars(List<Car> cars) {
        this.cars = cars;
        return this;
    }

    public String getBacklogNumber() {
        return backlogNumber;
    }

    public void setBacklogNumber(String backlogNumber) {
        this.backlogNumber = backlogNumber;
    }
}
