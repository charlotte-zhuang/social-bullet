import DatePick from './datePick';
import PanelBtn from './panelBtn';

function MyEntryPanel() {
	return (
        <div className="d-flex flex-column align-items-center full-height">
            <h3 className="advent-font">Go to</h3>
			<DatePick />
			<PanelBtn
				title="Write Entry"
				clicked={() => {
					console.log('clicked Write Entry');
				}}
			/>
		</div>
	);
}

export default MyEntryPanel;
