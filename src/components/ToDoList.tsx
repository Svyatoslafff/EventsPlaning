import type { ToDo, ToDoListProps } from '../types/props';
import DatePicker from 'react-datepicker';
import convertDateToHHmm from '../utils/convertDateToHHmm';
import clsx from 'clsx';

export default function ToDoList({
    todos,
    handleUpdateClick,
    handleDeleteClick,
    handleChange,
    filter,
}: ToDoListProps) {
    todos = todos.filter(el => {
        return el.name.includes(filter);
    });
    return (
        <div>
            <ul className="flex flex-col  justify-center items-center gap-10">
                {todos.length < 1 && (
                    <li>
                        <p>No Tasks...</p>
                    </li>
                )}
                {todos.map(
                    ({
                        id,
                        name,
                        description,
                        importance,
                        date,
                        isCompleted,
                    }: ToDo) => {
                        const newDate = new Date(date.seconds * 1000);
                        const isOutOfTime = new Date() >= newDate;
                        const HHmmDate = convertDateToHHmm(newDate);
                        return (
                            <li
                                className="rounded-xl shadow-xl p-6 w-full"
                                key={id}
                            >
                                <ul className="flex justify-between">
                                    <li className="flex align-middle">
                                        <input
                                            type="checkbox"
                                            onChange={() => handleChange(id)}
                                            checked={isCompleted}
                                        />
                                    </li>
                                    <li>
                                        <h3>Name: {name}</h3>
                                        <p>Description: {description}</p>
                                    </li>
                                    <li>
                                        <p>
                                            Importance:{' '}
                                            <span
                                                className={clsx({
                                                    'text-red-600':
                                                        importance ===
                                                        'critical',
                                                    'text-orange-600':
                                                        importance ===
                                                        'important',
                                                    'text-green-600':
                                                        importance === 'normal',
                                                })}
                                            >
                                                {importance}
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>{HHmmDate}</p>
                                        <DatePicker
                                            startOpen
                                            // showTimeSelect
                                            readOnly
                                            selected={newDate}
                                        />
                                        {isOutOfTime && (
                                            <p className="text-red-600">
                                                You're out of time
                                            </p>
                                        )}
                                    </li>
                                    <li className="flex flex-col gap-2">
                                        <button
                                            className="cursor-pointer h-8 w-20 rounded-2xl bg-blue-500 text-white hover:bg-blue-400 transition-all"
                                            onClick={() =>
                                                handleUpdateClick(id)
                                            }
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="cursor-pointer h-8 w-20 rounded-2xl bg-red-500 text-white hover:bg-red-400 transition-all"
                                            onClick={() =>
                                                handleDeleteClick(id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
}
