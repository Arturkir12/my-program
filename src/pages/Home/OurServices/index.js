import React from "react";
import { Flex, Stack, Box, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; // импортируем хук для перевода
import MobileScreenOurServices from "./ResponsiveOurServices";

const LargeScreenOurServices = () => {
  const { i18n } = useTranslation();
  return (
    <Flex  justifyContent="center" alignItems="center" bgColor="#18181b" w="full" h="400px">
      <Stack direction="column"  textAlign="center">
        <Box>
          <Flex justify="center"color="#67e8f9" fontWeight="700" fontSize="16px" fontFamily="Montserrat">
          {i18n.t("services_section.digital_services")}
          </Flex>
        </Box>
        <Box w="800px">
          <Flex direction="column" align="center">
            <Box>
              <Flex
                fontFamily="Roboto" fontWeight="600" justify="center" fontSize="30px" color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa"
              >
               {i18n.t("services_section.services_title")}
              </Flex>
            </Box>
            <Box>
              <Flex color="#e4e4e7" fontFamily="Roboto" fontSize="20px" fontWeight="600">
              {i18n.t("services_section.services_subtitle")}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
};
const OurServices = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    return <Flex>{isMobile ? <MobileScreenOurServices /> : <LargeScreenOurServices />}</Flex>;
  };
  
  export default OurServices;