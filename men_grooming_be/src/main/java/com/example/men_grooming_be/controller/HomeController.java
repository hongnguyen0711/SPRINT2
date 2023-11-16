package com.example.men_grooming_be.controller;

import com.example.men_grooming_be.dto.home.IHomeDto;
import com.example.men_grooming_be.model.product.Category;
import com.example.men_grooming_be.service.Home.ICategoryService;
import com.example.men_grooming_be.service.Home.IHomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class HomeController {
    @Autowired
    private IHomeService homeService;
    @Autowired
    private ICategoryService categoryService;

    @GetMapping("/home")
    public ResponseEntity<List<IHomeDto>> getOutstandingProduct() {
        List<IHomeDto> listProduct = homeService.getListProduct();
        if (listProduct.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<Page<IHomeDto>> getAllProduct(@RequestParam(name = "_limit", defaultValue = "12", required = false) int limit,
                                                        @RequestParam(name = "_page", defaultValue = "0", required = false) int page,
                                                        @RequestParam(name = "name_like", defaultValue = "", required = false) String searchName,
                                                        @RequestParam(name = "category", defaultValue = "", required = false) String category,
                                                        @RequestParam(name = "fragrant", defaultValue = "", required = false) String fragrant,
                                                        @RequestParam(name = "sort", defaultValue = "", required = false)String sortPrice) {
        Pageable pageable = PageRequest.of(page, limit);
        if (sortPrice.equals("1")){
             pageable = PageRequest.of(page, limit, Sort.by("priceProduct").ascending());
        } else if (sortPrice.equals("2")) {
            pageable = PageRequest.of(page, limit, Sort.by("priceProduct").descending());
        }
        Page<IHomeDto> homeDtoPage = homeService.findAllProductByName(pageable, searchName, category, fragrant);
        if (homeDtoPage.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(homeDtoPage, HttpStatus.OK);
    }
    @GetMapping("/category")
    public ResponseEntity<List<Category>> getCategory(){
        List<Category> categoryList = categoryService.getAll();
        if (categoryList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }
}
