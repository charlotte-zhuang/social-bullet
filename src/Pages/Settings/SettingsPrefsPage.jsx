import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PrefPanel from '../../Components/prefPanel.jsx';
import PrefMain from '../../Components/prefMain.jsx';

function SettingsPrefPage() {
	const history = useHistory();

	const signOut = async () => {
		try {
			await Auth.signOut().then(history.go(0));
			const copy = [...menuItems];
			copy.forEach((item) => (item.selected = false));
			copy[copy.length - 1].title = (
				<>
					<Spinner animation="border" className="d-flex mr-2" /> Signing Out
				</>
			);
			copy[copy.length - 1].selected = true;
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

	const contents = [
		{
			text: "General",
			indent: 0,
			id: "general",
		},
		{
			text: "Toggle Grid",
			indent: 1,
			id: "toggle-grid",
		},
		{
			text: "Account",
			indent: 0,
			id: "account",
		},
		{
			text: "Change Password",
			indent: 1,
			id: "change-password",
		},
		{
			text: "Reset Account",
			indent: 1,
			id: "reset-account",
		},
		{
			text: "Delete Account",
			indent: 1,
			id: "delete-account",
		},
	];

	return <Template activePage="settings" bodyLeft={<PrefPanel contents={contents}/>} bodyCenter={<PrefMain/>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default SettingsPrefPage;
