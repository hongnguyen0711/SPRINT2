import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {jwtDecode} from "jwt-decode";
import * as homeService from "../service/HomeService";
import {log} from "async";
import {Header} from "./Header";

export function Home() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [products, setProducts] = useState([]);
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const getProductList = async () => {
        const array = await homeService.getListProduct();
        console.log(array);
        setProducts(array.data);
    }

    useEffect(() => {
        document.title = "Men's Grooming - Home " ;
        getProductList();
        if (localStorage.getItem("JWT")) {
            setIsLoggedIn(true);
            setUsername(jwtDecode(localStorage.getItem("JWT")).sub);
        }
    }, []);
    const handleRegister = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("JWT");
        setUsername("");
        navigate("/");
    };

    return (
        <>
            <div className="header">
                <Header/>

                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://tiendichshop.vn/wp-content/uploads/2022/04/slide-3_optimized.jpg"
                                 className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Mens Comestic</h3>
                                <h2>SALE OFF 30%</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://tiendichshop.vn/wp-content/uploads/2022/04/bia-2-scaled_optimized.jpg"
                                 className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://tiendichshop.vn/wp-content/uploads/2022/04/slide-2-1_optimized.jpg"
                                 className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h4>Mỹ phẩm chính hãng</h4>
                                <p>Cam kết mỹ phẩm nhập khẩu chính hãng.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="container section-title-container"><h3
                    className="section-title section-title-bold-center">
                    <b></b><span
                    className="section-title-main" style={{fontSize: "81%"}}>CHÚNG TÔI CÓ GÌ?</span><b></b></h3></div>
                <div className="row row-divided " id="row-299623123" style={{marginLeft: "14%"}}>

                    <div id="col-33895845" className="col medium-4 large-4">
                        <div className="col-inner">
                            <div className="icon-box featured-box icon-box-left text-left is-small"
                                 style={{margin: "0px 0px 0px 0px"}}>
                                <div className="icon-box-img" style={{width: "120px"}}>
                                    <div className="icon">
                                        <div className="icon-inner" style={{color: "rgb(182, 182, 182)"}}>
                                            <img width="50" height="50"
                                                 src="https://tiendichshop.vn/wp-content/uploads/2022/04/GIA-400x400.png"
                                                 className="attachment-medium size-medium" alt=""
                                                 srcSet="https://tiendichshop.vn/wp-content/uploads/2022/04/GIA-400x400.png 400w, https://tiendichshop.vn/wp-content/uploads/2022/04/GIA-280x280.png 280w, https://tiendichshop.vn/wp-content/uploads/2022/04/GIA-380x380.png 380w, https://tiendichshop.vn/wp-content/uploads/2022/04/GIA-450x450.png 450w, https://tiendichshop.vn/wp-content/uploads/2022/04/GIA-100x100.png 100w, https://tiendichshop.vn/wp-content/uploads/2022/04/GIA.png 506w"
                                                 sizes="(max-width: 400px) 100vw, 400px"/></div>
                                    </div>
                                </div>
                                <div className="icon-box-text last-reset">
                                    <h5 className="uppercase">MỨC GIÁ RẺ NHẤT</h5>
                                    <p style={{textAlign: "justify"}}><span style={{color: "#000000"}}>Bình ổn giá, với mức cạnh tranh nhất trên thị trường, mang tới cho người dùng những trải nghiệm trọn vẹn nhất.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="col-1065226016" className="col medium-4 large-4">
                        <div className="col-inner">
                            <div className="icon-box featured-box icon-box-left text-left is-small"
                                 style={{margin: "0px 0px 0px 0px"}}>
                                <div className="icon-box-img" style={{width: "120px"}}>
                                    <div className="icon">
                                        <div className="icon-inner" style={{color: "rgb(182, 182, 182)"}}>
                                            <img width="50" height="50"
                                                 src="https://tiendichshop.vn/wp-content/uploads/2022/04/cam-ket.png"
                                                 className="attachment-medium size-medium" alt=""
                                                 srcSet="https://tiendichshop.vn/wp-content/uploads/2022/04/cam-ket.png 396w, https://tiendichshop.vn/wp-content/uploads/2022/04/cam-ket-280x280.png 280w, https://tiendichshop.vn/wp-content/uploads/2022/04/cam-ket-380x380.png 380w, https://tiendichshop.vn/wp-content/uploads/2022/04/cam-ket-100x100.png 100w"
                                                 sizes="(max-width: 396px) 100vw, 396px"/></div>
                                    </div>
                                </div>
                                <div className="icon-box-text last-reset">
                                    <h5 className="uppercase">CAM KẾT CHẤT LƯỢNG</h5>
                                    <p><span style={{color: "#000000"}}>Cam kết các sản phẩm đều là hàng chính hãng, cam kết 1 đền 10 nếu phát hiện hàng giả, hàng nhái, hàng kém chất lượng.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="col-2146834445" className="col medium-4 large-4">
                        <div className="col-inner">


                            <div className="icon-box featured-box icon-box-left text-left is-small"
                                 style={{margin: "0px 0px 0px 0px"}}>
                                <div className="icon-box-img" style={{width: "120px"}}>
                                    <div className="icon">
                                        <div className="icon-inner" style={{color: "rgb(182, 182, 182)"}}>
                                            <img width="50" height="50"
                                                 src="https://tiendichshop.vn/wp-content/uploads/2022/04/delivery-400x400.png"
                                                 className="attachment-medium size-medium" alt=""
                                                 srcSet="https://tiendichshop.vn/wp-content/uploads/2022/04/delivery-400x400.png 400w, https://tiendichshop.vn/wp-content/uploads/2022/04/delivery-280x280.png 280w, https://tiendichshop.vn/wp-content/uploads/2022/04/delivery-380x380.png 380w, https://tiendichshop.vn/wp-content/uploads/2022/04/delivery-450x450.png 450w, https://tiendichshop.vn/wp-content/uploads/2022/04/delivery-100x100.png 100w, https://tiendichshop.vn/wp-content/uploads/2022/04/delivery.png 506w"
                                                 sizes="(max-width: 400px) 100vw, 400px"/></div>
                                    </div>
                                </div>
                                <div className="icon-box-text last-reset">
                                    <h5 className="uppercase">GIAO HÀNG TOÀN QUỐC</h5>
                                    <p style={{textAlign: "justify"}}><span style={{color: "#000000"}}>Giao hàng toàn quốc, nhập hàng trước &#8211; thanh toán sau. Chỉ với thao tác đặt hàng nhanh chóng qua Website.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <h2 className="sub-title">SẢN PHẨM NỔI BẬT</h2>
                    <div className="exclusives">
                        {
                            products.length !== 0 ? (
                                products.map((product)=>{
                                    return(
                                        <div key={product.idProduct}>
                                            <Link to={`/detail/${product.idProduct}`} className="text-decoration-none">
                                                <img
                                                    src={product.firstImage}/>
                                                <span>
                                    <h6>{product.nameProduct}</h6>
                                    <p>{vnd.format(product.priceProduct)}</p>
                                </span>
                                            </Link>

                                        </div>
                                    );
                                })
                            ) :(<p>Không tìm thấy!</p>)
                        }

                    </div>
                    <h2 className="sub-title">CÁC LOẠI SẢN PHẨM</h2>
                    <div className="trending">
                        <div className="text-center">
                            <Link to={"/category/1"} className="text-decoration-none text-dark">
                            <img
                                src="https://static.30shine.com/shop-admin/2023/05/06/30SI9BUD-review-sap-reuzel-pomade.jpg"/>
                            <h5 className="mt-3">SÁP VUỐT TÓC</h5>
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link to={"/category/2"} className="text-decoration-none text-dark">
                            <img
                                src="https://storage.30shine.com/30shine-store/product-images/9956dbac-f00e-4feb-b1b9-5868749fd451"/>
                            <h5 className="mt-3">GÔM DỮ NẾP</h5>
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link to={"/category/3"} className="text-decoration-none text-dark">
                            <img
                                src="https://storage.30shine.com/30shine-store/product-images/86a7d926-6fca-46ad-bc2b-22ba54905b31"/>
                            <h5 className="mt-3">PRE STYLING</h5>
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link to={"/category/4"} className="text-decoration-none text-dark">
                            <img
                                src="https://storage.30shine.com/30shine-store/product-images/8796a6ec-a6f1-419b-9edf-e2aab7f2b4a7"/>
                            <h5 className="mt-3">DƯỠNG TÓC</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="cta">
                        <h3>Men's <br/>Grooming</h3>
                        <p><span style={{fontSize: "150%", color: "#e2f89f"}}>LÀ CHÍNH MÌNH</span> giúp bạn trở nên khác
                            biệt.</p>
                        <Link to={"/list"}>
                        <a href="#" className="cta-btn text-decoration-none">Mua Ngay.</a>
                        </Link>
                    </div>
                    <h2 className="sub-title">BLOGS</h2>
                    <div className="stories">
                        <div>
                            <a href="https://shop.30shine.com/bai-viet/cac-loai-pomade" target="_blank" className="text-decoration-none text-black">
                            <img
                                src="https://static.30shine.com/shop-admin/2023/07/12/30SSYJGX-gia-sap-vuot-toc-nam.jpg"/>
                            <h5>GỢI Ý 12+ LOẠI POMADE NÊN SỬ DỤNG TRONG 2023 CHO ANH EM</h5>
                            </a>
                        </div>
                        <div>
                            <img
                                src="https://static.30shine.com/shop-admin/2023/08/16/30STFSO0-sap-vuot-toc-nam-mem.jpg"/>
                            <h5>5 LOẠI SÁP VUỐT TÓC NAM MỀN TỰ NHIÊN, GIỮ NẾP CẢ NGÀY DÀI</h5>
                        </div>
                        <div>
                            <a href="https://shop.30shine.com/bai-viet/sap-vuot-toc-side-part-ru" target="_blank" className="text-decoration-none text-black">
                            <img src="https://static.30shine.com/shop-admin/2023/04/30/30SBK8DL-cach-vuot-toc-6-4.jpg"/>
                            <h5>TOP 6+ SÁP VUỐT TÓC SIDE PART RỦ, TẠO KIỂU TÓC SIDE PART ĐÚNG CHUẨN</h5>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <footer className="footer-men">
                <div className="container my-3">
                    <div className="row my-3">
                        <div className="col-md-4 my-3">
                            <h3>Về chúng tôi</h3>
                            <p>
                                Chúng tôi cung cấp các sản phẩm mỹ phẩm chất lượng cao dành cho nam giới. Được tạo nên
                                để
                                nâng cao
                                vẻ đẹp và tự tin của bạn.
                            </p>
                        </div>
                        <div className="col-md-4 my-3">
                            <h3>Sản phẩm</h3>
                            <ul>
                                <li><a href="#">Sáp vuốt tóc</a></li>
                                <li><a href="#">Gôm</a></li>
                                <li><a href="#">Sữa rửa mặt</a></li>
                                <li><a href="#">Dầu gội</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 my-3">
                            <h3>Liên hệ</h3>
                            <address>
                                123 Đường Chế Lan Viên, Quận Ngũ Hành Sơn<br/>
                                Thành phố Đà Nẵng, Việt Nam<br/>
                                Email: contact@example.com<br/>
                                Điện thoại: 0123-456-789
                            </address>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2023 Công ty Mỹ phẩm Nam Men's Grooming. Bảo lưu mọi quyền.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-inline text-right">
                                <li className="list-inline-item"><a href="#">Chính sách bảo mật</a></li>
                                <li className="list-inline-item"><a href="#">Điều khoản và điều kiện</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}