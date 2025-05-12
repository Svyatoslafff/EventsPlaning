import { Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className="flex flex-row justify-center">
                <div>Logo</div>
                {/* <div>
                    <ul className="flex flex-row">
                        <li>
                            <a href="">Login</a>
                        </li>
                        <li>
                            <a href="">Register</a>
                        </li>
                    </ul>
                </div> */}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
