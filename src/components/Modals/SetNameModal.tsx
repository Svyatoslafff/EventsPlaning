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
        <Modal
            overlayClassName="modal-bg"
            className="modal"
            isOpen={isOpen}
            contentLabel="Create name"
        >
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <label>
                        <p>Set Name</p>
                        <Field type="text" name="name" />
                    </label>
                    <button type="submit" className="">
                        Confirm
                    </button>
                </Form>
            </Formik>
            <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
    );
}
