import IconCard from './iconCard';
import PanelSection from './panelSection';
import Tag from './tag';
import '../CSS/profileView.css';
import IconTiles from './iconTiles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfilePanel({ user, isCur }) {
	return (
		<div className="d-flex flex-column align-items-center full-height">
			<div className="full-width prof-img-container">
				{isCur ? (
					<Link className="icon-btn mt-auto front-overlay full-width" to="/edit-profile">
						<FontAwesomeIcon icon="pencil-alt" size="sm" />
					</Link>
				) : (
					''
				)}
				<div className="icon-card-container">
					<IconCard icon="user-circle" imgSrc={user.imgSrc} size="lg" text={user.name} url={user.url} />
				</div>
			</div>
			<PanelSection title="Bio" body={<p className="advent-font bio-text p-rmv-margin">{user.bio}</p>} indent />
			<PanelSection
				title="Interests"
				body={
					<div className="d-flex flex-wrap align-items-center">
						{user.interests.map((interest, key) => (
							<Tag key={key} title={interest} />
						))}
					</div>
				}
			/>
			<PanelSection title="Friends" body={<IconTiles icon="user-circle" arr={user.friends} size="sm" />} />
		</div>
	);
}

export default ProfilePanel;
