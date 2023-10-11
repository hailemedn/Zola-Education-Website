import { Card, CardBody, CardFooter, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Cards = ({title, description, imageSrc}) => {
    return (
        <Card>
            <CardBody>
                <Image src={imageSrc} borderRadius='lg'></Image>
                <VStack>
                    <Heading size='md'>{title}</Heading>
                    <Text>{description}</Text>
                </VStack>
            </CardBody>
            <CardFooter>
                <Text>See more</Text>
            </CardFooter>
        </Card>
    )
}

export default Cards;