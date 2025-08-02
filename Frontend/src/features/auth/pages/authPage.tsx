import { motion } from 'framer-motion';
import LoginForm from '../components/loginForm';
import bgGif from '../../../assets/img/_bg.gif';

const AuthPageComponent = ({ InputForm }: { InputForm: React.FC }) => {
    return (
        <div
            className="flex items-center justify-center min-h-screen px-4 relative"
            style={{
                backgroundImage: `url(${bgGif})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 w-full max-w-md">
                <div className="relative z-10 w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-2xl border border-gray-700"
                    >
                        <InputForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AuthPageComponent;
