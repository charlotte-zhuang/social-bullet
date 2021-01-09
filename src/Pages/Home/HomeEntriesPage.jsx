import React from "react";
import Template from "../../Components/template";

function HomeEntriesPage() {
  return (
    <Template
      activePage='home'
      bodyLeft={<React.Fragment>To do</React.Fragment>}
      bodyCenter={<React.Fragment>Entries</React.Fragment>}
      bodyRight={<React.Fragment>Options</React.Fragment>}
    />
  );
}

export default HomeEntriesPage;
