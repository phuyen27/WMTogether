import React, { useState } from "react";
import { motion } from "framer-motion";
import InputField from "./InputField";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await onLogin(email, password);
    } catch (err) {
      setError("Đăng nhập thất bại. Vui lòng kiểm tra lại email hoặc mật khẩu.");
      console.error(err);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-[#0f0c29] p-10 rounded-xl shadow-2xl border border-gray-700 max-w-md mx-auto"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-center text-orange-500 drop-shadow-lg">
        Đăng nhập
      </h2>

      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhập email của bạn"
        required
      />

      <InputField
        label="Mật khẩu"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Nhập mật khẩu"
        required
      />

      {error && (
        <p className="text-red-500 mb-6 text-center font-semibold">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full py-3 rounded-md bg-gradient-to-r from-orange-500 via-red-600 to-pink-600
        text-white font-bold text-lg shadow-lg hover:brightness-110 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
      >
        Đăng nhập
      </button>

      <p className="text-sm text-center text-gray-400 mt-6">
        Chưa có tài khoản?{" "}
        <a href="/register" className="text-orange-400 hover:underline">
          Đăng ký
        </a>
      </p>
      <p className="text-sm text-center text-gray-400 mt-2">
        Quên mật khẩu?{" "}
        <a href="/reset-password" className="text-orange-400 hover:underline">
          Khôi phục
        </a>
      </p>
    </motion.form>
  );
};

export default LoginForm;
