import type { Dispatch, SetStateAction } from 'react';
import type { FormikHandleSubmit, SetNameValues } from './formik';

interface IModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    // + handleSubmit
}

export type SetNameModalProps = IModalProps & {
    handleSubmit: FormikHandleSubmit<SetNameValues>;
};

export type AuthValues = {
    email: string;
    password: string;
};

export type AuthModalProps = IModalProps & {
    type: 'login' | 'register';
    handleSubmit: FormikHandleSubmit<AuthValues>;
};
