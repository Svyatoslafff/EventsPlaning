import Modal from 'react-modal';
import type { UpdateTodoModalProps } from '../../types/props';
import { Field, Form, Formik } from 'formik';
import type { TodoUpdateValues } from '../../types/formik';
import DatePicker from 'react-datepicker';

export default function UpdateToDoModal({
    isOpen,
    setIsOpen,
    handleSubmit,
    todo,
    date: { chosenDate, setChosenDate },
}: UpdateTodoModalProps) {
    const initialValues: TodoUpdateValues = {
        ...todo,
        date: chosenDate,
    };
    return (
        <Modal
            overlayClassName="modal-bg"
            className="modal"
            isOpen={isOpen}
            contentLabel="Update ToDo"
        >
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="flex flex-column gap-2.5">
                    <label>
                        <Field type="text" className="border-2" name="name" />
                    </label>
                    <label>
                        <Field
                            type="text"
                            className="border-2"
                            name="description"
                        />
                    </label>

                    <label>
                        <p>Normal</p>
                        <Field
                            className="border-2"
                            type="radio"
                            name="importance"
                            value="normal"
                        />
                    </label>
                    <label>
                        <p>Important</p>
                        <Field
                            className="border-2"
                            type="radio"
                            name="importance"
                            value="important"
                        />
                    </label>
                    <label>
                        <p>Critical</p>
                        <Field
                            className="border-2"
                            type="radio"
                            name="importance"
                            value="critical"
                        />
                    </label>
                    <DatePicker
                        selected={chosenDate}
                        showTimeSelect
                        dateFormat="Pp"
                        onChange={value => {
                            setChosenDate(value as Date);
                        }}
                    />
                    <button type="submit">Update</button>
                </Form>
            </Formik>
            <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
    );
}
