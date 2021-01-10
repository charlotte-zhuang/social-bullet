import "../../CSS/inputs.css";
import React, { Component } from "react";
import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import TableOfContents from "../../Components/tableOfContents";
import Tag from "../../Components/tag";
import DatePick from "../../Components/datePick";

class EditProjPage extends Component {
  constructor(props) {
    super(props);

    const project = {
      name: "Coding",
      blurb: "hahaha",
      tags: ["dead", "insomnia"],
      start: new Date("2020-12-17T03:24:00"),
      finish: new Date("2021-01-10T12:24:00"),
    };

    this.state = {
      name: project.name,
      blurb: project.description,
      tags: project.tags,
      inputTag: "",
      start: project.start,
      finish: project.finish,
    };
  }

  removeTag = (val) => {
    const tags = this.state.tags.filter((elem) => elem !== val);
    this.setState({ tags });
  };

  addTag = (e) => {
    const input = this.state.inputTag.trim().toLowerCase();
    if (input.length > 0 && !this.state.tags.includes(input)) {
      const tags = [...this.state.tags, input];
      this.setState({ tags, inputTag: "" });
    }
    e.preventDefault();
  };

  handleInputTagChange = (e) => {
    this.setState({ inputTag: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleBlurbChange = (e) => {
    this.setState({ blurb: e.target.value });
  };

  handleStartChange = (start) => {
    this.setState({ start: start });
  };

  handleFinishChange = (finish) => {
    this.setState({ finish: finish });
  };

  handleSubmit = async () => {
    console.log("Update project");
  };

  notNullString = (str) => (str === null ? "" : str);

  render() {
    const { name, blurb, tags, inputTag, start, finish } = this.state;
    const {
      notNullString,
      addTag,
      removeTag,
      handleInputTagChange,
      handleNameChange,
      handleBlurbChange,
      handleStartChange,
      handleFinishChange,
      handleSubmit,
    } = this;

    const contents = [
      {
        text: "Project Info",
        indent: 0,
        id: "project-info",
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
        text: "Blurb",
        indent: 1,
        id: "input-blurb",
      },
      {
        text: "Tags",
        indent: 1,
        id: "input-tags",
      },
      {
        text: "Time",
        indent: 0,
        id: "time-header",
      },
      {
        text: "Start & End Date",
        indent: 1,
        id: "start-end-date",
      },
    ];

    const menuItems = [
      {
        isRoute: true,
        title: "Update",
        selected: true,
        url: `/project/${this.props.id}`,
        clicked: handleSubmit,
      },
      {
        isRoute: true,
        title: "Cancel",
        selected: false,
        url: `/project/${this.props.id}`,
      },
    ];

    return (
      <Template
        activePage='journal'
        bodyLeft={<TableOfContents contents={contents} />}
        bodyCenter={
          <form className='m-4'>
            <h2 className='form-section-heading' id='project-info'>
              Project Info
            </h2>
            <div className='form-row m-3'>
              <div className='form-group'>
                <label
                  className='form-label'
                  id='input-name'
                  htmlFor='input-name-field'
                >
                  Project name
                </label>
                <input
                  type='text'
                  className='form-control form-txt-input'
                  id='input-name-field'
                  placeholder='Project name'
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
                <label
                  className='custom-file-label form-label'
                  htmlFor='input-picture'
                >
                  Upload new project icon
                </label>
              </div>
            </div>
            <div className='form-row m-3'>
              <div className='form-group full-width'>
                <label
                  className='form-label'
                  id='input-blurb'
                  htmlFor='input-blurb-field'
                >
                  Blurb
                </label>
                <textarea
                  name='blurb'
                  rows='5'
                  className='form-control form-text-input'
                  id='input-blurb-field'
                  placeholder='Blurb...'
                  style={{ resize: "none" }}
                  onChange={handleBlurbChange}
                  value={notNullString(blurb)}
                />
              </div>
            </div>
            <div className='form-row m-3'>
              <label
                className='form-label'
                id='input-tags'
                htmlFor='input-tags-field'
              >
                Interests
              </label>
            </div>
            <div className='form-row m-3'>
              <div className='col-auto'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-txt-input'
                    id='input-tags-field'
                    placeholder='New tag'
                    value={inputTag}
                    onChange={handleInputTagChange}
                  />
                </div>
              </div>
              <div className='col-auto'>
                <button
                  className='form-btn secondary mb-1'
                  htmlFor='input-tag-field'
                  onClick={addTag}
                >
                  Add
                </button>
              </div>
            </div>
            <div className='m-4'>
              {tags.length > 0 ? (
                <div className='form-row'>
                  <span>Click on a tag to remove</span>
                </div>
              ) : (
                <></>
              )}
              <div className='form-row d-flex flex-wrap'>
                {tags.map((elem, index) => (
                  <Tag
                    key={`project-tag-${index}`}
                    title={elem}
                    onClick={() => removeTag(elem)}
                  />
                ))}
              </div>
            </div>
            <h2 id='time-header' className='form-section-heading'>
              Time
            </h2>
            <div
              id='start-end-time'
              className='form-row justify-content-center m-3'
            >
              <div className='col-4'>
                <label className='form-label m-2' htmlFor='start-date-picker'>
                  Start
                </label>
                <DatePick
                  id='start-date-picker'
                  selectedDate={start}
                  handleDateChange={handleStartChange}
                />
              </div>
              <div className='col-4'>
                <label className='form-label m-2' htmlFor='finish-date-picker'>
                  Finish
                </label>
                <DatePick
                  id='finish-date-picker'
                  selectedDate={finish}
                  handleDateChange={handleFinishChange}
                />
              </div>
            </div>
          </form>
        }
        bodyRight={<Submenu menuItems={menuItems} />}
      />
    );
  }
}

export default EditProjPage;
