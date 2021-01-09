import { Link } from 'react-router-dom';

/* <NavBtn title="Home" type="nav" selected url="/home"/> */
function NavBtn({ title, type, selected, url }) {
    const getColor = () => {
        if (type === 'nav') return selected ? 'dark-teal' : 'teal';
        if (type === 'submenu') return selected ? 'orange' : 'purple';
    };

    return (<Link className={`nav-btn ${getColor()}`} to={url}>{title}</Link>);
}

export default NavBtn;