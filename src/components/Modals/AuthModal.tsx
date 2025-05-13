import Modal from 'react-modal';
import { Formik, Form, Field } from 'formik';
import type { AuthModalProps } from '../../types/props';

const loginStyles = {};

const initialValues = {
    email: '',
    password: '',
};

export default function AuthModal({
    type,
    isOpen,
    handleSubmit,
    setIsOpen,
}: AuthModalProps) {
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
                    {/* {type === 'register' && (
                        <label>
                            <p>Login</p>
                            <Field name="login" />
                        </label>
                    )} */}

                    <label>
                        <p>Email</p>
                        <Field name="email" />
                    </label>

                    <label>
                        <p>Password</p>
                        <Field name="password" />
                    </label>
                    <button type="submit">
                        {type === 'register' ? 'Register' : 'Login'}
                    </button>
                </Form>
            </Formik>
            <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
    );
}
