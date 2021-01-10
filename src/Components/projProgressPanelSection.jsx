function ProjProgressPanelSection({ project }) {
	return (
		<div className="d-flex flex-column justify-content-center full-width">
			<div className="rank-text advent-font text-center">
				{project.status === 'active' ? 'Current' : 'Final'} Rank: <span className="rank-text-i">{project.rank}</span>
			</div>
		</div>
	);
}

export default ProjProgressPanelSection;
