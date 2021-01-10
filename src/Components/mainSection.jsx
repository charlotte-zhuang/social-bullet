function MainSection({ title, body }) {
	return (
		<div className="d-flex flex-column full-width align-items-center mt-4">
			<h2 className="advent-font">{title}</h2>
			{body}
		</div>
	);
}

export default MainSection;
