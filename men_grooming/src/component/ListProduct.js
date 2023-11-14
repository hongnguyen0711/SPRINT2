import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as productService from "../service/ProductService";
import {toast} from "react-toastify";
import {Header} from "./Header";
import {Footer} from "./Footer";

export function ListProduct() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [limit, setLimit] = useState("");
    const [page, setPage] = useState("");
    const [records, setRecords] = useState();
    const [totalPage, setTotalPage] = useState();
    const [searchName, setSearchName] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [searchFragrant, setSearchFragrant] = useState("");
    const [refresh, setRefresh] = useState(true);
    const pattern = /[!@#$%^&*()_+=|{}<>?]/;


    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const getProductList = async () => {
        try {
            const array = await productService.getAllListProduct(limit, page, searchName, searchCategory, searchFragrant);
            setProducts(array.data.content);
            setRecords(array.data.totalElements);
            setTotalPage(array.data.totalPages);
        } catch (e) {
            setProducts([]);
            setRecords(0);
            setPage(0);
        }
    }
    const getCategoryList = async () => {
        const array = await productService.getAllType();
        console.log(1111111111111)
        console.log(array.data)
        setCategory(array.data);
    }

    useEffect(() => {
        getProductList();
        getCategoryList();
    }, [page, refresh]);

    const handleSearch = () => {
        if (pattern.test(searchName)) {
            toast("Không nhập ký tự đặc biệt");
        } else {
            setPage(0);
            setRefresh(!refresh)
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    const previousPage = () => {
        setPage(page - 1);
    }

    const nextPage = () => {
        setPage(page + 1);
    }
    return (
        <>
            <Header/>
            <div className="container">
                <h2>AA</h2>
                <h2 className="mt-5">DANH SÁCH SẢN PHẨM</h2>
                <div className="col-12 d-flex justify-content-end mt-3 mb-3">
                    <div className="col-auto mx-1">
                        <select id="type" name="type" className="form-control"
                                style={{width: "100%"}} onChange={(type) => setSearchCategory(type.target.value)}>
                            <option value="">--Chọn loại sản phẩm--</option>
                            {category.map((area) => (
                                <option key={area.id} value={area.id}>
                                    {area.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-auto mx-1">
                        <input className="form-control" type="search" placeholder="Tìm theo tên" aria-label="Search"
                               style={{width: '200px'}}
                               onChange={(name) => {
                                   (setSearchName(name.target.value))
                               }} onKeyDown={handleKeyDown}/>
                    </div>
                    <div className="col-auto mx-1">
                        <button className="btn btn-outline-primary text-center" type="button"
                                onClick={handleSearch}>Tìm kiếm
                        </button>
                    </div>
                </div>

                <div className="exclusives mt-5">
                    {
                        products.length !== 0 ? (
                            products.map((product) => {
                                return (
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
                        ) : (<p>Không tìm thấy!</p>)
                    }
                </div>
                <div className="container my-2 mx-auto">
                    <div className="row  text-center">
                        <div className=" ms-auto">
                            <nav className="bottom" aria-label="Page navigation">
                                <ul className="pagination mb-0 ">
                                    <li className="page-item">
                                        <a className={`page-link ${page === 0 ? "disabled" : ""}`}
                                           onClick={() => setPage(0)} tabIndex="-1" href="#"
                                           aria-disabled="true">《</a>
                                    </li>
                                    <li className="page-item ">
                                        <a onClick={() => previousPage()}
                                           className={`page-link ${page <= 0 ? "disabled" : ""}`} href="#" tabIndex="-1"
                                           aria-disabled="true">〈 </a>
                                    </li>
                                    <li className="page-item" aria-current="page">
                                        <a className="page-link" href="#">{page + 1}/{totalPage}</a>
                                    </li>
                                    <li className="page-item">
                                        <a onClick={() => nextPage()}
                                           className={`page-link ${page >= totalPage - 1 ? "disabled" : ""}`}
                                           href="#"> 〉 </a>
                                    </li>
                                    <li className="page-item">
                                        <a className={`page-link ${page >= totalPage - 1 ? "disabled" : ""}`} href="#"
                                           onClick={() => setPage(totalPage - 1)}> 》 </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}