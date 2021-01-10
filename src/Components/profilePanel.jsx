import IconCard from './iconCard';
import PanelSection from './panelSection';
import Tag from './tag';
import '../CSS/profileView.css';
import IconTiles from './iconTiles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfilePanel({ user }) {
	return (
		<div className="d-flex flex-column align-items-center full-height">
			<div className="full-width prof-img-container">
				<Link className="icon-btn mt-auto front-overlay full-width" to="/edit-entry">
					<FontAwesomeIcon icon="pencil-alt" size="sm" />
				</Link>
				<div className="icon-card-container">
					<IconCard imgSrc={user.imgSrc} size="lg" text={user.name} url={user.url} />
				</div>
			</div>
			<PanelSection title="Bio" body={<p className="advent-font bio-text">{user.bio}</p>} />
			<PanelSection
				title="Interests"
				body={user.interests.map((interest, key) => (
					<Tag title={interest} />
				))}
			/>
			<PanelSection title="Friends" body={<IconTiles arr={user.friends} size="md" />} />
		</div>
	);
}

export default ProfilePanel;
