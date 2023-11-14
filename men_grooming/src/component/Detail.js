import {Footer} from "./Footer";
import {Header} from "./Header";
import React from "react";

export function Detail() {
return(
    <>
        <Header/>
        <section className="py-5 mt-5">
            <div className="container">
                <div className="row gx-5">
                    <aside className="col-lg-6">
                        <div className="border rounded-4 mb-3 d-flex justify-content-center">
                            <a data-fslightbox="mygalley" className="rounded-4" target="_blank" datatype="image" href="#">
                                <img style={{maxWidth:"100%",maxHeight:"100vh",margin:"auto"}} className="rounded-4 fit"
                                     src="https://static.30shine.com/shop-admin/2023/08/18/30SAFG66-vn-11134207-7qukw-ljcj272stqto77_tn.jpeg"/>
                            </a>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" datatype="image"
                               href="#" className="item-thumb">
                                <img width="60" height="60" className="rounded-2"
                                     src="https://storage.30shine.com/30shine-store/product-images/c53aec75-e834-4da9-ada9-e33b1cd035fc"/>
                            </a>
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" datatype="image"
                               href="#" className="item-thumb">
                                <img width="60" height="60" className="rounded-2"
                                     src="https://storage.30shine.com/30shine-store/product-images/bde15822-97c3-4559-afd0-779c3ff05482"/>
                            </a>
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" datatype="image"
                               href="#" className="item-thumb">
                                <img width="60" height="60" className="rounded-2"
                                     src="https://storage.30shine.com/30shine-store/product-images/df15e70f-90eb-4cd7-b05d-3e7faee3343d"/>
                            </a>
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" datatype="image"
                               href="#" className="item-thumb">
                                <img width="60" height="60" className="rounded-2"
                                     src="https://storage.30shine.com/30shine-store/product-images/1dfec731-caa2-48b4-992d-4f460f296c9d"/>
                            </a>
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" datatype="image"
                               href="#" className="item-thumb">
                                <img width="60" height="60" className="rounded-2"
                                     src="https://storage.30shine.com/30shine-store/product-images/1dfec731-caa2-48b4-992d-4f460f296c9d"/>
                            </a>
                        </div>

                    </aside>
                    <main className="col-lg-6">
                        <div className="ps-lg-3">
                            <h4 className="title text-dark">
                                Sáp vuốt tóc nam Kevin Murphy Rough Rider không bóng
                                giữ nếp tóc suốt 24h
                            </h4>
                            <div className="d-flex flex-row my-3">
                                <div className="text-warning mb-1 me-2">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span className="ms-1">4.5</span>
                                </div>
                                <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                            </div>

                            <div className="mb-3">
                                <span className="h5">275.000đ</span>
                                <span className="text-muted">/hộp</span>
                            </div>

                            <hr/>

                            <div className="row mb-4">
                                <div className="col-md-4 col-6 mb-3">
                                    <label className="mb-2 d-block">Số lượng</label>
                                    <div className="input-group mb-3" style={{width:"170px"}}>
                                        <button className="btn btn-white border border-secondary px-3" type="button"
                                                id="button-addon1" data-mdb-ripple-color="dark">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <input type="text" className="form-control text-center border border-secondary"
                                               placeholder="1" aria-label="Example text with button addon"
                                               aria-describedby="button-addon1"/>
                                        <button className="btn btn-white border border-secondary px-3" type="button"
                                                id="button-addon2" data-mdb-ripple-color="dark">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn btn-warning shadow-0 mx-2"> Mua ngay </a>
                            <a href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Thêm giỏ hàng
                            </a>

                        </div>
                    </main>
                </div>
            </div>
        </section>


        <section className="bg-light border-top py-4">
            <div className="container">
                <div className="row gx-4">
                    <div className="col-lg-8 mb-4">
                        <div className="border rounded-2 px-3 py-2 bg-white">
                            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                <li className="nav-item d-flex" role="presentation">
                                    <a className="nav-link d-flex align-items-center justify-content-center w-100 active"
                                       id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab"
                                       aria-controls="ex1-pills-1" aria-selected="true">Thông tin</a>
                                </li>
                            </ul>

                            <div className="tab-content" id="ex1-content">
                                <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel"
                                     aria-labelledby="ex1-tab-1">
                                    <p>
                                         Sáp vuốt tóc Kevin Murphy Rough Rider là sản phẩm chăm sóc tóc cao cấp của nhà Kevin Murphy,
                                        được mệnh danh là “ông vua tạo kiểu”. Với các thành phần thiên nhiên, độ giữ nếp vô địch và
                                        khả năng “miễn dịch” với dầu cực cao, đây hứa hẹn sẽ là một sản phẩm đáng để trải nghiệm trong mùa hè này.
                                    </p>
                                    <p>
                                         Bảng thành phần chi tiết của Kevin Murphy Rough Rider:
                                        Aqua, Microcrystalline Wax,  Beeswax, Lanolin, Carnauba Wax, Tocopherol, Petrolatum,
                                        Cetearyl Alcohol, Bis-Diglyceryl Polyacyladipate-2, Lanolin Wax/Lanolin Cera/Cire de lanoline,
                                        Ozokerite, Tribehenin, Propylene Glycol, Tridecyl Trimellitate, PEG-8 Beeswax.
                                    </p>
                                    <table className="table border mt-3 mb-2">
                                        <tr>
                                            <th className="py-2">Xuất xứ:</th>
                                            <td className="py-2">Úc</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2">Thương hiệu:</th>
                                            <td className="py-2">Kevin Murphy</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2">Mùi hương:</th>
                                            <td className="py-2">Kẹo Toffee caramel</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2">Trọng lượng:</th>
                                            <td className="py-2">100g</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2">Loại sản phẩm:</th>
                                            <td className="py-2">Wax dạng clay</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="px-0 border rounded-2 shadow-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Sản phẩm cùng loại</h5>
                                    <div className="d-flex mb-3">
                                        <a href="#" className="me-3">
                                            <img src="https://static.30shine.com/shop-admin/2023/10/04/30S46UYJ-variation_10.jpg"
                                                 style={{minWidth: "96px",height:"96px"}} className="img-md img-thumbnail"/>
                                        </a>
                                        <div className="info">
                                            <a href="#" className="nav-link mb-1">
                                                Sáp By Vilain Gold Digger <br/>
                                                Limited 2022
                                            </a>
                                            <strong className="text-dark">550.000đ</strong>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-3">
                                        <a href="#" className="me-3">
                                            <img src="https://static.30shine.com/shop-admin/2023/05/15/30S1R7HT-reuzel-red.jpg"
                                                style={{minWidth: "96px",height:"96px"}} className="img-md img-thumbnail"/>
                                        </a>
                                        <div className="info">
                                            <a href="#" className="nav-link mb-1">
                                                Reuzel Pink Pomade <br/>
                                                Heavy Hold Pomade
                                            </a>
                                            <strong className="text-dark">330.000đ</strong>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-3">
                                        <a href="#" className="me-3">
                                            <img src="https://static.30shine.com/shop-admin/2023/08/21/30SHQL57-vn-11134207-7qukw-ljcio5w4dluaae_tn.jpeg"
                                                 style={{minWidth: "96px",height:"96px"}} className="img-md img-thumbnail"/>
                                        </a>
                                        <div className="info">
                                            <a href="#" className="nav-link mb-1"> Xịt tạo phồng Reuzel Spray Grooming Tonic  </a>
                                            <strong className="text-dark"> 120.000đ</strong>
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <a href="#" className="me-3">
                                            <img src="https://static.30shine.com/shop-admin/2023/05/15/30S1R7HT-reuzel-red.jpg"
                                                 style={{minWidth: "96px",height:"96px"}} className="img-md img-thumbnail"/>
                                        </a>
                                        <div className="info">
                                            <a href="#" className="nav-link mb-1"> Reuzel Green Pomade </a>
                                            <strong className="text-dark"> 339.900đ</strong>
                                        </div>
                                    </div>
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