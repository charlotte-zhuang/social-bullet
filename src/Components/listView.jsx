import ListItem from './listItem';

function ListView({ listItems }) {
	return (
		<div class="d-flex flex-column align-items-start">
			{listItems.map((item, key) => (
				<ListItem key={key} imgSrc={item.imgSrc} text={item.text} url={item.url} />
			))}
		</div>
	);
}

export default ListView;
