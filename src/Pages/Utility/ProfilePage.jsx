import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function ProfilePage() {
	const menuItems = [
		{
			isRoute: false,
			title: 'Back',
			selected: false,
			clicked: () => {
				console.log('clicked Back');
			},
		},
		{
			isRoute: false,
			title: 'Add Friend',
			selected: false,
			clicked: () => {
				console.log('clicked Add Friend');
			},
		},
	];

	return <Template activePage="" bodyLeft={<>Profile Bio</>} bodyCenter={<>Profile Info</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default ProfilePage;
