import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function HomeProjsPage() {
	const menuItems = [
		{
			isRoute: true,
			title: 'Entries',
			selected: false,
			url: '/home',
		},
		{
			isRoute: true,
			title: 'Projects',
			selected: true,
			url: '/home-projects',
		},
	];

	return <Template activePage="home" bodyLeft={<>Your Day</>} bodyCenter={<>Projects</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default HomeProjsPage;
