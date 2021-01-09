import "../CSS/template.css";
import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import NavBtn from "./navBtn.jsx";

function Template({ activePage, bodyLeft, bodyCenter, bodyRight }) {
  return (
    <React.Fragment>
      <header className='container-fluid'>
        <div className='row page-top-padding col-12 justify-content-center'>
          <h1>Social Bullet</h1>
        </div>
        <nav className='row col-12 d-flex justify-content-center'>
          <NavBtn title='Home' />
          <NavBtn title='Discover' />
          <NavBtn title='Journal' />
          <NavBtn title='Settings' />
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
