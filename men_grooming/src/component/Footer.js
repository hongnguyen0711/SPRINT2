import React from "react";

export function Footer() {
    return (
        <>
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