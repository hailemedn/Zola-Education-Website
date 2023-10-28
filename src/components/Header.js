import { Box, HStack, Heading } from "@chakra-ui/react";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './headerStyles.css'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Component, useState, useRef } from "react";


const socials = [
    {
        icon: faYoutube,
        url: "https://www.youtube.com/@zolaeducation"
    },
    {
        icon: faTiktok,
        url: "https://www.tiktok.com/@zola_education"
    }

]


const Header = () =>  {
    // state = {clicked: false}
    // handleClick = () => {
    //     this.setState({clicked: !this.state.clicked})
    // }
    // render() {
        const [clicked, setClicked] = useState(false)
        const handleClick = () => {
            setClicked(!clicked)
        }

        const handleNavigation = (anchor) => () => {
            const id = `${anchor}-section`
            const element = document.getElementById(id)
            if(element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }

        

        return (
            <div className="container">
                <nav>
                    <Heading><a href="#">ZE</a></Heading>
                    <div>
                        <ul id="navbar" className={clicked ? "#navbar active": "#navbar"}>
                            <li><a href="#aboutus" onClick={handleNavigation("aboutus")}>About</a></li>
                            <li><a href="#contactus" onClick={handleNavigation("contactus")}>Contact us</a></li>
                            {/* {socials.map(({icon, url}) => (
                              <li key={url}><a href={url}><FontAwesomeIcon icon={icon} /> </a></li>  
                            ))} */}
                        </ul>
                    </div>
                    <div id="mobile" onClick={handleClick}>
                        <FontAwesomeIcon icon={clicked ? faTimes : faBars} size='2xl' cursor="pointer"></FontAwesomeIcon>
                    </div> 
                </nav>
            </div>
        )
    }
    
// }

export default Header;