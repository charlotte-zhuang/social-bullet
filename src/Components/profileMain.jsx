import MainSection from './mainSection';
import MainTiles from './mainTiles';
import MainList from './mainList';

function ProfileMain({ projects, entries, isCur }) {
	const activeProjs = projects.filter((project) => project.status === 'active');
	const completedProjs = projects.filter((project) => project.status === 'complete');

	return (
		<div className="d-flex flex-column align-items-start full-width">
			<MainSection title="Active Projects" body={<MainTiles type="project" tileItems={activeProjs} />} />
			<MainSection title="Completed Projects" body={<MainTiles type="project" tileItems={completedProjs} />} />
			<MainSection title="Recent Entries" body={<MainList type="entry" listItems={entries} />} />
		</div>
	);
}

export default ProfileMain;
