import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import RegisterForm from "../components/RegisterForm";
import bgGif from "../assets/img/_bg.gif";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (username, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();

      // Nếu muốn lưu username ở backend thì cần call API backend nữa (thường sau khi đăng ký thành công)

      Cookies.set("access_token", token, { expires: 7, path: "/" });
      navigate("/home");
    } catch (error) {
      console.error("Đăng ký thất bại:", error);
      alert("Đăng ký thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 relative"
      style={{
        backgroundImage: `url(${bgGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 w-full max-w-md">
        <RegisterForm onRegister={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterPage;
