package com.example.men_grooming_be.dto;

public interface IOrderHistory {
    String getDateOfOrder();

    String getNameProduct();

    Double getPriceOrder();
    Integer getQuantityOrder();
    String getTimeOfOrder();
}
