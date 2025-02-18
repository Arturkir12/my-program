import React from "react";
import { Flex, Stack, Box, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; // импортируем хук для перевода
import MobileScreenOurMarketing from "./ResponsiveOurMarketing";

const LargeScreenOurMarketing = () => {
  const { t } = useTranslation(); // инициализируем переводчик

  return (
    <Flex  justifyContent="center" alignItems="center" bgColor="#18181b" w="full" h="400px">
      <Stack direction="column"  textAlign="center">
        <Box>
          <Flex justify="center" color="#db2777" fontWeight="500" fontSize="16px" fontFamily="Montserrat">
            {t("our_marketing.title")}
          </Flex>
        </Box>
        <Box w="800px">
          <Flex direction="column" align="center">
            <Box>
              <Flex
                fontFamily="Roboto" fontWeight="600" justify="center" fontSize="30px" color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa"
              >
                {t("our_marketing.subtitle")}
              </Flex>
            </Box>
            <Box>
              <Flex color="#e4e4e7" fontFamily="Roboto" fontSize="20px" fontWeight="600">
                {t("our_marketing.description")}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
};

const Marketing = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return <Flex>{isMobile ? <MobileScreenOurMarketing /> : <LargeScreenOurMarketing />}</Flex>;
};

export default Marketing;
