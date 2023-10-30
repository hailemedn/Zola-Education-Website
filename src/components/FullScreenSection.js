import * as React from "react";
import { VStack } from "@chakra-ui/react";


const FullScreenSection = ({children, isDarkBackground, ...boxProps}) => {
    return (
        <VStack 
            backgroundColor={boxProps.backgroundColor}
            color={isDarkBackground ? "white" : "black"}
            overflowX="hidden">
            <VStack maxWidth="1280px" minHeight="100vh" {...boxProps} borderBottom="#eef0f1 solid 0.2px">
                {children}
            </VStack>
        </VStack>
    )
}

export default FullScreenSection;