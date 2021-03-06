import React, { useState } from "react";
import Template from "../../Components/template.jsx";
import Submenu from "../../Components/submenu.jsx";
import MainList from "../../Components/mainList.jsx";
import MyEntryPanel from "../../Components/myEntryPanel.jsx";

function JournalMyEntriesPage(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  const menuItems = [
    {
      isRoute: true,
      title: "Profile",
      selected: false,
      url: "/journal-profile",
    },
    {
      isRoute: true,
      title: "My Entries",
      selected: true,
      url: "/journal-entries",
    },
    {
      isRoute: true,
      title: "My Projects",
      selected: false,
      url: "/journal-projects",
    },
    {
      isRoute: true,
      title: "Friends",
      selected: false,
      url: "/journal-friends",
    },
  ];

  const entries = [
    {
      entry: {
        date: "Jan 2, 2021",
        text:
          "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
      },
      taskList: [
        {
          text: (
            <p className="advent-font">
              Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Completed Yoga from <i>2021 Fitness</i> Project{" "}
              <b>[at 7:28 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Challenged Friend 1 to <i>January Cooking</i> Project{" "}
              <b>[at 8:00 am]</b>
            </p>
          ),

          url: "/project",
        },
      ],
    },
    {
      entry: {
        date: "Jan 2, 2021",
        text:
          "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
      },
      taskList: [
        {
          text: (
            <p className="advent-font">
              Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Completed Yoga from <i>2021 Fitness</i> Project{" "}
              <b>[at 7:28 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Challenged Friend 1 to <i>January Cooking</i> Project{" "}
              <b>[at 8:00 am]</b>
            </p>
          ),

          url: "/project",
        },
      ],
    },
    {
      entry: {
        date: "Jan 2, 2021",
        text:
          "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
      },
      taskList: [
        {
          text: (
            <p className="advent-font">
              Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Completed Yoga from <i>2021 Fitness</i> Project{" "}
              <b>[at 7:28 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Challenged Friend 1 to <i>January Cooking</i> Project{" "}
              <b>[at 8:00 am]</b>
            </p>
          ),

          url: "/project",
        },
      ],
    },
    {
      entry: {
        date: "Jan 2, 2021",
        text:
          "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
      },
      taskList: [
        {
          text: (
            <p className="advent-font">
              Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Completed Yoga from <i>2021 Fitness</i> Project{" "}
              <b>[at 7:28 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Challenged Friend 1 to <i>January Cooking</i> Project{" "}
              <b>[at 8:00 am]</b>
            </p>
          ),

          url: "/project",
        },
      ],
    },
    {
      entry: {
        date: "Jan 2, 2021",
        text:
          "Today was lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id hendrerit et, malesuada sed quam.",
      },
      taskList: [
        {
          text: (
            <p className="advent-font">
              Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Completed Yoga from <i>2021 Fitness</i> Project{" "}
              <b>[at 7:28 am]</b>
            </p>
          ),

          url: "/project",
        },
        {
          text: (
            <p className="advent-font">
              Challenged Friend 1 to <i>January Cooking</i> Project{" "}
              <b>[at 8:00 am]</b>
            </p>
          ),

          url: "/project",
        },
      ],
    },
  ];

  const listItems =
    props.user === null
      ? []
      : props.user.entryFeed.map((entry) => {
          // props.user.url = "/profile/" + props.user.username;
          // entry.taskList = [
          // {
          //   text: (
          //     <p className="advent-font">
          //       Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
          //     </p>
          //   ),

          //   url: "/project",
          // },
          // {
          //   text: (
          //     <p className="advent-font">
          //       Completed Yoga from <i>2021 Fitness</i> Project{" "}
          //       <b>[at 7:28 am]</b>
          //     </p>
          //   ),

          //   url: "/project",
          // },
          // {
          //   text: (
          //     <p className="advent-font">
          //       Challenged Friend 1 to <i>January Cooking</i> Project{" "}
          //       <b>[at 8:00 am]</b>
          //     </p>
          //   ),

          //   url: "/project",
          // },
          // ];
          return {
            user: props.user,
            entry: {
              taskList: [
                {
                  text: (
                    <p className="advent-font">
                      Added <i>January Cooking</i> Project <b>[at 7:00 am]</b>
                    </p>
                  ),

                  url: "/project",
                },
                {
                  text: (
                    <p className="advent-font">
                      Completed Yoga from <i>2021 Fitness</i> Project{" "}
                      <b>[at 7:28 am]</b>
                    </p>
                  ),

                  url: "/project",
                },
                {
                  text: (
                    <p className="advent-font">
                      Challenged Friend 1 to <i>January Cooking</i> Project{" "}
                      <b>[at 8:00 am]</b>
                    </p>
                  ),

                  url: "/project",
                },
              ],
              body: entry.body,
              updatedAt: entry.updatedAt,
              createdAt: entry.createdAt,
            },
          };
        });
  return (
    <Template
      activePage="journal"
      bodyLeft={
        <MyEntryPanel
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />
      }
      bodyCenter={<MainList type="entry" listItems={listItems} />}
      bodyRight={<Submenu menuItems={menuItems} />}
    />
  );
}

export default JournalMyEntriesPage;
