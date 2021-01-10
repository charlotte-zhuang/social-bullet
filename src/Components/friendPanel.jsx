import ListView from './listView';
import PanelBtn from './panelBtn';

function FriendPanel({ friends }) {
	var insertQuery = (username) => {
		console.log(username);
	};
	return (
		<div className="d-flex flex-column align-items-center full-height full-width">
			<ListView listItems={friends} title="Friends" size="md" />
			<PanelBtn title="Add Friend" input clicked={insertQuery} />
		</div>
	);
}

export default FriendPanel;
