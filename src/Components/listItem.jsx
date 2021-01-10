import '../CSS/listView.css';
import '../CSS/entry.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItem({ url, imgSrc, text, size, icon }) {
	//size: sm or md
	if (imgSrc)
		return (
			<Link className="normal-text-link" to={url}>
				<div className="d-flex flex-row align-items-center justify-content-around">
					<img src={imgSrc} className={`list-img-${size}`} alt={text}></img>
					<h4 className={`advent-font panel-text advent-font-${size}`}>{text}</h4>
				</div>
			</Link>
		);
	return (
		<Link className="normal-text-link" to={url}>
			<div className="d-flex flex-row align-items-center justify-content-around">
				<div className={`list-icon-${size}`}>
					<FontAwesomeIcon icon={icon} />
				</div>
				<h4 className={`advent-font panel-text advent-font-${size}`}>{text}</h4>
			</div>
		</Link>
	);
}

export default ListItem;
