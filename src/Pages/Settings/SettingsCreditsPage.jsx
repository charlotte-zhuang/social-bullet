import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function SettingsCreditsPage() {
	const menuItems = [
		{
			isRoute: true,
			title: 'Preferences',
			selected: false,
			url: '/settings',
		},
		{
			isRoute: true,
			title: 'Credits',
			selected: true,
			url: '/settings-credits',
		},
	];

	return <Template activePage="settings" bodyLeft={<>Outline</>} bodyCenter={<>Credits</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default SettingsCreditsPage;
