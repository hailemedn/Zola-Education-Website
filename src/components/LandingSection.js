import { Avatar, Heading, VStack, HStack, Button, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";

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

const LandingSection = () => {
    const ZeLogo =  require("../images/ZE-Logo.jpg")
   return (
        <FullScreenSection 
            backgroundColor="#FAF9F6"
            justifyContent="center"
            id = "home-section"
            >
            
            <HStack gap="4" justifyContent="center" flexWrap="wrap" p={10} m={3}>  
                <VStack>
                    <Image src={ZeLogo} alt="Ze Logo" borderRadius="full"></Image>
                    
                </VStack> 
                <VStack p="30px" alignItems="center">
                    <Heading><span className="red">Z</span>ola <span className="red">E</span>ducation</Heading>
                    <Heading as="h2" size="md">Educational Content in Amharic</Heading>
                    <VStack mt="15px">
                        <Text color="#2049ea" fontSize="2xl" fontWeight="semibold">Visit our Socials</Text>
                        <HStack spacing={6}> 
                            {socials.map(({icon, url}) => (
                                <a href={url} key={url}><FontAwesomeIcon icon={icon} size='2x'></FontAwesomeIcon></a>
                            ))}
                        </HStack>
                    </VStack>
                    
                    
                </VStack>
                
            </HStack>
        </FullScreenSection>
    )
}

export default LandingSection;