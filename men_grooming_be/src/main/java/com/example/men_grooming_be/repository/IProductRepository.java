package com.example.men_grooming_be.repository;

import com.example.men_grooming_be.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Product, Long> {
}
