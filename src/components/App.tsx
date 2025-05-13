import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import { getAuth, onAuthStateChanged, type Auth } from 'firebase/auth';
import { app } from '../main';
import { useEffect, useState } from 'react';

function App() {
    const [auth, setAuth] = useState<Auth>(getAuth(app));
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userId, setUserId] = useState<string>('');
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setIsLoggedIn(true);
                setUserId(user.uid);
                if (user.displayName) setUserName(user.displayName);
            } else {
                setIsLoggedIn(false);
            }
        });
        setIsLoading(false);
    }, []);

    if (!isLoading)
        return (
            <Routes>
                <Route
                    path="/"
                    element={
                        <Header
                            auth={auth}
                            setAuth={setAuth}
                            isLoggedIn={isLoggedIn}
                            userName={userName}
                        />
                    }
                >
                    <Route
                        index
                        element={
                            <HomePage
                                auth={auth}
                                isLoggedIn={isLoggedIn}
                                userId={userId}
                            />
                        }
                    />
                </Route>
            </Routes>
        );
}

export default App;
