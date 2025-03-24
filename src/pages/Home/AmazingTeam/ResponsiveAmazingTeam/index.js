import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; // импортируем хук для перевода

const MobileScreenAmazingTeam = () => {
  const { t } = useTranslation(); // инициализируем переводчик

  return (
    <Flex
      mt={{ base: "0", md: "-109px" }}
      justifyContent="center"
      alignItems="center"
      bgColor="#18181b"
      w="full"
      h={{ base: "auto", md: "400px" }}
      py={{ base: "20px", md: "0" }}
    >
      <Stack direction="column" align="center" px={{ base: "20px", md: "0" }}>
        {/* Заголовок "ABOUT OUR TEAM AND OFFICE" */}
        <Flex
          justify="center"
          color="#67e8f9"
          fontWeight="700"
          fontSize={{ base: "12px", md: "16px" }}
          fontFamily="Montserrat"
          textAlign="center"
        >
          {t("amazing_team.about")}
        </Flex>

        {/* Основной заголовок */}
        <Flex
          fontFamily="Roboto"
          fontWeight="600"
          justify="center"
          fontSize={{ base: "20px", md: "30px" }}
          color="white"
          textAlign="center"
          textShadow="0 0 0px #fafafa, 0 0 4px #fafafa"
        >
          {t("amazing_team.title")}
        </Flex>

        {/* Описание команды */}
        <Flex
          w={{ base: "90%", md: "700px" }}
          textAlign="center"
          fontFamily="Roboto"
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight="600"
          color="#e4e4e7"
          justify="center"
        >
          {t("amazing_team.description")}
        </Flex>
      </Stack>
    </Flex>
  );
};

export default MobileScreenAmazingTeam;
