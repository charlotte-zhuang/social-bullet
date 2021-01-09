import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import IconList from '../../Components/iconTiles.jsx';

function HomeEntriesPage() {
	const menuItems = [
		{
			isRoute: true,
			title: 'Entries',
			selected: true,
			url: '/home',
		},
		{
			isRoute: true,
			title: 'Projects',
			selected: false,
			url: '/home-projects',
		},
	];

	const iconItems = [
		{
			pictureSource: '/resources/mallard.jpg',
			name: 'Mal Jones',
			url: '/profile',
		},
		{
			pictureSource: '/resources/mallard.jpg',
			name: 'Mal Jones',
			url: '/profile',
		},
		{
			pictureSource: '/resources/mallard.jpg',
			name: 'Mal Jones',
			url: '/profile',
		},
	];

	return <Template activePage="home" bodyLeft={<IconList arr={iconItems} size="sm" />} bodyCenter={<>Entries</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default HomeEntriesPage;
