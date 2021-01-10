import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import ProfilePanel from '../../Components/profilePanel.jsx';
import ProfileMain from '../../Components/profileMain.jsx';

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

	const projects = [
		{
			url: '/project',
			rank: '2nd',
			imgSrc: 'resources/mallard.jpg',
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
			imgSrc: 'resources/mallard.jpg',
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
			imgSrc: 'resources/mallard.jpg',
			name: 'Project 1',
			status: 'complete',
			shortDescr:
				'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
			start: new Date('January 1, 2020'),
			end: new Date('January 31, 2020'),
			progress: 20,
		},
		{
			url: '/project',
			rank: '2nd',
			imgSrc: 'resources/mallard.jpg',
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
			imgSrc: 'resources/mallard.jpg',
			name: 'Project 1',
			status: 'complete',
			shortDescr:
				'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
			start: new Date('January 1, 2020'),
			end: new Date('January 31, 2020'),
			progress: 20,
		},
		{
			url: '/project',
			rank: '2nd',
			imgSrc: 'resources/mallard.jpg',
			name: 'Project 1',
			status: 'complete',
			shortDescr:
				'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
			start: new Date('January 1, 2020'),
			end: new Date('January 31, 2020'),
			progress: 20,
		},
		{
			url: '/project',
			rank: '2nd',
			imgSrc: 'resources/mallard.jpg',
			name: 'Project 1',
			status: 'active',
			shortDescr:
				'This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.This project is about Lorem ipsum dolor sit amet, consectetur adipiscing.',
			start: new Date('January 1, 2021'),
			end: new Date('January 31, 2021'),
			progress: 20,
		},
	];

	const entries = [
		{
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
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Completed Yoga from <i>2021 Fitness</i> Project <b>[at 7:28 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Challenged Friend 1 to <i>January Cooking</i> Project <b>[at 8:00 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
			],
		},
		{
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
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Completed Yoga from <i>2021 Fitness</i> Project <b>[at 7:28 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Challenged Friend 1 to <i>January Cooking</i> Project <b>[at 8:00 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
			],
		},
		{
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
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Completed Yoga from <i>2021 Fitness</i> Project <b>[at 7:28 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Challenged Friend 1 to <i>January Cooking</i> Project <b>[at 8:00 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
			],
		},
		{
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
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Completed Yoga from <i>2021 Fitness</i> Project <b>[at 7:28 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Challenged Friend 1 to <i>January Cooking</i> Project <b>[at 8:00 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
			],
		},
		{
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
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Completed Yoga from <i>2021 Fitness</i> Project <b>[at 7:28 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
				{
					text: (
						<p className="advent-font">
							Challenged Friend 1 to <i>January Cooking</i> Project <b>[at 8:00 am]</b>
						</p>
					),
					imgSrc: '/resources/mallard.jpg',
					url: '/project',
				},
			],
		},
	];

	const user = {
		imgSrc: '/resources/mallard.jpg',
		name: 'Jane Dole',
		url: '/profile',
		bio:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut erat vitae quam mattis efficitur. Aliquam accumsan metus eu malesuada venenatis. Integer eu rutrum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis eros ultricies elit dignissim malesuada. Suspendisse aliquam placerat purus sit amet fermentum.',
		interests: ['Cooking', 'Fitness'],
		friends: [
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
		],
	};

	return <Template activePage="journal" bodyLeft={<ProfilePanel user={user} />} bodyCenter={<ProfileMain projects={projects} entries={entries} />} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default JournalProfilePage;
