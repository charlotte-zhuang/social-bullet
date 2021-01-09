import Template from '../../Components/template.jsx';
import Submenu from '../../Components/submenu.jsx';

function ProjPage() {
    const menuItems = [
		{
			isRoute: false,
			title: 'Back',
			selected: false,
			clicked: () => {console.log('clicked Back')},
		},
		{
			isRoute: false,
			title: 'Leave Project',
			selected: false,
			clicked: () => {console.log('clicked Leave Project')},
        },
        {
			isRoute: false,
			title: 'Edit Project',
			selected: false,
			clicked: () => {console.log('clicked Edit Project')},
		},
	];

	return <Template activePage="" bodyLeft={<>Project Bio</>} bodyCenter={<>Project Info</>} bodyRight={<Submenu menuItems={menuItems} />} />;
}

export default ProjPage;