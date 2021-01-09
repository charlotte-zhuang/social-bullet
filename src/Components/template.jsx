import '../CSS/template.css';
// import { AmplifySignOut } from '@aws-amplify/ui-react';
import NavBtn from './navBtn.jsx';

/**
 * A page with a title, navbar, and 3 column body.
 *
 * @param {Object} param0 activePage={'home', 'discover', 'journal', 'settings'}
 * @param {String} param0.activePage
 * @param {JSX.Element} param0.bodyLeft
 * @param {JSX.Element} param0.bodyCenter
 * @param {JSX.Element} param0.bodyRight
 */
function Template({ activePage, bodyLeft, bodyCenter, bodyRight }) {
	return (
		<div className="container-fluid">
			<header className="row page-top-padding">
				<div className="col-12">
					<div className="justify-content-center">
						<h1 className="advent-font text-center">Social Bullet</h1>
					</div>
					<nav className="d-flex justify-content-center">
						<NavBtn title="Home" type="nav" selected={activePage === 'home'} url="/home" />
						<NavBtn title="Discover" type="nav" selected={activePage === 'discover'} url="/discover" />
						<NavBtn title="Journal" type="nav" selected={activePage === 'journal'} url="/journal" />
						<NavBtn title="Settings" type="nav" selected={activePage === 'settings'} url="/settings" />
						{/* <AmplifySignOut className="nav-btn" /> */}
					</nav>
				</div>
			</header>
			<div className="left-panel"></div>
			<div className="row">
				<div className="col-2">{bodyLeft}</div>
				<div className="col-8">{bodyCenter}</div>
				<div className="col-2">{bodyRight}</div>
			</div>
		</div>
	);
}

export default Template;
