import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import FriendPanel from "../../Components/friendPanel.jsx";
import { AmplifySignOut } from "@aws-amplify/ui-react";

function HomeEntriesPage() {
  const menuItems = [
    {
      isRoute: true,
      title: "Entries",
      selected: true,
      url: "/home",
    },
    {
      isRoute: true,
      title: "Projects",
      selected: false,
      url: "/home-projects",
    },
  ];

  const friends = [
    {
      imgSrc: "/resources/mallard.jpg",
      text: "Mal Jones",
      url: "/profile",
    },
    {
      imgSrc: "/resources/mallard.jpg",
      text: "Mal Jones",
      url: "/profile",
    },
    {
      imgSrc: "/resources/mallard.jpg",
      text: "Mal Jones",
      url: "/profile",
    },
  ];

  return (
    <Template
      activePage="home"
      bodyLeft={<FriendPanel friends={friends} />}
      bodyCenter={<>Entries</>}
      bodyRight={<Submenu menuItems={menuItems} />}
    />
  );
}

export default HomeEntriesPage;
