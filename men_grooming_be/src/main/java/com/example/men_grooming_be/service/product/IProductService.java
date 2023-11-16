package com.example.men_grooming_be.service.product;

import com.example.men_grooming_be.model.product.Product;

public interface IProductService {
    Product findById(Long idProduct);
}
