package com.example.men_grooming_be.service.Home;

import com.example.men_grooming_be.dto.home.IHomeDto;
import com.example.men_grooming_be.repository.home.IHomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeService implements IHomeService{
    @Autowired
    private IHomeRepository homeRepository;

    @Override
    public List<IHomeDto> getListProduct() {
        return homeRepository.getOutstandingProduct();
    }

    @Override
    public Page<IHomeDto> findAllProductByName(Pageable pageable, String searchName, String category, String fragrant) {
        return homeRepository.getAllProductByCategory(pageable, "%" + searchName + "%", "%" + category + "%", "%" + fragrant + "%");
    }
}
