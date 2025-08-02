import LoginForm from '../components/loginForm';
import AuthPageComponent from './authPage';

const LoginPageComponent = () => {
    return (
        <AuthPageComponent InputForm={LoginForm} />
    );
};

export default LoginPageComponent;