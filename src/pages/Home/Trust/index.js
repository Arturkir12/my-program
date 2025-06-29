import React from "react";
import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; 
import { ReactComponent as CircleIcon } from "../../../assets/svg/Circle.svg";
import MobileScreenTrust from "./ResponsiveTrust";

const LargeScreenTrust = () => {
  const { t } = useTranslation(); 

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="full"
      h="1000px"
      position="relative"
      bgColor="white"
    >
      <Stack direction="row">
        <Flex
          justifyContent="center"
          w="550px"
          h="800px"
          position="relative"
          zIndex={2}
          border="0.5px solid rgb(255, 255, 255)"
          borderRadius="20px"
          backdropFilter="blur(15px)"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
          bgColor="rgba(234, 234, 234, 0.7)"
        >
          <Stack mt="20px" direction="column">
            <Flex textDecoration="underline" textDecorationColor="#a41752" justify="center" textAlign="center" fontSize="30px" color="#18181b" fontWeight="700">
              {t("trust_section.title")}
            </Flex>
            <Flex justifyContent="center">
              <Flex fontSize="14px" mt="20px" w="490px" fontFamily="Roboto">
                {t("trust_section.description")}
              </Flex>
            </Flex>

            <Flex mt="30px" color="#18181b" fontSize="20px" ml="30px" fontFamily="Roboto">{t("trust_section.our_experts")}</Flex>
            {["expert_1", "expert_2", "expert_3", "expert_4"].map((key, index) => (
              <Flex ml="30px" key={index}>
                <Stack direction="row">
                  <Flex w="8px" bgColor="#18181b" borderRadius="50px" mt="9px" ml="2px" h="8px" />
                  <Flex>{t(`trust_section.${key}`)}</Flex>
                </Stack>
              </Flex>
            ))}

            <Flex justifyContent="center">
              <Flex mt="100px" textAlign="center" fontSize="16px" fontWeight="500" w="400px">
                {t("trust_section.confidence")}
              </Flex>
            </Flex>
            <Flex mt="50px" justifyContent="center">
              <Stack direction="column">
                <Flex justifyContent="center" fontWeight="700" fontFamily="Montserrat">{t("trust_section.trust_title")}</Flex>
                <Flex fontFamily="Roboto">{t("trust_section.trust_description")}</Flex>
              </Stack>
            </Flex>
          </Stack>
        </Flex>

        <Flex position="absolute" mt="100px" ml="300px" transform="rotate(45deg)" zIndex={1}>
          <CircleIcon style={{ width: "400px", height: "400px" }} />
        </Flex>

        <Flex position="absolute" mt="520px" ml="-120px" zIndex={1}>
          <CircleIcon style={{ width: "280px", height: "500px" }} />
        </Flex>

        <Flex transform="rotate(-50deg)" position="absolute" mt="-100px" ml="-100px" zIndex={1}>
          <CircleIcon style={{ width: "300px", height: "300px" }} />
        </Flex>
      </Stack>
    </Flex>
  );
};

const Trust = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <Flex>{isMobile ? <MobileScreenTrust /> : <LargeScreenTrust />}</Flex>;
};

export default Trust;

