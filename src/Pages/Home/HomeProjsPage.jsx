<<<<<<< HEAD
/** src/Pages/Home/HomeProjsPage.jsx **/
=======
>>>>>>> c0f5d9e37ae35caf5051080ffe7b74e6ae9ab928
import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import ProjectCard from "../../Components/projectCard";

const testMembers = [
  {
    pictureSource: "/resources/mallard.jpg",
    name: "Donald",
    url: "/user/donald",
  },
  {
    pictureSource: "/resources/mallard.jpg",
    name: "Jerry",
    url: "/user/jerry",
  },
  {
    pictureSource: "/resources/mallard.jpg",
    name: "April",
    url: "/user/panda",
  },
];

function HomeProjsPage() {
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

  return (
    <Template
<<<<<<< HEAD
      activePage="home"
=======
      activePage='home'
>>>>>>> c0f5d9e37ae35caf5051080ffe7b74e6ae9ab928
      bodyLeft={<>Your Day</>}
      bodyCenter={
        <ProjectCard
          project={{
            imgSrc: "/resources/mallard.jpg",
            name: "Yoga with Yogis",
            text: "Hey you! You want to do yoga NAO with yogis! Join us.",
            tasks: [
              "downward facing dog",
              "upward facing dog",
              "leftward facing dog",
            ],
            milestones: ["Day One", "Day Two", "Year Three"],
            start: new Date("December 17, 2020 03:24:00"),
            end: new Date("February 21, 2021 03:24:00"),
            url: "/project/yoga",
            members: testMembers,
          }}
        />
      }
      bodyRight={<Submenu menuItems={menuItems} />}
    />
  );
}

export default HomeProjsPage;
