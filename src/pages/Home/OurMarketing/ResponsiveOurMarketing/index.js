import React from "react";
import {
    Flex,
    Stack
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next";

const MobileScreenOurMarketing = () => {
  const { t } = useTranslation();
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
      color="#db2777"
      fontWeight="500"
      fontSize={{ base: "12px", md: "16px" }}
      fontFamily="Montserrat"
      textAlign="center"
    >
      {t("our_marketing.title")}
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
          {t("our_marketing.subtitle")}
        </Flex>
        <Flex fontSize={{ base: "12px", md: "16px" }} color="#e4e4e7">
        {t("our_marketing.description")}
        </Flex>
      </Stack>
    </Flex>
  </Stack>
</Flex>

        </Flex>
    )
}
export default MobileScreenOurMarketing