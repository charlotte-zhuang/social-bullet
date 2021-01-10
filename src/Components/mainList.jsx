import Entry from './entry.jsx';
import ProjectCard from './projectCard.jsx';

function MainList({ type, listItems }) {
	const processList = () => {
		if (type === 'entry') return listItems.map((item, key) => <Entry key={key} user={item.user} entry={item.entry} taskList={item.taskList} />);
		if (type === 'project') return listItems.map((item, key) => <ProjectCard key={key} project={item} />);
	};
	return <div className="d-flex flex-column align-items-center">{processList()}</div>;
}

export default MainList;
