import { Outlet } from 'react-router-dom';
import LogoutModal from './Modals/LogoutModal';
import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import type { HeaderProps } from '../types/props';
import { app } from '../main';

export default function Header({
    auth,
    setAuth,
    isLoggedIn,
    userName,
}: HeaderProps) {
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const logout = async () => {
        await signOut(auth);
        setAuth(getAuth(app));
        setIsLogoutModalOpen(false);
    };
    return (
        <>
            <header className="flex flex-row justify-end items-center h-20 w-screen relative p-10">
                <div className="font-bold text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1>Logo</h1>
                </div>
                {isLoggedIn && (
                    <div>
                        {userName && (
                            <div>
                                <h2>Hello, {userName}</h2>
                            </div>
                        )}
                        <div>
                            <button onClick={() => setIsLogoutModalOpen(true)}>
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </header>
            <main className="pl-32 pr-32">
                <Outlet />
            </main>
            <LogoutModal
                isOpen={isLogoutModalOpen}
                setIsOpen={setIsLogoutModalOpen}
                handleSubmit={logout}
            />
        </>
    );
}
