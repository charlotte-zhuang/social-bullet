/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import "../CSS/navBtn.css";

/* <NavBtn title="Home" type="nav" selected url="/home"/> */ 
/* <NavBtn title="Back" type="submenu" selected clicked={goBack}/> */
function NavBtn({ title, type, selected, url, clicked }) {
	const getColor = () => {
		if (type === 'nav') return selected ? 'dark-teal' : 'teal';
		if (type === 'submenu') return selected ? 'orange' : 'purple';
	};

	if (url)
		return (
			<Link className={`nav-btn ${getColor()}`} to={url}>
				{title}
			</Link>
		);
	if (clicked)
		return (
			<a className={`nav-btn ${getColor()}`} onClick={() => clicked()}>
				{title}
			</a>
		);
	return <></>;
}

export default NavBtn;
