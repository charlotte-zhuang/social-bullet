import ListItem from '../Components/listItem';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../CSS/projectCard.css';
import '../CSS/profileView.css';

function ProjectTile({ project }) {
	return (
		<div className="d-flex flex-column tile-container tile-container-green align-content-start">
			<div className="d-flex justify-content-between align-items-top full-width">
				<ListItem url={project.url} imgSrc={project.imgSrc} text={project.name} size="md" />
				<div></div>
				{/* to space out the list item correctly */}
			</div>
			<div className="rank-text advent-font">
				{project.status === 'active' ? 'Current' : 'Final'} Rank: <span className="rank-text-i">{project.rank}</span>
			</div>
			<p className="short-descr advent-font">{project.shortDescr.substring(0, 100)}...</p>
			<div className="d-flex justify-content-between small-dates advent-font">
				<span>
					{project.start.toLocaleString('default', {
						month: 'short',
						day: 'numeric',
						year: 'numeric',
					})}
				</span>
				<span>
					{project.status === 'active'
						? project.end.toLocaleString('default', {
								month: 'short',
								day: 'numeric',
								year: 'numeric',
						  })
						: 'Ended'}
				</span>
			</div>
			<ProgressBar className="mt-auto" now={project.progress} />
		</div>
	);
}

export default ProjectTile;
