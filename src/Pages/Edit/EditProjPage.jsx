import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function EditProjPage() {
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

	return <Template activePage="" bodyLeft={<>Outline</>} bodyCenter={<>Project Settings</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default EditProjPage;
