package com.example.men_grooming_be.model.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userName;
    private String pass;
    private String email;
    private Boolean flagOnline;
    private Boolean flagDeleted;
    @JsonBackReference
    @OneToMany(mappedBy = "appUser")
    private Set<UserRole> userRoles;

}
