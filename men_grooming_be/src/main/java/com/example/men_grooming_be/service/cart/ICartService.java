package com.example.men_grooming_be.service.cart;

import com.example.men_grooming_be.dto.ICartDto;
import com.example.men_grooming_be.model.order.Cart;

import java.util.List;

public interface ICartService {
    void addToCart(Cart cart);

    List<ICartDto> findByIdUser(Long idUser);

    Cart findByIdUserAndIdProduct(Long idUser, Long idProduct);

    void addQuantity(Long idUser, Long idProduct);

    void deleteProduct(Long idUser, Long idProduct);

    void increaseQuantity(Long idUser, Long idProduct);

    void decreaseQuantity(Long idUser, Long idProduct);
}
