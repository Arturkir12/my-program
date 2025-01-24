import React from "react";
import {
    Flex,
    Stack,
} from "@chakra-ui/react"


const Marketing = () => {
    return(
        <Flex mt="-109px" justifyContent="center"  alignItems="center" bgColor="#18181b" w="full" h="400px">
            <Stack direction="column">
            <Flex justify="center" color="#db2777" fontWeight="500" fontSize="16px" fontFamily="Montserrat" >
            PERSONALIZED DIGITAL WORKSPACE
            </Flex>
            <Flex w="800px" textAlign="center" fontFamily="Roboto" fontSize="20px" fontWeight="600" color="#e4e4e7" justify="center">
            <Stack direction="column">
            <Flex justify="center" fontSize="30px" color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa">Everything you need, anytime, anywhere.</Flex>
            <Flex>
              In a world where focus and flow are increasingly hard to find, we know that simplifying IT makes you more productive, happier, and enhances collaboration. Our digital workspace eliminates IT complexity, centralizes access to tools and resources, streamlines workflows, and strengthens internal communication. We create a workspace tailored to your specific needs, available wherever and whenever you need it.  
            </Flex>
            </Stack>
            </Flex>
            </Stack>
            <Flex>
            </Flex>
        </Flex>
    )
}

export default Marketing