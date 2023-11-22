package com.example.men_grooming_be.service.user;


import com.example.men_grooming_be.dto.JwtResponseUserDetail;
import com.example.men_grooming_be.model.user.AppUser;
import com.example.men_grooming_be.model.user.UserRole;
import com.example.men_grooming_be.repository.IAppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppUserService implements IAppUserService {
    @Autowired
    private IAppUserRepository appUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findAppUserByName(username);
        if (appUser == null) {
            throw new UsernameNotFoundException("User name or password is wrong");
        }

        List<GrantedAuthority> grantList = new ArrayList<>();
        for (UserRole userRole : appUser.getUserRoles()) {
            grantList.add(new SimpleGrantedAuthority(userRole.getAppRole().getNameRole()));
        }
        UserDetails userDetails = new JwtResponseUserDetail(
                appUser.getUserName(),
                appUser.getPass(),
                appUser.getFlagOnline(),
                grantList);
        appUserRepository.updateAppUserIsOnline(appUser);
        return userDetails;
    }

    @Override
    public Boolean existsByUsername(String userName) {
        AppUser appUser = appUserRepository.findAppUserByName(userName);
        return appUser != null;
    }

    @Override
    public Boolean createNewAppUser(AppUser appUser, String role) {
        Integer amountAppUserCreated = appUserRepository.createNewAppUser(appUser);
        AppUser currentAppUser = appUserRepository.findAppUserByName(appUser.getUserName());
        appUserRepository.insertRoleForCustomer(2L, currentAppUser.getId());
        return amountAppUserCreated > 0;
    }

    @Override
    public Boolean logout(String userName) {
        return appUserRepository.updateAppUserIsOffline(userName) > 0;
    }

    @Override
    public Long findAppUserIdByUserName(String userName) {
        return appUserRepository.findIdByUserName(userName);
    }

    @Override
    public AppUser findById(Long idUser) {
        return appUserRepository.findById(idUser).orElse(null);
    }

    @Override
    public AppUser findByName(String userName) {
        return appUserRepository.findAppUserByName(userName);
    }
}