package com.example.carservice.services;

import com.example.carservice.domain.Client;
import com.example.carservice.repositories.ClientRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)

class ClientServiceTest {

    @Mock
    ClientRepository clientRepository;
    @InjectMocks
    ClientService clientService;

    @BeforeEach
    void beforeEach() {

    }

    @AfterEach
    void tearDown() {
    }

//    @Test
//    void saveOrUpdateClient() {
//         Client client = new Client();
//        client.setFirstName("Ivan");
//        when(clientRepository.save(any(Client.class))).thenReturn(new Client());
//        Client client1 = clientService.saveOrUpdateClient(client);
//        assertThat(client1.getFirstName()).isSameAs(client.getFirstName());
//
//
//
//    }

//    @Test
//    void findClientByIdentifier() {
//   final Client client = new Client();
//      final String clientIdentifier = "YYY";
//      given(clientRepository.findByClientIdentifier(clientIdentifier)).willReturn(Optional.of(client));
//      final Optional<Client> expected = clientService.findClientByIdentifier(clientIdentifier);
//      assertThat(expected).isNotNull();
//
//    }
//
//    @Test
//    void findAllClients() {
//        List<Client> clients = new ArrayList<>();
//        when(clientRepository.findAll()).thenReturn(clients);
//        List<Client> realClients = clientService.findAllClients();
//        assertThat(clients).isSameAs(realClients);
//
//
//    }

    @Test
    void deleteClientByIdentifier() {




    }
}