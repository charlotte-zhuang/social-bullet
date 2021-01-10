import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';
import FriendPanel from '../../Components/friendPanel.jsx';
import MainTiles from '../../Components/mainTiles.jsx';

function JournalFriendsPage(props) {
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
			selected: false,
			url: '/journal-projects',
		},
		{
			isRoute: true,
			title: 'Friends',
			selected: true,
			url: '/journal-friends',
		},
	];

	const friends = [
		{
			name: 'Mal Jones',
			url: '/profile',
			activeTimeAgo: 20,
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

					name: 'Project 1',
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
			activeTimeAgo: 20,
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

					name: 'Project 1 hello',
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
			activeTimeAgo: 20,
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

					name: 'Project 1',
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
			activeTimeAgo: 20,
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

					name: 'Project 1 hello',
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
			activeTimeAgo: 20,
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

					name: 'Project 1',
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
			activeTimeAgo: 20,
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

					name: 'Project 1 hello',
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
			activeTimeAgo: 20,
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

					name: 'Project 1',
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
			activeTimeAgo: 20,
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

					name: 'Project 1 hello',
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
			activeTimeAgo: 20,
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

					name: 'Project 1',
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
			activeTimeAgo: 20,
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

					name: 'Project 1 hello',
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
			activeTimeAgo: 20,
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

					name: 'Project 1',
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
			activeTimeAgo: 20,
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

					name: 'Project 1 hello',
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
			activeTimeAgo: 20,
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

					name: 'Project 1',
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
			activeTimeAgo: 20,
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

					name: 'Project 1 hello',
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
			activeTimeAgo: 20,
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

					name: 'Project 1',
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
			activeTimeAgo: 20,
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

					name: 'Project 1 hello',
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

	return (
		<Template activePage="journal" bodyLeft={<FriendPanel friends={friends} />} bodyCenter={<MainTiles type="friend" tileItems={friends} vScroll />} bodyRight={<Submenu menuItems={menuItems} />} />
	);
}

export default JournalFriendsPage;
