package com.example.men_grooming_be.service.product;

import com.example.men_grooming_be.dto.IImageDto;
import com.example.men_grooming_be.dto.home.IHomeDto;
import com.example.men_grooming_be.model.product.Product;
import com.example.men_grooming_be.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Product findById(Long idProduct) {
        return productRepository.findById(idProduct).orElse(null);
    }

    @Override
    public Product findProductById(Long idProduct) {
        return productRepository.findById(idProduct).orElse(null);
    }

    @Override
    public List<IImageDto> findImage(Long idProduct) {
        return productRepository.findImage(idProduct);
    }

    @Override
    public List<IHomeDto> findProductByCategory(Long idProduct) {
        Product product = findProductById(idProduct);
        return productRepository.findProductByCategory(product.getCategory().getId());
    }
}
