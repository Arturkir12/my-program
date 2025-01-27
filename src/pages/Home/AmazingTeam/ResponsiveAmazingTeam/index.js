import React from "react";
import {
    Flex,
    Stack
} from "@chakra-ui/react"


const MobileScreenAmazingTeam = () => {
    return(
        <Flex
  justifyContent="center"
  w="full"
  h={{ base: "auto", md: "400px" }}
  py={{ base: "40px", md: "0" }}
  bgColor="#18181b"
  alignItems="center"
>
  <Stack
    direction="column"
    spacing={{ base: "20px", md: "30px" }}
    align="center"
    px={{ base: "20px", md: "0" }}
  >
    {/* Заголовок "ABOUT OUR TEAM AND OFFICE" */}
    <Flex
      justify="center"
      color="#db2777"
      fontWeight="500"
      fontSize={{ base: "14px", md: "16px" }}
      fontFamily="Montserrat"
      textAlign="center"
    >
      ABOUT OUR TEAM AND OFFICE
    </Flex>

    {/* Основной заголовок */}
    <Flex
      fontFamily="Roboto"
      fontWeight="600"
      justify="center"
      fontSize={{ base: "24px", md: "30px" }}
      color="white"
      textAlign="center"
      textShadow="0 0 0px #fafafa, 0 0 4px #fafafa"
    >
      Meet the Heart of Our Office: Our Amazing Team!
    </Flex>

    {/* Описание команды */}
    <Flex
      w={{ base: "90%", md: "700px" }}
      textAlign="center"
      fontFamily="Roboto"
      fontSize={{ base: "16px", md: "20px" }}
      fontWeight="600"
      color="#e4e4e7"
      justify="center"
    >
      We are a team of talented professionals united by one goal: to create
      innovative solutions for our clients. Our employees are the heart of the
      company, and each of us contributes our unique skills to the development
      of the project. We value teamwork, a creative approach, and a constant
      strive for excellence.
    </Flex>
  </Stack>
</Flex>

    )
}

export default MobileScreenAmazingTeam