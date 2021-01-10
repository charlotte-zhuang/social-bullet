import React, { useState } from "react";
import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import Editor from "../../Components/editor";
import { useHistory } from "react-router-dom";

function EditEntryPage(props) {
  const [text, setText] = useState("");

  const history = useHistory();

  const menuItems = [
    {
      isRoute: false,
      title: "Submit",
      selected: true,
      clicked: () => {
        console.log("clicked Submit");
        console.log("text display: ", text);

        history.push("/journal-entries");
      },
    },
    {
      isRoute: false,
      title: "Cancel",
      selected: false,
      clicked: () => {
        console.log("clicked Cancel");
        history.push("/journal-entries");
      },
    },
  ];

  return (
    <Template
      activePage="journal"
      bodyLeft={
        <div className="d-flex flex-column">
          <h2 className="text-center">Formatting</h2>
          <h3>Bullets</h3>
          <ul>
            <li className="bullet">bullet *</li>
            <li className="bullet-important">important !</li>
            <li className="bullet-question">question ?</li>
            <li className="bullet-numbered">numbered 1.</li>
          </ul>
          <div
            className="form-check"
            style={{ marginTop: "-15px", paddingLeft: "43px" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" for="defaultCheck1">
              checkbox []
            </label>
          </div>
        </div>
      }
      bodyCenter={<Editor text={text} handleTextChange={setText} />}
      bodyRight={<Submenu menuItems={menuItems} />}
    />
  );
}

export default EditEntryPage;
