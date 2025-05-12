import type { FormikHelpers } from 'formik';
import type { Dispatch, SetStateAction } from 'react';

export type FormikHandleSubmit<T> = (
    values: LoginValues,
    actions: FormikHelpers<T>
) => void;

interface IModalProps {
    // type: ['login', 'register'];
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    // + handleSubmit
}

// Login
export type LoginValues = {
    email: string;
    password: string;
};

export type LoginModalProps = IModalProps & {
    handleSubmit: FormikHandleSubmit<LoginValues>;
};

// Register
export type RegisterValues = {
    login: string;
    email: string;
    password: string;
};

export type RegisterModalProps = IModalProps & {
    handleSubmit: FormikHandleSubmit<RegisterValues>;
};
