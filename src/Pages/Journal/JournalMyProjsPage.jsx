import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import MyProjsPanel from '../../Components/myProjsPanel.jsx';
import MyProjsMain from '../../Components/myProjsMain.jsx';

function JournalMyProjs() {
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
			imgSrc: '/resources/mallard.jpg',
			name: 'Donald',
			url: '/user/donald',
		},
		{
			imgSrc: '/resources/mallard.jpg',
			name: 'Jerry',
			url: '/user/jerry',
		},
		{
			imgSrc: '/resources/mallard.jpg',
			name: 'April',
			url: '/user/panda',
		},
	];

	const projects = [
		{
			imgSrc: '/resources/mallard.jpg',
			rank: '2nd',
			name: 'Yoga with Yogis',
			status: 'bucket',
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
			imgSrc: '/resources/mallard.jpg',
			rank: '2nd',
			name: 'Yoga with Yogis',
			status: 'bucket',
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
			imgSrc: '/resources/mallard.jpg',
			rank: '2nd',
			name: 'Yoga with Yogis',
			status: 'bucket',
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
			imgSrc: '/resources/mallard.jpg',
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
			imgSrc: '/resources/mallard.jpg',
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
			imgSrc: '/resources/mallard.jpg',
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

	return <Template activePage="journal" bodyLeft={<MyProjsPanel projects={projects} />} bodyCenter={<MyProjsMain projects={projects} />} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default JournalMyProjs;
