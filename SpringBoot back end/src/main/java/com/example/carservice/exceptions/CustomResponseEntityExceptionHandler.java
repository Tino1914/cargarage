package com.example.carservice.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice //mechanism to brake away from having exception handlers that are specific, gives me global exceptions
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity<Object> handlerClientIdException(ClientIdException ex, WebRequest request){
        ClientIdException exceptionResponse = new ClientIdException(ex.getMessage());
        return  new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

}
