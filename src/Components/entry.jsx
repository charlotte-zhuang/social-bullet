import ListItem from './listItem.jsx';
import ListView from './listView.jsx';
import '../CSS/entry.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Entry({ user, entry, taskList }) {
	if (user)
		return (
			<div className="d-flex flex-column entry-container align-items-start">
				<div className="d-flex justify-content-between align-items-top full-width">
					<ListItem url={user.url} imgSrc={user.imgSrc} text={user.name} size="sm" />
					<h5 className="advent-font">{entry.date}</h5>
				</div>
				<p className="advent-font">{entry.text}</p>
				<div className="indent-width">
					<ListView listItems={taskList} title="" size="sm" />
				</div>
			</div>
		);
	return (
		<div className="d-flex flex-column entry-container align-items-start">
			<div className="d-flex full-width">
				<h5 className="advent-font ml-auto">{entry.date}</h5>
			</div>
			<p className="advent-font">{entry.text}</p>
			<div className="d-flex align-items-bottom indent-width">
				<ListView listItems={taskList} title="" size="sm" />
				<div className="d-flex">
					<Link className="icon-btn mt-auto" to="/edit-entry">
						<FontAwesomeIcon icon="pencil-alt" size="xs" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Entry;
