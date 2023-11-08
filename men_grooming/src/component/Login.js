import {useState} from "react";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import * as userService from "../service/UserService"


export function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({userName:"", pass:""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await userService.loginUser(formData);
            userService.addJwtTokenToLocalStorage(result.data.jwtToken);
            const { userName, pass } = formData;
            setFormData({
                userName: "",
                pass: "",
            });
            toast("Đăng nhập thành công.");
            navigate("/");
        } catch (error) {
            toast("Vui lòng kiểm tra lại thông tin.");
            navigate("/login");
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
            <div className="vid-container">
                <video id="Video1" className="bgvid back" autoPlay="true" muted="muted" preload="auto" loop>
                    <source src="https://cdn.pixabay.com/vimeo/230853032/xe-hoi-11490.mp4?width=1280&hash=2b9629ad93bb9e20c6d8c54ec8029266c3cfe7d2" type="video/mp4"/>
                </video>
                <div className="inner-container">
                    <div className="box">
                        <h1>MEN'S GROOMING</h1>
                        <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Tên đăng nhập"/>
                        <input type="password" name="pass" value={formData.password} onChange={handleChange} placeholder="Mật khẩu"/>
                        <button type="submit">Đăng nhập</button>
                        <p>Quên mật khẩu? <span className="signup">Đăng kí.</span></p>
                    </div>
                </div>
            </div>
            </form>
        </>
    );
}
