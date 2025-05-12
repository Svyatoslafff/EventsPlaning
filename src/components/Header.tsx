import { Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className="flex flex-row justify-center items-center h-16 w-screen">
                <div className="font-bold text-3xl">Logo</div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
