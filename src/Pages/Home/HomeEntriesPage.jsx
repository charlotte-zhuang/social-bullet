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
			name: 'Mal Jones',
			url: '/profile',
		},
		{
			name: 'Mal Jones',
			url: '/profile',
		},
		{
			name: 'Mal Jones',
			url: '/profile',
		},
	];

	const entries = [
		{
			user: {
				url: '/profile',

				name: 'Mal Jones',
			},
			entry: {
				date: 'Jan 2, 2021',
				text:
					'Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.',
			},
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
		},
		{
			user: {
				url: '/profile',

				name: 'Mal Jones',
			},
			entry: {
				date: 'Jan 2, 2021',
				text:
					'Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.',
			},
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
		},
		{
			user: {
				url: '/profile',

				name: 'Mal Jones',
			},
			entry: {
				date: 'Jan 2, 2021',
				text:
					'Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.',
			},
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
		},
		{
			user: {
				url: '/profile',

				name: 'Mal Jones',
			},
			entry: {
				date: 'Jan 2, 2021',
				text:
					'Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.',
			},
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
		},
		{
			user: {
				url: '/profile',

				name: 'Mal Jones',
			},
			entry: {
				date: 'Jan 2, 2021',
				text:
					'Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.',
			},
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
		},
	];
	const listItems =
		props.user === null
			? []
			: props.user.journalEntryFeed().map((entry) => {
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
	return <Template activePage="home" bodyLeft={<FriendPanel friends={friends} />} bodyCenter={<MainList type="entry" listItems={listItems} />} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default HomeEntriesPage;
