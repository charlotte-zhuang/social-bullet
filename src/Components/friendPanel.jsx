import ListView from "./listView";
import PanelBtn from "./panelBtn";

<<<<<<< HEAD
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
=======
function FriendPanel({ friends }) {
	var insertQuery = (username) => {
		console.log(username);
	};
	return (
		<div className="d-flex flex-column align-items-center full-height full-width">
			<ListView listItems={friends} title="Friends" size="md" />
			<PanelBtn title="Add Friend" input clicked={insertQuery} />
		</div>
	);
>>>>>>> ff50f727ed414608b9d21a43b2044c972f0f6536
}

export default FriendPanel;
