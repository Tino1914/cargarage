package com.example.carservice.exceptions;

public class ClientIdExceptionResponse {


    private String clientIdentifier;

    public ClientIdExceptionResponse(String clientIdentifier) {
        this.clientIdentifier = clientIdentifier;
    }
    public String getClientIdentifier() {
        return clientIdentifier;
    }

    public void setClientIdentifier(String clientIdentifier) {
        this.clientIdentifier = clientIdentifier;
    }


}
