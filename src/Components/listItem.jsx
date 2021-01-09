import '../CSS/listView.css';
import '../CSS/entry.css';
import { Link } from 'react-router-dom';

function ListItem({ url, imgSrc, text, size }) {
	//size: sm or md
	return (
		<Link className="normal-text-link" to={url}>
			<div className="d-flex flex-row align-items-center justify-content-around">
				<img src={imgSrc} className={`list-img-${size}`} alt={text}></img>
				<h4 className={`advent-font advent-font-${size}`}>{text}</h4>
			</div>
		</Link>
	);
}

export default ListItem;
