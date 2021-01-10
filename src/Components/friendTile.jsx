import '../CSS/profileView.css';
import '../CSS/projectCard.css';
import ListItem from './listItem';
import IconTiles from './iconTiles';

function FriendTile({ friend }) {
	const topThreeProjs = friend.projects.filter((project) => project.status === 'active').splice(0,Math.min(3,friend.projects.length));
	return (
		<div className="d-flex flex-column tile-container tile-container-yellow">
			<p className="small-text-i corner-neg advent-font full-width text-right p-rmv-margin">Active {friend.activeTimeAgo}m ago</p>
			<div className="d-flex justify-content-between align-items-top full-width">
				<ListItem url={friend.url} imgSrc={friend.imgSrc} text={friend.name} size="md" />
				<div></div>
				{/* to space out the list item correctly */}
			</div>
			<h3 className="advent-font d-flex mt-3">Active Projects</h3>
			<IconTiles arr={topThreeProjs} size="sm" />
		</div>
	);
}

export default FriendTile;
