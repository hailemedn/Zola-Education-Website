import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingSection = () => {
  const ZeLogo = require("../images/ZE-Logo.jpg");
  return (
    <section id="hero-section">
      <div className="headings">
        <h1 className="title">ZolaXet</h1>
        <h3 className="sub-title">Bright Future</h3>
      </div>

      <p>Education, Entertainment, and Reactions in Amharic</p>
      <button className="btn primary">Go Watch Now</button>
    </section>
  );
};

export default LandingSection;
