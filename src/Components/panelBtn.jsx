/* eslint-disable jsx-a11y/anchor-is-valid */
import '../CSS/btns.css';

function PanelBtn({ title, clicked }) {
	return (
		<a className={`panel-btn`} onClick={() => clicked()}>
			{title}
		</a>
	);
}

export default PanelBtn;
