package com.example.men_grooming_be.model.order;

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
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "date")
    private String dateOfOrder;
    @Column(columnDefinition = "time")
    private String timeOfOrder;
    private Double totalMoney;

    @ManyToOne
    @JoinColumn(name = "idUser", referencedColumnName = "id")
    private AppUser appUser;
}
