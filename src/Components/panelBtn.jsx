/* eslint-disable jsx-a11y/anchor-is-valid */
import '../CSS/btns.css';
import { useState } from 'react';

function PanelBtn({ title, clicked, input }) {
	const [username, changeUsername] = useState('');

	return (
		<div className="panel-btn-container mt-auto">
			{input ? (
				<input
					type="text"
					onChange={(e) => {
						changeUsername(e.target.value);
					}}
					className="form-control form-txt-input panel-input mb-2"
					placeholder="Input a username"
					value={username}
				/>
			) : (
				<></>
			)}
			<a
				className="panel-btn"
				onClick={() => {
					clicked(username);
					if (input) changeUsername('');
				}}
			>
				{title}
			</a>
		</div>
	);
}

export default PanelBtn;
