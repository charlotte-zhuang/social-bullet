import "../CSS/template.css";
import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import NavBtn from "./navBtn.jsx";

/**
 * A page with a title, navbar, and 3 column body.
 *
 * @param {Object} param0 activePage={'home', 'discover', 'journal', 'settings'}
 * @param {String} param0.activePage
 * @param {JSX.Element} param0.bodyLeft
 * @param {JSX.Element} param0.bodyCenter
 * @param {JSX.Element} param0.bodyRight
 */
function Template({ activePage, bodyLeft, bodyCenter, bodyRight }) {
  return (
    <React.Fragment>
      <header className='container-fluid'>
        <div className='row page-top-padding col-12 justify-content-center'>
          <h1>Social Bullet</h1>
        </div>
        <nav className='row col-12 d-flex justify-content-center'>
          <NavBtn
            title='Home'
            type='nav'
            selected={activePage === "home"}
            url='/home'
          />
          <NavBtn
            title='Discover'
            type='nav'
            selected={activePage === "discover"}
            url='/discover'
          />
          <NavBtn
            title='Journal'
            type='nav'
            selected={activePage === "journal"}
            url='/journal'
          />
          <NavBtn
            title='Settings'
            type='nav'
            selected={activePage === "settings"}
            url='/settings'
          />
          <AmplifySignOut
            style={{
              height: "50px",
              width: "200px",
            }}
          />
        </nav>
      </header>
      <div className='container-fluid d-flex justify-content-around'>
        <div className='body-left'>{bodyLeft}</div>
        <div className='body-center'>{bodyCenter}</div>
        <div className='body-right'>{bodyRight}</div>
      </div>
    </React.Fragment>
  );
}

export default Template;
