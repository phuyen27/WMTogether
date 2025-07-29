import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InputField from "./InputField";

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [error, setError] = useState("");

  // Hiển thị preview avatar khi chọn file
  useEffect(() => {
    if (!avatarFile) {
      setAvatarPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(avatarFile);
    setAvatarPreview(objectUrl);

    // Cleanup memory khi component unmount hoặc avatarFile thay đổi
    return () => URL.revokeObjectURL(objectUrl);
  }, [avatarFile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Vui lòng nhập tên người dùng.");
      return;
    }
    if (!email.trim()) {
      setError("Vui lòng nhập email.");
      return;
    }
    if (!password.trim()) {
      setError("Vui lòng nhập mật khẩu.");
      return;
    }

    try {
      await onRegister(username, email, password, avatarFile);
    } catch (err) {
      setError("Đăng ký thất bại. Vui lòng thử lại.");
      console.error(err);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
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
        Đăng ký
      </h2>

      <InputField
        label="Tên người dùng"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nhập tên của bạn"
        required
      />

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

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-orange-400" htmlFor="avatar">
          Ảnh đại diện (avatar)
        </label>
        <input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="w-full text-white bg-gray-700 rounded px-3 py-2"
        />
        {avatarPreview && (
          <img
            src={avatarPreview}
            alt="Avatar preview"
            className="mt-4 w-24 h-24 rounded-full object-cover mx-auto"
          />
        )}
      </div>

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
        Đăng ký
      </button>

      <p className="text-sm text-center text-gray-400 mt-6">
        Đã có tài khoản?{" "}
        <a href="/login" className="text-orange-400 hover:underline">
          Đăng nhập
        </a>
      </p>
    </motion.form>
  );
};

export default RegisterForm;
