import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import ProjPanel from "../../Components/projPanel.jsx";
import ProjMain from "../../Components/projMain.jsx";

function ProjPage(props) {
  console.log(props);
  const menuItems = [
    {
      isRoute: false,
      title: "Back",
      selected: false,
      clicked: () => {
        props.history.goBack();
      },
    },
    {
      isRoute: false,
      title: "Leave Project",
      selected: false,
      clicked: () => {
        console.log("Leave", props.match.params.id);
      },
    },
    {
      isRoute: false,
      title: "Edit Project",
      selected: false,
      clicked: () => {
        props.history.push(`/edit-project/${props.match.params.id}`);
      },
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

  const project = {
    imgSrc: "/resources/mallard.jpg",
    rank: "2nd",
    name: "Yoga with Yogis",
    status: "bucket",
    shortDescr: "Hey you! You want to do yoga NAO with yogis! Join us.",
    interests: ["Cooking", "Fitness"],
    tasks: ["downward facing dog", "upward facing dog", "leftward facing dog"],
    milestones: ["Day One", "Day Two", "Year Three"],
    start: new Date("December 17, 2020 03:24:00"),
    end: new Date("February 21, 2021 03:24:00"),
    progress: "20",
    url: "/project/yoga",
    members: testMembers,
    rankList: testMembers,
    entries: [
      {
        user: {
          url: "/profile",
          imgSrc: "/resources/mallard.jpg",
          name: "Mal Jones",
        },
        entry: {
          date: "Jan 2, 2021",
          text:
            "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
        },
        taskList: [
          {
            text: (
              <p className='advent-font'>
                Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Completed Yoga from <i>2021 Fitness</i> Project{" "}
                <b>[at 7:28 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Challenged Friend 1 to <i>January Cooking</i> Project{" "}
                <b>[at 8:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
        ],
      },
      {
        user: {
          url: "/profile",
          imgSrc: "/resources/mallard.jpg",
          name: "Mal Jones",
        },
        entry: {
          date: "Jan 2, 2021",
          text:
            "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
        },
        taskList: [
          {
            text: (
              <p className='advent-font'>
                Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Completed Yoga from <i>2021 Fitness</i> Project{" "}
                <b>[at 7:28 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Challenged Friend 1 to <i>January Cooking</i> Project{" "}
                <b>[at 8:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
        ],
      },
      {
        user: {
          url: "/profile",
          imgSrc: "/resources/mallard.jpg",
          name: "Mal Jones",
        },
        entry: {
          date: "Jan 2, 2021",
          text:
            "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
        },
        taskList: [
          {
            text: (
              <p className='advent-font'>
                Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Completed Yoga from <i>2021 Fitness</i> Project{" "}
                <b>[at 7:28 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Challenged Friend 1 to <i>January Cooking</i> Project{" "}
                <b>[at 8:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
        ],
      },
      {
        user: {
          url: "/profile",
          imgSrc: "/resources/mallard.jpg",
          name: "Mal Jones",
        },
        entry: {
          date: "Jan 2, 2021",
          text:
            "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
        },
        taskList: [
          {
            text: (
              <p className='advent-font'>
                Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Completed Yoga from <i>2021 Fitness</i> Project{" "}
                <b>[at 7:28 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Challenged Friend 1 to <i>January Cooking</i> Project{" "}
                <b>[at 8:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
        ],
      },
      {
        user: {
          url: "/profile",
          imgSrc: "/resources/mallard.jpg",
          name: "Mal Jones",
        },
        entry: {
          date: "Jan 2, 2021",
          text:
            "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
        },
        taskList: [
          {
            text: (
              <p className='advent-font'>
                Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Completed Yoga from <i>2021 Fitness</i> Project{" "}
                <b>[at 7:28 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
          {
            text: (
              <p className='advent-font'>
                Challenged Friend 1 to <i>January Cooking</i> Project{" "}
                <b>[at 8:00 am]</b>
              </p>
            ),
            imgSrc: "/resources/mallard.jpg",
            url: "/project",
          },
        ],
      },
    ],
    descr: (
      <>
        <p className='advent-font'>
          Project is lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas sodales libero sit amet lacus varius, id tincidunt risus
          posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed
          quam.
        </p>
        <p className='advent-font'>
          Sum dolor sit amet, consectetur adipiscing elit. Maecenas sodales
          libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit
          sem, pulvinar id hendrerit et, malesuada sed quam.
        </p>
        <p className='advent-font'>
          Maecenas sodales libero sit amet lacus varius
        </p>
      </>
    ),
  };

  return (
    <Template
      activePage=''
      bodyLeft={<ProjPanel project={project} />}
      bodyCenter={<ProjMain project={project} />}
      bodyRight={<Submenu menuItems={menuItems} />}
    />
  );
}

export default ProjPage;
