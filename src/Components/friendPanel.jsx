import '../CSS/listView.css';
import ListView from './listView';
import PanelBtn from './panelBtn';

function FriendPanel({ friends }) {
	return (
		<div className="d-flex flex-column align-items-center">
			<ListView listItems={friends} title="Friends" />
			<PanelBtn className="mt-auto" title="Find Friends" />
		</div>
	);
}

export default FriendPanel;
