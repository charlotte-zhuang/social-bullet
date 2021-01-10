import MainSection from './mainSection';
import MainTiles from './mainTiles';
import '../CSS/settings.css';

function CreditsMain({ contributors }) {
	return (
		<div className="d-flex flex-column align-items-start full-width">
			<MainSection
				title="What is Social Bullet?"
				body={
					<div className="d-flex flex-column align-items-start pr-3 pl-3 expln-text">
						<p className="advent-font">
							Social Bullet is lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales libero sit amet lacus varius, id tincidunt risus posuere. Mauris velit sem, pulvinar id
							hendrerit et, malesuada sed quam.
						</p>
						<p className="advent-font">Hendrerit et, malesuada sed quam.</p>
					</div>
				}
			/>
			<MainTiles type="contributor" tileItems={contributors} />
		</div>
	);
}

export default CreditsMain;
