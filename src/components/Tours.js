import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";

function Tours() {
	return (
		<div>
			<section className="section" id="tours">
				<Title title="featured" span="tours" />
				<div className="section-center featured-center">
					{tours.map((tour) => (
						<Tour key={tour.id} {...tour} />
					))}
				</div>
			</section>
		</div>
	);
}

export default Tours;
