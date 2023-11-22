package com.example.men_grooming_be.controller;

import com.example.men_grooming_be.model.customer.Customer;
import com.example.men_grooming_be.service.order.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
@CrossOrigin("*")
public class OrderController {
@Autowired
    private IOrderService orderService;
    @PostMapping("/payment")
    public ResponseEntity<Object> paymentOrder(@RequestParam(name = "idUser") Long idUser){
        try {
            orderService.createOrder(idUser);
            orderService.createOrderDetail(idUser);
            orderService.updateTotalMoney(idUser);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>("Thanh toán thành công.",HttpStatus.OK);
    }

}
