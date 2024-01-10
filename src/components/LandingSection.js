import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingSection = () => {
    const ZeLogo =  require("../images/ZE-Logo.jpg")
   return (
        <section id="hero-section">
            <h1 className="title">ZolaXet</h1>
            <h3 className="sub-title">Bright Future</h3>
            <p>Education, Entertainment, and Reactions in Amharic</p>
            <button className="btn">Go Watch Now</button>
        </section>
    )
}

export default LandingSection;