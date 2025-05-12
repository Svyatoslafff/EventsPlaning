import { useEffect, useState } from 'react';
import { getAuth, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { nameSchema } from '../validation/auth';
import { app } from '../main';
import AuthUI from '../components/AuthUI';
import TodosUI from '../components/TodosUI';
import type { FormikHandleSubmit, SetNameValues } from '../types/formik';
import SetNameModal from '../components/Modals/SetNameModal';

export default function HomePage() {
    const auth = getAuth(app);

    const [isSetNameModalOpen, setIsSetNameModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setIsLoggedIn(true);
                setUserId(user.uid);
            }
        });
        setIsLoading(false);
    }, []);

    const handleSetNameSubmit: FormikHandleSubmit<SetNameValues> = async (
        values,
        action
    ) => {
        const { name: displayName } = values;
        const { success } = nameSchema.safeParse(displayName);
        if (success) {
            const user = auth.currentUser;
            if (user) {
                try {
                    const data = await updateProfile(user, { displayName });
                    console.log(data);
                } catch (err) {
                    console.log(err);
                }
            }
        }
        action.resetForm();
    };
    return (
        <>
            {!isLoading ? (
                <>
                    {!isLoggedIn ? (
                        <AuthUI
                            auth={auth}
                            setIsSetNameModalOpen={setIsSetNameModalOpen}
                        />
                    ) : (
                        <TodosUI userId={userId} />
                    )}

                    <SetNameModal
                        // auth={auth}
                        isOpen={isSetNameModalOpen}
                        setIsOpen={setIsSetNameModalOpen}
                        handleSubmit={handleSetNameSubmit}
                    />
                </>
            ) : (
                <div></div>
            )}
        </>
    );
}
