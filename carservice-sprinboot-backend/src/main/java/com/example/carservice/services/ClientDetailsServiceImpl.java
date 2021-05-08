package com.example.carservice.services;


import com.example.carservice.domain.Client;
import com.example.carservice.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
    public class ClientDetailsServiceImpl implements UserDetailsService {
        @Autowired
        ClientRepository clientRepository;

        @Override
        @Transactional
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            Client client = clientRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("Client Not Found with username: " + username));

            return ClientDetailsImpl.build(client);
        }

    }

