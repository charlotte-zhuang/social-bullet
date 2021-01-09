import ListItem from './listItem.jsx';
import ListView from './listView.jsx';
import '../CSS/entry.css';

function Entry({ user, entry, taskList }) {
	return (
		<div className="d-flex flex-column entry-container align-items-start">
			<div className="d-flex justify-content-between align-items-top full-width">
				<ListItem url={user.url} imgSrc={user.imgSrc} text={user.name} size="sm" />
				<h5 className="advent-font">{entry.date}</h5>
			</div>
			<p className="advent-font">{entry.text}</p>
			<ListView listItems={taskList} title="" size="sm" />
		</div>
	);
}

export default Entry;
