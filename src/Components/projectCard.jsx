import '../CSS/project.css';
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import IconTiles from './iconTiles.jsx';
import ListItem from './listItem.jsx';
import OrderedList from './orderedList';
/**
 * A card to showcase a project.
 *
 * @param {Object} props
 * @param {Object} props.project
 */
export default function ProjectCard({ project }) {
	return (
		<div className="container-fluid project-card">
			<div className="d-flex flex-column">
				<div className="d-flex flex-row">
					<div className="d-flex flex-column full-height max-flex-col align-items-start">
						<div className="d-flex justify-content-between align-items-top full-width">
							<ListItem url={project.url} icon="record-vinyl" imgSrc={project.imgSrc} text={project.name} size="md" />
							<div></div>
							{/* to space out the list item correctly */}
						</div>
						<div className="rank-text advent-font">
							{project.status === 'active' ? 'Current' : 'Final'} Rank: <span className="rank-text-i">{project.rank}</span>
						</div>
						<p className="short-descr advent-font">{project.shortDescr.length <= 300 ? project.shortDescr : project.shortDescr.substring(0, 300) + '...'}</p>
					</div>
					<div className="d-flex flex-column container-fluid rmv-gutters-container">
						<div className="row rmv-gutters">
							<div className="col-4 list-top-padding">
								<OrderedList title="Milestones" listItems={project.milestones} />
							</div>
							<div className="col-4 list-top-padding">
								<OrderedList title="Daily Tasks" listItems={project.tasks} />
							</div>
							<div className="col-4 list-top-padding">
								<div className="d-flex flex-column full-height full-width align-items-center">
									<h4 className="advent-font text-center">Members</h4>
									<IconTiles icon="user-circle" arr={project.members} size="sm" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex flex-row justify-content-between small-text-i advent-font">
					<span>
						{project.start.toLocaleString('default', {
							month: 'short',
							day: 'numeric',
							year: 'numeric',
						})}
					</span>
					<span>Progress</span>
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
				<ProgressBar now={project.progress} />
			</div>
		</div>
	);
}
