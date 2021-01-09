import '../CSS/iconCard.css';
import { Link } from 'react-router-dom';

/**
 * A clickable thumbnail with a caption.
 *
 * @param {Object} props
 * @param {String} props.imgSrc
 * @param {'sm' | 'md' | 'lg'} props.size
 * @param {String} props.alt
 * @param {String} props.text
 * @param {String} props.url
 */
export default function IconCard({ imgSrc, size, alt = '', text, url }) {
	const cssClass = `iconCard-${size} advent-font`;
	return (
		<Link className="normal-text-link" to={url}>
			<div className={`d-flex flex-column justify-content-center ${cssClass}`}>
				{' '}
				<img src={imgSrc} className={cssClass} alt={alt}></img>
				<h4 className={cssClass}>{text}</h4>
			</div>
		</Link>
	);
}
