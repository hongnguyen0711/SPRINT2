package com.example.men_grooming_be.service.Home;

import com.example.men_grooming_be.repository.home.ICategoryRepository;
import com.example.men_grooming_be.model.product.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService{
    @Autowired
    private ICategoryRepository categoryRepository;
    @Override
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }
}
