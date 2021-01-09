import '../CSS/listView.css';
import ListView from './listView';
import PanelBtn from './panelBtn';

function FriendPanel({ friends }) {
	return (
		<div className="d-flex flex-column align-items-center full-height">
			<ListView listItems={friends} title="Friends" />
			<PanelBtn
				title="Find Friends"
				clicked={() => {
					console.log('clicked Find Friends');
				}}
			/>
		</div>
	);
}

export default FriendPanel;
