import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ContrPanel from "../../Components/contrPanel.jsx";
import CreditsMain from "../../Components/creditsMain.jsx";

function SettingsCreditsPage(props) {
  const history = useHistory();

  const signOut = async () => {
    try {
      await Auth.signOut().then(history.go(0));
      const copy = [...menuItems];
      copy.forEach((item) => (item.selected = false));
      copy[copy.length - 1].title = (
        <>
          <Spinner animation="border" className="d-flex mr-2" /> Signing Out
        </>
      );
      copy[copy.length - 1].selected = true;
      updateMenuItems(copy);
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  const [menuItems, updateMenuItems] = useState([
    {
      isRoute: true,
      title: "Preferences",
      selected: false,
      url: "/settings",
    },
    {
      isRoute: true,
      title: "Credits",
      selected: true,
      url: "/settings-credits",
    },
    {
      isRoute: false,
      title: "Sign Out",
      selected: false,
      clicked: signOut,
    },
  ]);

  const contributors = [
    {
      name: "April Chao",
      major: "Computer Science",
      year: 2022,
      url: "/profile",
      bio:
        "Contributor is Lorem ipsum dolor sit amet, consectetur adipiscing rem ipsum dolor sit amet, consectetur adipiscing. rem ipsum dolor sit ametrem ipsum dolor.",
    },
    {
      name: "Charlotte Zhuang",
      major: "Computer Science",
      year: 2022,
      imgSrc: "/resources/mallard.jpg",
      url: "/profile",
      bio:
        "Contributor is Lorem ipsum dolor sit amet, consectetur adipiscing rem ipsum dolor sit amet, consectetur adipiscing. rem ipsum dolor sit ametrem ipsum dolor.",
    },
    {
      name: "Ethan Soo",
      major: "Computer Science",
      year: 2022,
      imgSrc: "/resources/mallard.jpg",
      url: "/profile",
      bio:
        "Contributor is Lorem ipsum dolor sit amet, consectetur adipiscing rem ipsum dolor sit amet, consectetur adipiscing. rem ipsum dolor sit ametrem ipsum dolor.",
    },
  ];

  return (
    <Template
      activePage="settings"
      bodyLeft={<ContrPanel contributors={contributors} />}
      bodyCenter={<CreditsMain contributors={contributors} />}
      bodyRight={<Submenu menuItems={menuItems} />}
    />
  );
}

export default SettingsCreditsPage;
