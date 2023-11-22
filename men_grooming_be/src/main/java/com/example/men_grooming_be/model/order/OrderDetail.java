package com.example.men_grooming_be.model.order;
import com.example.men_grooming_be.model.product.Product;
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
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double priceOrder;
    private Integer quantity;
    @ManyToOne
    @JoinColumn(name = "idOrder", referencedColumnName = "id")
    private Order order;
    @ManyToOne
    @JoinColumn(name = "idProduct", referencedColumnName = "id")
    private Product product;
}
