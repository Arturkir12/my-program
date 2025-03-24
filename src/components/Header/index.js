import React, { useEffect, useState } from "react";
import { Flex, Stack, useColorModeValue, Button, Menu, MenuButton, MenuList, MenuItem, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useBreakpointValue } from "@chakra-ui/react";
import MobileScreenHeader from "./ResponsiveHeader";
import Flag from "react-world-flags";

const LargeScreenHeader = () => {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const bgColor = useColorModeValue("rgba(234, 234, 234, 0.7)", "gray.800");
  const bgFilter = "blur(10px)";
  const border = useColorModeValue("1px solid white");
  const tColor = useColorModeValue("gray.800", "white");
  const defaultBg = "transparent";
  const boxShadow = "md";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY || window.scrollY < 50) {
        setIsVisible(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const getFlagCode = () => {
    switch (i18n.language) {
      case "en":
        return "US";
      case "ru":
        return "RU";
      default:
        return "US";
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
      zIndex="1000"
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
      opacity={isVisible ? 1 : 0}
      transition="transform 0.3s ease, opacity 0.3s ease, background-color 0.5s ease, box-shadow 0.5s ease"
    >
      <Flex alignItems="center">
        <Flex justifyContent="space-around" w="140vw">
          <Flex
            color={isScrolled ? tColor : "white"}
            fontSize="50px"
            fontFamily="Jockey One"
            as="button"
          >
            <Link href="/" textDecoration="none" _hover={{ textDecoration: "none" }}>
              LOGO
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Stack direction="row" spacing="40px">
              <Flex fontFamily="Montserrat" as="button" color={isScrolled ? tColor : "white"}>
                <Link fontSize="18px" _hover={{textDecoration:"none"}} href="/about">{i18n.t("about")}</Link>
              </Flex>
              <Flex fontFamily="Montserrat" as="button" color={isScrolled ? tColor : "white"}>
                <Link fontSize="18px" _hover={{textDecoration:"none"}} href="/contact">{i18n.t("contact_us")}</Link>
              </Flex>
              <Flex fontFamily="Montserrat" as="button" color={isScrolled ? tColor : "white"}>
                <Link fontSize="18px" _hover={{textDecoration:"none"}} href="/services">{i18n.t("services")}</Link>
              </Flex>
            </Stack>
            <Flex ml="80px" alignItems="center">
            <Menu>
              <MenuButton
                as={Button}
                borderRadius="10px"
                w="70px"
                fontSize="12px"
                fontFamily="Montserrat"
                color="white"
                rightIcon={<Flag code={getFlagCode()} style={{ width: "20px", height: "15px", marginLeft: "20px" }} />}
                bgColor="#27272a"
                _hover={{
                  bgColor: "white",
                  color: "#27272a",
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
    </Flex>
  );
};

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <Flex>{isMobile ? <MobileScreenHeader /> : <LargeScreenHeader />}</Flex>;
};

export default Header;
