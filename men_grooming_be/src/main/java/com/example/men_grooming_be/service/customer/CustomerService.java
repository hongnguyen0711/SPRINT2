package com.example.men_grooming_be.service.customer;

import com.example.men_grooming_be.dto.IOrderHistory;
import com.example.men_grooming_be.model.customer.Customer;
import com.example.men_grooming_be.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public Customer findCustomer(Long idUser) {
        return customerRepository.findByIdUser(idUser);
    }

    @Override
    public List<IOrderHistory> findHistory(Long idUser) {
        return customerRepository.findHistory(idUser);
    }
}
