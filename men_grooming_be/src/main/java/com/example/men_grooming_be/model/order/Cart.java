package com.example.men_grooming_be.model.order;
import com.example.men_grooming_be.model.product.Product;
import com.example.men_grooming_be.model.user.AppUser;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantityOrder;
    @ManyToOne
    @JoinColumn(name = "idProduct", referencedColumnName = "id")
    private Product product;
    @ManyToOne
    @JoinColumn(name = "idUser", referencedColumnName = "id")
    private AppUser appUser;
}
