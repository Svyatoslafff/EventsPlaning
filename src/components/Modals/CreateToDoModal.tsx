import Modal from 'react-modal';
import type { CreateTodoModalProps } from '../../types/props';
import { Field, Form, Formik } from 'formik';
import type { TodoCreateValues } from '../../types/formik';
import DatePicker from 'react-datepicker';
import CloseButton from '../CloseButton';

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
        isCompleted: false,
    };
    return (
        <Modal
            overlayClassName="modal-bg"
            className="modal"
            isOpen={isOpen}
            contentLabel="Create new ToDo"
        >
            {/* add validation schema to formik */}
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="modal-todo-form">
                    <h1 className="modal-title">Create ToDo</h1>
                    <label className="flex flex-col gap-2">
                        <p>Name</p>
                        <Field
                            type="text"
                            className="border-[1px]"
                            name="name"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <p>Description</p>
                        <Field
                            type="text"
                            className="border-[1px]"
                            name="description"
                        />
                    </label>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="pb-2">Importance</h3>
                            <ul className="flex gap-2 h-full items-center justify-center">
                                <li>
                                    <label className="flex flex-row-reverse gap-1">
                                        <p>Normal</p>
                                        <Field
                                            className="accent-green-400"
                                            type="radio"
                                            name="importance"
                                            value="normal"
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label className="flex flex-row-reverse gap-1">
                                        <p>Important</p>
                                        <Field
                                            className="accent-orange-400"
                                            type="radio"
                                            name="importance"
                                            value="important"
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label className="flex flex-row-reverse gap-1">
                                        <p>Critical</p>
                                        <Field
                                            className="accent-red-500"
                                            type="radio"
                                            name="importance"
                                            value="critical"
                                        />
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="pb-2">Date</h3>
                            <DatePicker
                                className=" outline-0"
                                selected={chosenDate}
                                showTimeSelect
                                dateFormat="Pp"
                                onChange={value => {
                                    setChosenDate(value as Date);
                                }}
                            />
                        </div>
                    </div>
                    <button className="bg-green-500 h-10 w-full" type="submit">
                        Create
                    </button>
                </Form>
            </Formik>
            <CloseButton setIsOpen={setIsOpen} />
        </Modal>
    );
}
