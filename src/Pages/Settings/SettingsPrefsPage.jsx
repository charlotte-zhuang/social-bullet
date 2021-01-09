import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function SettingsPrefPage() {
	const history = useHistory();

	const signOut = async () => {
		try {
			await Auth.signOut().then(history.go(0));
			const copy = [...menuItems];
			copy[copy.length - 1].title = (
				<>
					<Spinner animation="border" className="d-flex mr-2" /> Signing Out
				</>
			);
			updateMenuItems(copy);
		} catch (error) {
			console.log('Error signing out: ', error);
		}
	};

	const [menuItems, updateMenuItems] = useState([
		{
			isRoute: true,
			title: 'Preferences',
			selected: true,
			url: '/settings',
		},
		{
			isRoute: true,
			title: 'Credits',
			selected: false,
			url: '/settings-credits',
		},
		{
			isRoute: false,
			title: 'Sign Out',
			selected: false,
			clicked: signOut,
		},
	]);

	return <Template activePage="settings" bodyLeft={<>Outline</>} bodyCenter={<>Settings</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default SettingsPrefPage;
