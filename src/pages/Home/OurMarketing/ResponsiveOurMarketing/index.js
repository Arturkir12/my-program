import React from "react";
import {
    Flex,
    Stack
} from "@chakra-ui/react"


const MobileScreenOurMarketing = () => {
    return(
        <Flex>
            <Flex
  mt={{ base: "0", md: "-109px" }}
  justifyContent="center"
  alignItems="center"
  bgColor="#18181b"
  w="full"
  h={{ base: "auto", md: "400px" }}
  py={{ base: "20px", md: "0" }}
>
  <Stack direction="column" spacing={4} px="4">
    {/* Заголовок */}
    <Flex
      justify="center"
      color="#db2777"
      fontWeight="500"
      fontSize={{ base: "12px", md: "16px" }}
      fontFamily="Montserrat"
      textAlign="center"
    >
      PERSONALIZED DIGITAL WORKSPACE
    </Flex>

    {/* Основной текст */}
    <Flex
      w={{ base: "full", md: "800px" }}
      textAlign="center"
      fontFamily="Roboto"
      fontSize={{ base: "14px", md: "20px" }}
      fontWeight="600"
      color="#e4e4e7"
      justify="center"
    >
      <Stack direction="column" spacing={3}>
        <Flex
          justify="center"
          fontSize={{ base: "20px", md: "30px" }}
          color="white"
          textShadow="0 0 0px #fafafa, 0 0 4px #fafafa"
        >
          Everything you need, anytime, anywhere.
        </Flex>
        <Flex fontSize={{ base: "12px", md: "16px" }} color="#e4e4e7">
          In a world where focus and flow are increasingly hard to find, we know that simplifying IT makes you more productive, happier, and enhances collaboration. Our digital workspace eliminates IT complexity, centralizes access to tools and resources, streamlines workflows, and strengthens internal communication. We create a workspace tailored to your specific needs, available wherever and whenever you need it.
        </Flex>
      </Stack>
    </Flex>
  </Stack>
</Flex>

        </Flex>
    )
}
export default MobileScreenOurMarketing