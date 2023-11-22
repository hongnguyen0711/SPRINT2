package com.example.men_grooming_be.service.customer;

import com.example.men_grooming_be.dto.IOrderHistory;
import com.example.men_grooming_be.model.customer.Customer;

import java.util.List;

public interface ICustomerService {
    Customer findCustomer(Long idUser);

    List<IOrderHistory> findHistory(Long idUser);
}
