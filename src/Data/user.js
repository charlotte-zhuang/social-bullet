import { API, graphqlOperation, selectInput } from "aws-amplify";

import { updateUser, createUser } from "../graphql/mutations";
import { userExists, findUser } from "./utility";

import { v4 as uuid } from "uuid";

export default class User {
  static ALPHABETICAL = "alphabetical";
  static MOST_RECENT = "most recent";

  constructor(usernameInput, emailInput, finishAuthenticate) {
    userExists(usernameInput).then((value) => {
      console.log(value);
      if (!value) {
        console.log("Username doesn't exist");
        const userInput = {
          id: uuid(),
          username: usernameInput,
          email: emailInput,
          firstName: "",
          lastName: "",
          imageFilePath: "",
          description: "",
          journal: [],
          projects: [],
          interests: [],
          friends: [],
        };
        API.graphql(graphqlOperation(createUser, { input: userInput })).then(
          (mod) => {
            this.model = mod;
            this.recentlyCreated = true;
            finishAuthenticate(this);
          }
        );
      } else {
        findUser(usernameInput).then((mod) => {
          this.model = mod;
          this.recentlyCreated = false;
          finishAuthenticate(this);
        });
      }
    });
  }

  initialize() {
    //load user info

    if (this.recentlyCreated) {
      this.idData = this.model.data.createUser.id;
      this.usernameData = this.model.data.createUser.username;
      this.emailData = this.model.data.createUser.email;
      this.firstNameData = this.model.data.createUser.firstName;
      this.lastNameData = this.model.data.createUser.lastName;
      this.imageFilePathData = this.model.data.createUser.imageFilePath;
      this.descriptionData = this.model.data.createUser.description;
      this.journalData = this.model.data.createUser.journal;
      this.projectsData = this.model.data.createUser.projects;
      this.interestsData = this.model.data.createUser.interests;
      this.friendsData = this.model.data.createUser.friends;
    } else {
      this.idData = this.model.id;
      this.usernameData = this.model.username;
      this.emailData = this.model.email;
      this.firstNameData = this.model.firstName;
      this.lastNameData = this.model.lastName;
      this.imageFilePathData = this.model.imageFilePath;
      this.descriptionData = this.model.description;
      this.journalData = this.model.journal;
      this.projectsData = this.model.projects;
      this.interestsData = this.model.interests;
      this.friendsData = this.model.friends;
    }
    //this.addJournalEntry("Test body test body testsakfdj");

    this.refreshJournalEntryFeed();
    console.log("Loaded user info ", this.model);
    return this;
  }
  //returns JSON object of user
  async instance() {
    let user = await findUser(this.username);
    return user;
  }
  get userModel() {
    return this.model;
  }
  get id() {
    return this.idData;
  }
  get username() {
    return this.usernameData;
  }
  get email() {
    return this.emailData;
  }
  get firstName() {
    return this.firstNameData;
  }
  get lastName() {
    return this.lastNameData;
  }
  get imageFilePath() {
    return this.imageFilePathData;
  }
  get description() {
    return this.descriptionData;
  }
  get journal() {
    return this.journalData;
  }
  get projects() {
    return this.projectsData;
  }
  get interests() {
    return this.interestsData;
  }
  get friends() {
    return this.friendsData;
  }
  get entryFeed() {
    return this.journalFeed;
  }
  async updateModel(model) {
    delete model.createdAt;
    delete model.updatedAt;
    const req = await API.graphql(
      graphqlOperation(updateUser, { input: model })
    );
    return req.data.updateUser;
  }

  async updateEmail(input) {
    this.emailData = input;
    const model = await this.instance();
    model.email = input;
    return this.updateModel(model);
  }
  async updateFirstName(input) {
    this.firstNameData = input;
    const model = await this.instance();
    model.firstName = input;
    return this.updateModel(model);
  }
  async updateLastName(input) {
    this.lastNameData = input;
    const model = await this.instance();
    model.lastName = input;
    return this.updateModel(model);
  }
  async updateImageFilePath(input) {
    this.imageFilePathData = input;
    const model = await this.instance();
    model.imageFilePath = input;
    return this.updateModel(model);
  }
  async updateDescription(input) {
    this.descriptionData = input;
    const model = await this.instance();
    model.description = input;
    return this.updateModel(model);
  }
  async updateJournal(input) {
    this.journalData = input;
    const model = await this.instance();
    model.journal = input;
    return this.updateModel(model);
  }
  async updateProjects(input) {
    this.projectsData = input;
    const model = await this.instance();
    model.projects = input;
    return this.updateModel(model);
  }
  async updateInterests(input) {
    this.interestsData = input;
    const model = await this.instance();
    model.interests = input;
    return this.updateModel(model);
  }
  async updateFriends(input) {
    this.friendsData = input;
    const model = await this.instance();
    model.friends = input;
    return this.updateModel(model);
  }

  addJournalEntry(body) {
    //let name = this.username;
    let input = {
      body,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    };
    this.journal.push(input);
    this.instance().then((model) => {
      model.journal = [...this.journal];
      return this.updateModel(model);
    });
  }
  async removeJournalEntry(idx) {
    if (idx > -1) {
      this.journalData.splice(idx, 1);
    }
    const model = await this.instance();
    model.journal = [...this.journal];
    return this.updateModel(model);
  }
  async addProject(input) {
    this.projects.push(input);
    const model = await this.instance();
    model.projects = [...this.projects];
    return this.updateModel(model);
  }
  async removeProject(idx) {
    if (idx > -1) {
      this.projects.splice(idx, 1);
    }
    const model = await this.instance();
    model.projects = [...this.projects];
    return this.updateModel(model);
  }
  async addInterest(input) {
    this.interests.push(input);
    const model = await this.instance();
    model.interests = [...this.interests];
    return this.updateModel(model);
  }
  async removeInterest(idx) {
    if (idx > -1) {
      this.interests.splice(idx, 1);
    }
    const model = await this.instance();
    model.interests = [...this.interests];
    return this.updateModel(model);
  }
  async addFriend(user) {
    userExists(user).then((value) => {
      if (value && user.localeCompare(this.username)) {
        this.friends.push(user);
        this.instance().then((model) => {
          model.friends = [...this.friends];
          return this.updateModel(model);
        });
      }
    });
  }
  async removeFriend(username) {
    this.friends.filter((friend) => friend !== username);
    const model = await this.instance();
    model.friends = [...this.friends];
    return this.updateModel(model);
  }

  async refreshJournalEntryFeed() {
    let feed = [...this.journal];
    for (let i = 0; i < this.friends.length; i++) {
      let friend = await findUser(this.friends[i]);
      feed.concat(friend.journal);
    }

    feed.sort((a, b) =>
      new Date(a.updatedAt).getTime() < new Date(b.updatedAt).getTime() ? 1 : -1
    );

    this.journalFeed = feed;
  }
}

function formatDate() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = monthNames[today.getMonth()];
  var yyyy = today.getFullYear();
  var time = today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  today = time + " " + mm + " " + dd + " " + yyyy;
  return today;
}
