import '../CSS/settings.css';
import '../CSS/profileView.css';
import IconCard from './iconCard';

function ContrTile({ contributor }) {
	return (
		<div className="d-flex tile-container tile-container-yellow contr-tile flex-column align-items-center">
			<div className="icon-card-container">
				<IconCard imgSrc={contributor.imgSrc} subtext={contributor.major + ', ' + contributor.year} size="lg" icon='user-circle' text={contributor.name} url={contributor.url} />
			</div>
			<p className="advent-font">{contributor.bio}</p>
		</div>
	);
}

export default ContrTile;
