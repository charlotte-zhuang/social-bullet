import '../CSS/project.css';

function OrderedList({ title, listItems, large }) {
	return (
		<div className={`d-flex flex-column ${large ? 'lg' : ''}`}>
			<h4 className="advent-font text-center">{title}</h4>
			<ol className="advent-font">
				{listItems.map((elem, key) => (
					<li key={key}>{elem}</li>
				))}
			</ol>
		</div>
	);
}

export default OrderedList;
