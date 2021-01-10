/* eslint-disable jsx-a11y/anchor-is-valid */
import '../CSS/btns.css';

function PanelBtn({ title, clicked }) {
	return (
		<div className="panel-btn-container mt-auto">
			<a className="panel-btn" onClick={() => clicked(console.log('clicked ' + { title }))}>
				{title}
			</a>
		</div>
	);
}

export default PanelBtn;
