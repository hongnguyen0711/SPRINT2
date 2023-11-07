package com.example.men_grooming_be.dto;

import com.example.men_grooming_be.common.user.ValidateAppUser;
import com.example.men_grooming_be.model.user.UserRole;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.Set;

public class AppUserDto implements Validator {
    private Long id;
    private String userName;
    private String pass;
    private String email;
    private String phone;
    public AppUserDto() {
    }

    public AppUserDto(Long id, String userName, String pass, String confirmPassword, String fullName, String email, String phone, String address, String image, Boolean flagDeleted, Boolean flagOnline, Set<UserRole> userRoles) {
        this.id = id;
        this.userName = userName;
        this.pass = pass;
        this.email = email;
        this.phone = phone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        AppUserDto appUserDto = (AppUserDto) target;
        ValidateAppUser.checkValidateAppUserName(appUserDto.getUserName(),errors);
        ValidateAppUser.checkValidateAppUserPassword(appUserDto.getPass(),errors);
    }
}
