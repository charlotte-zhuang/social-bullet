import ProjectTile from './projectTile';
import FriendTile from './friendTile';

function MainTiles({ type, tileItems }) {
	const processTiles = () => {
		if (type === 'project') return tileItems.map((item, key) => <ProjectTile project={item} key={key} />);
		if (type === 'friend') return tileItems.map((item, key) => <FriendTile friend={item} key={key} />);
	};
	return <div className="d-flex flex-wrap justify-content-around align-items-center full-width">{processTiles()}</div>;
}

export default MainTiles;
