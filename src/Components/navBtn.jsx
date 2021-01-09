import { Link } from 'react-router-dom';

function NavBtn({title}) {
    return (<Link className="nav-btn" to={`/home`}>{title}</Link>);
}

export default NavBtn;