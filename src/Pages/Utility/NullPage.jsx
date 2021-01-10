import Template from '../../Components/template.jsx';

function NullPage() {
	return (
		<Template
			activePage=""
			bodyLeft={<></>}
			bodyCenter={
				<div className="d-flex flex-column p-5 text-center null-container">
					<p className="advent-font null-msg-big">Sorry!</p>
					<p className="advent-font null-msg">This Page doesn't seem to exist yet.</p>
				</div>
			}
			bodyRight={<></>}
		/>
	);
}

export default NullPage;
