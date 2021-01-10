import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import MainList from "../../Components/mainList.jsx";
import MyDayPanel from "../../Components/myDayPanel.jsx";

function HomeProjsPage(props) {
  const menuItems = [
    {
      isRoute: true,
      title: "Entries",
      selected: false,
      url: "/home",
    },
    {
      isRoute: true,
      title: "Projects",
      selected: true,
      url: "/home-projects",
    },
  ];

  const testMembers = [
    {
      imgSrc: "/resources/mallard.jpg",
      name: "Donald",
      url: "/user/donald",
    },
    {
      imgSrc: "/resources/mallard.jpg",
      name: "Jerry",
      url: "/user/jerry",
    },
    {
      imgSrc: "/resources/mallard.jpg",
      name: "April",
      url: "/user/panda",
    },
  ];

  const projects = [
    {
      imgSrc: "/resources/mallard.jpg",
      rank: "2nd",
      name: "Yoga with Yogis",
      status: "active",
      shortDescr: "Hey you! You want to do yoga NAO with yogis! Join us.",
      tasks: [
        "downward facing dog",
        "upward facing dog",
        "leftward facing dog",
      ],
      milestones: ["Day One", "Day Two", "Year Three"],
      start: new Date("December 17, 2020 03:24:00"),
      end: new Date("February 21, 2021 03:24:00"),
      progress: "20",
      url: "/project/yoga",
      members: testMembers,
    },
    {
      imgSrc: "/resources/mallard.jpg",
      rank: "2nd",
      name: "Yoga with Yogis",
      status: "active",
      shortDescr:
        "Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.Hey you! You want to do yoga NAO with yogis! Join us.",
      tasks: [
        "downward facing dog",
        "upward facing dog",
        "leftward facing dog",
      ],
      milestones: ["Day One", "Day Two", "Year Three"],
      start: new Date("December 17, 2020 03:24:00"),
      end: new Date("February 21, 2021 03:24:00"),
      progress: "20",
      url: "/project/yoga",
      members: testMembers,
    },
    {
      imgSrc: "/resources/mallard.jpg",
      rank: "2nd",
      name: "Yoga with Yogis",
      status: "active",
      shortDescr: "Hey you! You want to do yoga NAO with yogis! Join us.",
      tasks: [
        "downward facing dog",
        "upward facing dog",
        "leftward facing dog",
      ],
      milestones: ["Day One", "Day Two", "Year Three"],
      start: new Date("December 17, 2020 03:24:00"),
      end: new Date("February 21, 2021 03:24:00"),
      progress: "20",
      url: "/project/yoga",
      members: testMembers,
    },
    {
      imgSrc: "/resources/mallard.jpg",
      rank: "2nd",
      name: "Yoga with Yogis",
      status: "active",
      shortDescr: "Hey you! You want to do yoga NAO with yogis! Join us.",
      tasks: [
        "downward facing dog",
        "upward facing dog",
        "leftward facing dog",
      ],
      milestones: ["Day One", "Day Two", "Year Three"],
      start: new Date("December 17, 2020 03:24:00"),
      end: new Date("February 21, 2021 03:24:00"),
      progress: "20",
      url: "/project/yoga",
      members: testMembers,
    },
  ];

  const tasks = [
    {
      text: "Yoga",
      imgSrc: "/resources/mallard.jpg",
      url: "/project",
    },
    {
      text: "Yoga",
      imgSrc: "/resources/mallard.jpg",
      url: "/project",
    },
    {
      text: "Yoga",
      imgSrc: "/resources/mallard.jpg",
      url: "/project",
    },
    {
      text: "Yoga",
      imgSrc: "/resources/mallard.jpg",
      url: "/project",
    },
    {
      text: "Yoga",
      imgSrc: "/resources/mallard.jpg",
      url: "/project",
    },
  ];

  return (
    <Template
      activePage="home"
      bodyLeft={<MyDayPanel tasks={tasks} />}
      bodyCenter={<MainList type="project" listItems={projects} />}
      bodyRight={<Submenu menuItems={menuItems} />}
    />
  );
}

export default HomeProjsPage;
