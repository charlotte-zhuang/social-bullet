import ListItem from "./listItem.jsx";
import ListView from "./listView.jsx";
import "../CSS/entry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Entry({ user, entry, taskList }) {

  if (user)
    return (
      <div className="d-flex flex-column entry-container align-items-start">
        <div className="d-flex justify-content-between align-items-top full-width">
          <ListItem
            url={user.url}
            icon='user-circle'
            imgSrc={user.imgSrc}
            text={user.username}
            size="sm"
          />
          <span className="advent-font ml-auto"><span className='time-font'>{new Date(entry.updatedAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })}</span> {new Date(entry.updatedAt).toLocaleString('default', {
							month: 'short',
							day: 'numeric',
							year: 'numeric',
						})}</span>
        </div>
        <div
          className="advent-font"
          dangerouslySetInnerHTML={{ __html: entry.body }}
        />
        <div className="indent-width">
          <ListView listItems={taskList} size="sm" type="task" />
        </div>
      </div>
    );
  return (
    <div className="d-flex flex-column entry-container align-items-start">
      <div className="d-flex full-width">
        <span className="advent-font ml-auto">{""}</span>
      </div>
      <div>dangerouslySetInnerHTML={{ __html: "" }}</div>
      <div className="d-flex align-items-bottom indent-width">
        <ListView listItems={taskList} size="sm" type="task" />
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
