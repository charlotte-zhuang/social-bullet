import '../CSS/listView.css';
import { Link } from 'react-router-dom';

function ListItem({ url, imgSrc, text }) {
	return (
		<Link className="normal-text-link" to={url}>
			<div className="d-flex flex-row align-items-center justify-content-around">
				<div>
					<img src={imgSrc} className="list-img" alt={text}></img>
				</div>
				<div>
					<h4 className="advent-font">{text}</h4>
				</div>
			</div>
		</Link>
	);
}

export default ListItem;
