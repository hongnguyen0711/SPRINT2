package com.example.men_grooming_be.repository;

import com.example.men_grooming_be.dto.IOrderHistory;
import com.example.men_grooming_be.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer, Long> {
    @Query(value = " select * from customer where id_user = :id ", nativeQuery = true)
    Customer findByIdUser(@Param("id") Long idUser);
    @Query(value = " select  o.date_of_order as dateOfOrder, p.name as nameProduct, od.price_order as priceOrder,od.quantity as quantityOrder , o.time_of_order as timeOfOrder \n" +
            "             from customer c \n" +
            "             join orders o on c.id = o.id_user \n" +
            "             join order_detail od on o.id = od.id_order \n" +
            "             join product p on od.id_product = p.id\n" +
            "             where c.id_user = :id \n" +
            "             and o.payment_status = 1 \n" +
            "             order by o.date_of_order desc; ", nativeQuery = true)
    List<IOrderHistory> findHistory(@Param("id") Long idUser);
}
