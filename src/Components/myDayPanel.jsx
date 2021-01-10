import ListView from './listView';
import PanelBtn from './panelBtn';
import { useHistory } from 'react-router-dom';

function MyDayPanel({ tasks }) {
	const history = useHistory();

	return (
		<div className="d-flex flex-column align-items-center full-height pl-3 pr-3">
			<ListView listItems={tasks} title="My Day" size="sm" type="task" />
			<PanelBtn
				title="Go to Projects"
				clicked={() => {
					history.push('/home');
				}}
			/>
		</div>
	);
}

export default MyDayPanel;
