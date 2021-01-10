import React, { Component } from "react";
import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import TableOfContents from "../../Components/tableOfContents";
import Tag from "../../Components/tag";

class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.firstName,
      lastName: props.user.lastName,
      bio: props.user.description,
      interests: props.user.interests,
      inputInterest: "",
    };
  }

  removeInterest = (val) => {
    const interests = this.state.interests.filter((elem) => elem !== val);
    this.setState({ interests });
  };

  addInterest = (e) => {
    const input = this.state.inputInterest.trim().toLowerCase();
    if (input.length > 0 && !this.state.interests.includes(input)) {
      const interests = [...this.state.interests, input];
      this.setState({ interests, inputInterest: "" });
    }
    e.preventDefault();
  };

  handleInputInterestChange = (e) => {
    this.setState({ inputInterest: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };

  handleBioChange = (e) => {
    this.setState({ bio: e.target.value });
  };

  handleSubmit = async () => {
    const { user } = this.props;
    const model = await user.instance();
    model.firstName = this.state.name;
    model.lastName = this.state.lastName;
    model.description = this.state.bio;
    model.interests = this.state.interests;
    await user.updateModel(model);
    this.props.setUser(user);
  };

  notNullString = (str) => (str === null ? "" : str);

  render() {
    const { name, lastName, bio, interests, inputInterest } = this.state;
    const {
      notNullString,
      addInterest,
      removeInterest,
      handleInputInterestChange,
      handleNameChange,
      handleLastNameChange,
      handleBioChange,
      handleSubmit,
    } = this;

    const contents = [
      {
        text: "Personal Info",
        indent: 0,
        id: "personal-info",
      },
      {
        text: "Name",
        indent: 1,
        id: "input-name",
      },
      {
        text: "Picture",
        indent: 1,
        id: "input-picture",
      },
      {
        text: "Bio",
        indent: 1,
        id: "input-bio",
      },
      {
        text: "Interests",
        indent: 1,
        id: "input-interests",
      },
    ];

    const menuItems = [
      {
        isRoute: true,
        title: "Update",
        selected: true,
        url: "/profile",
        clicked: handleSubmit,
      },
      {
        isRoute: true,
        title: "Cancel",
        selected: false,
        url: "/profile",
      },
    ];

    return (
      <Template
        activePage="journal"
        bodyLeft={<TableOfContents contents={contents} />}
        bodyCenter={
          <form className="m-4">
            <h2 id="personal-info" className="form-section-heading">
              Personal Info
            </h2>
            <div className="form-row m-3 form-label">Name</div>
            <div className="form-row m-3">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control form-txt-input"
                  id="input-name-field"
                  placeholder="First name"
                  onChange={handleNameChange}
                  value={notNullString(name)}
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control form-txt-input"
                  id="input-lastname-field"
                  placeholder="Last name"
                  onChange={handleLastNameChange}
                  value={notNullString(lastName)}
                />
              </div>
            </div>
            <div className="form-row m-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="input-picture"
                />
                <label
                  className="custom-file-label form-label"
                  htmlFor="input-picture"
                >
                  Upload new profile image
                </label>
              </div>
            </div>
            <div className="form-row m-3">
              <div className="form-group full-width">
                <label
                  className="form-label"
                  id="input-bio"
                  htmlFor="input-bio-field"
                >
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows="5"
                  className="form-control"
                  id="input-bio-field"
                  placeholder="Bio..."
                  style={{ resize: "none" }}
                  onChange={handleBioChange}
                  value={notNullString(bio)}
                />
              </div>
            </div>
            <div className="form-row m-3">
              <label
                id="input-interests"
                className="form-label"
                htmlFor="input-interests-field"
              >
                Interests
              </label>
            </div>
            <div className="form-row m-3">
              <div className="col-auto">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-txt-input"
                    id="input-interests-field"
                    placeholder="New Interest"
                    value={inputInterest}
                    onChange={handleInputInterestChange}
                  />
                </div>
              </div>
              <div className="col-auto">
                <button
                  className="form-btn secondary mb-1"
                  htmlFor="input-interests-field"
                  onClick={addInterest}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="m-3">
              {interests.length > 0 ? (
                <div className="form-row">
                  <span>Click on an interest to remove</span>
                </div>
              ) : (
                <></>
              )}
              <div className="form-row d-flex flex-wrap">
                {interests.map((elem, index) => (
                  <Tag
                    key={`interest-${index}`}
                    title={elem}
                    onClick={() => removeInterest(elem)}
                  />
                ))}
              </div>
            </div>
          </form>
        }
        bodyRight={<Submenu menuItems={menuItems} />}
      />
    );
  }
}

export default EditProfilePage;
