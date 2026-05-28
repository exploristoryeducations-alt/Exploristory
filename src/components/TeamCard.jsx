import { useState } from "react";

function TeamCard({ person }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`team-card ${flipped ? "flip" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="team-card-inner">
        <div className="team-card-front">
          <img src={person.image} alt={person.name} />

          <div className="team-info">
            <h3>{person.name}</h3>

            <p className="role">{person.role}</p>

            <p className="preview">{person.preview}</p>

            <span className="read-more">Read Bio →</span>
          </div>
        </div>

        <div className="team-card-back">
          <p>{person.bio}</p>

          <span className="back-btn">← Back</span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
