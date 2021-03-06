package com.example.carservice.web;
import com.example.carservice.domain.Client;
import com.example.carservice.repositories.ClientRepository;
import com.example.carservice.services.ClientService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.web.bind.annotation.RestController;
import com.example.carservice.models.ERole;
import com.example.carservice.models.Role;
import com.example.carservice.payload.request.LoginRequest;
import com.example.carservice.payload.request.SignupRequest;
import com.example.carservice.payload.response.JwtResponse;
import com.example.carservice.payload.response.MessageResponse;
import com.example.carservice.repositories.RoleRepository;
import com.example.carservice.security.jwt.JwtUtils;
import com.example.carservice.services.ClientDetailsImpl;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;



@CrossOrigin(origins = "*", maxAge = 3600)
    @RestController
    @RequestMapping("/api/auth")
    public class AuthController {
        @Autowired
        AuthenticationManager authenticationManager;

        @Autowired
        ClientRepository clientRepository;

        @Autowired
        RoleRepository roleRepository;

        @Autowired
        PasswordEncoder encoder;

        @Autowired
        JwtUtils jwtUtils;

    @Autowired
    private ClientService clientService;

        @PostMapping("/signin")
        public ResponseEntity<?> authenticateClient(@Valid @RequestBody LoginRequest loginRequest) {
            System.out.println(loginRequest.getUsername() + loginRequest.getPassword());

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            System.out.println(1);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);
            System.out.println(2);
            ClientDetailsImpl clientDetails = (ClientDetailsImpl) authentication.getPrincipal();
            List<String> roles = clientDetails.getAuthorities().stream()
                    .map(item -> item.getAuthority())
                    .collect(Collectors.toList());
            System.out.println(3);

            return ResponseEntity.ok(new JwtResponse(jwt,
                    clientDetails.getId(),
                    clientDetails.getUsername(),
                    clientDetails.getEmail(),
                    roles));
        }
  //  @Valid go mahnah ot predi requestBody za da raboti signup
        @PostMapping("/signup")
        public ResponseEntity<?> registerUser( @RequestBody SignupRequest signUpRequest) {

            if (clientRepository.existsByUsername(signUpRequest.getUsername())) {

                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Username is already taken!"));

            }

            if (clientRepository.existsByEmail(signUpRequest.getEmail())) {

                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Email is already in use!"));
            }

//            PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//            String password = signUpRequest.getPassword();
//            String encodedPassword = passwordEncoder.encode(password);
            // Create new user's account
            Client client = new Client(signUpRequest.getId(),
                    signUpRequest.getFirstName(),
                    signUpRequest.getLastName(),
                    signUpRequest.getUsername(),
                    signUpRequest.getEmail(),
                    encoder.encode(signUpRequest.getPassword()),
                    signUpRequest.getClientIdentifier(),
                    signUpRequest.getCar()

                    );
            clientService.saveOrUpdateClient(client);

            System.out.println(client.toString());

            Set<String> strRoles = signUpRequest.getRole();
            Set<Role> roles = new HashSet<>();

            if (strRoles == null) {
                Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(userRole);
            } else {
                strRoles.forEach(role -> {
                    switch (role) {
                        case "admin":
                            Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                            roles.add(adminRole);

                            break;
                        case "mod":
                            Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                            roles.add(modRole);

                            break;
                        default:
                            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                            roles.add(userRole);
                    }
                });
            }

            client.setRoles(roles);
            clientRepository.save(client);

            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        }
    }

