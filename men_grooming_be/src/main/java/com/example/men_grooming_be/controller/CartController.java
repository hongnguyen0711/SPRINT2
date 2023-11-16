package com.example.men_grooming_be.controller;

import com.example.men_grooming_be.dto.ICartDto;
import com.example.men_grooming_be.model.order.Cart;
import com.example.men_grooming_be.model.product.Product;
import com.example.men_grooming_be.model.user.AppUser;
import com.example.men_grooming_be.service.cart.ICartService;
import com.example.men_grooming_be.service.product.IProductService;
import com.example.men_grooming_be.service.user.IAppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private IAppUserService appUserService;
    @Autowired
    private IProductService productService;
    @PostMapping("/addToCart")
    public ResponseEntity<Object> addProductToCart(@RequestParam(name = "idProduct") Long idProduct,
                                                   @RequestParam(name = "idUser") Long idUser,
                                                   @RequestParam(name = "quantity", defaultValue = "1", required = false) Integer quantity){
        Cart cart = new Cart();
        Product product = productService.findById(idProduct);
        AppUser appUser = appUserService.findById(idUser);
        if (appUser == null || product == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        cart.setProduct(product);
        cart.setAppUser(appUser);
        cart.setQuantityOrder(quantity);
        cartService.addToCart(cart);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }
    @GetMapping("/listCart")
    private ResponseEntity<List<ICartDto>> getAllCart(@RequestParam(name = "idUser") Long idUser){
        List<ICartDto> cartDtoList = cartService.findByIdUser(idUser);
        if (cartDtoList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(cartDtoList,HttpStatus.OK);
        }
    }
}
