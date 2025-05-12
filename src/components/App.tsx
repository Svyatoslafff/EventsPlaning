import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<HomePage />} />
                {/* <Route path="login" element={<Login />} />
                <Route path="register" element={<HomePage />} /> */}
            </Route>
        </Routes>
    );
}

export default App;
