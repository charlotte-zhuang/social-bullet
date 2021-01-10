import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../CSS/project.css';
import '../CSS/profileView.css';

function ProjProgressPanelSection({ project }) {
	return (
		<div className="d-flex flex-column align-items-center full-width">
			<div className="rank-text rank-text-big advent-font text-center">
				{project.status === 'active' ? 'Current' : 'Final'} Rank: <span className="rank-text-i">{project.rank}</span>
			</div>
			<div className="progress-date-container full-width">
				<div className="rank-text proj advent-font start-overlay">Start: {project.start.toLocaleString('default', {
							month: 'short',
							day: 'numeric',
							year: 'numeric',
						})}</div>
				<div className="progress-container">
					<CircularProgressbar
						counterClockwise
						value={project.progress}
						text={`${project.progress}%`}
						styles={buildStyles({
							strokeLinecap: 'round',
							textSize: '36px',
							pathTransitionDuration: 0.5,
							pathColor: 'var(--teal)',
							textColor: 'var(--dark-teal)',
							trailColor: 'var(--tan)',
						})}
					/>
				</div>
				<div className="rank-text proj advent-font end-overlay">{project.status === 'active'
							? 'End: ' + project.end.toLocaleString('default', {
									month: 'short',
									day: 'numeric',
									year: 'numeric',
							  })
							: 'Ended'}</div>
			</div>
		</div>
	);
}

export default ProjProgressPanelSection;
