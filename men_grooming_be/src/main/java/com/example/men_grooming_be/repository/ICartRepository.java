package com.example.men_grooming_be.repository;

import com.example.men_grooming_be.dto.ICartDto;
import com.example.men_grooming_be.model.order.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, Long > {
    @Query(value = "SELECT " +
            "    c.id_user AS idUser, " +
            "    c.id_product AS idProduct," +
            "    c.quantity_order as quantity, " +
            "    p.name, " +
            "    p.price, " +
            "    MIN(i.name) AS image " +
            "FROM " +
            "    cart AS c " +
            "        JOIN " +
            "    product AS p ON p.id = c.id_product " +
            "        JOIN " +
            "    image AS i ON p.id = i.id_product " +
            "WHERE " +
            "        c.id_user = :id " +
            "GROUP BY " +
            "    c.id_user, c.id_product, c.quantity_order, p.name, p.price ", nativeQuery = true)
    List<ICartDto> getAllCart(@Param("id") Long idUser);
}
