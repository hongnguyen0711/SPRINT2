import {Header} from "./Header";
import React, {useEffect, useState} from "react";
import {Footer} from "./Footer";
import * as userService from "../service/UserService";
import * as cartService from "../service/CartService";
import * as orderServise from "../service/OrderService";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {useNavigate} from "react-router-dom";

export function Cart() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [flag, setFlag] = useState(true);

    const [id, setId] = useState("");
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })


    const getAllProduct = async () => {
        try {
            const jwtToken = await userService.getJwtToken();
            const user = await userService.getUser(jwtToken.sub);
            const result = await cartService.getAllCart(user.id);
            setProducts(result.data);
            setId(user.id);
        } catch (e) {

        }
    }
    const sum = products.reduce((acc, current) => acc + current.price * current.quantity, 0);
    const sumPay = sum / 20000;


    const deleteCart = async (idProduct, idUser) => {
        const res = await cartService.deleteCart(idUser, idProduct);
        setFlag(!flag);
        if (res.status === 200) {
            toast("Xóa sản phẩm thành công!");
        }
        getAllProduct();
    }

    const increase = async (idProduct, idUser) => {
        await cartService.increaseQuantity(idUser, idProduct);
        getAllProduct();
    }
    const decrease = async (idProduct, idUser) => {
        await cartService.decreaseQuantity(idUser, idProduct);
        getAllProduct();
    }


    useEffect(() => {
        getAllProduct();

    }, [flag]);

    console.log(sum)


    const createOrder = (data, actions) => {
        console.log(sumPay  )
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: sumPay,
                        currency_code: 'USD',
                    },
                },
            ],
        });
    };
    const onApprove = async (data, actions) => {
        console.log('Payment was approved!');
        try {
            await orderServise.createOrder(id);
            navigate('/');
            toast("Thanh toán thành công.");
        } catch (error) {
            console.error('Error handling payment success:', error);
        }
    };

    const onError = (err) => {
        console.error('Payment failed:', err);
    };

    return (
        // sum && sumPay &&
        products &&
        <>
            <Header/>
            <section className="bg-light my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mt-5">
                            <div className="card border shadow-0">
                                <div className="m-4">
                                    <h4 className="card-title mb-4">Giỏ Hàng Của Bạn</h4>
                                    {
                                        products.length !== 0 ? (
                                            products.map((product) => {
                                                return (
                                                    product.quantity > 0 && <div className="row gy-3 mb-4">
                                                        <div className="col-lg-5">
                                                            <div className="me-lg-5">
                                                                <div className="d-flex">
                                                                    <img
                                                                        src={product.image}
                                                                        className="border rounded me-3"
                                                                        style={{width: "96px", height: "96px"}}/>
                                                                    <div className="">
                                                                        <p>{product.name}</p>
                                                                        <p className="text-muted">{product.brand}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap my-auto">
                                                            <div className="">
                                                                <div className="d-flex align-items-center">
                                                                    <button className="btn btn-outline-secondary mx-2"
                                                                            type="button" id="decrementBtn"
                                                                            onClick={() => decrease(product.idProduct, product.idUser)}>-
                                                                    </button>
                                                                    <p className="my-auto mx-auto"
                                                                       style={{width: "15px"}}>{product.quantity}</p>
                                                                    <button className="btn btn-outline-secondary mx-2"
                                                                            type="button" id="incrementBtn"
                                                                            onClick={() => increase(product.idProduct, product.idUser)}>+
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <text
                                                                    className="h6">{vnd.format(product.price * product.quantity)} </text>
                                                                <br/>
                                                                <small
                                                                    className="text-muted text-nowrap"> {vnd.format(product.price)} /
                                                                    sản phẩm </small>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2 my-4">
                                                            <div className="float-md-end">
                                                                <a href="#"
                                                                   className="btn btn-light border text-danger icon-hover-danger"
                                                                   onClick={() => deleteCart(product.idProduct, product.idUser)}>Xóa</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                );
                                            })
                                        ) : (<p>Giỏ hàng trống.</p>)
                                    }

                                </div>

                                <div className="border-top pt-4 mx-4 mb-4">
                                    <p><i className="fas fa-truck text-muted fa-lg"></i> Giao hàng miễn phí toàn quốc.
                                    </p>
                                    <p className="text-muted">
                                        Sứ mệnh của Men's Grooming Shop là giúp nam giới Việt Nam có được vẻ ngoài đẹp
                                        trai,
                                        tinh thần sảng khoái thu hút phái đẹp. Với kinh nghiệm phục vụ hàng triệu nam
                                        giới
                                        Việt thông qua việc chuyên cung cấp các sản phẩm chăm sóc tóc, da mặt, dầu gội…
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5">
                            <div className="card mb-3 border shadow-0">

                            </div>
                            <div className="card shadow-0 border">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Tổng đơn:</p>
                                        <p className="mb-2">{vnd.format(sum)}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Thuế:</p>
                                        <p className="mb-2">{vnd.format(sum * 8 / 100)}</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Tổng tiền:</p>
                                        <p className="mb-2 fw-bold">{vnd.format(sum + sum * 8 / 100)}</p>
                                    </div>

                                    <div className="mt-3">
                                        {/*<a href="#" className="btn btn-success w-100 shadow-0 mb-2"> Thanh toán</a>*/}
                                        <PayPalScriptProvider
                                            options={{"client-id": "ATVLu4Mi0WmojMeUtCh-wTtCBb37GExzwi18B7kLRGSX9bUvnLq92Rnm02UnBCRPu_KGIgnkFOCOP94E"}}
                                        >
                                            <PayPalButtons createOrder={createOrder} onApprove={onApprove}
                                                           onError={onError}/>
                                        </PayPalScriptProvider>
                                        <Link to="/">
                                            <a href="#" className="btn btn-light w-100 border mt-2"> Tiếp tục mua
                                                hàng</a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}