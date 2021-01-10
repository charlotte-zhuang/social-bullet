import '../CSS/iconCard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * A clickable thumbnail with a caption.
 *
 * @param {Object} props
 * @param {String} props.imgSrc
 * @param {'sm' | 'md' | 'lg'} props.size
 * @param {String?} props.alt
 * @param {String} props.text
 * @param {String} props.url
 */
export default function IconCard({ imgSrc, size, alt = '', text, url, subtext, icon }) {
	const processCaption = () => {
		if (subtext)
			return (
				<>
					<h4 className="advent-font sub-text-text full-width text-center">{text}</h4>
					<h4 className="advent-font sub-text full-width text-center">{subtext}</h4>
				</>
			);
		return <h4 className="advent-font full-width text-center">{text}</h4>;
	};

	if (imgSrc)
		return (
			<Link className={`iconCard-${size} img normal-text-link`} to={url}>
				<div className="d-flex flex-column justify-content-center">
					<img src={imgSrc} alt={alt} />
					{processCaption()}
				</div>
			</Link>
		);
	return (
		<Link className={`iconCard-${size} normal-text-link`} to={url}>
			<div className="d-flex flex-column justify-content-center">
				<div className={`iconCard-icon-${size}`}>
					<FontAwesomeIcon icon={icon} />
				</div>
				{processCaption()}
			</div>
		</Link>
	);
}
