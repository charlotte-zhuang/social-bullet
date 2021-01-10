import ListView from "./listView";
import PanelBtn from "./panelBtn";

function FriendPanel({ friends, user }) {
  return (
    <div className="d-flex flex-column align-items-center full-height">
      <ListView listItems={friends} title="Friends" size="md" />
      <PanelBtn
        title="Add Friend"
        clicked={() => {
          console.log("clicked Find Friends");
        }}
      />
    </div>
  );
}

export default FriendPanel;
