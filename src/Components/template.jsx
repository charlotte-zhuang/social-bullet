import { AmplifySignOut } from '@aws-amplify/ui-react';
import NavBtn from './navBtn.jsx';

function Template() {
	return (
		<div class="container-fluid">
			<div class="row page-top-padding">
				<div class="col-12 text-center">
					<h1>Social Bullet</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-12 d-flex justify-content-center">
					<NavBtn title="Home" />
				</div>
			</div>
			<div class="row page-top-padding">
				<div class="col-12">
					<AmplifySignOut />
				</div>
			</div>
		</div>
	);
}

export default Template;
