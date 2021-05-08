package com.example.carservice.services;


import com.example.carservice.domain.Car;
import com.example.carservice.domain.Client;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class ClientDetailsImpl implements UserDetails {
        private static final long serialVersionUID = 1L;

        private Long id;

        private String username;

        private String email;

    @JsonIgnore
    private String password;

       private String firstName;

        private String lastName;


        private String clientIdentifier;
//    @JsonIgnore

    //    private String licensePlate;





        private Collection<? extends GrantedAuthority> authorities;

        public ClientDetailsImpl(Long id,  String firstName,String lastName, String username,  String email, String password ,String clientIdentifier,
                                 Collection<? extends GrantedAuthority> authorities) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.username = username;
            this.email = email;
            this.password = password;

            this.clientIdentifier = clientIdentifier;
            this.authorities = authorities;
        }

        public static ClientDetailsImpl build(Client client) {
            List<GrantedAuthority> authorities = client.getRoles().stream()
                    .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                    .collect(Collectors.toList());

            return new ClientDetailsImpl(
                    client.getId(),
                    client.getFirstName(),
                    client.getLastName(),
                    client.getUsername(),
                    client.getEmail(),
                    client.getPassword(),
                    client.getClientIdentifier(),
                    authorities);
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorities;
        }

        public String getFirstName(){return firstName;}
        public String getLastName(){ return lastName;}

        public String getClientIdentifier(){return clientIdentifier;}
     //   public String getLicensePlate(){return password;}

        public Long getId() {
            return id;
        }

        public String getEmail() {
            return email;
        }

        @Override
        public String getPassword() {
            return password;
        }

        @Override
        public String getUsername() {
            return username;
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o)
                return true;
            if (o == null || getClass() != o.getClass())
                return false;
            ClientDetailsImpl client = (ClientDetailsImpl) o;
            return Objects.equals(id, client.id);
        }
    }

