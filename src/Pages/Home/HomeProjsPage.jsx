import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import MainList from '../../Components/mainList.jsx';
import MyDayPanel from '../../Components/myDayPanel.jsx';

function HomeProjsPage() {
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
			rank: '2nd',
			name: 'Yoga with Yogis',
			status: 'active',
			shortDescr: 'Hey you! You want to do yoga NAO with yogis! Join us.',
			tasks: ['downward facing dog', 'upward facing dog', 'leftward facing dog'],
			milestones: ['Day One', 'Day Two', 'Year Three'],
			start: new Date('December 17, 2020 03:24:00'),
			end: new Date('February 21, 2021 03:24:00'),
			progress: '20',
			url: '/project/yoga',
			members: testMembers,
		},
		{
			rank: '2nd',
			name: 'Yoga with Yogis',
			status: 'active',
			shortDescr:
				'Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.',
			tasks: ['downward facing dog', 'upward facing dog', 'leftward facing dog'],
			milestones: ['Day One', 'Day Two', 'Year Three'],
			start: new Date('December 17, 2020 03:24:00'),
			end: new Date('February 21, 2021 03:24:00'),
			progress: '20',
			url: '/project/yoga',
			members: testMembers,
		},
		{
			rank: '2nd',
			name: 'Yoga with Yogis',
			status: 'active',
			shortDescr: 'Hey you! You want to do yoga NAO with yogis! Join us.',
			tasks: ['downward facing dog', 'upward facing dog', 'leftward facing dog'],
			milestones: ['Day One', 'Day Two', 'Year Three'],
			start: new Date('December 17, 2020 03:24:00'),
			end: new Date('February 21, 2021 03:24:00'),
			progress: '20',
			url: '/project/yoga',
			members: testMembers,
		},
		{
			rank: '2nd',
			name: 'Yoga with Yogis',
			status: 'active',
			shortDescr: 'Hey you! You want to do yoga NAO with yogis! Join us.',
			tasks: ['downward facing dog', 'upward facing dog', 'leftward facing dog'],
			milestones: ['Day One', 'Day Two', 'Year Three'],
			start: new Date('December 17, 2020 03:24:00'),
			end: new Date('February 21, 2021 03:24:00'),
			progress: '20',
			url: '/project/yoga',
			members: testMembers,
		},
	];

	const tasks = [
		{
			text: 'Yoga',

			url: '/project',
		},
		{
			text: 'Yoga',

			url: '/project',
		},
		{
			text: 'Yoga',

			url: '/project',
		},
		{
			text: 'Yoga',

			url: '/project',
		},
		{
			text: 'Yoga',

			url: '/project',
		},
	];

	return <Template activePage="home" bodyLeft={<MyDayPanel tasks={tasks} />} bodyCenter={<MainList type="project" listItems={projects} />} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default HomeProjsPage;
