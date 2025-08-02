import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase';
import Cookies from 'js-cookie';

export const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();

        // Store token in cookies
        Cookies.set('access_token', token, { expires: 7, path: '/' });

        return { success: true, user: userCredential.user };
    } catch (error: any) {
        return {
            success: false,
            error: error.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại email hoặc mật khẩu.'
        };
    }
};

export const logout = () => {
    Cookies.remove('access_token', { path: '/' });
    return auth.signOut();
};