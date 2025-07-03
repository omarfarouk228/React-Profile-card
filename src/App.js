import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';
import Menu from './components/Menu/Menu';
import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        <Menu/>
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<UsersPage />} path="/users"></Route>
          <Route element={<UserDetailPage/>} path="/users/:id"></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
