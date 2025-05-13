import Modal from 'react-modal';
import type { SetNameModalProps } from '../../types/props';
import { Field, Form, Formik } from 'formik';

const initialValues = {
    name: '',
};

export default function SetNameModal({
    isOpen,
    setIsOpen,
    handleSubmit,
}: SetNameModalProps) {
    return (
        <Modal isOpen={isOpen} contentLabel="Create name">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <label>
                        <p>Password</p>
                        <Field name="name" />
                    </label>
                    <button type="submit" className="uppercase">
                        Set name
                    </button>
                </Form>
            </Formik>
            <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
    );
}
