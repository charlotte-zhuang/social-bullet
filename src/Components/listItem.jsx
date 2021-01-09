import '../CSS/iconCard.css';
import { Link } from 'react-router-dom';

function ListItem({ url, imgSrc, text }) {
	return (
		<Link className="normal-text-link" to={url}>
			<div className="d-flex flex-row align-items-center justify-content-around">
				<img src={imgSrc} className="iconCard-sm" alt={text}></img>
				<h4 className="iconCard-md advent-font">{text}</h4>
			</div>
		</Link>
	);
}

export default ListItem;
