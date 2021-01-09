import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function JournalMyProjs() {
	const menuItems = [
		{
			isRoute: true,
			title: 'Profile',
			selected: false,
			url: '/journal-profile',
		},
		{
			isRoute: true,
			title: 'My Entries',
			selected: false,
			url: '/journal-entries',
		},
		{
			isRoute: true,
			title: 'My Projects',
			selected: true,
			url: '/journal-projects',
		},
		{
			isRoute: true,
			title: 'Friends',
			selected: false,
			url: '/journal-friends',
		},
	];

	return <Template activePage="journal" bodyLeft={<>Project List</>} bodyCenter={<>Projects</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default JournalMyProjs;
