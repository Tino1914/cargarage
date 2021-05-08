package com.example.carservice.domain;

import com.example.carservice.models.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(	name = "clients",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })

public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "First name is required")
    private String firstName;
    @NotBlank(message = "Last name is required")
    private String lastName;
    @NotBlank(message = "Username is required")
    private String username;
    @NotBlank
    @Size(max = 50)
    //@Email
    private String email;
    @NotBlank(message = "Please set license plate number")
    @Size(max = 120)
    private String password;

    @NotBlank(message = "Client identifier is required")
    @Column(updatable = false, unique = true)
    private String clientIdentifier;
    @OneToOne(targetEntity = Car.class)
    @JoinColumn(name = "car", referencedColumnName = "id")
    private  Car car;
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "client")//if client is deleted everything should be deleted
 //
    @JsonIgnore
    private Backlog backlog;



    @ManyToMany(fetch = FetchType.LAZY)
     @JoinTable(name = "client_roles",
            joinColumns = @JoinColumn(name = "client_id"),
           inverseJoinColumns = @JoinColumn(name = "role_id"))
       private Set<Role> roles = new HashSet<>();




    public Client() {

    }


    public Client( Long id, String firstName, String lastName,String username, String email,  String password, String clientIdentifier, Car car) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.clientIdentifier = clientIdentifier;
         this.car = car;


    }





    public Long getId() {
        return id;
    }

    public Client setId(Long id) {
        this.id = id;
        return this;
    }

    public String getFirstName() {
        return firstName;
    }

    public Client setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public Client setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public Client setUsername(String username) {
        this.username = username;
        return this;
    }



    public String getClientIdentifier() {
        return clientIdentifier;
    }

    public Client setClientIdentifier(String clientIdentifier) {
        this.clientIdentifier = clientIdentifier;
        return this;
    }


    public Backlog getBacklog() {
        return backlog;
    }

    public void setBacklog(Backlog backlog) {
        this.backlog = backlog;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", licensePlate='" + password + '\'' +

                ", clientIdentifier='" + clientIdentifier + '\'' +
                ", car=" + car +
                ", backlog=" + backlog +
                ", roles=" + roles +
                '}';
    }
}
