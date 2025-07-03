import { Link } from "react-router-dom";
import './Menu.css';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Menu() {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = (status) => {
        setTheme(status ? 'dark' : 'light');
    }

    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
            <label class="switch">
                <input type="checkbox" value={theme === 'dark'} onChange={(e)=> changeTheme(e.target.checked)} />
                <span class="slider round"></span>
            </label>
        </div>
    );
}

export default Menu;