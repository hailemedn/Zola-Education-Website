import { Avatar, Heading, VStack, HStack, Button, Text } from "@chakra-ui/react";
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

            >
            <HStack gap="20" alignItems="start">  
                <VStack>
                    <Avatar src={ZeLogo} size="full"></Avatar>
                    
                </VStack> 
                <VStack p="30px" alignItems="flex-start">
                    <Heading>Zola Education</Heading>
                    <Heading as="h2" size="md">Educational Content in Amharic</Heading>
                    <VStack alignItems="flex-start" mt="15px">
                        <Text color="red.400" fontSize="2xl" fontWeight="semibold">Visit our Socials</Text>
                        <HStack spacing={6} justifyContent= "left"> 
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