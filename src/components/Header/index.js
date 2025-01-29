import React, { useEffect, useState } from "react";
import { Flex, Stack, useColorModeValue, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useBreakpointValue } from "@chakra-ui/react";
import MobileScreenHeader from "./ResponsiveHeader";

import Flag from "react-world-flags";




const LargeScreenHeader = () => {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);


  const bgColor = useColorModeValue("rgba(234, 234, 234, 0.7)", "gray.800");
  const bgFilter = "blur(10px)";
  const border = useColorModeValue("1px solid white");
  const tColor = useColorModeValue("gray.800", "white");
  const defaultBg = "transparent";
  const boxShadow = "md";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Функция переключения языка
  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Динамическое определение флага
  const getFlagCode = () => {
    switch (i18n.language) {
      case "en":
        return "US"; // Флаг США для английского
      case "ru":
        return "RU"; // Флаг России для русского
      default:
        return "US"; // Можно добавить флаг по умолчанию
    }
  };

  return (
    <Flex
      position="fixed"
      w="full"
      justifyContent="center"
      h="80px"
      bg={isScrolled ? bgColor : defaultBg}
      borderBottom={isScrolled ? border : "none"}
      backdropFilter={isScrolled ? bgFilter : "none"}
      boxShadow={isScrolled ? boxShadow : "none"}
      transition="background-color 0.3s, box-shadow 0.3s, border 0.3s, backdrop-filter 0.3s"
      zIndex="1000"
    >
      <Flex alignItems="center">
        <Flex justifyContent="space-around" w="100vw">
          <Flex
            color={isScrolled ? tColor : "white"}
            fontSize="50px"
            fontFamily="Jockey One"
          >
            LOGO
          </Flex>
          <Flex alignItems="center">
            <Stack direction="row" spacing="40px">
              <Flex  _hover={{textDecoration:"underline"}} fontFamily="Roboto" as="button" color={isScrolled ? tColor : "white"}>
                {i18n.t("about")}
              </Flex>
              <Flex  _hover={{textDecoration:"underline"}} fontFamily="Roboto" as="button" color={isScrolled ? tColor : "white"}>
                {i18n.t("contact_us")}
              </Flex>
              <Flex _hover={{textDecoration:"underline"}} fontFamily="Roboto" as="button" color={isScrolled ? tColor : "white"}>
                {i18n.t("careers")}
              </Flex>
              <Flex _hover={{textDecoration:"underline"}} fontFamily="Roboto" as="button" color={isScrolled ? tColor : "white"}>
                {i18n.t("services")}
              </Flex>
              <Flex _hover={{textDecoration:"underline"}} fontFamily="Roboto" as="button" color={isScrolled ? tColor : "white"}>
                {i18n.t("get_a_quote")}
              </Flex>
              <Flex _hover={{textDecoration:"underline"}} fontFamily="Roboto" as="button" color={isScrolled ? tColor : "white"}>
                {i18n.t("why_choose_us")}
              </Flex>
              <Flex _hover={{textDecoration:"underline"}} fontFamily="Roboto" as="button" color={isScrolled ? tColor : "white"}>
                {i18n.t("testimonials")}
              </Flex>
            </Stack>
          </Flex>
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                as={Button}
                borderRadius="10px"
                w="70px"
                fontSize="12px"
                fontFamily="Montserrat"
                color="white"
                rightIcon={<Flag code={getFlagCode()} style={{ width: "20px", height: "15px",marginLeft:"20px" }} />}
                bgColor="#27272a"
                _hover={{
                  bgColor:"white",
                  color:"#27272a"
                }}
              >
                {i18n.language.toUpperCase()}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => toggleLanguage("en")}>English</MenuItem>
                <MenuItem onClick={() => toggleLanguage("ru")}>Русский</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <Flex>{isMobile ? <MobileScreenHeader /> : <LargeScreenHeader />}</Flex>;
};

export default Header;
