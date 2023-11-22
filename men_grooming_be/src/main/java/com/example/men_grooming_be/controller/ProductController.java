package com.example.men_grooming_be.controller;

import com.example.men_grooming_be.dto.IImageDto;
import com.example.men_grooming_be.dto.home.IHomeDto;
import com.example.men_grooming_be.model.product.Product;
import com.example.men_grooming_be.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/detail")
    public ResponseEntity<Product> productDetail(@RequestParam(name = "idProduct") Long idProduct) {
        Product product = productService.findProductById(idProduct);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/image")
    public ResponseEntity<List<IImageDto>> productImage(@RequestParam(name = "idProduct") Long idProduct) {
        List<IImageDto> images = productService.findImage(idProduct);
        return new ResponseEntity<>(images, HttpStatus.OK);
    }
    @GetMapping("/sameType")
    public ResponseEntity<List<IHomeDto>> productSameType(@RequestParam(name = "idProduct") Long idProduct){
        List<IHomeDto> products = productService.findProductByCategory(idProduct);
        return new ResponseEntity<>(products, HttpStatus.OK);    }
}
