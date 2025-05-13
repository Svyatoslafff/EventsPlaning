import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { nameSchema } from '../validation/auth';
import AuthUI from '../components/AuthUI';
import TodosUI from '../components/TodosUI';
import type { FormikHandleSubmit, SetNameValues } from '../types/formik';
import SetNameModal from '../components/Modals/SetNameModal';
import type { HomePageProps } from '../types/props';

export default function HomePage({ auth, isLoggedIn, userId }: HomePageProps) {
    const [isSetNameModalOpen, setIsSetNameModalOpen] = useState(false);

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
                    setIsSetNameModalOpen(false);
                } catch (err) {
                    console.log(err);
                }
                setIsSetNameModalOpen(false);
            }
        }
        action.resetForm();
    };
    return (
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
                isOpen={isSetNameModalOpen}
                setIsOpen={setIsSetNameModalOpen}
                handleSubmit={handleSetNameSubmit}
            />
        </>
    );
}
