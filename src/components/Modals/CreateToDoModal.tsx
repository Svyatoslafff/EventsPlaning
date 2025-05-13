import Modal from 'react-modal';
import type { CreateTodoModalProps } from '../../types/props';
import { Field, Form, Formik } from 'formik';
import type { TodoCreateValues } from '../../types/formik';
import DatePicker from 'react-datepicker';

export default function CreateToDoModal({
    isOpen,
    setIsOpen,
    handleSubmit,
    userId,
    date: { chosenDate, setChosenDate },
}: CreateTodoModalProps) {
    const initialValues: TodoCreateValues = {
        name: '',
        description: '',
        importance: 'normal',
        date: chosenDate,
        userId,
    };
    return (
        <Modal isOpen={isOpen} contentLabel="Create new ToDo">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="flex flex-column gap-2.5">
                    <label>
                        <Field className="border-2" name="name" />
                    </label>
                    <label>
                        <Field className="border-2" name="description" />
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
                    <button type="submit">Create</button>
                </Form>
            </Formik>
            <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
    );
}
