import type { Dispatch, SetStateAction } from 'react';
import type {
    AuthValues,
    FormikHandleSubmit,
    SetNameValues,
    TodoCreateValues,
    TodoUpdateValues,
} from './formik';
import type { Auth } from 'firebase/auth';

export type clearFunc = () => void;

interface IModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    // + handleSubmit
}

export type SetNameModalProps = IModalProps & {
    handleSubmit: FormikHandleSubmit<SetNameValues>;
};

export type AuthModalProps = IModalProps & {
    type: 'login' | 'register';
    handleSubmit: FormikHandleSubmit<AuthValues>;
};

export type CreateTodoModalProps = IModalProps & {
    handleSubmit: FormikHandleSubmit<TodoCreateValues>;
    userId: string;
    date: { chosenDate: Date; setChosenDate: Dispatch<SetStateAction<Date>> };
};
export type UpdateTodoModalProps = IModalProps & {
    handleSubmit: FormikHandleSubmit<TodoUpdateValues>;
    todo: ToDo;
    date: { chosenDate: Date; setChosenDate: Dispatch<SetStateAction<Date>> };
};

export type ToDo = Omit<TodoCreateValues, 'date'> & {
    id: string;
    date: {
        seconds: number;
    };
};
export type ToDoListProps = {
    todos: ToDo[];
    handleUpdateClick: (id: string) => void;
    handleDeleteClick: (id: string) => void;
    handleChange: (id: string) => void;
    filter: string;
};

export type DeleteToDoModalProps = IModalProps & {
    handleSubmit: clearFunc;
};

export type LogoutModalProps = IModalProps & {
    handleSubmit: clearFunc;
};

export type HeaderProps = {
    auth: Auth;
    setAuth: Dispatch<SetStateAction<Auth>>;
    isLoggedIn: boolean;
    userName: string;
};

export type HomePageProps = {
    auth: Auth;
    isLoggedIn: boolean;
    userId: string;
};

export type SearchBar = {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
};
