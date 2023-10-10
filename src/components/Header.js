import { Box, HStack, Heading } from "@chakra-ui/react";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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


const Header = () => {
    return (
        <Box 
            position="fixed"
            top={0}
            right={0}
            left={0}
            backgroundColor="#18181b">

            <Box 
                maxWidth="1280px"
                margin="0 auto"
                color="white">
                <HStack 
                    px={16}
                    py={4}
                    justifyContent="space-between">
                    <nav>
                        <Heading>ZOLA EDUCATION</Heading>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <a href="google.com">About</a>
                            <a href="google.com">Contact us</a>
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            {socials.map(({icon, url}) => (
                                <a href={url} key={url} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={icon} size='2x'></FontAwesomeIcon>
                                </a>
                            ))}
                        </HStack>
                    </nav>
                </HStack>

            </Box>
            
        </Box>
    )
}

export default Header;