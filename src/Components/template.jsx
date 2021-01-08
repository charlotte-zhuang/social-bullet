import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import '../CSS/template.css';

function Template() {
	return (
		<div class="container-fluid">
			<div class="row page-top-padding">
				<div class="col-12 text-center">
					<h1>Social Bullet</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<AmplifySignOut />
				</div>
			</div>
		</div>
	);
}

export default Template;
