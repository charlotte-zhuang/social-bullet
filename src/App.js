import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomeEntriesPage from "./Pages/Home/HomeEntriesPage.jsx";
import HomeProjsPage from "./Pages/Home/HomeProjsPage.jsx";
import DiscoverPage from "./Pages/Discover/DiscoverPage.jsx";
import JournalProfilePage from "./Pages/Journal/JournalProfilePage.jsx";
import JournalMyEntriesPage from "./Pages/Journal/JournalMyEntriesPage.jsx";
import JournalMyProjsPage from "./Pages/Journal/JournalMyProjsPage.jsx";
import JournalFriendsPage from "./Pages/Journal/JournalFriendsPage.jsx";
import SettingsPrefsPage from "./Pages/Settings/SettingsPrefsPage.jsx";
import SettingsCreditsPage from "./Pages/Settings/SettingsCreditsPage.jsx";
import LoginPage from "./Pages/Utility/LoginPage.jsx";
import ProfilePage from "./Pages/Utility/ProfilePage.jsx";
import ProjPage from "./Pages/Utility/ProjPage.jsx";
import NullPage from "./Pages/Utility/NullPage.jsx";
import EditProfilePage from "./Pages/Edit/EditProfilePage.jsx";
import EditProjPage from "./Pages/Edit/EditProjPage.jsx";
import EditEntryPage from "./Pages/Edit/EditEntryPage.jsx";
import "./App.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Redirect from="/" to="/home-entries" exact />
            <Redirect from="/home" to="/home-entries" />
            <Redirect from="/journal" to="/journal-entries" />
            <Redirect from="/settings" to="/settings-preferences" />
            <Route path="/home-entries" component={HomeEntriesPage} />
            <Route path="/home-projects" component={HomeProjsPage} />
            <Route path="/discover" component={DiscoverPage} />
            <Route path="/journal-profile" component={JournalProfilePage} />
            <Route path="/journal-entries" component={JournalMyEntriesPage} />
            <Route path="/journal-projects" component={JournalMyProjsPage} />
            <Route path="/journal-friends" component={JournalFriendsPage} />
            <Route path="/settings-preferences" component={SettingsPrefsPage} />
            <Route path="/settings-credits" component={SettingsCreditsPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/project" component={ProjPage} />
            <Route path="/edit-profile" component={EditProfilePage} />
            <Route path="/edit-project" component={EditProjPage} />
            <Route path="/edit-entry" component={EditEntryPage} />
            <Route component={NullPage} />
            <AmplifySignOut />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
