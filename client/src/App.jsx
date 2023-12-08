import styles from './App.module.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Rent from './pages/Rent';
import Lend from './pages/Lend';
import Profile from './pages/Profile';
import LendEdit from './pages/LendEdit';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import UserInfoRoute from './pages/UserInfoRoute';

function App() {
    return (
        <div className={styles.app}>
            <Nav />
            <Routes path='/'>
                <Route idnex element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='rent' element={<Rent />} />
                <Route path='lend' element={<Lend />} />
                <Route path='userinfo/*' element={<UserInfoRoute />}>
                    <Route index element={<Profile />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='lend' element={<LendEdit />} />
                </Route>
                <Route path='sign-up' element={<SignUp />} />
                <Route path='log-in' element={<LogIn />} />
            </Routes>
        </div>
    );
}

export default App;
