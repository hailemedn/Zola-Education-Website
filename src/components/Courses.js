import "./styles.css";
import Cards from "./Cards";

const Courses = () => {
  return (
    <section id="courses-section">
      <div className="wrapper">
        <h1 className="section-title">Popular Courses</h1>
        <Cards />
      </div>
    </section>
  );
};

export default Courses;
