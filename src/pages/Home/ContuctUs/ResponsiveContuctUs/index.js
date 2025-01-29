import React from "react";
import {
    Flex,
    Button,
    Stack,
} from "@chakra-ui/react"

import { useTranslation } from "react-i18next";

import {ReactComponent as PhoneIcon} from "../../../../assets/svg/phone.svg"
import {ReactComponent as LocationIcon} from "../../../../assets/svg/pin-location.svg"
import {ReactComponent as MailIcon} from "../../../../assets/svg/Mail.svg"

const MobileScreenContuctUs = () => {
  const { t } = useTranslation();
    const Email = "1234example.com"
    const PhoneNumber = "0123456789"
    const Location = "Example"
    return(
        <Flex
  justifyContent="center"
  mb="100px"
  alignItems="center"
  w="full"
  h={{ base: "auto", md: "600px" }}
  py={{ base: "20px", md: "0" }}
  bgColor="white"
>
  <Stack
    direction={{ base: "column", md: "row" }}
    spacing={{ base: "40px", md: "200px" }}
    align="center"
>
    <Flex>
      <Stack direction="column" spacing="20px" align="center">
        {/* Заголовок */}
        <Flex
          justifyContent="center"
          mt="10px"
          w="full"
          color="#db2777"
          fontWeight="500"
          fontSize={{ base: "20px", md: "30px" }}
          fontFamily="Montserrat"
          textAlign="center"
        >
          {t("contact_us_section.title")}
        </Flex>

        {/* Карточка с информацией */}
        <Flex
          border="0.5px solid #9333ea"
          backdropFilter="blur(10px)"
          w={{ base: "90%", md: "600px" }}
          borderRadius="20px"
          h="auto"
          py="20px"
          px="20px"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
          bgColor="rgba(234, 234, 234, 0.7)"
          position="relative"
        >
          <Stack direction="column" spacing="20px" align="flex-start">
            <Flex
              color="#18181b"
              fontWeight="500"
              fontSize={{ base: "14px", md: "15px" }}
              fontFamily="Roboto"
              textAlign="center"
            >
             {t("contact_us_section.description")}
            </Flex>

            {/* Контакты */}
            <Stack direction="column" spacing="10px">
              <Flex align="center">
                <MailIcon />
                <Flex
                  fontSize={{ base: "14px", md: "17px" }}
                  ml="10px"
                  fontFamily="Roboto"
                >
                  {t("contact_us_section.email")}{" "}
                  <Flex
                    ml="5px"
                    color="#27272a"
                    textDecoration="underline"
                  >
                    {Email}
                  </Flex>
                </Flex>
              </Flex>
              <Flex align="center">
                <PhoneIcon />
                <Flex
                  fontSize={{ base: "14px", md: "17px" }}
                  ml="10px"
                  fontFamily="Roboto"
                >
                  {t("contact_us_section.phone")}{" "}
                  <Flex
                    color="#27272a"
                    ml="5px"
                    textDecoration="underline"
                  >
                    {PhoneNumber}
                  </Flex>
                </Flex>
              </Flex>
              <Flex align="center">
                <LocationIcon />
                <Flex
                  fontSize={{ base: "14px", md: "17px" }}
                  ml="10px"
                  fontFamily="Roboto"
                >
                  {t("contact_us_section.location")}{" "}
                  <Flex
                    ml="5px"
                    color="#27272a"
                    textDecoration="underline"
                  >
                    {Location}
                  </Flex>
                </Flex>
              </Flex>
            </Stack>

            {/* Кнопки */}
            <Flex gap="10px" justifyContent="center" w="full">
              <Button
                w={{ base: "110px", md: "190px" }}
                h="50px"
                borderRadius="10px"
                bgColor="#9333ea"
                color="white"
                fontWeight="500"
                fontSize="10px"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
                _hover={{
                  bgColor: "white",
                  color: "#9333ea",
                  border: "1px solid #9333ea",
                }}
              >
                {t("contact_us_section.more_info")}
              </Button>
              <Button
                w={{ base: "110px", md: "190px" }}
                h="50px"
                borderRadius="10px"
                bgColor="#22d3ee"
                color="white"
                fontWeight="500"
                fontSize="10px"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
                _hover={{
                  bgColor: "white",
                  color: "#22d3ee",
                  border: "1px solid #22d3ee",
                }}
              >
                 {t("contact_us_section.map")}
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  </Stack>
</Flex>

    )
} 

export default MobileScreenContuctUs