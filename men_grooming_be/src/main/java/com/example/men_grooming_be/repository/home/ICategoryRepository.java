package com.example.men_grooming_be.dto.home;

import com.example.men_grooming_be.model.product.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, Long> {
}
