package com.example.men_grooming_be.repository;

import com.example.men_grooming_be.dto.ICartDto;
import com.example.men_grooming_be.model.order.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, Long> {
    @Query(value = "SELECT " +
            "    c.id_user AS idUser, " +
            "    c.id_product AS idProduct," +
            "    c.quantity_order as quantity, " +
            "    p.quantity as maxQuantity, " +
            "    p.brand, " +
            "    p.name, " +
            "    p.price, " +
            "    MAX(i.name) AS image " +
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

    @Query(value = "select * from cart " +
            "where id_product = :idProduct and id_user = :idUser ", nativeQuery = true)
    Cart findCart(@Param("idUser") Long idUser,@Param("idProduct") Long idProduct);

    @Transactional
    @Modifying
    @Query(value = "UPDATE cart join product on cart.id_product = product.id SET quantity_order = quantity_order + 1 where id_product = :idProduct and id_user = :idUser and quantity_order < quantity ", nativeQuery = true)
    void addQuantity(@Param("idUser") Long idUser,@Param("idProduct") Long idProduct);
    @Transactional
    @Modifying
    @Query(value = "delete from cart where id_user = :idUser and id_product = :idProduct",nativeQuery = true)
    void deleteCart(@Param("idUser") Long idUser,@Param("idProduct") Long idProduct);

    @Transactional
    @Modifying
    @Query(value = "UPDATE cart join product on cart.id_product = product.id SET quantity_order = quantity_order + 1 where id_product = :idProduct and id_user = :idUser and quantity_order < quantity",nativeQuery = true)
    void increaseQuantity(@Param("idUser") Long idUser,@Param("idProduct") Long idProduct);

    @Transactional
    @Modifying
    @Query(value = "UPDATE cart SET quantity_order = quantity_order - 1 where id_product = :idProduct and id_user = :idUser and quantity_order >= 1 ",nativeQuery = true)
    void decreaseQuantity(@Param("idUser") Long idUser,@Param("idProduct") Long idProduct);
    @Transactional
    @Modifying
    @Query(value = "delete from cart where id_user = :idUser ",nativeQuery = true)
    void deleteCartByIdUser(@Param("idUser") Long idUser);

}
