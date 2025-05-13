import { useState, type Dispatch, type SetStateAction } from 'react';
import type { AuthValues, FormikHandleSubmit } from '../types/formik';
import { authSchema } from '../validation/auth';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    type Auth,
} from 'firebase/auth';
import AuthModal from './Modals/AuthModal';

export default function AuthUI({
    auth,
    setIsSetNameModalOpen,
}: {
    auth: Auth;
    setIsSetNameModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    // submit functions
    const handleLoginSubmit: FormikHandleSubmit<AuthValues> = async (
        values,
        action
    ) => {
        const { success } = authSchema.safeParse(values);
        const { email, password } = values;
        if (success) {
            try {
                const data = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                setIsLoginModalOpen(false);
                if (!data.user.displayName) setIsSetNameModalOpen(true);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        }
        action.resetForm();
        // setIsLoginModalOpen(false);
    };

    const handleRegisterSubmit: FormikHandleSubmit<AuthValues> = async (
        values,
        action
    ) => {
        const { success } = authSchema.safeParse(values);
        const { email, password } = values;
        if (success) {
            try {
                const data = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                setIsRegisterModalOpen(false);
                if (!data.user.displayName) setIsSetNameModalOpen(true);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        }
        setIsLoginModalOpen(false);
        action.resetForm();
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
            <AuthModal
                type="login"
                isOpen={isLoginModalOpen}
                handleSubmit={handleLoginSubmit}
                setIsOpen={setIsLoginModalOpen}
            />
            <AuthModal
                type="register"
                isOpen={isRegisterModalOpen}
                handleSubmit={handleRegisterSubmit}
                setIsOpen={setIsRegisterModalOpen}
            />
        </section>
    );
}
