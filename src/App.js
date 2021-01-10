import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeEntriesPage from './Pages/Home/HomeEntriesPage.jsx';
import HomeProjsPage from './Pages/Home/HomeProjsPage.jsx';
import DiscoverPage from './Pages/Discover/DiscoverPage.jsx';
import JournalProfilePage from './Pages/Journal/JournalProfilePage.jsx';
import JournalMyEntriesPage from './Pages/Journal/JournalMyEntriesPage.jsx';
import JournalMyProjsPage from './Pages/Journal/JournalMyProjsPage.jsx';
import JournalFriendsPage from './Pages/Journal/JournalFriendsPage.jsx';
import SettingsPrefsPage from './Pages/Settings/SettingsPrefsPage.jsx';
import SettingsCreditsPage from './Pages/Settings/SettingsCreditsPage.jsx';
import ProfilePage from './Pages/Utility/ProfilePage.jsx';
import ProjPage from './Pages/Utility/ProjPage.jsx';
import NullPage from './Pages/Utility/NullPage.jsx';
import EditProfilePage from './Pages/Edit/EditProfilePage.jsx';
import EditProjPage from './Pages/Edit/EditProjPage.jsx';
import EditEntryPage from './Pages/Edit/EditEntryPage.jsx';
import './App.css';
import './CSS/inputs.css';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';

import User from './Data/user';

// import all icons here to use in other components
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faUserCircle, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
library.add(faPencilAlt, faUserCircle, faRecordVinyl);
// to use:
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// <FontAwesomeIcon icon="pencil-alt" size="xs"/>

Amplify.configure(awsconfig);

function App() {
	const [user, setUser] = useState(null);

	//authenticate after login or page refreshes
	useEffect(() => {
		authenticate();
	}, []);

	//execute when user state changes
	useEffect(() => {
		console.log('User refresh');
	}, [user]);

	const authenticate = async () => {
		try {
			let user = await Auth.currentAuthenticatedUser();
			let username = user.username;
			let email = user.attributes.email;
			let obj = new User(username, email, finishAuthenticate);
			console.log('user object', obj.model);
		} catch (error) {
			console.log('Issue with authentication', error);
		}
	};

	const finishAuthenticate = (user) => {
		try {
			user.initialize();
			setUser(user);
			console.log('initialized and set ', user);
			user.addJournalEntry('testtest');
		} catch (error) {
			console.log('Issue with finishAuthenticate', error);
		}
	};

	//some test code
	// const click = () => {
	//   user.updateEmail("test@gmail.com").then((user) => {
	//     setUser(user);
	//   });
	// };
	//      <a class="panel-btn mt-auto" onClick={() => click()}>
	//button
	//</a>

	// const testUser = {
	//   firstName: "Guam",
	//   lastName: "Taum",
	//   description: "Heyo",
	//   interests: ["jumping", "jacks", "jumping jacks"],
	// };

	return (
		<>
			<Router>
				<Switch>
					<Redirect from="/" to="/home-entries" exact />
					<Redirect from="/home" to="/home-entries" />
					<Redirect from="/journal" to="/journal-entries" />
					<Redirect from="/settings" to="/settings-preferences" />
					<Route path="/home-entries" component={(props) => <HomeEntriesPage user={user} setUser={setUser} {...props} />} />
					<Route path="/home-projects" component={(props) => <HomeProjsPage user={user} setUser={setUser} {...props} />} />
					<Route path="/discover" component={(props) => <DiscoverPage user={user} setUser={setUser} {...props} />} />
					<Route path="/journal-profile" component={(props) => <JournalProfilePage user={user} setUser={setUser} {...props} />} />
					<Route path="/journal-entries" component={(props) => <JournalMyEntriesPage user={user} setUser={setUser} {...props} />} />
					<Route path="/journal-projects" component={(props) => <JournalMyProjsPage user={user} setUser={setUser} {...props} />} />
					<Route path="/journal-friends" component={(props) => <JournalFriendsPage user={user} setUser={setUser} {...props} />} />
					<Route path="/settings-preferences" component={(props) => <SettingsPrefsPage user={user} setUser={setUser} {...props} />} />
					<Route path="/settings-credits" component={(props) => <SettingsCreditsPage user={user} setUser={setUser} {...props} />} />
					<Route path="/profile" component={(props) => <ProfilePage user={user} setUser={setUser} {...props} />} />
					<Route path="/project/:id" render={(props) => <ProjPage user={user} setUser={setUser} {...props} />} />
					<Route path="/edit-profile" component={(props) => <EditProfilePage user={user} setUser={setUser} {...props} />} />
					<Route path="/edit-project/:id" render={({ match }) => <EditProjPage user={user} setUser={setUser} id={match.params.id} />} />
					<Route path="/edit-entry" component={(props) => <EditEntryPage user={user} setUser={setUser} {...props} />} />
					<Route component={(props) => <NullPage user={user} setUser={setUser} {...props} />} />
				</Switch>
			</Router>
		</>
	);
}

export default withAuthenticator(App);
