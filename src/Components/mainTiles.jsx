import ProjectTile from './projectTile.jsx';
import FriendTile from './friendTile.jsx';
import ContrTile from './contrTile.jsx';
import ListItem from './listItem.jsx';

function MainTiles({ type, tileItems }) {
	const processTiles = () => {
		if (type === 'project') return tileItems.map((item, key) => <ProjectTile project={item} key={key} />);
		if (type === 'friend') return tileItems.map((item, key) => <FriendTile friend={item} key={key} />);
		if (type === 'contributor') return tileItems.map((item, key) => <ContrTile contributor={item} key={key} />);
		if (type === 'li') return tileItems.map((item, key) => <ListItem url={item.url} imgSrc={item.imgSrc} text={item.name} size="md" key={key} />);
	};
	return <div className="d-flex flex-wrap justify-content-around align-items-center full-width">{processTiles()}</div>;
}

export default MainTiles;
