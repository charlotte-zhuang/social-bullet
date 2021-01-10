import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import FriendPanel from '../../Components/friendPanel.jsx';
import MainList from '../../Components/mainList.jsx';

function HomeEntriesPage(props) {
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

	const friends = [
		{
			name: 'April Chao',
			url: '/profile/chaos21',
		},
		{
			name: 'Charlotte Zhuang',
			url: '/profile/bunbun',
		},
		{
			name: 'Ethan Soo',
			url: '/profile/wingspear',
		},
	];

	const listItems =
		props.user === null
			? []
			: props.user.entryFeed.map((entry) => {
					props.user.url = '/profile/' + props.user.username;
					entry.taskList = [
						{
							text: (
								<p className="advent-font">
									Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
								</p>
							),

							url: '/project',
						},
						{
							text: (
								<p className="advent-font">
									Completed Yoga from <i>2021 Fitness</i> Project <b>[at 7:28 am]</b>
								</p>
							),

							url: '/project',
						},
						{
							text: (
								<p className="advent-font">
									Challenged Friend 1 to <i>January Cooking</i> Project <b>[at 8:00 am]</b>
								</p>
							),

							url: '/project',
						},
					];
					return {
						user: props.user,
						entry,
					};
			  });
	console.log(listItems);
	return (
		<Template
			activePage="home"
			bodyLeft={<FriendPanel friends={friends} user={props.user} />}
			bodyCenter={<MainList type="entry" listItems={listItems} />}
			bodyRight={<Submenu menuItems={menuItems} />}
		/>
	);
}

export default HomeEntriesPage;
