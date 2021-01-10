import MainSection from './mainSection';
import MainTiles from './mainTiles';
import MainList from './mainList';
import OrderedList from './orderedList';

function ProjMain({ project }) {
	return (
		<div className="d-flex flex-column align-items-start full-width">
			<MainSection title="Project Information" body={<div className="d-flex flex-column align-items-start pr-3 pl-3 expln-text">{project.descr}</div>} />
			<MainSection title="Members" body={<MainTiles type="li" tileItems={project.members} />} />
			<div className="d-flex mt-4 flex-row align-items-start justify-content-around full-width">
				<OrderedList large title="Ranking" listItems={project.rankList.map(({ name }) => name).splice(0, Math.min(project.rankList.length, project.milestones.length, project.tasks.length))} />
				<OrderedList large title="Milestones" listItems={project.milestones} />
				<OrderedList large title="Tasks" listItems={project.tasks} />
			</div>
			<MainSection title="Project Journal" body={<MainList type="entry" listItems={project.entries} />} />
		</div>
	);
}

export default ProjMain;
