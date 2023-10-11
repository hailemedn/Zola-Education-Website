import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const LandingSection = () => {
   return (
        <FullScreenSection 
            backgroundColor="#18181b"
            justifyContent="center"
            isDarkBackground

            >
            <VStack>  
                <VStack>
                    <Avatar src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" size='2xl'></Avatar>
                    <Heading>Zola Education</Heading>
                </VStack> 
            </VStack>
        </FullScreenSection>
    )
}

export default LandingSection;