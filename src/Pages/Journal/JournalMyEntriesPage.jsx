import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function JournalMyEntriesPage() {
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
			selected: true,
			url: '/journal-entries',
		},
		{
			isRoute: true,
			title: 'My Projects',
			selected: false,
			url: '/journal-projects',
		},
		{
			isRoute: true,
			title: 'Friends',
			selected: false,
			url: '/journal-friends',
		},
	];

	return <Template activePage="journal" bodyLeft={<>Calendar</>} bodyCenter={<>Entries</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default JournalMyEntriesPage;
