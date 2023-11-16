package com.example.men_grooming_be.service.cart;

import com.example.men_grooming_be.dto.ICartDto;
import com.example.men_grooming_be.model.order.Cart;
import com.example.men_grooming_be.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService{
    @Autowired
    private ICartRepository cartRepository;

    @Override
    public void addToCart(Cart cart) {
        cartRepository.save(cart);
    }

    @Override
    public List<ICartDto> findByIdUser(Long idUser) {
        return cartRepository.getAllCart(idUser);
    }
}
