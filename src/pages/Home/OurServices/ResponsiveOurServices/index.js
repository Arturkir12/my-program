import React from "react";
import {
    Flex,
    Stack
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next";

const MobileScreenOurServices = () => {
  const { i18n } = useTranslation();
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
  <Stack direction="column"  px="4">
    {/* Заголовок */}
    <Flex
      justify="center"
      color="#67e8f9"
      fontWeight="700"
      fontSize={{ base: "12px", md: "16px" }}
      fontFamily="Montserrat"
      textAlign="center"
    >
      {i18n.t("services_section.digital_services")}
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
      <Stack direction="column" >
        <Flex
          justify="center"
          fontSize={{ base: "20px", md: "30px" }}
          color="white"
          textShadow="0 0 0px #fafafa, 0 0 4px #fafafa"
        >
            {i18n.t("services_section.services_title")}
        </Flex>
        <Flex fontSize={{ base: "12px", md: "16px" }} color="#e4e4e7">
        {i18n.t("services_section.services_subtitle")}
        </Flex>
      </Stack>
    </Flex>
  </Stack>
</Flex>

        </Flex>
    )
}
export default MobileScreenOurServices