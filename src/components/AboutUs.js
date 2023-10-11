import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Cards from "./cards";

const educationalContents = [
    {
        title: "Basic Computer Skills",
        description: "We invite you to follow this basic computer skills training of what we need to know about computers!",
        getImageSrc: () => require("../images/Screenshot 2023-10-11 124928.png")
    },
    {
        title: "MicroSoft Word Training",
        description: "It's a video series for everyone from beginner to advanced to learn all you need to know about Word!",
        getImageSrc: ()=> require("../images/Screenshot 2023-10-11 125251.png")
    },
    {
        title: "ICT COC Training",
        description: "Training for ICT COC candidates and all those who are interested",
        getImageSrc: () => require("../images/Screenshot 2023-10-11 131714.png")
    }
]

const AboutUs = () => {
    return (
        <FullScreenSection backgroundColor="#FAF9F6">
            <VStack p='5'>
                <Box m='6'>
                    <VStack>
                        <Heading>About Us</Heading>
                        <Text>Zola Education provides Educational content on platforms such as <a>YouTube</a> & <a>Tiktok</a> </Text>
                    </VStack>
                    
                </Box>
                
                <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(290px, 1fr))'>
                    
                    {educationalContents.map((eduContent) => (
                        <Cards 
                            key={eduContent.title}
                            title={eduContent.title}
                            description={eduContent.description}
                            imageSrc={eduContent.getImageSrc()} />

                    ))}
                </SimpleGrid>
            </VStack>
        </FullScreenSection>
    )
}

export default AboutUs;