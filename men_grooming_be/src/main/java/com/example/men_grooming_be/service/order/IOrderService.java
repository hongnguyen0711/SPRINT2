package com.example.men_grooming_be.service.order;

public interface IOrderService {
    void createOrder(Long idUser) throws Exception;

    void createOrderDetail(Long idUser) throws Exception;

    void updateTotalMoney(Long idUser) throws Exception;
}
