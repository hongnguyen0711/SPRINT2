package com.example.men_grooming_be.dto;

public interface ICartDto {
    Long getIdUser();
    Long getIdProduct();
    String getName();
    Double getPrice();

    String getImage();
    Integer getQuantity();
}
