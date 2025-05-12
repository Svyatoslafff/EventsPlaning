import { Field, Form, Formik } from 'formik';
import type { FormikHandleSubmit, TodoValues } from '../types/formik';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function TodosUI() {
    const [chosenDate, setChosenDate] = useState(new Date());

    const initialValues: TodoValues = {
        name: '',
        description: '',
        importance: 'normal',
        date: chosenDate,
    };

    const handleSubmit: FormikHandleSubmit<TodoValues> = (values, action) => {
        console.log(values);
        action.resetForm();
    };

    return (
        <section>
            <div>
                <h1>Create ToDo</h1>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
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
                        <Calendar
                            onChange={value => {
                                setChosenDate(value as Date);
                            }}
                            value={chosenDate}
                        />
                        {/* In Progress */}
                        <button type="submit">Create</button>
                    </Form>
                </Formik>
            </div>
        </section>
    );
}
