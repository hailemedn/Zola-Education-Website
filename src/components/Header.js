import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  // state = {clicked: false}
  // handleClick = () => {
  //     this.setState({clicked: !this.state.clicked})
  // }
  // render() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleNavigation = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    // Handle scroll events
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement) return;

      if (prevScrollPos > currScrollPos)
        currHeaderElement.style.transform = "translateY(0)";
      else currHeaderElement.style.transform = "translateY(-200px)";

      prevScrollPos = currScrollPos;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="container" ref={headerRef}>
      <div className="wrapper">
        <h1>
          <a href="#home" onClick={handleNavigation("home")}>
            ZEs
          </a>
        </h1>
        <nav>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a
                className="red"
                href="#contactus"
                onClick={handleNavigation("contactus")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="red"
                href="#contactus"
                onClick={handleNavigation("contactus")}
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                className="red"
                href="#aboutus"
                onClick={handleNavigation("aboutus")}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                className="red"
                href="#contactus"
                onClick={handleNavigation("contactus")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div id="mobile" onClick={handleClick}>
          <FontAwesomeIcon
            icon={clicked ? faTimes : faBars}
            size="2xl"
            cursor="pointer"
          ></FontAwesomeIcon>
        </div>
      </div>
    </header>
  );
};
// }

export default Header;
