import React, { Component, useState } from "react";
import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import TableOfContents from "../../Components/tableOfContents";
import Tag from "../../Components/tag";

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
    clicked: () => {
			// todo make update
      console.log("clicked Update");
    },
  },
  {
    isRoute: true,
    title: "Cancel",
    selected: false,
    url: "/profile",
  },
];

class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      bio: props.user.bio,
      interests: props.user.interests,
      inputInterest: "",
    };
  }

  removeInterest = (val) => {
    const interests = [...this.state.interests];
    const index = interests.indexOf(val);
    interests.splice(index, 1);
    this.setState({ interests });
  };

  addInterest = (e) => {
    const input = this.state.inputInterest.trim().toLowerCase();
    if (input.length > 0) {
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

  handleBioChange = (e) => {
    this.setState({ bio: e.target.value });
  };

  notNullString = (str) => (str === null ? "" : str);

  render() {
    const { name, bio, interests, inputInterest } = this.state;
    const {
      notNullString,
      addInterest,
      removeInterest,
      handleInputInterestChange,
      handleNameChange,
      handleBioChange,
    } = this;

    return (
      <Template
        activePage='settings'
        bodyLeft={<TableOfContents contents={contents} />}
        bodyCenter={
          <form className='m-4'>
            <h2 id='personal-info'>Personal Info</h2>
            <div className='form-row m-3'>
              <div className='form-group'>
                <label id='input-name' htmlFor='input-name-field'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='input-name-field'
                  placeholder='Name'
                  onChange={handleNameChange}
                  value={notNullString(name)}
                />
              </div>
            </div>
            <div className='form-row m-3'>
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='input-picture'
                />
                <label className='custom-file-label' htmlFor='input-picture'>
                  Upload new profile image
                </label>
              </div>
            </div>
            <div className='form-row m-3'>
              <div className='form-group full-width'>
                <label id='input-bio' htmlFor='input-bio-field'>
                  Bio
                </label>
                <textarea
                  name='bio'
                  rows='5'
                  className='form-control'
                  id='input-bio-field'
                  placeholder='Bio...'
                  style={{ resize: "none" }}
                  onChange={handleBioChange}
                  value={notNullString(bio)}
                />
              </div>
            </div>
            <div className='form-row m-3'>
              <label id='input-interests' htmlFor='input-interests-field'>
                Interests
              </label>
            </div>
            <div className='form-row m-3'>
              <div className='col-auto'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='input-interests-field'
                    placeholder='New Interest'
                    value={inputInterest}
                    onChange={handleInputInterestChange}
                  />
                </div>
              </div>
              <div className='col-auto'>
                <button
                  className='btn btn-secondary mb-1'
                  htmlFor='input-interests-field'
                  onClick={addInterest}
                >
                  Add
                </button>
              </div>
            </div>
            {interests.length > 0 ? (
              <div className='form-row'>
                <span>Click on an interest to remove</span>
              </div>
            ) : (
              <></>
            )}
            <div className='form-row d-flex flex-wrap'>
              {interests.map((elem, index) => (
                <Tag
                  key={`interest-${index}`}
                  title={elem}
                  onClick={() => removeInterest(elem)}
                />
              ))}
            </div>
          </form>
        }
        bodyRight={<Submenu menuItems={menuItems} />}
      />
    );
  }
}

export default EditProfilePage;
