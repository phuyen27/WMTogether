import { FaLock } from 'react-icons/fa';
import { registerSchema, RegisterFormValues } from '../schemas/registerSchema';
import { useRegister } from '../hooks/useRegister';
import InputField from '../../../components/form/InputField';
import Button from '../../../components/Button';
import { MdEmail } from 'react-icons/md';
import { Form } from '@/components/form/Form';
import { useState } from 'react';

const RegisterForm = () => {
    const { handleRegister, isLoading, error } = useRegister();
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file);
        }
    };

    return (
        <Form<RegisterFormValues>
            name="Đăng ký"
            onSubmit={handleRegister}
            schema={registerSchema}
        >
            <InputField
                label="Họ tên"
                fieldName="name"
                type="text"
                icon={FaLock}
                placeholder="Nhập họ tên"
                required
            />

            <InputField
                label="Email"
                fieldName="email"
                type="email"
                icon={MdEmail}
                required
            />

            <InputField
                label="Mật khẩu"
                fieldName="password"
                type="password"
                icon={FaLock}
                placeholder="Nhập mật khẩu"
                required
            />

            <InputField
                label="Xác nhận mật khẩu"
                fieldName="confirmPassword"
                type="password"
                icon={FaLock}
                placeholder="Xác nhận mật khẩu"
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
                <p className="text-red-500 text-center font-semibold">
                    {error}
                </p>
            )}

            <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
            </Button>

            <div className="mt-6 space-y-2">
                <p className="text-sm text-center text-gray-400">
                    Chưa có tài khoản?{" "}
                    <a href="/register" className="text-orange-400 hover:underline">
                        Đăng ký
                    </a>
                </p>
                <p className="text-sm text-center text-gray-400">
                    Quên mật khẩu?{" "}
                    <a href="/reset-password" className="text-orange-400 hover:underline">
                        Khôi phục
                    </a>
                </p>
            </div>
        </Form>
    );
};

export default RegisterForm;