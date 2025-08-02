import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmailAndPassword } from '../services/loginService';
import { LoginFormValues } from '../schemas/loginSchema';

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (values: LoginFormValues) => {
        setIsLoading(true);
        setError(null);

        try {
            const { email, password } = values;
            const result = await loginWithEmailAndPassword(email, password);

            if (result.success) {
                navigate('/home');
            } else {
                setError(result.error);
            }
        } catch (err: any) {
            setError(err.message || 'Đăng nhập thất bại. Vui lòng thử lại sau.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        handleLogin,
        isLoading,
        error,
    };
};