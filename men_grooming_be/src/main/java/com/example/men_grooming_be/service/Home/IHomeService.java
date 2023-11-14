package com.example.men_grooming_be.service.Home;

import com.example.men_grooming_be.dto.home.IHomeDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IHomeService {
    List<IHomeDto> getListProduct();

    Page<IHomeDto> findAllProductByName(Pageable pageable, String searchName, String category, String fragrant);
}
