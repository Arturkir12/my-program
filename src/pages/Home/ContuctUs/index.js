import React from "react";
import { Flex, Button, Stack, useBreakpointValue,Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; // импортируем хук для перевода

import { ReactComponent as Kub1 } from "../../../assets/svg/Kubek.svg";
import { ReactComponent as Kub2 } from "../../../assets/svg/Kubek2.svg";

import { ReactComponent as PhoneIcon } from "../../../assets/svg/phone.svg";
import { ReactComponent as LocationIcon } from "../../../assets/svg/pin-location.svg";
import { ReactComponent as MailIcon } from "../../../assets/svg/Mail.svg";
import MobileScreenContuctUs from "./ResponsiveContuctUs";

const LargeScreenContuctUs = () => {
  const { t } = useTranslation(); // инициализируем переводчик

  const Email = "1234example.com";
  const PhoneNumber = "0123456789";
  const Location = "Example";

  return (
    <Flex justifyContent="center" alignItems="center" w="full" h="600px" bgColor="white">
      <Stack direction="row" spacing="200px">
        <Flex alignItems="center">
          <Stack direction="column">
            <Kub1 style={{ width: "300px", height: "300px" }} />
            <Kub2 style={{ width: "170px", height: "170px" }} />
          </Stack>
        </Flex>
        <Flex>
          <Stack direction="column">
            <Flex justifyContent="center" mt="10px" w="full" color="#db2777" fontWeight="500" fontSize="30px" >
              {t("contact_us_section.title")}
            </Flex>
            <Flex alignItems="center" position="relative">
              <Flex
                border="0.5px solid #9333ea"
                backdropFilter="blur(10px)"
                w="600px"
                borderRadius="50px"
                h="440px"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
                bgColor="rgba(234, 234, 234, 0.7)"
                zIndex="2"
              >
                <Flex alignItems="center" ml="25px">
                  <Stack direction="column">
                    <Flex color="#18181b" w="490px" fontWeight="500" fontSize="15px" fontFamily="Roboto">
                      {t("contact_us_section.description")}
                    </Flex>
                    <Flex mt="30px">
                      <Stack direction="column">
                        <Flex>
                          <Flex alignItems="center"><MailIcon /></Flex>
                          <Flex fontSize="17px" ml="10px" fontFamily="Roboto">
                            {t("contact_us_section.email")}: <Flex ml="5px" color="#27272a" textDecoration="underline">{Email}</Flex>
                          </Flex>
                        </Flex>
                        <Flex>
                          <Flex alignItems="center"><PhoneIcon /></Flex>
                          <Flex fontSize="17px" ml="10px" fontFamily="Roboto">
                            {t("contact_us_section.phone")}: <Flex color="#27272a" ml="5px" textDecoration="underline">{PhoneNumber}</Flex>
                          </Flex>
                        </Flex>
                        <Flex>
                          <Flex alignItems="center"><LocationIcon /></Flex>
                          <Flex fontSize="17px" ml="10px" fontFamily="Roboto">
                            {t("contact_us_section.location")}: <Flex ml="5px" color="#27272a" textDecoration="underline">{Location}</Flex>
                          </Flex>
                        </Flex>
                      </Stack>
                    </Flex>
                    <Flex mt="50px">
                      <Button
                        w="190px"
                        h="50px"
                        borderRadius="10px"
                        bgColor="#9333ea"
                        color="white"
                        fontWeight="500"
                        fontSize="13px"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
                        _hover={{ bgColor: "white", color: "#9333ea", border: "1px solid #9333ea" }}
                        onClick={() => window.location.href = "/contact"}
                      >
                       <Link href="/contact" textDecor="none"> {t("contact_us_section.more_info")}</Link>
                      </Button>
                    </Flex>
                    <Flex>
                      <Button
                        w="190px"
                        h="50px"
                        borderRadius="10px"
                        bgColor="#22d3ee"
                        color="white"
                        fontWeight="500"
                        fontSize="13px"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
                        _hover={{ bgColor: "white", color: "#22d3ee", border: "1px solid #22d3ee" }}
                      >
                        {t("contact_us_section.map")}
                      </Button>
                    </Flex>
                  </Stack>
                </Flex>
              </Flex>
              <Flex transform="rotate(45deg)" ml="80px" mt="380px" position="absolute" zIndex="1">
                <Kub2 style={{ width: "170px", height: "170px" }} />
              </Flex>
              <Flex transform="rotate(45deg)" position="absolute" ml="300px" zIndex="1">
                <Kub1 style={{ width: "170px", height: "170px" }} />
              </Flex>
              <Flex transform="rotate(290deg)" mt="-660px" ml="400px" position="absolute" zIndex="1">
                <Kub1 style={{ width: "170px", height: "170px" }} />
              </Flex>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
};

const Contuctus = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <Flex>{isMobile ? <MobileScreenContuctUs /> : <LargeScreenContuctUs />}</Flex>;
};

export default Contuctus;
