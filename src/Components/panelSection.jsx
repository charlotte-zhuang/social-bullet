function PanelSection({ title, body }) {
	return (
		<div className="d-flex flex-column full-width align-items-center">
			<h3 className="advent-font">{title}</h3>
			{body}
		</div>
	);
}

export default PanelSection;
