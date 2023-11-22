package com.example.men_grooming_be.controller;

import com.example.men_grooming_be.dto.IOrderHistory;
import com.example.men_grooming_be.model.customer.Customer;
import com.example.men_grooming_be.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin("*")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;
    @GetMapping("/info")
    public ResponseEntity<Customer> getInfo(@RequestParam(name = "idUser") Long idUser){
        Customer customer = customerService.findCustomer(idUser);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }
    @GetMapping("/history")
    public ResponseEntity<List<IOrderHistory>> getOderHistory(@RequestParam(name = "idUser") Long idUser){
        List<IOrderHistory> orderHistory = customerService.findHistory(idUser);
        return new ResponseEntity<>(orderHistory,HttpStatus.OK);
    }
}
