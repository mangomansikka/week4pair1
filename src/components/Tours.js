import React, { useState } from 'react';
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";
import Footer from "./Footer";

function Tours() {
  const [toursData, setToursData] = useState(tours);

  const handleToggleTour = (tourId) => {
    setToursData((prevToursData) =>
      prevToursData.map((tour) =>
        tour.id === tourId ? { ...tour, visible: !tour.visible } : tour
      )
    );
  };

  const handleToggleAllTours = () => {
    setToursData((prevToursData) =>
      prevToursData.map((tour) => ({ ...tour, visible: true }))
    );
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            tour.visible && (
              <div key={tour.id}>
                <Tour {...tour} />
                <button className="Hide" onClick={() => handleToggleTour(tour.id)}>
                  {tour.visible ? 'Hide Tour' : 'Show Tour'}
                </button>
              </div>
            )
          ))}
          <button className= "ShowAll" onClick={handleToggleAllTours}>
            Show All Tours
          </button>
        </div>
      </section>
	  <Footer />
    </div>
  );
}

export default Tours;
