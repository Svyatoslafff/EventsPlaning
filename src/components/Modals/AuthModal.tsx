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
            overlayClassName="modal-bg"
            className="modal"
            isOpen={isOpen}
            contentLabel="Login"
            style={loginStyles}
        >
            <h1>Login</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    {/* {type === 'register' && (
                        <label>
                            <p>Login</p>
                            <Field type='text' name="login" />
                        </label>
                    )} */}

                    <label>
                        <p>Email</p>
                        <Field type="text" name="email" />
                    </label>

                    <label>
                        <p>Password</p>
                        <Field type="text" name="password" />
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
