import axios from "axios";

export const loginUser = async (appUser) => {
    const result = await axios.post(`http://localhost:8080/api/user/login-by-username`, appUser)
    return result;
}

export const addJwtTokenToLocalStorage = (jwtToken) => {
    localStorage.setItem("JWT", jwtToken);
}

export const registerUser = async (appUser) => {
    const result = await axios.post(`http://localhost:8080/api/user/register-by-customer`, appUser)
    return result;
}