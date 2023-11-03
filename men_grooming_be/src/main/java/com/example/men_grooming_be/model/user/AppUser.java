package com.example.men_grooming_be.model.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userName;
    private String password;
    private String email;

    @JsonBackReference
    @OneToMany(mappedBy = "appUser", fetch = FetchType.EAGER)
    private Set<UserRole> userRoleSet;
    public Set<UserRole> getUserRoleSet() {
        return userRoleSet;
    }
}
