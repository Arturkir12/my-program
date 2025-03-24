import React from "react";
import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; // импортируем хук для перевода
import MobileScreenAmazingTeam from "./ResponsiveAmazingTeam";

const LargeScreenAmazingTeam = () => {
  const { t } = useTranslation(); // инициализируем переводчик

  return (
    <Flex justifyContent="center" w="full" h="400" bgColor="#18181b" alignItems="center">
      <Stack direction="column">
        <Flex justify="center" color="#67e8f9" fontWeight="700" fontSize="16px" fontFamily="Montserrat">
          {t("amazing_team.about")}
        </Flex>
        <Flex fontFamily="Roboto" fontWeight="600" justify="center" fontSize="30px" color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa">
          {t("amazing_team.title")}
        </Flex>
        <Flex justifyContent="center">
        <Flex w="700px" textAlign="center" fontFamily="Roboto" fontSize="20px" fontWeight="600" color="#e4e4e7" justify="center">
          {t("amazing_team.description")}
        </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

const AmazingTeam = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex>
      {isMobile ? <MobileScreenAmazingTeam /> : <LargeScreenAmazingTeam />}
    </Flex>
  );
};

export default AmazingTeam;
