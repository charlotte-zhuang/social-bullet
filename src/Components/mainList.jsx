import Entry from './entry.jsx'

function MainList({ type, listItems }) {
    if (type === 'entry')
        return (
            <div className="d-flex flex-column align-items-center">
                {listItems.map((item, key) => (
                    <Entry key={key} user={item.user} entry={item.entry} taskList={item.taskList} />
                ))}
            </div>);
    return;
}

export default MainList;