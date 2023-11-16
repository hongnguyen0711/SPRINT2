package com.example.men_grooming_be.service.product;

import com.example.men_grooming_be.model.product.Product;
import com.example.men_grooming_be.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Product findById(Long idProduct) {
        return productRepository.findById(idProduct).orElse(null);
    }
}
