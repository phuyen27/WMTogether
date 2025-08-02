import { FaLock } from 'react-icons/fa';
import { loginSchema, LoginFormValues } from '../schemas/loginSchema';
import { useLogin } from '../hooks/useLogin';
import InputField from '../../../components/form/InputField';
import Button from '../../../components/Button';
import { MdEmail } from 'react-icons/md';
import { Form } from '@/components/form/Form';

const LoginForm = () => {
    const { handleLogin, isLoading, error } = useLogin();

    return (
        <Form<LoginFormValues>
            name="Đăng nhập"
            onSubmit={handleLogin}
            schema={loginSchema}
        >
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

export default LoginForm;