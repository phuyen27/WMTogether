import RegisterForm from '../components/registerForm';
import AuthPageComponent from './authPage';

const RegisterPageComponent = () => {
    return (
        <AuthPageComponent InputForm={RegisterForm} />
    );
};

export default RegisterPageComponent;
