import NavBtn from './navBtn';

// menuItems: [{isRoute:True,title,selected,url}]
// menuItems: [{isRoute:False,title,selected,clicked}]
function Submenu({ menuItems }) {
	return (
		<>
			{menuItems.map((item, key) => {
                if (item.isRoute)
                    return < NavBtn key = { key } title = { item.title } type = "submenu" selected = { item.selected } url = { item.url } />;
				return <NavBtn key={key} title={item.title} type="submenu" selected={item.selected} clicked={() => item.clicked()} />;
			})}
		</>
	);
}

export default Submenu;
