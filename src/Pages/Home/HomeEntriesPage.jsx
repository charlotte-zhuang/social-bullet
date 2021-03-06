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
			url: '/profile/april',
			activeTimeAgo: 2,
			projects: [
				{
					url: '/project',
					rank: '2nd',

					name: 'Coding',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'Baking',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'Badminton',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2020'),
					end: new Date('January 31, 2020'),
					progress: 20,
				},
			],
		},
		{
			name: 'Charlotte Zhuang',
			url: '/profile/charlotte',
			activeTimeAgo: 8,
			projects: [
				{
					url: '/project',
					rank: '2nd',

					name: 'Yoga',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'Stitching',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'hello',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2020'),
					end: new Date('January 31, 2020'),
					progress: 20,
				},
			],
		},
		{
			name: 'Ethan Soo',
			url: '/profile',
			activeTimeAgo: 15,
			projects: [
				{
					url: '/project',
					rank: '2nd',

					name: 'Rocket',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'Auth',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'Game',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2020'),
					end: new Date('January 31, 2020'),
					progress: 20,
				},
			],
		},
		{
			name: 'Hola Dora',
			url: '/profile',
			activeTimeAgo: 20,
			projects: [
				{
					url: '/project',
					rank: '2nd',

					name: 'Hello',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'World',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2020'),
					end: new Date('January 31, 2020'),
					progress: 20,
				},
			],
		},

		{
			name: 'James Bond',
			url: '/profile',
			activeTimeAgo: 50,
			projects: [
				{
					url: '/project',
					rank: '2nd',

					name: 'Architecture',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'Movies',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'Skiing',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2020'),
					end: new Date('January 31, 2020'),
					progress: 20,
				},
			],
		},
		{
			name: 'Mal Jones',
			url: '/profile',
			activeTimeAgo: 200,
			projects: [
				{
					url: '/project',
					rank: '2nd',

					name: 'Project 1',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2021'),
					end: new Date('January 31, 2021'),
					progress: 20,
				},
				{
					url: '/project',
					rank: '2nd',

					name: 'Project 3',
					status: 'active',
					shortDescr:
						'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
					start: new Date('January 1, 2020'),
					end: new Date('January 31, 2020'),
					progress: 20,
				},
			],
		},
	];

	const listItems =
		props.user === null
			? []
			: props.user.entryFeed.map((entry) => {
					// props.user.url = "/profile/" + props.user.username;
					// entry.taskList = [
					// 	{
					// 		text: (
					// 			<p className="advent-font">
					// 				Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
					// 			</p>
					// 		),

					// 		url: '/project',
					// 	},
					// 	{
					// 		text: (
					// 			<p className="advent-font">
					// 				Completed Yoga from <i>2021 Fitness</i> Project <b>[at 7:28 am]</b>
					// 			</p>
					// 		),

					// 		url: '/project',
					// 	},
					// 	{
					// 		text: (
					// 			<p className="advent-font">
					// 				Challenged Friend 1 to <i>January Cooking</i> Project <b>[at 8:00 am]</b>
					// 			</p>
					// 		),

					// 		url: '/project',
					// 	},
					// ];
					return {
						user: props.user,
						entry: {
							taskList: [
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
							],
							body: entry.body,
							updatedAt: entry.updatedAt,
							createdAt: entry.createdAt,
						},
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
