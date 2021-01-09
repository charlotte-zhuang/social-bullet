import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function SettingsPrefPage() {
	const menuItems = [
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
	];

	return <Template activePage="settings" bodyLeft={<>Outline</>} bodyCenter={<>Settings</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default SettingsPrefPage;
