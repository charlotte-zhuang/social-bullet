import { API, graphqlOperation } from "aws-amplify";

import { updateUser, createUser } from "../graphql/mutations";
import { userExists, findUser } from "./utility";

import { v4 as uuid } from "uuid";

export default class User {
  static ALPHABETICAL = "alphabetical";
  static MOST_RECENT = "most recent";

  constructor(usernameInput, emailInput) {
    if (!userExists(usernameInput)) {
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
      API.graphql(graphqlOperation(createUser, { input: userInput })).then(() =>
        console.log("New user has been created in database")
      );
    }
    //load user info
    findUser(usernameInput).then((model) => {
      console.log(model);
      this.idData = model.id;
      this.usernameData = model.username;
      this.emailData = model.email;
      this.firstNameData = model.firstName;
      this.lastNameData = model.lastName;
      this.imageFilePathData = model.imageFilePath;
      this.descriptionData = model.description;
      this.journalData = model.journal;
      this.projectsData = model.projects;
      this.interestsData = model.interests;
      this.friendsData = model.friends;
      console.log("Loaded user info ", model);
    });
  }

  //returns JSON object of user
  async instance() {
    return findUser(this.username);
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

  async addJournalEntry(input) {
    this.journalData.push(input);
    const model = await this.instance();
    model.journal = [...this.journal];
    return this.updateModel(model);
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
    this.projectsData.push(input);
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
  async addFriend(input) {
    this.friends.push(input);
    const model = await this.instance();
    model.friends = [...this.friends];
    return this.updateModel(model);
  }
  async removeFriend(username) {
    this.friends.map((friend, idx) => {
      if (friend.localeCompare(username)) {
        this.friends.splice(idx, 1);
      }
    });
    const model = await this.instance();
    model.friends = [...this.friends];
    return this.updateModel(model);
  }
}
