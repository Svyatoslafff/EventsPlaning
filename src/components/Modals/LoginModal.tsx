import Modal from 'react-modal';
import { Formik, Form, Field } from 'formik';
import type { LoginModalProps } from '../../types/modals';

const loginStyles = {};

const initialValues = {
    email: '',
    password: '',
};

export default function LoginModal({
    isOpen,
    handleSubmit,
    setIsOpen,
}: LoginModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            // onRequestClose={() => setIsLoginModalOpen(false)}
            contentLabel="Login"
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
