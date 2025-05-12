// import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
// import Modal from 'react-modal';
import LoginModal from '../components/Modals/LoginModal';
import RegisterModal from '../components/Modals/RegisterModal';
import type {
    FormikHandleSubmit,
    LoginValues,
    RegisterValues,
} from '../types/modals';

export default function HomePage() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const handleLoginSubmit: FormikHandleSubmit<LoginValues> = (
        values,
        action
    ) => {
        action.resetForm();
        // setIsLoginModalOpen(false);
    };

    const handleRegisterSubmit: FormikHandleSubmit<RegisterValues> = (
        values,
        action
    ) => {
        action.resetForm();
        // setIsLoginModalOpen(false);
    };

    return (
        <section>
            <h1>Event Planing App</h1>
            <ul>
                <li>
                    <button onClick={() => setIsLoginModalOpen(true)}>
                        Login
                    </button>
                </li>
                <li>
                    <button onClick={() => setIsRegisterModalOpen(true)}>
                        Register
                    </button>
                </li>
            </ul>
            <LoginModal
                isOpen={isLoginModalOpen}
                handleSubmit={handleLoginSubmit}
                setIsOpen={setIsLoginModalOpen}
            />
            <RegisterModal
                isOpen={isRegisterModalOpen}
                setIsOpen={setIsRegisterModalOpen}
                handleSubmit={handleRegisterSubmit}
            />
        </section>
    );
}
