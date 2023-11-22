package com.example.men_grooming_be.service.cart;

import com.example.men_grooming_be.dto.ICartDto;
import com.example.men_grooming_be.model.order.Cart;
import com.example.men_grooming_be.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
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

    @Override
    public Cart findByIdUserAndIdProduct(Long idUser, Long idProduct) {
        return cartRepository.findCart(idUser, idProduct);
    }

    @Override
    public void addQuantity(Long idUser, Long idProduct) {
        cartRepository.addQuantity(idUser, idProduct);
    }

    @Override
    public void deleteProduct(Long idUser, Long idProduct) {
        cartRepository.deleteCart(idUser, idProduct);
    }

    @Override
    public void increaseQuantity(Long idUser, Long idProduct) {
        cartRepository.increaseQuantity(idUser, idProduct);
    }

    @Override
    public void decreaseQuantity(Long idUser, Long idProduct) {
        cartRepository.decreaseQuantity(idUser, idProduct);
        List<ICartDto> cartDto = cartRepository.getAllCart(idUser);
        for (ICartDto cart : cartDto) {
            if (cart.getQuantity() == 0) {
                cartRepository.deleteCart(idUser,idProduct);
            }
        }
    }
}
