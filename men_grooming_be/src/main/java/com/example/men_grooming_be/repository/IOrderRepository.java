package com.example.men_grooming_be.repository;

import com.example.men_grooming_be.dto.IOrderDetailDto;
import com.example.men_grooming_be.model.order.Order;
import com.example.men_grooming_be.model.order.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface IOrderRepository extends JpaRepository<Order, Long> {
    @Query(value = "select * from orders where id_user = :id and payment_status = 0",nativeQuery = true)
    Order findOrderById(@Param("id")Long idUser);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO  order_detail  ( price_order , quantity, id_order,id_product ) " +
            "VALUES (:#{#orderDetail.priceOrder},:#{#orderDetail.quantity},:#{#orderDetail.order.id}," +
            " :#{#orderDetail.product.id})",nativeQuery = true)
    Integer createOrderDetail(OrderDetail orderDetail);

    @Query(value = "select price_order as priceProduct, quantity as quantity " +
            "from order_detail " +
            "where id_order = :id",nativeQuery = true)
    List<IOrderDetailDto> findOrderDetailById(@Param("id") Long orderId);
    @Modifying
    @Transactional
    @Query(value = "update `orders` set payment_status = 1, total_money = :total where id = :id", nativeQuery = true)
    void updateTotalMoney(@Param("total") double total,@Param("id") Long id);
}
