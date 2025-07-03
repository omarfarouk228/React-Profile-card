import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<UsersPage />} path="/users"></Route>
        <Route element={<UserDetailPage/>} path="/users/:id"></Route>
      </Routes>
    </div>
  );
}

export default App;
