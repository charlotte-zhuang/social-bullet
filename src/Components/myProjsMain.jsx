import MainSection from './mainSection';
import MainTiles from './mainTiles';
import MainList from './mainList';

function MyProjMain({ projects }) {
	const curProjs = projects.filter((proj) => proj.status === 'active');
	const bucketProjs = projects.filter((proj) => proj.status === 'bucket');

	return (
		<div className="d-flex flex-column align-items-start full-width">
			<MainSection title="My Projects" body={<MainList type="project" listItems={curProjs} />} />
			<MainSection title="Bucket List" body={<MainTiles type="project" tileItems={bucketProjs} />} />
		</div>
	);
}

export default MyProjMain;
