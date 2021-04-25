import {Ul, Li, A} from "./styles";
import {Link} from 'react-router-dom';

function Navbar() {
    return (
    <nav>
        <Ul>
            <Li>
                <Link to="/">Home</Link>
            </Li>
            <Li>
                <Link to="/add">Add new flower</Link>
            </Li>
            <Li>
                <Link to="/dashboard">Dashboard</Link>
            </Li>
            <Li>
                <Link to="/about">About</Link>
            </Li>
        </Ul>
    </nav>
    );
}

export default Navbar;
