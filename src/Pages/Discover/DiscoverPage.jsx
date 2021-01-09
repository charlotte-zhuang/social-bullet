import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function DiscoverPage() {
	const menuItems = [
		{
			isRoute: false,
			title: 'Popular',
			selected: true,
			clicked: () => { console.log('clicked Popular')},
		},
		{
			isRoute: false,
			title: 'Friends',
			selected: false,
			clicked: () => {console.log('clicked Friends')},
		},
		{
			isRoute: false,
			title: 'Interests',
			selected: false,
			clicked: () => {console.log('clicked Interests')},
		},
	];

	return <Template activePage="discover" bodyLeft={<>Your Day</>} bodyCenter={<>Projects</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default DiscoverPage;
