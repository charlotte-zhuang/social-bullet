import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import MyProjsPanel from '../../Components/myProjsPanel.jsx';
import MyProjsMain from '../../Components/myProjsMain.jsx';

function JournalMyProjs(props) {
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

	const testMembers = [
		{
			name: 'Donald',
			url: '/user/donald',
		},
		{
			name: 'Jerry',
			url: '/user/jerry',
		},
		{
			name: 'April',
			url: '/user/panda',
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
			status: 'active',
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
			status: 'bucket',
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
			status: 'bucket',
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
			status: 'bucket',
			shortDescr: 'from scratch',
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
	];

	return <Template activePage="journal" bodyLeft={<MyProjsPanel projects={projects} />} bodyCenter={<MyProjsMain projects={projects} />} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default JournalMyProjs;
