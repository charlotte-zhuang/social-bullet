import TableOfContents from './tableOfContents.jsx';

function PrefPanel({ contents }) {
	return (
		<div className="d-flex flex-column align-items-center full-width full-height">
			<h3 className="advent-font full-width text-center">Settings</h3>
			<TableOfContents contents={contents} />
		</div>
	);
}

export default PrefPanel;
