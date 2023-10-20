import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const LandingSection = () => {
    const ZeLogo =  require("../images/ZE-Logo.jpg")
   return (
        <FullScreenSection 
            backgroundColor="#18181b"
            justifyContent="center"
            isDarkBackground

            >
            <VStack>  
                <VStack>
                    <Avatar src={ZeLogo} size="full"></Avatar>
                    <Heading>Zola Education</Heading>
                </VStack> 
            </VStack>
        </FullScreenSection>
    )
}

export default LandingSection;