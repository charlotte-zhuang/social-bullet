import "../CSS/listView.css";
import ListItem from "./listItem";

function ListView({ type, listItems, title, size }) {
  return (
    <div className="d-flex flex-column align-items-center full-width">
      {title ? <h3 className="advent-font">{title}</h3> : <></>}
      <div className="d-flex flex-column align-items-start full-width">
        {listItems.map((item, key) => (
          <ListItem
            key={key}
            imgSrc={item.imgSrc}
            text={type === "task" ? item.text : item.name}
            url={item.url}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

export default ListView;
