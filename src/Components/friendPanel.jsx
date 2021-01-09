import ListView from './listView';

function FriendPanel({ friends }) {
	return (
		<div className="d-flex flex-column align-items-start">
			<ListView listItems={friends} />
			<div className="mt-auto">Test</div>
		</div>
	);
}

export default FriendPanel;
