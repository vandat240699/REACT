import { useForm } from "react-hook-form";
import { signup } from "../api/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../authenticate";

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        signup(data)
            .then(response => {
                console.log("Đăng ký", response.data);
                authenticate(response.data.user);
                toast.success("Đăng ký thành công");

                navigate("/signin");
            })
            .catch((error) => toast.error(error.response.data));
    };
    return (
        <div className="sub-main-w3">
            <div className="wthree-pro">
                <br />
                <h2 style={{ color: '#858570' }}>Đăng ký</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder="Username or E-mail" className="email" type="email" required="" />
               <br /><br />
                <input {...register("password")} placeholder="Password" className="password" type="password" required="" />
                <div className="sub-w3l">
                    <button className="btn btn-danger" >Đăng ký</button>
                </div>
            </form>
            <div className="footer">
                <p>2021 Classic Login Form. All rights reserved | Design by</p>
            </div>
        </div>
    )
}

export default Signup;