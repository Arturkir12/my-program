import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; 
import { ReactComponent as CircleIcon } from "../../../../assets/svg/Circle.svg";

const MobileScreenTrust = () => {
  const { t } = useTranslation(); 

  return (
    <Flex
      justifyContent="center"
      mb="100px"
      alignItems="center"
      w="full"
      h={{ base: "auto", md: "1000px" }}
      py={{ base: "40px", md: "0" }}
      position="relative"
      bgColor="white"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "40px", md: "100px" }}
        align="center"
      >
      
        <Flex
          justifyContent="center"
          w={{ base: "90%", md: "550px" }}
          h="auto"
          position="relative"
          zIndex={2}
          border="0.5px solid rgb(255, 255, 255)"
          borderRadius="20px"
          backdropFilter="blur(15px)"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
          bgColor="rgba(234, 234, 234, 0.7)"
          px={{ base: "20px", md: "40px" }}
          py={{ base: "30px", md: "20px" }}
        >
          <Stack direction="column" spacing="20px">
     
            <Flex
              textDecoration="underline"
              textDecorationColor="#a41752"
              justify="center"
              textAlign="center"
              fontSize={{ base: "24px", md: "30px" }}
              color="#18181b"
              fontWeight="700"
            >
              {t("trust_section.title")}
            </Flex>

      
            <Flex justifyContent="center">
              <Flex
                fontSize={{ base: "12px", md: "14px" }}
                mt="10px"
                w="full"
                fontFamily="Roboto"
                textAlign="center"
              >
                {t("trust_section.description")}
              </Flex>
            </Flex>

           
            <Flex color="#18181b" fontSize={{ base: "18px", md: "20px" }} ml="10px" fontFamily="Roboto">
              {t("trust_section.our_experts")}
            </Flex>
            <Stack spacing="10px" ml="10px">
              <Flex align="center">
                <Flex
                  w="8px"
                  h="8px"
                  bgColor="#18181b"
                  borderRadius="50%"
                  mt="2px"
                  mr="8px"
                />
                {t("trust_section.expert_1")}
              </Flex>
              <Flex align="center">
                <Flex
                  w="8px"
                  h="8px"
                  bgColor="#18181b"
                  borderRadius="50%"
                  mt="2px"
                  mr="8px"
                />
                {t("trust_section.expert_2")}
              </Flex>
              <Flex align="center">
                <Flex
                  w="8px"
                  h="8px"
                  bgColor="#18181b"
                  borderRadius="50%"
                  mt="2px"
                  mr="8px"
                />
                {t("trust_section.expert_3")}
              </Flex>
              <Flex align="center">
                <Flex
                  w="8px"
                  h="8px"
                  bgColor="#18181b"
                  borderRadius="50%"
                  mt="2px"
                  mr="8px"
                />
                {t("trust_section.expert_4")}
              </Flex>
            </Stack>

    
            <Flex justifyContent="center" textAlign="center" fontSize="16px" fontWeight="500" mt="20px">
              {t("trust_section.confidence")}
            </Flex>

       
            <Flex justifyContent="center" mt="20px">
              <Stack direction="column" spacing="5px" align="center">
                <Flex fontWeight="700" fontFamily="Montserrat">
                  {t("trust_section.trust_title")}
                </Flex>
                <Flex justifyContent="center" textAlign="center" fontFamily="Roboto">
                  {t("trust_section.trust_description")}
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </Flex>


        <Flex
          position="absolute"
          top={{ base: "10%", md: "20%" }}
          left={{ base: "20%", md: "40%" }}
          transform="rotate(45deg)"
          zIndex={1}
        >
          <CircleIcon style={{ width: "200px", height: "200px" }} />
        </Flex>

        <Flex
          position="absolute"
          top={{ base: "600px", md: "60%" }}
          left={{ base: "5%", md: "-10%" }}
          zIndex={1}
        >
          <CircleIcon style={{ width: "150px", height: "300px" }} />
        </Flex>

        <Flex
          transform="rotate(-50deg)"
          position="absolute"
          top={{ base: "-5%", md: "0%" }}
          left={{ base: "-10%", md: "-15%" }}
          zIndex={1}
        >
          <CircleIcon style={{ width: "200px", height: "200px" }} />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default MobileScreenTrust;
