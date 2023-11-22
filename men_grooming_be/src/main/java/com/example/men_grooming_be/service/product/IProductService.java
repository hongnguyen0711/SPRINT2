package com.example.men_grooming_be.service.product;

import com.example.men_grooming_be.dto.IImageDto;
import com.example.men_grooming_be.dto.home.IHomeDto;
import com.example.men_grooming_be.model.product.Product;

import java.util.List;

public interface IProductService {
    Product findById(Long idProduct);

    Product findProductById(Long idProduct);

    List<IImageDto> findImage(Long idProduct);

    List<IHomeDto> findProductByCategory(Long idProduct);
}
