import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection"
import { useFormik } from "formik";
import * as Yup from 'yup';

const ContactSection = () => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            subjectline: "",
            message: "",
        },
        onSubmit: () => {
            console.log("Submitted Successfully!")
        },

        validationSchema: Yup.object().shape({
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            subjectline: Yup.string().required("Required"),
            message: Yup.string().min(25).required("required")
        })
    })
    console.log(formik);
    return (
        <FullScreenSection
            backgroundColor= "#FAF9F6"
            justifyContent ="center"
            py={16}
            spacing={8}>
            <VStack w="100vw" p={3} alignItems="center">
                <Heading mb={8} as="h1" id="contactus-section">Contact us</Heading>
                <Box w="100%" maxW="700px" rounded='md'>
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                <FormLabel htmlFor="firstName">First Name</FormLabel>
                                <Input 
                                    id="firstName"
                                    name="firstName"
                                    borderColor= "black"
                                    {...formik.getFieldProps("firstName")}>
                                </Input>
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                <FormLabel>email</FormLabel>
                                <Input id="email" name="email" borderColor= "black" {...formik.getFieldProps("email")}></Input>
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.subjectline && formik.touched.subjectline}>
                                <FormLabel htmlFor="subjectLine">Subject Line</FormLabel>
                                <Input id="subjectLine" name="subjectLine" borderColor= "black"{...formik.getFieldProps("subjectline")}></Input>
                                <FormErrorMessage>{formik.errors.subjectline}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.message && formik.touched.message}>
                                <FormLabel>Message</FormLabel>
                                <Textarea height={250} id="message" name="message" borderColor= "black" {...formik.getFieldProps("message")}></Textarea>
                                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <Button type="submit" colorScheme="blue" width="30%" p="20px">Submit</Button>
                            </FormControl>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    )
}

export default ContactSection;