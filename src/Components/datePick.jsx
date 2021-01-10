import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "../CSS/inputs.css";

function DatePick({ id, selectedDate, handleDateChange }) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        labelFunc={() => {
          return new Date(selectedDate).toLocaleString("default", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        }}
        id={id}
        value={selectedDate}
        onChange={handleDateChange}
        className='date-picker-custom'
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePick;
