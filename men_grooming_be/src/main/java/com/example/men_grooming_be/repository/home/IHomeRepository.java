package com.example.men_grooming_be.repository.home;

import com.example.men_grooming_be.dto.home.IHomeDto;
import com.example.men_grooming_be.model.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface IHomeRepository extends JpaRepository<Product, Long> {
    @Query(value = "SELECT " +
            "p.id AS idProduct, " +
            "p.name AS nameProduct, " +
            "p.price AS priceProduct, " +
            "c.name AS nameCategory, " +
            "(SELECT i.name FROM image i WHERE i.id_product = p.id ORDER BY i.id LIMIT 1) AS firstImage " +
            "FROM " +
            "product p " +
            "JOIN " +
            "category c ON p.id_category = c.id LIMIT 12 ", nativeQuery = true)
    List<IHomeDto> getOutstandingProduct();

        @Query(value = "SELECT\n" +
            "    p.id AS idProduct,\n" +
            "    p.name AS nameProduct,\n" +
            "    p.price AS priceProduct,\n" +
            "    c.name AS nameCategory,\n" +
            "   MAX(i.name) AS firstImage\n" +
            "FROM product p\n" +
            "JOIN category c ON p.id_category = c.id\n" +
            "JOIN image i ON p.id = i.id_product\n" +
            "WHERE p.name LIKE :valueSearchName\n" +
            "    AND c.id LIKE :idCategory\n" +
            "    AND p.fragrant LIKE :fragrant\n" +
            "GROUP BY p.id ", nativeQuery = true)
    Page<IHomeDto> getAllProductByCategory(Pageable pageable, @Param("valueSearchName") String valueSearchName, @Param("idCategory") String idCategory, @Param("fragrant") String fragrant);


}
