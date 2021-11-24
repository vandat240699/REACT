// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../firebase/firebase.config";
import { useForm } from "react-hook-form";
import { signin } from "../api/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../authenticate";

const Signin = () => {
    //   const provider = new GoogleAuthProvider();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    //   const googleSignin = async () => {
    //     const { user } = await signInWithPopup(auth, provider);
    //     console.log(user);
    //   };

    const onSubmit = (data) => {
        // call API đăng ký tài khoản
        signin(data)
            .then((response) => {
                console.log(response.data);
                toast.success("Đăng nhập thành công");

                // Lưu thông tin vào localStorage
                authenticate(response.data.user);

                // Lấy thông tin
                if (response.data.user.id === 1) {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/");
                }
            })
            .catch((error) => toast.error(error.response.data));
    };
    return (
        <div className="sub-main-w3">
            <div className="wthree-pro">
                <br />
                <h2 style={{ color: '#858570' }}>Đăng nhập tại đây</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder="Username or E-mail" className="user" type="email" required="" />
                <br /><br />
                <input {...register("password")} placeholder="Password" className="pass" type="password" required="" />
                <h6><a href="#">Forgot Password?</a></h6><br />
                <button className="btn btn-danger" >Đăng nhập</button>
            </form>
            <div className="footer">
                <p>Bạn cần đăng nhập tài khoản Admin để vào thư mục quản trị</p>
            </div>
        </div>
    );
}

export default Signin;