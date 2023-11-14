import axios from "axios";
export const getListProduct = async () => {
    try {
        const result = await axios.get("http://localhost:8080/api/user/home");
        return result;
    }catch (e) {
        alert(e);
    }
}