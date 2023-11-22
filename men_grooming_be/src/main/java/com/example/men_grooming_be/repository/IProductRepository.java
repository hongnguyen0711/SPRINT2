package com.example.men_grooming_be.repository;

import com.example.men_grooming_be.dto.IImageDto;
import com.example.men_grooming_be.dto.home.IHomeDto;
import com.example.men_grooming_be.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Long> {
    @Modifying
    @Transactional
    @Query(value = "update product set quantity = :quantity where id = :id", nativeQuery = true)
    void updateQuantityOfProduct(@Param("id") Long id, @Param("quantity") Integer quantityOfProductAfterPayment);
    @Query(value = "SELECT id, name from image where id_product = :id", nativeQuery = true)
    List<IImageDto> findImage(@Param("id")Long idProduct);
    @Query(value = "SELECT\n" +
            "    p.id AS idProduct,\n" +
            "    p.name AS nameProduct,\n" +
            "    p.price AS priceProduct,\n" +
            "    c.name AS nameCategory,\n" +
            "   MAX(i.name) AS firstImage\n" +
            "FROM product p\n" +
            "JOIN category c ON p.id_category = c.id\n" +
            "JOIN image i ON p.id = i.id_product\n" +
            "WHERE c.id = :id\n" +
            "GROUP BY p.id LIMIT 4 ", nativeQuery = true)
    List<IHomeDto> findProductByCategory(@Param("id")Long idCategory);
}
