import Modal from 'react-modal';
import type { DeleteToDoModalProps } from '../../types/props';
// import type { UpdateTodoModalProps } from '../../types/props';
// import { Field, Form, Formik } from 'formik';
// import type { TodoUpdateValues } from '../../types/formik';
// import DatePicker from 'react-datepicker';

export default function DeleteToDoModal({
    isOpen,
    setIsOpen,
    handleSubmit,
}: DeleteToDoModalProps) {
    return (
        <Modal
            overlayClassName="modal-bg"
            className="modal"
            isOpen={isOpen}
            contentLabel="Delete ToDo"
        >
            <div>
                <h1>Are you sure you want to delete this task?</h1>
                <ul className="flex flex-row">
                    <li>
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                    </li>
                    <li>
                        <button
                            className="bg-red-600 text-white"
                            onClick={handleSubmit}
                        >
                            Delete
                        </button>
                    </li>
                </ul>
            </div>
        </Modal>
    );
}
