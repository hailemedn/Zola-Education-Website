import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Cards from "./cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const educationalContents = [
    {
        title: "Basic Computer Skills",
        description: "We invite you to follow this basic computer skills training of what we need to know about computers!",
        url: "https://www.youtube.com/watch?v=8vqBUYA7ZLk&list=PLKXxT8ltBxOfZC-V7GYIUHbnxlsdapPpa",
        getImageSrc: () => require("../images/Screenshot 2023-10-11 124928.png")
    },
    {
        title: "MicroSoft Word Training",
        description: "It's a video series for everyone from beginner to advanced to learn all you need to know about Word!",
        url: "https://www.youtube.com/watch?v=0JhP12KRPBk&list=PLKXxT8ltBxOdHyjRVXRmxPDp4RKlnQ3ky",
        getImageSrc: ()=> require("../images/Screenshot 2023-10-11 125251.png")
    },
    {
        title: "ICT COC Training",
        description: "Training for ICT COC candidates and all those who are interested",
        url: "https://www.youtube.com/watch?v=hxEmLrGa7Fc&list=PLKXxT8ltBxOdvyTcNppifrd3--hnDojnp",
        getImageSrc: () => require("../images/Screenshot 2023-10-11 131714.png")
    }
]

const AboutUs = () => {
    return (
        <FullScreenSection backgroundColor="#FAF9F6">
            <VStack p='5'>
                <Box m='6'>
                    <VStack>
                        <Heading m={6} as="h1" id="aboutus-section">About us</Heading>
                        <Text fontSize="lg">Zola Education provides Educational content on platforms such as <a href="https://www.youtube.com/@zolaeducation" rel="noopener noreferrer">YouTube</a> & <a>Tiktok</a>. </Text>
                    </VStack>
                    
                </Box>
                
                <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(290px, 1fr))'>
                    
                    {educationalContents.map(({title, description, url, getImageSrc}) => (
                        <Cards 
                            key={title}
                            title={title}
                            description={description}
                            url = {url}
                            imageSrc={getImageSrc()} />
                    ))}
                </SimpleGrid>
                <Text cursor="pointer"><a href="https://www.youtube.com/@zolaeducation" rel="noopener noreferrer">And many more <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </a></Text>
            </VStack>
        </FullScreenSection>
    )
}

export default AboutUs;