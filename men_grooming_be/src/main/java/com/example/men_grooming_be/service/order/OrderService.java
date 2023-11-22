package com.example.men_grooming_be.service.order;

import com.example.men_grooming_be.dto.ICartDto;
import com.example.men_grooming_be.dto.IOrderDetailDto;
import com.example.men_grooming_be.model.order.Order;
import com.example.men_grooming_be.model.order.OrderDetail;
import com.example.men_grooming_be.model.product.Product;
import com.example.men_grooming_be.model.user.AppUser;
import com.example.men_grooming_be.repository.IAppUserRepository;
import com.example.men_grooming_be.repository.ICartRepository;
import com.example.men_grooming_be.repository.IOrderRepository;
import com.example.men_grooming_be.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IAppUserRepository appUserRepository;
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private IProductRepository productRepository;

    @Override
    public void createOrder(Long idUser) throws Exception {
        AppUser appUser = appUserRepository.findById(idUser).orElse(null);
        if (appUser == null){
            throw new Exception("Không tìm thấy user");
        }
        LocalDate localDate = LocalDate.now();
        LocalTime localTime = LocalTime.now();
        Order order = new Order();
        order.setDateOfOrder(String.valueOf(localDate));
        order.setTimeOfOrder(String.valueOf(localTime));
        order.setTotalMoney(0.0);
        order.setAppUser(appUser);
        order.setPaymentStatus(0);
        orderRepository.save(order);
    }

    @Override
    public void createOrderDetail(Long idUser) throws Exception {
        Order order = orderRepository.findOrderById(idUser);
        List<ICartDto> cartDto = cartRepository.getAllCart(idUser);
        if (order ==  null){
            throw new Exception("Không tìm thấy order");
        }
        for (ICartDto cart : cartDto){
            OrderDetail orderDetail = new OrderDetail();
            Product product = productRepository.findById(cart.getIdProduct()).orElse(null);
            if (product == null){
                throw new Exception("Không tìm thấy sản phẩm");
            }
            orderDetail.setQuantity(cart.getQuantity());
            orderDetail.setProduct(product);
            orderDetail.setPriceOrder(cart.getPrice());
            orderDetail.setOrder(order);

            Integer isOrderDetailCreated = orderRepository.createOrderDetail(orderDetail);
            if (isOrderDetailCreated > 0 ){
                Integer quantityOfProductAfterPayment = product.getQuantity() - orderDetail.getQuantity();
                productRepository.updateQuantityOfProduct(product.getId(),quantityOfProductAfterPayment);
            }else {
                orderRepository.deleteById(order.getId());
            }
        }
        cartRepository.deleteCartByIdUser(idUser);
    }


    @Override
    public void updateTotalMoney(Long idUser) throws Exception {
        Order order = orderRepository.findOrderById(idUser);
        List<IOrderDetailDto> orderDetails = orderRepository.findOrderDetailById(order.getId());
        if (orderDetails.isEmpty()){
            throw new Exception("Không tìm thấy order chi tiết");
        }
        double total = 0;
        for (IOrderDetailDto orderDetail : orderDetails){
            total += orderDetail.getQuantity()*orderDetail.getPriceProduct();
        }
        orderRepository.updateTotalMoney(total*8/100, order.getId());
    }
}
