import Entry from './entry.jsx';

function MainList({ type, listItems }) {
	const processList = () => {
		if (type === 'entry') return listItems.map((item, key) => <Entry key={key} user={item.user} entry={item.entry} taskList={item.taskList} />);
	};
	return <div className="d-flex flex-column align-items-center">{processList()}</div>;
}

export default MainList;
