import ProjectTile from './projectTile';

function MainTiles({ type, tileItems }) {
	const processTiles = () => {
		if (type === 'project') return tileItems.map((item, key) => <ProjectTile project={item} key={key} />);
	};
	return <div class="d-flex flex-wrap justify-content-around align-items-center full-width">{processTiles()}</div>;
}

export default MainTiles;
