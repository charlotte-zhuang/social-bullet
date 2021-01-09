import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function EditEntryPage() {
	const menuItems = [
		{
			isRoute: false,
			title: 'Update',
			selected: true,
			clicked: () => {
				console.log('clicked Update');
			},
		},
		{
			isRoute: false,
			title: 'Cancel',
			selected: false,
			clicked: () => {
				console.log('clicked Cancel');
			},
		},
	];

	return <Template activePage="" bodyLeft={<>Outline</>} bodyCenter={<>Textarea</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default EditEntryPage;
