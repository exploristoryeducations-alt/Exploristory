import multidayData from "../data/multidayData";

function MultiDay() {
  return (
    <section id="multiday" className="service-section">
      <div className="container">
        <h1 className="section-title">Multi-Day Heritage Expeditions</h1>

        <p className="service-intro mb--2half">
          Take learning beyond the classroom through immersive educational
          journeys where students explore archaeological sites, historical
          landscapes, and cultural traditions through guided fieldwork,
          storytelling, observation, and hands-on experiential activities.
        </p>

        {multidayData.map((trip) => (
          <div key={trip.id} className="expedition-block">
            <h3 className="expedition-title">{trip.title}</h3>

            <p className="expedition-duration">{trip.duration}</p>

            <p className="expedition-intro">{trip.intro}</p>

            <div className="service-gallery">
              {trip.images.map((img, index) => (
                <img key={index} src={img} alt={`${trip.title}-${index + 1}`} />
              ))}
            </div>

            <h4>Key Places & Experiences</h4>

            <ul>
              {trip.sites.map((site, index) => (
                <li key={index}>{site}</li>
              ))}
            </ul>

            <h4>Experiential Learning Activities</h4>

            <ul>
              {trip.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>

            <h4>Learning Outcomes</h4>

            <ul>
              {trip.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>

            <h4>Approximate Program Cost</h4>

            <ul>
              <li>{trip.cost}</li>
            </ul>
          </div>
        ))}

        <p className="service-note">
          Programs include accommodation, meals, internal travel, subject
          experts, and specially curated student workbooks. Expeditions can be
          customized according to the school curriculum and specific learning
          requirements.
        </p>
      </div>
    </section>
  );
}

export default MultiDay;
