import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection"

const ContactSection = () => {
    return (
        <FullScreenSection
            backgroundColor="#051550"
            isDarkBackground
            justifyContent ="center"
            py={16}
            spacing={8}>
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading mb={8}>Contact us</Heading>
                <Box w="100%" rounded='md'>
                    <form>
                        <VStack spacing={4}>
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel>email</FormLabel>
                                <Input></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Subject Line</FormLabel>
                                <Input></Input>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Message</FormLabel>
                                <Textarea height={250}></Textarea>
                            </FormControl>
                            <FormControl>
                                <Button type="submit" colorScheme="purple">Submit</Button>
                            </FormControl>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    )
}

export default ContactSection;