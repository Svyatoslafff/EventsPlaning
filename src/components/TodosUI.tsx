import type {
    FormikHandleSubmit,
    TodoCreateValues,
    TodoUpdateValues,
} from '../types/formik';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
    updateDoc,
    doc,
    deleteDoc,
} from 'firebase/firestore';
import { app } from '../main';
import CreateToDoModal from './Modals/CreateToDoModal';
import ToDoList from './ToDoList';
import type { ToDo } from '../types/props';
import UpdateToDoModal from './Modals/UpdateToDoModal';
import DeleteToDoModal from './Modals/DeleteToDoModal';
import SortAndFilters from './SortAndFilters';
import SearchBar from './SearchBar';

export default function TodosUI({ userId }: { userId: string }) {
    const db = getFirestore(app);
    const todosCollection = collection(db, 'todos');
    const getTodosQuery = query(todosCollection, where('userId', '==', userId));

    const [isCreateToDoModalOpen, setIsCreateToDoModalOpen] =
        useState<boolean>(false);
    const [isUpdateToDoModalOpen, setIsUpdateToDoModalOpen] =
        useState<boolean>(false);
    const [isDeleteToDoModalOpen, setIsDeleteToDoModalOpen] = useState(false);
    const [toDoId, setToDoId] = useState<string>('');
    const [toDoToUpdate, setToDoToUpdate] = useState<ToDo>({
        id: '',
        name: '',
        description: '',
        importance: 'normal',
        date: { seconds: 0 },
        userId: '',
        isCompleted: false,
    });
    const [chosenDate, setChosenDate] = useState(new Date());
    const [todos, setTodos] = useState<ToDo[]>([]);
    const [filter, setFilter] = useState<string>('');

    async function handleIsCompletedSubmit(id: string) {
        try {
            const todoIndex = todos.findIndex(todo => todo.id === id);
            if (todoIndex === -1) return;

            const updatedTodos = [...todos];
            updatedTodos[todoIndex] = {
                ...updatedTodos[todoIndex],
                isCompleted: !updatedTodos[todoIndex].isCompleted, // Перемикаємо стан
            };

            setTodos(updatedTodos);

            const todoRef = doc(db, 'todos', id);
            await updateDoc(todoRef, {
                isCompleted: updatedTodos[todoIndex].isCompleted,
            });

            getTodos();
        } catch (err) {
            throw new Error((err as Error).message);
        }
    }

    function handleUpdateClick(id: string) {
        setToDoId(id);
        const todo = todos.find(todo => todo.id === id);

        if (!todo) throw new Error('ToDo not Found');
        setChosenDate(new Date(todo.date.seconds * 1000));
        setToDoToUpdate(todo);
        setIsUpdateToDoModalOpen(true);
    }
    const handleUpdateToDoSubmit: FormikHandleSubmit<TodoUpdateValues> = async (
        values,
        action
    ) => {
        try {
            const todoRef = doc(db, 'todos', toDoId);
            const data = await updateDoc(todoRef, {
                ...values,
                date: chosenDate,
            });
            console.log(data);
        } catch (err) {
            throw new Error((err as Error).message);
        }
        action.resetForm();
        setIsUpdateToDoModalOpen(false);
        getTodos();
    };

    function handleDeleteClick(id: string) {
        setIsDeleteToDoModalOpen(true);
        setToDoId(id);
    }

    async function handleDeleteSubmit() {
        const todoRef = doc(db, 'todos', toDoId);
        try {
            await deleteDoc(todoRef);
        } catch (err) {
            throw new Error((err as Error).message);
        }
        setIsDeleteToDoModalOpen(false);
        getTodos();
    }

    const handleCreateToDoSubmit: FormikHandleSubmit<TodoCreateValues> = async (
        values,
        action
    ) => {
        values.date = chosenDate;
        values.isCompleted = false;
        console.log(values);
        const docRef = await addDoc(todosCollection, values);
        console.log(docRef);
        action.resetForm();
        setIsCreateToDoModalOpen(false);
        getTodos();
    };

    async function getTodos() {
        const data = await getDocs(getTodosQuery);
        const todosTemp: ToDo[] = [];
        data.forEach(doc => {
            todosTemp.push({ id: doc.id, ...doc.data() } as ToDo);
        });
        setTodos(todosTemp);
    }
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <section>
            <div className="flex flex-col gap-5">
                <button
                    className="w-full h-10 bg-green-500 rounded-xl text-white font-bold text-4xl"
                    type="button"
                    onClick={() => setIsCreateToDoModalOpen(true)}
                >
                    Create New Todo
                </button>
                <SearchBar filter={filter} setFilter={setFilter} />
                <SortAndFilters />
                <ToDoList
                    todos={todos}
                    handleUpdateClick={handleUpdateClick}
                    handleDeleteClick={handleDeleteClick}
                    handleChange={handleIsCompletedSubmit}
                    filter={filter}
                />
                <CreateToDoModal
                    isOpen={isCreateToDoModalOpen}
                    setIsOpen={setIsCreateToDoModalOpen}
                    handleSubmit={handleCreateToDoSubmit}
                    userId={userId}
                    date={{ chosenDate, setChosenDate }}
                />
                <UpdateToDoModal
                    isOpen={isUpdateToDoModalOpen}
                    setIsOpen={setIsUpdateToDoModalOpen}
                    handleSubmit={handleUpdateToDoSubmit}
                    todo={toDoToUpdate}
                    date={{ chosenDate, setChosenDate }}
                />
                <DeleteToDoModal
                    isOpen={isDeleteToDoModalOpen}
                    setIsOpen={setIsDeleteToDoModalOpen}
                    handleSubmit={handleDeleteSubmit}
                />
            </div>
        </section>
    );
}
