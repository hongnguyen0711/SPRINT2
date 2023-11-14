import axios from "axios";

export const getAllListProduct = async (limit, page, nameSearch, category, fragrant) => {
    try {
        const result = await axios.get(
            `http://localhost:8080/api/user/list?_limit=${limit}&_page=${page}&name_like=${nameSearch}&category=${category}&fragrant=${fragrant}`);
        return result;
    } catch (e) {
        alert(e);
    }
}
export const getAllType = async () => {
    try {
        const result = await axios.get("http://localhost:8080/api/user/category");
        return result;
    } catch (e) {
        alert(e);
    }
}
