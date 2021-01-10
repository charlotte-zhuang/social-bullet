import IconCard from './iconCard';
import PanelSection from './panelSection';
import Tag from './tag';
import '../CSS/profileView.css';
import ProjProgressPanelSection from './projProgressPanelSection';

function ProjPanel({ project }) {
	return (
		<div className="d-flex flex-column align-items-center full-height full-width">
            <div className="icon-card-container">
                <IconCard imgSrc={project.imgSrc} size="lg" text={project.name} url={project.url} />
            </div>
			<PanelSection title="Short Description" body={<p className="advent-font bio-text p-rmv-margin">{project.shortDescr}</p>} indent />
			<PanelSection
				title="Tags"
				body={
					<div className="d-flex flex-wrap align-items-center">
						{project.interests.map((interest, key) => (
							<Tag key={key} title={interest} />
						))}
					</div>
				}
			/>
			<PanelSection title="Progress" body={<ProjProgressPanelSection project={project}/>} />
		</div>
	);
}

export default ProjPanel;
