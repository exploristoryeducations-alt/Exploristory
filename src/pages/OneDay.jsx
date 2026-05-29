import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OneDay() {
  const { city } = useParams();
  const [activeCity, setActiveCity] = useState("chennai");
  useEffect(() => {
    if (city) {
      setActiveCity(city.toLowerCase());
    }
  }, [city]);
  return (
    <section id="oneday" className="service-section">
      <div className="container">
        <h1 className="section-title">ONE-DAY TRIPS</h1>

        <div className="city-tabs">
          <button
            className={activeCity === "chennai" ? "active" : ""}
            onClick={() => setActiveCity("chennai")}
          >
            Chennai
          </button>

          <button
            className={activeCity === "bangalore" ? "active" : ""}
            onClick={() => setActiveCity("bangalore")}
          >
            Bangalore
          </button>

          <button
            className={activeCity === "indore" ? "active" : ""}
            onClick={() => setActiveCity("indore")}
          >
            Indore
          </button>

          <button
            className={activeCity === "ujjain" ? "active" : ""}
            onClick={() => setActiveCity("ujjain")}
          >
            Ujjain
          </button>

          <button
            className={activeCity === "nagpur" ? "active" : ""}
            onClick={() => setActiveCity("nagpur")}
          >
            Nagpur
          </button>

          <button
            className={activeCity === "mumbai" ? "active" : ""}
            onClick={() => setActiveCity("mumbai")}
          >
            Mumbai
          </button>

          <button
            className={activeCity === "khandwa" ? "active" : ""}
            onClick={() => setActiveCity("khandwa")}
          >
            Khandwa
          </button>

          <button
            className={activeCity === "surat" ? "active" : ""}
            onClick={() => setActiveCity("surat")}
          >
            Surat
          </button>

          <button
            className={activeCity === "delhi" ? "active" : ""}
            onClick={() => setActiveCity("delhi")}
          >
            Delhi
          </button>

          <button
            className={activeCity === "ahmedabad" ? "active" : ""}
            onClick={() => setActiveCity("ahmedabad")}
          >
            Ahmedabad
          </button>

          <button
            className={activeCity === "hyderabad" ? "active" : ""}
            onClick={() => setActiveCity("hyderabad")}
          >
            Hyderabad
          </button>
        </div>

        <div className="service-panel">
          {activeCity === "chennai" && (
            <>
              <h3>Chennai - One Day Heritage Trail</h3>
              <p className="service-intro">
                For schools in Chennai, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/chennai-1.webp"
                  alt="Chennai Heritage"
                />
                <img
                  src="/images/service-pics/oneday/chennai-2.webp"
                  alt="Chennai Museum"
                />
                <img
                  src="/images/service-pics/oneday/chennai-3.webp"
                  alt="Chennai Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Mahabalipuram</strong> - Shore Temple, Five Rathas,
                  Arjuna's Penance and Krishna's Butter Ball.
                </li>
                <li>
                  <strong>Egmore Government Museum</strong> - Chola bronzes,
                  archaeological gallery and children's museum.
                </li>
                <li>
                  <strong>Fort St. George</strong> - Fort Museum, St. Mary's
                  Church and early colonial structures.
                </li>
                <li>
                  <strong>Historic Churches of Chennai</strong> - Santhome
                  Basilica, Luz Church, Armenian Church and St. Thomas Church.
                </li>
                <li>
                  <strong>Kanchipuram</strong> - Kailashnath temple, Vaikunth
                  Perumal and ancient Jain temples.
                </li>
                <li>
                  <strong>Gingee Fort</strong> - Rajagiri Citadel, Kalyana Mahal
                  and medieval fortification structures.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>Architecture observation and sketching exercises.</li>
                <li>Artifact analysis and museum exploration activities.</li>
                <li>Epigraphy and inscription interpretation.</li>
                <li>Historical mapping and heritage documentation projects.</li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  ₹1,100 - ₹1,700 per student depending on the destination.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "bangalore" && (
            <>
              <h3>Bangalore - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Bangalore, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/bangalore-1.webp"
                  alt="Bangalore Heritage"
                />
                <img
                  src="/images/service-pics/oneday/bangalore-2.webp"
                  alt="Bangalore Fort"
                />
                <img
                  src="/images/service-pics/oneday/bangalore-3.webp"
                  alt="Bangalore Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Begur Fort</strong> - Early medieval site known for
                  the famous inscription containing the earliest reference to
                  the name “Bengaluru”.
                </li>
                <li>
                  <strong>Devanahalli Fort</strong> - 16th-century polygonal
                  fort associated with Hyder Ali and Tipu Sultan.
                </li>
                <li>
                  <strong>Bangalore Fort</strong> - Originally built by
                  Kempegowda and later expanded with stone fortifications.
                </li>
                <li>
                  <strong>Tipu Sultan's Summer Palace</strong> - Indo-Islamic
                  wooden palace reflecting Mysorean architecture and Tipu
                  Sultan's rule.
                </li>
                <li>
                  <strong>Someshwara Temple, Halasuru</strong> - Chola-period
                  temple with Vijayanagara additions showcasing Dravidian
                  architecture.
                </li>
                <li>
                  <strong>Mayo Hall & Kempegowda Museum</strong> - Colonial
                  civic building illustrating administrative history.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Guided heritage walks identifying architectural and defensive
                  features.
                </li>
                <li>
                  Inscription reading and historical interpretation exercises.
                </li>
                <li>Architecture sketching and sculpture documentation.</li>
                <li>
                  Group discussions on city growth, governance, and heritage
                  conservation.
                </li>
                <li>
                  Interactive tasks such as heritage quizzes, mapping
                  activities, and model making.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "indore" && (
            <>
              <h3>Indore - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Indore, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/indore-1.webp"
                  alt="Indore Heritage"
                />
                <img
                  src="/images/service-pics/oneday/indore-2.webp"
                  alt="Indore Fort"
                />
                <img
                  src="/images/service-pics/oneday/indore-3.webp"
                  alt="Indore Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Maheshwar Fort</strong> - A historic riverside fort
                  associated with Ahilya Bai Holkar and the Holkar dynasty.
                </li>
                <li>
                  <strong>Rajwada Palace</strong> - The royal residence
                  reflecting the administrative and cultural life of the period.
                </li>
                <li>
                  <strong>Narmada Ghats</strong> - Iconic stone ghats along the
                  Narmada River showcasing temple architecture and river
                  culture.
                </li>
                <li>
                  <strong>Rehwa Society</strong> - A traditional weaving center
                  where students learn about Maheshwari handloom textiles.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>Guided heritage walk through the fort complex.</li>
                <li>
                  Observation of architectural styles and monument features.
                </li>
                <li>
                  Interaction with traditional weavers and craft demonstrations.
                </li>
                <li>
                  Creative documentation through sketches and photography.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>₹1300 per student (for groups around 45 students).</li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "ujjain" && (
            <>
              <h3>Ujjain - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Ujjain, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/ujjain-1.webp"
                  alt="Ujjain Heritage"
                />
                <img
                  src="/images/service-pics/oneday/ujjain-2.webp"
                  alt="Ujjain Fort"
                />
                <img
                  src="/images/service-pics/oneday/ujjain-3.webp"
                  alt="Ujjain Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Ram Janardhan Mandir</strong> - A historic temple
                  reflecting traditional architecture and religious practices of
                  the region.
                </li>
                <li>
                  <strong>Triveni Museum</strong> - A curated museum showcasing
                  sculptures, artifacts, and historical exhibits related to
                  Ujjain's heritage.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Guided exploration of temple architecture and symbolism.
                </li>
                <li>
                  Understanding cultural and religious significance of Ujjain.
                </li>
                <li>Observation and interpretation of museum artifacts.</li>
                <li>Interactive discussions on history and heritage.</li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>₹650 per student (for groups around 100 students).</li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "nagpur" && (
            <>
              <h3>Nagpur - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Nagpur, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/nagpur-1.webp"
                  alt="Nagpur Heritage"
                />
                <img
                  src="/images/service-pics/oneday/nagpur-2.webp"
                  alt="Nagpur Fort"
                />
                <img
                  src="/images/service-pics/oneday/nagpur-3.webp"
                  alt="Nagpur Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Ramtek Fort & Temple Complex</strong> - Includes the
                  Ram Temple, Karpur Baoli, Varaha statue and several medieval
                  temples around the hill.
                </li>
                <li>
                  <strong>Mansar Archaeological Site</strong> - An important
                  site associated with the Vakataka dynasty and early urban
                  settlement remains.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>Temple architecture and fortification study.</li>
                <li>
                  Sketching and documentation of sculptures and inscriptions.
                </li>
                <li>
                  Introduction to archaeological methods such as stratigraphy
                  and dating.
                </li>
                <li>Artifact interpretation using replica objects.</li>
                <li>
                  Group discussions and creative reconstruction of ancient
                  settlements.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>Approximately ₹1200 per student.</li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "mumbai" && (
            <>
              <h3>Mumbai - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Mumbai, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/mumbai-1.webp"
                  alt="Mumbai Heritage"
                />
                <img
                  src="/images/service-pics/oneday/mumbai-2.webp"
                  alt="Mumbai Fort"
                />
                <img
                  src="/images/service-pics/oneday/mumbai-3.webp"
                  alt="Mumbai Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Elephanta Caves</strong> - UNESCO heritage site known
                  for its rock-cut sculptures and depictions of Hindu mythology.
                </li>
                <li>
                  <strong>Kanheri Caves</strong> - Ancient Buddhist monastic
                  complex showcasing rock-cut architecture and water management
                  systems.
                </li>
                <li>
                  <strong>Jogeshwari & Mahakali Caves</strong> - Early cave
                  temples reflecting evolving architectural styles.
                </li>
                <li>
                  <strong>Vasai & Worli Forts</strong> - Coastal forts
                  highlighting military planning and maritime defense.
                </li>
                <li>
                  <strong>Colonial Fort Area</strong> - Historic district with
                  Gothic and colonial-era civic buildings.
                </li>
                <li>
                  <strong>CSMVS & Dr. Bhau Daji Lad Museum</strong> - Museums
                  preserving artifacts and cultural history of the region.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Heritage treasure hunts and archaeological exploration
                  challenges.
                </li>
                <li>
                  Decoding sculptures, symbols, and religious iconography.
                </li>
                <li>Architecture observation and mapping activities.</li>
                <li>
                  Group discussions on heritage conservation and urban
                  evolution.
                </li>
                <li>
                  Museum artifact identification and interpretation exercises.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "khandwa" && (
            <>
              <h3>Khandwa - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Khandwa, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/khandwa-1.webp"
                  alt="Khandwa Heritage"
                />
                <img
                  src="/images/service-pics/oneday/khandwa-2.webp"
                  alt="Khandwa Fort"
                />
                <img
                  src="/images/service-pics/oneday/khandwa-3.webp"
                  alt="Khandwa Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <h4>1. Maheshwar</h4>

              <ul>
                <li>
                  <strong>Maheshwar Fort Complex</strong> - Explore the historic
                  fort associated with Ahilya Bai Holkar.
                </li>
                <li>
                  <strong>Rajwada Palace</strong> - Discover royal life and
                  architecture of the Holkar period.
                </li>
                <li>
                  <strong>Narmada Ghats</strong> - Study riverfront temple
                  architecture and cultural life along the Narmada.
                </li>
                <li>
                  <strong>Rehwa Society</strong> - Experience traditional
                  Maheshwari handloom weaving and crafts.
                </li>
              </ul>

              <h4>2. Burhanpur</h4>

              <ul>
                <li>
                  <strong>Shahi Qila</strong> - Mughal royal fort and palace
                  complex.
                </li>
                <li>
                  <strong>Royal Hammam</strong> - Historic bathhouse associated
                  with Mumtaz Mahal.
                </li>
                <li>
                  <strong>Ahukhana</strong> - Site connected to the original
                  plan of the Taj Mahal.
                </li>
                <li>
                  <strong>Jama Masjid</strong> - A major Mughal-era mosque
                  showcasing Islamic architecture.
                </li>
                <li>
                  <strong>Khooni Bhandara</strong> - A remarkable 400-year-old
                  underground water management system.
                </li>
              </ul>

              <h4>Learning Activities</h4>

              <ul>
                <li>Heritage walks and architectural observation.</li>
                <li>Interactive role-playing of historical characters.</li>
                <li>Creative sketching and monument documentation.</li>
                <li>Treasure hunts and heritage discovery games.</li>
                <li>Storytelling and reflection sessions.</li>
              </ul>

              <h4>Indicative Cost</h4>

              <ul>
                <li>₹1300 per student (for a group of ~45 students).</li>
                <li>₹800 per student if the school provides its own bus.</li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "surat" && (
            <>
              <h3>Surat - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Surat, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/surat-1.webp"
                  alt="Surat Heritage"
                />
                <img
                  src="/images/service-pics/oneday/surat-2.webp"
                  alt="Surat Fort"
                />
                <img
                  src="/images/service-pics/oneday/surat-3.webp"
                  alt="Surat Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Surat Fort</strong> - Historic fort built to defend
                  the city during its period as a major trading port.
                </li>
                <li>
                  <strong>Kadia Dungar</strong> - A 1st-2nd century CE rock-cut
                  Buddhist monument offering insight into early religious
                  architecture.
                </li>
                <li>
                  <strong>Dutch, English & Armenian Cemeteries</strong> -
                  Heritage sites reflecting the presence of European traders in
                  Surat.
                </li>
                <li>
                  <strong>Udvada</strong> - Important center of Parsi culture
                  and heritage.
                </li>
                <li>
                  <strong>Dabhoi</strong> - Historic fortified town known for
                  its medieval gateways and architecture.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>Guided heritage walks and site interpretation.</li>
                <li>
                  Observation and documentation of architectural features.
                </li>
                <li>
                  Group discussions on trade, culture, and historical exchange.
                </li>
                <li>
                  Interactive heritage activities encouraging critical thinking.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>₹1300 per student (for a group of ~45 students).</li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "delhi" && (
            <>
              <h3>Delhi - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Delhi, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/delhi-1.webp"
                  alt="Delhi Heritage"
                />
                <img
                  src="/images/service-pics/oneday/delhi-2.webp"
                  alt="Delhi Fort"
                />
                <img
                  src="/images/service-pics/oneday/delhi-3.webp"
                  alt="Delhi Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Purana Qila</strong> - Site of ongoing excavations
                  revealing layers of ancient Delhi through stratigraphy and
                  material remains.
                </li>
                <li>
                  <strong>Humayun's Tomb</strong> - A key Mughal monument to
                  study symmetry, garden planning, and architectural design as
                  historical evidence.
                </li>
                <li>
                  <strong>Tughlaqabad Fort</strong> - A medieval fort showcasing
                  defence systems, fortification strategies, and military
                  architecture.
                </li>
                <li>
                  <strong>Aravalli Region (Mangar/Damdama area)</strong> -
                  Prehistoric landscape to understand early human survival and
                  settlement patterns.
                </li>
                <li>
                  <strong>Rakhigarhi (extended option)</strong> - One of the
                  largest Harappan sites offering insight into Indus Valley
                  Civilization and urban planning.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Landscape analysis and archaeological observation exercises.
                </li>
                <li>Stratigraphy and artifact interpretation activities.</li>
                <li>
                  Architectural investigation through sketching and mapping.
                </li>
                <li>
                  Group challenges like settlement design, fort defence, and
                  city planning.
                </li>
                <li>
                  Roleplay, debates, and evidence-based historical
                  interpretation.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  ₹1200 - ₹2000 per student (depending on group size and site
                  selection).
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "hyderabad" && (
            <>
              <h3>Hyderabad - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Hyderabad, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/hyderabad-1.webp"
                  alt="Hyderabad Heritage"
                />
                <img
                  src="/images/service-pics/oneday/hyderabad-2.webp"
                  alt="Hyderabad Fort"
                />
                <img
                  src="/images/service-pics/oneday/hyderabad-3.webp"
                  alt="Hyderabad Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Golconda Fort & Qutub Shahi Tombs</strong> - Study
                  fortification systems, acoustics, water management, and Deccan
                  Sultanate architecture.
                </li>
                <li>
                  <strong>Salar Jung Museum</strong> - Explore global
                  collections and learn how artifacts reveal cultural and
                  historical connections.
                </li>
                <li>
                  <strong>
                    Chowmahalla Palace, Bansilalpet Stepwell & Badshahi
                    Ashurkhana
                  </strong>
                  - Understand Nizam-era court life, water systems, and
                  religious-cultural spaces.
                </li>
                <li>
                  <strong>Warangal Fort & Thousand Pillar Temple</strong> -
                  Examine Kakatiya urban planning, temple architecture, and fort
                  design.
                </li>
                <li>
                  <strong>Ramappa Temple & Pandavula Guhalu</strong> - Study
                  advanced temple construction techniques and prehistoric rock
                  art traditions.
                </li>
                <li>
                  <strong>Bhuvanagiri Fort</strong> - Learn about hill fort
                  engineering and landscape-based defence strategies.
                </li>
                <li>
                  <strong>Bidar Fort</strong> - Explore Indo-Persian
                  architecture and cultural synthesis in the Deccan region.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Fort defence analysis, mapping, and architectural observation.
                </li>
                <li>
                  Artifact interpretation and museum-based investigation
                  exercises.
                </li>
                <li>
                  Temple architecture study, sculpture analysis, and rock art
                  observation.
                </li>
                <li>
                  Water system and urban planning investigations (stepwells and
                  forts).
                </li>
                <li>
                  Group challenges like fort defence strategy, cultural
                  interpretation, and historical storytelling.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  ₹1300 - ₹1500 per student (depending on expedition selection).
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators, and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}

          {activeCity === "ahmedabad" && (
            <>
              <h3>Ahmedabad - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Ahmedabad, we transform one school day into an
                unforgettable hands-on learning adventure beyond the classroom.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/ahmedabad-1.webp"
                  alt="Ahmedabad Heritage"
                />
                <img
                  src="/images/service-pics/oneday/ahmedabad-2.webp"
                  alt="Ahmedabad Stepwell"
                />
                <img
                  src="/images/service-pics/oneday/ahmedabad-3.webp"
                  alt="Ahmedabad Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Vadnagar Museum Expedition</strong> - Explore the
                  historical layers of Vadnagar through Buddhist, Solanki, and
                  medieval remains while understanding archaeology and cultural
                  evolution.
                </li>

                <li>
                  <strong>Rani ki Vav (Patan)</strong> - Study stepwell
                  engineering, Maru-Gurjara architecture, temple-style carvings,
                  and medieval water management systems.
                </li>

                <li>
                  <strong>Modhera Sun Temple</strong> - Examine temple
                  orientation, astronomy in ancient India, ritual spaces, and
                  symbolic architecture dedicated to Surya.
                </li>

                <li>
                  <strong>
                    Lothal Harappan Port City & National Maritime Heritage
                    Complex
                  </strong>
                  - Learn about Harappan urban planning, dockyard systems, trade
                  routes, and archaeological methods.
                </li>

                <li>
                  <strong>Champaner-Pavagadh Archaeological Park</strong> -
                  Understand medieval urban planning, fortifications, sacred
                  landscapes, and the blend of Hindu-Islamic architecture.
                </li>

                <li>
                  <strong>Adalaj Stepwell & Siddhapur - Rudra Mahalaya</strong>{" "}
                  - Explore Indo-Islamic water architecture, Solanki-era temple
                  ruins, and public heritage spaces.
                </li>

                <li>
                  <strong>
                    Baroda Cultural Expedition & Ahmedabad Heritage Walk
                  </strong>{" "}
                  - Discover royal patronage, museum studies, Sultanate
                  architecture, pol houses, and Ahmedabad's living heritage
                  traditions.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Archaeological interpretation, excavation simulation, and
                  artifact classification exercises.
                </li>

                <li>
                  Architectural sketching, temple layout mapping, and sculpture
                  decoding activities.
                </li>

                <li>
                  Heritage mapping, trade route analysis, and urban planning
                  investigations.
                </li>

                <li>
                  Stepwell engineering studies, geometry in architecture, and
                  water system exploration.
                </li>

                <li>
                  Group challenges including storytelling, cultural
                  interpretation, timeline reconstruction, and preservation
                  discussions.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  ₹1200 - ₹1500 per student (depending on expedition selection).
                </li>

                <li>
                  Includes AC transport, entry fees, meals, facilitators, and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                Contact section.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default OneDay;
