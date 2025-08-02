import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../services/registerService';
import { RegisterFormValues } from '../schemas/registerSchema';

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleRegister = async (values: RegisterFormValues) => {
        setIsLoading(true);
        setError(null);

        try {
            const { name, email, password, confirm_password, avatar } = values;
            const result = await registerWithEmailAndPassword(email, password);

            if (result.success) {
                navigate('/home');
            } else {
                setError(result.error);
            }
        } catch (err: any) {
            setError(err.message || 'Đăng ký thất bại. Vui lòng thử lại sau.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        handleRegister,
        isLoading,
        error,
    };
};