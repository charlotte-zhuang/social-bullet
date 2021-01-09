import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function JournalProfilePage() {
	const menuItems = [
		{
			isRoute: true,
			title: 'Profile',
			selected: true,
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

	return <Template activePage="journal" bodyLeft={<>Profile Bio</>} bodyCenter={<>Profile Info</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default JournalProfilePage;
