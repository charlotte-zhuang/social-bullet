import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import ProfilePanel from '../../Components/profilePanel.jsx';
import ProfileMain from '../../Components/profileMain.jsx';

function JournalProfilePage(props) {
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
			rank: '--',
			name: 'Yoga with Yogis',
			status: 'active',
			shortDescr: 'Hey you! You want to do yoga NAO with yogis! Join us.',
			tasks: ['downward facing dog', 'upward facing dog', 'leftward facing dog'],
			milestones: ['Day One', 'Day Two', 'Year Three'],
			start: new Date('December 17, 2020 03:24:00'),
			end: new Date('February 21, 2021 03:24:00'),
			progress: '90',
			url: '/project/yoga-with-yogis',
			members: [
				{
					name: 'Donald',
					url: '/user/donald',
				},
				{
					name: 'Jerry',
					url: '/user/jerry',
				},
				{
					name: 'Zeus',
					url: '/user/zeus',
				},
			],
		},
		{
			rank: '--',
			name: 'January Coding Project',
			status: 'active',
			shortDescr: "Let's get coding!",
			tasks: ['make an app', 'practice APIs', 'make a simple game'],
			milestones: ['Hackathon'],
			start: new Date('January 1, 2021 03:24:00'),
			end: new Date('January 31, 2021 03:24:00'),
			progress: '20',
			url: '/project/january-coding-project',
			members: [
				{
					name: 'Siri',
					url: '/user/siri',
				},
				{
					name: 'Max',
					url: '/user/max',
				},
				{
					name: 'Dev',
					url: '/user/dev',
				},
			],
		},
		{
			rank: '--',
			name: 'Become a Master Baker',
			status: 'complete',
			shortDescr: 'Go from baking noob to baking master',
			tasks: ['bake cupcakes', 'bake brownies', 'bake cookies'],
			milestones: ['bake a 1-tier cake'],
			start: new Date('January 1, 2021 03:24:00'),
			end: new Date('March 31, 2021 03:24:00'),
			progress: '5',
			url: '/project/become-a-master-baker',
			members: [
				{
					name: 'John',
					url: '/user/john',
				},
				{
					name: 'George',
					url: '/user/george',
				},
				{
					name: 'Sabrina',
					url: '/user/sabrina',
				},
			],
		},
		{
			rank: '--',
			name: 'Fly a Plane',
			status: 'active',
			shortDescr: 'I wanna fly',
			tasks: ['downward facing dog', 'upward facing dog', 'leftward facing dog'],
			milestones: ['Day One', 'Day Two', 'Year Three'],
			start: new Date('December 17, 2020 03:24:00'),
			end: new Date('February 21, 2021 03:24:00'),
			progress: '90',
			url: '/project/yoga-with-yogis',
			members: [
				{
					name: 'Donald',
					url: '/user/donald',
				},
				{
					name: 'Jerry',
					url: '/user/jerry',
				},
				{
					name: 'Zeus',
					url: '/user/zeus',
				},
			],
		},
		{
			rank: '--',
			name: 'Stick Shift',
			status: 'active',
			shortDescr: "Driving is fun",
			tasks: ['make an app', 'practice APIs', 'make a simple game'],
			milestones: ['Hackathon'],
			start: new Date('January 1, 2021 03:24:00'),
			end: new Date('January 31, 2021 03:24:00'),
			progress: '20',
			url: '/project/january-coding-project',
			members: [
				{
					name: 'Siri',
					url: '/user/siri',
				},
				{
					name: 'Max',
					url: '/user/max',
				},
				{
					name: 'Dev',
					url: '/user/dev',
				},
			],
		},
		{
			rank: '--',
			name: 'Build a House',
			status: 'complete',
			shortDescr: 'from scratch',
			tasks: ['bake cupcakes', 'bake brownies', 'bake cookies'],
			milestones: ['bake a 1-tier cake'],
			start: new Date('January 1, 2021 03:24:00'),
			end: new Date('March 31, 2021 03:24:00'),
			progress: '15',
			url: '/project/become-a-master-baker',
			members: [
				{
					name: 'John',
					url: '/user/john',
				},
				{
					name: 'George',
					url: '/user/george',
				},
				{
					name: 'Sabrina',
					url: '/user/sabrina',
				},
			],
		},
		{
			rank: '--',
			name: 'Star Wars',
			status: 'complete',
			shortDescr: "Luke..",
			tasks: ['make an app', 'practice APIs', 'make a simple game'],
			milestones: ['Hackathon'],
			start: new Date('January 1, 2021 03:24:00'),
			end: new Date('January 31, 2021 03:24:00'),
			progress: '100',
			url: '/project/january-coding-project',
			members: [
				{
					name: 'Siri',
					url: '/user/siri',
				},
				{
					name: 'Max',
					url: '/user/max',
				},
				{
					name: 'Dev',
					url: '/user/dev',
				},
			],
		},
		{
			rank: '--',
			name: 'Row Boat',
			status: 'complete',
			shortDescr: "Driving is fun",
			tasks: ['make an app', 'practice APIs', 'make a simple game'],
			milestones: ['Hackathon'],
			start: new Date('January 1, 2021 03:24:00'),
			end: new Date('January 31, 2021 03:24:00'),
			progress: '60',
			url: '/project/january-coding-project',
			members: [
				{
					name: 'Siri',
					url: '/user/siri',
				},
				{
					name: 'Max',
					url: '/user/max',
				},
				{
					name: 'Dev',
					url: '/user/dev',
				},
			],
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

	const user = {
		name: 'Jane Dole',
		url: '/profile',
		bio:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut erat vitae quam mattis efficitur. Aliquam accumsan metus eu malesuada venenatis. Integer eu rutrum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis eros ultricies elit dignissim malesuada. Suspendisse aliquam placerat purus sit amet fermentum.',
		interests: ['Cooking', 'Fitness'],
		friends: [
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
		],
	};

	const listItems =
		props.user === null
			? []
			: props.user.journal.map((entry) => {
					return {
						user: props.user,
						entry,
					};
			  });
	return (
		<Template
			activePage="journal"
			bodyLeft={<ProfilePanel user={user} isCur />}
			bodyCenter={<ProfileMain projects={projects} isCur entries={listItems} />}
			bodyRight={<Submenu menuItems={menuItems} />}
		/>
	);
}

export default JournalProfilePage;
