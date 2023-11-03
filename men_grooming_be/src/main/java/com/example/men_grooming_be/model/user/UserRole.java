package com.example.men_grooming_be.model.user;
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
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "idUser", referencedColumnName = "id")
    private AppUser appUser;
    @ManyToOne
    @JoinColumn(name = "idRole", referencedColumnName = "id")
    private AppRole appRole;
}
