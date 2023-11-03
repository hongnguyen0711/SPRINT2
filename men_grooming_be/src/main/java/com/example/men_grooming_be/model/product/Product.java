package com.example.men_grooming_be.model.product;
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
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    private Double weight;
    private String origin;
    private String brand;
    private String fragrant;
    private Integer quantity;
    private String description;
    @ManyToOne
    @JoinColumn(name = "idCategory", referencedColumnName = "id")
    private Category category;
}
