import TeamCard from "./TeamCard";

import { founders, mentors } from "../data/teamData";

function Team() {
  return (
    <section id="team" className="container">
      <h2 className="section-title">Meet Our Team & Mentors</h2>

      <h3 className="subsection-title">Founders</h3>

      <div className="team-grid">
        {founders.map((person, index) => (
          <TeamCard key={index} person={person} />
        ))}
      </div>

      <h3 className="subsection-title">Our Mentors</h3>

      <div className="team-grid mb--half">
        {mentors.map((person, index) => (
          <TeamCard key={index} person={person} />
        ))}
      </div>
    </section>
  );
}

export default Team;
