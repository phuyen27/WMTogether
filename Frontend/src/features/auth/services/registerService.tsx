import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase';
import Cookies from 'js-cookie';

export const registerWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();

        // Store token in cookies
        Cookies.set('access_token', token, { expires: 7, path: '/' });

        return { success: true, user: userCredential.user };
    } catch (error: any) {
        return {
            success: false,
            error: error.message || 'Đăng ký thất bại. Vui lòng kiểm tra lại email hoặc mật khẩu.'
        };
    }
};
