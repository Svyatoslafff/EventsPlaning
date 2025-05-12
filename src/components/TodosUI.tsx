import { Field, Form, Formik } from 'formik';
import type { FormikHandleSubmit, TodoValues } from '../types/formik';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    getFirestore,
    collection,
    addDoc,
    // getDocs,
    // doc,
    // getDoc,
} from 'firebase/firestore';
import { app } from '../main';

export default function TodosUI({ userId }: { userId: string }) {
    const db = getFirestore(app);
    const eventsCollection = collection(db, 'todos');

    const [chosenDate, setChosenDate] = useState(new Date());

    const initialValues: TodoValues = {
        name: '',
        description: '',
        importance: 'normal',
        date: chosenDate,
        userId,
    };
    console.log(chosenDate);
    const handleSubmit: FormikHandleSubmit<TodoValues> = async (
        values,
        action
    ) => {
        values.date = chosenDate;
        console.log(values);
        const docRef = await addDoc(eventsCollection, values);
        console.log(docRef);
        action.resetForm();
    };

    return (
        <section>
            <div>
                <h1>Create ToDo</h1>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form className="flex flex-column gap-2.5">
                        <label>
                            <Field name="name" />
                        </label>
                        <label>
                            <Field name="description" />
                        </label>

                        <label>
                            <p>Normal</p>
                            <Field
                                type="radio"
                                name="importance"
                                value="normal"
                            />
                        </label>
                        <label>
                            <p>Important</p>
                            <Field
                                type="radio"
                                name="importance"
                                value="important"
                            />
                        </label>
                        <label>
                            <p>Critical</p>
                            <Field
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
                        {/* In Progress */}
                        <button type="submit">Create</button>
                    </Form>
                </Formik>
            </div>
        </section>
    );
}
