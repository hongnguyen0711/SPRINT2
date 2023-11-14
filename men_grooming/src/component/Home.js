import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {jwtDecode} from "jwt-decode";
import * as homeService from "../service/HomeService";
import {log} from "async";

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
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img
                                src="data:image/jpeg;base64,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"
                                width="50" height="50"/>
                            <span className="d-inline-block align-top custom-text my-2">Men's Grooming</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Danh sách sản phẩm</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1"
                                       aria-disabled="true">Quản lý</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-secondary w-50" type="submit">Tìm kiếm</button>
                            </form>
                            <div className="login-section mx-2">
                                {isLoggedIn ? (
                                    <div className="user-info">
                                        <span>Hi,{username}</span>
                                        <a href="#" className="logout-btn mx-3 text-dark text-decoration-none"
                                           onClick={handleLogout}>
                                            Đăng xuất <FontAwesomeIcon icon={faSignInAlt}/>
                                        </a>
                                    </div>
                                ) : (
                                    <div className="user-info">
                                        <a href="#" className="btn mx-2 text-dark text-decoration-none"
                                           onClick={handleRegister}>
                                            Đăng nhập <FontAwesomeIcon icon={faSignInAlt}/>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>


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
                                            <Link to={"/detail"} className="text-decoration-none">
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
                            <img
                                src="https://static.30shine.com/shop-admin/2023/05/06/30SI9BUD-review-sap-reuzel-pomade.jpg"/>
                            <h5 className="mt-3">SÁP VUỐT TÓC</h5>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://storage.30shine.com/30shine-store/product-images/9956dbac-f00e-4feb-b1b9-5868749fd451"/>
                            <h5 className="mt-3">GÔM DỮ NẾP</h5>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://storage.30shine.com/30shine-store/product-images/86a7d926-6fca-46ad-bc2b-22ba54905b31"/>
                            <h5 className="mt-3">PRE STYLING</h5>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://storage.30shine.com/30shine-store/product-images/8796a6ec-a6f1-419b-9edf-e2aab7f2b4a7"/>
                            <h5 className="mt-3">DƯỠNG TÓC</h5>
                        </div>
                    </div>
                    <div className="cta">
                        <h3>Men's <br/>Grooming</h3>
                        <p><span style={{fontSize: "150%", color: "#e2f89f"}}>LÀ CHÍNH MÌNH</span> giúp bạn trở nên khác
                            biệt.</p>
                        <a href="#" className="cta-btn text-decoration-none">Mua Ngay.</a>
                    </div>
                    <h2 className="sub-title">BLOGS</h2>
                    <div className="stories">
                        <div>
                            <img
                                src="https://static.30shine.com/shop-admin/2023/07/12/30SSYJGX-gia-sap-vuot-toc-nam.jpg"/>
                            <h5>GỢI Ý 12+ LOẠI POMADE NÊN SỬ DỤNG TRONG 2023 CHO ANH EM</h5>
                        </div>
                        <div>
                            <img
                                src="https://static.30shine.com/shop-admin/2023/08/16/30STFSO0-sap-vuot-toc-nam-mem.jpg"/>
                            <h5>5 LOẠI SÁP VUỐT TÓC NAM MỀN TỰ NHIÊN, GIỮ NẾP CẢ NGÀY DÀI</h5>
                        </div>
                        <div>
                            <img src="https://static.30shine.com/shop-admin/2023/04/30/30SBK8DL-cach-vuot-toc-6-4.jpg"/>
                            <h5>TOP 6+ SÁP VUỐT TÓC SIDE PART RỦ, TẠO KIỂU TÓC SIDE PART ĐÚNG CHUẨN</h5>
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