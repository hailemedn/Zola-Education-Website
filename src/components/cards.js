import { Card, CardBody, CardFooter, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cards = ({title, description, imageSrc}) => {
    return (
        <Card>
            <CardBody>
                <Image src={imageSrc} borderRadius='lg'></Image>
                <VStack mt="6" alignItems="flex-start">
                    <Heading size='md'>{title}</Heading>
                    <Text color="#868686">{description}</Text>
                </VStack>
            </CardBody>
            <CardFooter>
                <Text cursor="pointer"> <a href="https://www.youtube.com/@zolaeducation" target="_blank" rel="noreferrer noopener">Learn <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a> </Text>
            </CardFooter>
        </Card>
    )
}

export default Cards;