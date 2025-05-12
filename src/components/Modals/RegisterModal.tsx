import Modal from 'react-modal';
import { Formik, Form, Field } from 'formik';
import type { RegisterModalProps } from '../../types/modals';

const loginStyles = {};

const initialValues = {
    login: '',
    email: '',
    password: '',
};

export default function RegisterModal({
    isOpen,
    setIsOpen,
    handleSubmit,
}: RegisterModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            // onRequestClose={() => setIsLoginModalOpen(false)}
            contentLabel="Register"
            style={loginStyles}
        >
            <h1>Login</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <label>
                        <p>Login</p>
                        <Field name="login" />
                    </label>
                    <label>
                        <p>Email</p>
                        <Field name="email" />
                    </label>
                    <label>
                        <p>Password</p>
                        <Field name="password" />
                    </label>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
            <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
    );
}
