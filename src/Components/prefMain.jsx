import { useState, useRef } from 'react';

function PrefMain() {
	const prefForm = useRef(null);

	const [password, changePassword] = useState('mypassword');
	const [toggleGrid, changeToggleGrid] = useState(true);

	const [inputPassword, changeInputPassword] = useState('');

	const handleChangePassword = (e) => {
		const form = prefForm.current;
		const input = form.inputPassword.value;
		changeInputPassword(input);

		e.preventDefault();
	};

	const pushChangePassword = (e) => {
		changePassword(inputPassword);

		e.preventDefault();
	};

	const handleToggleGrid = (e) => {
		changeToggleGrid(!toggleGrid);
	};

	const resetAccount = () => {
		console.log('reset account');
	};

	const deleteAccount = () => {
		console.log('delete account');
	};
	return (
		<form className="m-4" ref={prefForm}>
			<h2 id="general" className="form-section-heading">
				General
			</h2>
			<div className="form-row m-3" id="toggle-grid">
				<div className="col-auto">
					<div className="form-check">
						<input type="checkbox" className="form-check-input" id="input-toggle-grid" onClick={handleToggleGrid} />
						<label className="form-check-label form-label" htmlFor="input-toggle-grid">
							ToggleGrid
						</label>
					</div>
				</div>
			</div>
			<h2 id="account" className="form-section-heading">
				Account
			</h2>
			<div className="form-row m-3" id="change-password">
				<div className="col-auto">
					<div className="form-group">
						<input
							type="text"
							onChange={handleChangePassword}
							className="form-control form-txt-input"
							name="inputPassword"
							id="input-change-password-field"
							placeholder="New Password"
							value={inputPassword}
						/>
					</div>
				</div>
				<div className="col-auto">
					<button className="form-btn secondary mb-1" htmlFor="input-change-password-field" onClick={pushChangePassword}>
						Change
					</button>
				</div>
			</div>
			<div className="form-row m-3">
				<div className="col-auto" id="reset-account">
					<button className="form-btn primary mb-1" htmlFor="input-reset-account-field" onClick={resetAccount}>
						Reset Account
					</button>
				</div>
				<div className="col-auto" id="delete-account">
					<button className="form-btn primary mb-1" htmlFor="input-delete-account-field" onClick={deleteAccount}>
						Delete Account
					</button>
				</div>
			</div>
		</form>
	);
}

export default PrefMain;
