import DatePick from "./datePick";
import PanelBtn from "./panelBtn";
import { useHistory } from "react-router-dom";

function MyEntryPanel({ selectedDate, handleDateChange }) {
  const history = useHistory();

  return (
    <div className="d-flex flex-column align-items-center full-height">
      <h3 className="advent-font">Go to</h3>
      <DatePick
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <PanelBtn
        title="Write Entry"
        clicked={() => {
          history.push("/edit-entry");
        }}
      />
    </div>
  );
}

export default MyEntryPanel;
