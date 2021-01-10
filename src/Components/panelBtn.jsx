/* eslint-disable jsx-a11y/anchor-is-valid */
import '../CSS/btns.css';

function PanelBtn({ title, clicked }) {
	return (
		<a className="panel-btn mt-auto" onClick={() => clicked(console.log('clicked ' + { title }))}>
			{title}
		</a>
	);
}

export default PanelBtn;