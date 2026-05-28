import { Link } from "react-router-dom";

import onedayImg from "../assets/img/services/oneday.jpg";
import multidayImg from "../assets/img/services/multiday.jpg";
import workshopsImg from "../assets/img/services/workshops.jpg";
import facilitatorImg from "../assets/img/services/facilitator.jpg";
import expoImg from "../assets/img/services/expo.jpg";
import customImg from "../assets/img/services/custom.jpg";

function Services() {
  return (
    <section id="services" className="container">
      <h2 className="section-title">Our Services</h2>

      <h3 className="subsection-title">Our Operating Cities</h3>

      <div className="operating-cities">
        <Link to="/services/chennai#oneday">Chennai</Link>
        <Link to="/services/bangalore#oneday">Bangalore</Link>
        <Link to="/services/indore#oneday">Indore</Link>
        <Link to="/services/ujjain#oneday">Ujjain</Link>
        <Link to="/services/nagpur#oneday">Nagpur</Link>
        <Link to="/services/mumbai#oneday">Mumbai</Link>
        <Link to="/services/khandwa#oneday">Khandwa</Link>
        <Link to="/services/surat#oneday">Surat</Link>
        <Link to="/services/delhi#oneday">Delhi</Link>
        <Link to="/services/ahmedabad#oneday">Ahmedabad</Link>
        <Link to="/services/hyderabad#oneday">Hyderabad</Link>
      </div>

      <div className="cards-grid">
        <Link to="/services#oneday" className="service-card-link">
          <div
            className="card service-card"
            style={{ backgroundImage: `url(${onedayImg})` }}
          >
            <h3>One-Day Trips</h3>
          </div>
        </Link>

        <Link to="/services#multiday" className="service-card-link">
          <div
            className="card service-card"
            style={{ backgroundImage: `url(${multidayImg})` }}
          >
            <h3>Multi-Day Expeditions</h3>
          </div>
        </Link>

        <Link to="/services#workshops" className="service-card-link">
          <div
            className="card service-card"
            style={{ backgroundImage: `url(${workshopsImg})` }}
          >
            <h3>In-House Workshops</h3>
          </div>
        </Link>

        <Link to="/services#facilitator" className="service-card-link">
          <div
            className="card service-card"
            style={{ backgroundImage: `url(${facilitatorImg})` }}
          >
            <h3>Facilitator Support</h3>
          </div>
        </Link>

        <Link to="/services#expo" className="service-card-link">
          <div
            className="card service-card"
            style={{ backgroundImage: `url(${expoImg})` }}
          >
            <h3>Heritage Expo Planning</h3>
          </div>
        </Link>

        <Link to="/services#custom" className="service-card-link">
          <div
            className="card service-card"
            style={{ backgroundImage: `url(${customImg})` }}
          >
            <h3>Custom Programs</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Services;
