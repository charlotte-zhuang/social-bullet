import '../CSS/template.css';
import NavBtn from './navBtn.jsx';

/**
 * A page with a title, navbar, and 3 column body.
 *
 * @param {Object} props
 * @param {'home' | 'discover' | 'journal' | 'settings'} props.activePage
 * @param {JSX.Element} props.bodyLeft
 * @param {JSX.Element} props.bodyCenter
 * @param {JSX.Element} props.bodyRight
 */
function Template({ activePage, bodyLeft, bodyCenter, bodyRight }) {
	return (
		<div className="template-container">
			<header className="page-top-padding template-header">
				<h1 className="advent-font text-center">Social Bullet</h1>
				<nav className="d-flex justify-content-center">
					<NavBtn title="Home" type="nav" selected={activePage === 'home'} url="/home" />
					<NavBtn title="Discover" type="nav" selected={activePage === 'discover'} url="/discover" />
					<NavBtn title="Journal" type="nav" selected={activePage === 'journal'} url="/journal" />
					<NavBtn title="Settings" type="nav" selected={activePage === 'settings'} url="/settings" />
				</nav>
			</header>
			<div className="d-flex justify-content-around template-body">
				<div className="body-left template-int-body">{bodyLeft}</div>
				<div className="body-center template-int-body">{bodyCenter}</div>
				<div className="body-right">{bodyRight}</div>
			</div>
		</div>
	);
}

export default Template;
