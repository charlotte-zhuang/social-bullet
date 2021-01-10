import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useState } from "react";
import MomentUtils from "@date-io/moment";
import "../CSS/inputs.css";

function DatePick({ id, selectedDate, handleDateChange }) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        id={id}
        value={selectedDate}
        onChange={handleDateChange}
        className='date-picker-custom'
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePick;
