import '../CSS/listView.css';
import '../CSS/entry.css';
import '../CSS/settings.css';

function ContrPanel({ contributors }) {
	return (
		<div className="d-flex flex-column contr-panel align-items-center full-height">
			<h3 className="advent-font">Contributers</h3>
			<div className="d-flex flex-column align-items-start full-width">
				{contributors.map((item, key) => (
					<h4 key={key} className={`advent-font panel-text advent-font-sm`}>
						{item.name}
					</h4>
				))}
			</div>
		</div>
	);
}

export default ContrPanel;
