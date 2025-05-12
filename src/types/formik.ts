import type { FormikHelpers } from 'formik';

export type FormikHandleSubmit<T> = (
    values: T,
    actions: FormikHelpers<T>
) => void;

export type SetNameValues = {
    name: string;
};

export type AuthValues = {
    email: string;
    password: string;
};

export type TodoValues = {
    name: string;
    description: string;
    importance: 'normal' | 'important' | 'critical';
    date: Date | null;
};
