package com.example.men_grooming_be.service.user;


import com.example.men_grooming_be.model.user.AppUser;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IAppUserService extends UserDetailsService {
    Boolean existsByUsername(String userName);

    Boolean createNewAppUser(AppUser appUser, String role);

    Boolean logout(String userName);
    Long findAppUserIdByUserName(String userName);

    AppUser findById(Long idUser);
}