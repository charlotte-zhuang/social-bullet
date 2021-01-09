import '../CSS/listView.css';
import ListItem from './listItem';

function ListView({ listItems, title, size }) {
	return (
		<div className="d-flex flex-column align-items-center full-width">
			<h3 className="advent-font">{title}</h3>
			<div className="d-flex flex-column align-items-start full-width">
				{listItems.map((item, key) => (
					<ListItem key={key} imgSrc={item.imgSrc} text={item.text} url={item.url} size={size} />
				))}
			</div>
		</div>
	);
}

export default ListView;
