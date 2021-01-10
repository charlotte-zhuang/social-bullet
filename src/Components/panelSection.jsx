import '../CSS/profileView.css';

function PanelSection({ title, body, indent }) {
	return (
		<div className="d-flex flex-column full-width align-items-start panel-section">
			<h3 className="advent-font">{title}</h3>
			<div className={indent ? 'indent-body' : 'full-width'}>{body}</div>
		</div>
	);
}

export default PanelSection;
