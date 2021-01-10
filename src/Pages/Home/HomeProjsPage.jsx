import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import MainList from '../../Components/mainList.jsx';
import MyDayPanel from '../../Components/myDayPanel.jsx';

function HomeProjsPage(props) {
	const menuItems = [
		{
			isRoute: true,
			title: 'Entries',
			selected: false,
			url: '/home',
		},
		{
			isRoute: true,
			title: 'Projects',
			selected: true,
			url: '/home-projects',
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
	];

	const tasks = [
		{
			text: 'Crossfit',

			url: '/project/fitness',
		},
		{
			text: 'Bake a Cake',

			url: '/project/baking',
		},
		{
			text: 'Build an App',

			url: '/project/coding',
		},
		{
			text: 'Practice Calligraphy',

			url: '/project/art',
		},
		{
			text: 'Study Japanese Verbs',

			url: '/project/japanese',
		},
	];

	return <Template activePage="home" bodyLeft={<MyDayPanel tasks={tasks} />} bodyCenter={<MainList type="project" listItems={projects} />} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default HomeProjsPage;
