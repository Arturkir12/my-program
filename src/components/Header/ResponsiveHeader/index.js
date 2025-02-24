import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  IconButton,
  Stack,
  useColorModeValue,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ReactComponent as MenuIcon } from "../../../assets/svg/Menu.svg";
import { ReactComponent as MenuIconScrolled } from "../../../assets/svg/MenuScrolled.svg";
import { CloseIcon } from "@chakra-ui/icons";
import Flag from "react-world-flags";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

const MobileScreenHeader = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate(); // Хук для перехода
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = (lang) => {
    const currentPath = window.location.pathname; // Получаем текущий путь
    i18n.changeLanguage(lang); // Меняем язык
    navigate(currentPath); // Переходим на текущую страницу для обновления контента
  };

  const getFlagCode = () => {
    switch (i18n.language) {
      case "en":
        return "US";
      case "ru":
        return "RU";
      default:
        return "US"; // Можно добавить флаг по умолчанию
    }
  };

  const handlenavigate = useNavigate();
  const homepage = () => {
    return handlenavigate("/");
  };
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Flex
        position="fixed"
        w="full"
        justifyContent="center"
        h="60px"
        bg={isScrolled ? bgColor : defaultBg}
        borderBottom={isScrolled ? border : "none"}
        backdropFilter={isScrolled ? bgFilter : "none"}
        boxShadow={isScrolled ? boxShadow : "none"}
        zIndex="1000"
        transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
        opacity={isVisible ? 1 : 0}
        transition="transform 0.3s ease, opacity 0.3s ease, background-color 0.5s ease, box-shadow 0.5s ease"
      >
        <Flex alignItems="center" w="full" px={4} justifyContent="space-between">
          <Box
            color={isScrolled ? tColor : "white"}
            fontSize="24px"
            fontWeight="bold"
            fontFamily="Jockey One"
            onClick={homepage}
            as="button"
          >
            LOGO
          </Box>
          <IconButton
            aria-label="Menu"
            bgColor="transparent"
            _hover={{ bgColor: "transparent" }}
            _active={{ bgColor: "transparent" }}
            onClick={toggleMenu}
            icon={
              isMenuOpen ? (
                <CloseIcon color="white" />
              ) : isScrolled ? (
                <MenuIconScrolled style={{ width: "24px", height: "24px" }} />
              ) : (
                <MenuIcon style={{ width: "24px", height: "24px" }} />
              )
            }
          />
        </Flex>
      </Flex>
      {isMenuOpen && (
        <Flex
          position="fixed"
          top="60px"
          left="0"
          w="100vw"
          h="calc(100vh - 60px)"
          bg="#18181b"
          zIndex="900"
          direction="column"
          justify="center"
        >
          <Flex ml="20px">
            <Stack direction="column" spacing="10px">
              <Flex fontSize="20px" color="white" fontFamily="Roboto" as="button">
                <Link href="/about">{i18n.t("about")}</Link>
              </Flex>
              <Flex fontSize="20px" color="white" fontFamily="Roboto" as="button">
                <Link href="/contact">{i18n.t("contact_us")}</Link>
              </Flex>
              <Flex fontSize="20px" color="white" fontFamily="Roboto" as="button">
                <Link href="/services">{i18n.t("services")}</Link>
              </Flex>
              <Flex mt="300px" alignItems="center">
                <Menu>
                  <MenuButton
                    as={Button}
                    borderRadius="10px"
                    w="70px"
                    fontSize="12px"
                    fontFamily="Montserrat"
                    color="white"
                    rightIcon={
                      <Flag
                        code={getFlagCode()}
                        style={{ width: "20px", height: "15px", marginLeft: "20px" }}
                      />
                    }
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
            </Stack>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default MobileScreenHeader;

