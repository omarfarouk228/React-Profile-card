import { Link } from "react-router-dom";
import './Menu.css';

function Menu() {
    return (<ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
    </ul>);
}

export default Menu;