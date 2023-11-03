package com.example.men_grooming_be.model.customer;

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
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(columnDefinition = "date")
    private String birthday;
    private String email;
    private String card;
    private String address;
    private Integer gender;
    private String phoneNumber;
    @OneToOne
    @JoinColumn(name = "idUser",referencedColumnName = "id")
    private AppUser appUser;
}
