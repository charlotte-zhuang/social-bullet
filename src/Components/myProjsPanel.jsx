import ListView from './listView';
import PanelBtn from './panelBtn';

function MyProjsPanel({ projects }) {
	const curProjs = projects.filter((proj) => proj.status === 'active');
    const bucketProjs = projects.filter((proj) => proj.status === 'bucket');
    
	return (
		<div className="d-flex flex-column align-items-center full-height">
            <ListView listItems={curProjs} title="My Projects" size="md" />
            <div className='p-3'></div>
			<ListView listItems={bucketProjs} title="Bucket List" size="md" />
			<PanelBtn
				title="Create Project"
				clicked={() => {
					console.log('create project');
				}}
			/>
		</div>
	);
}

export default MyProjsPanel;
