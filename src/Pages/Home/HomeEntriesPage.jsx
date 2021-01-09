import React from "react";
import Template from "../../Components/template";
import Submenu from '../../Components/submenu.jsx';

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

	return <Template activePage="home" bodyLeft={<>To do</>} bodyCenter={<>Entries</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default HomeEntriesPage;
