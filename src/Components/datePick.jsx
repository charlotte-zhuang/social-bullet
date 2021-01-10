import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useState } from 'react';
import MomentUtils from '@date-io/moment';
import '../CSS/inputs.css'

function DatePick() {
	const [selectedDate, handleDateChange] = useState(new Date());
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<DatePicker value={selectedDate} onChange={handleDateChange} className="date-picker-custom"/>
		</MuiPickersUtilsProvider>
	);
}

export default DatePick;
