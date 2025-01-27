import React, { useState, useEffect } from "react";
import {
  Flex,
  IconButton,
  useColorModeValue,
  Box,
  Stack,
  Button
} from "@chakra-ui/react";
import { ReactComponent as MenuIcon } from "../../../assets/svg/Menu.svg";
import { ReactComponent as MenuIconScrolled } from "../../../assets/svg/MenuScrolled.svg";
import { CloseIcon } from "@chakra-ui/icons";

const MobileScreenHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bgColor = useColorModeValue("rgba(234, 234, 234, 0.7)", "#1a202c");
  const bgFilter = "blur(10px)";
  const border = useColorModeValue("1px solid white", "1px solid #2d3748");
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling again
    }

    // Clean up on component unmount or menu close
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <Flex
        position="fixed"
        w="full"
        justifyContent="center"
        h="60px"
        bg={isScrolled ? bgColor : defaultBg}
        borderBottom={isScrolled ? border : "none"}
        backdropFilter={isScrolled ? bgFilter : "none"}
        boxShadow={isScrolled ? boxShadow : "none"}
        transition="background-color 0.3s, box-shadow 0.3s, border 0.3s, backdrop-filter 0.3s"
        zIndex="1000"
      >
        <Flex alignItems="center" w="full" px={4} justifyContent="space-between">
          <Box
            color={isScrolled ? tColor : "white"}
            fontSize="24px"
            fontWeight="bold"
            fontFamily="Jockey One"
          >
            LOGO
          </Box>
          <IconButton
            aria-label="Menu"
            bgColor="transparent"
            _hover={{ bgColor: "transparent" }}
            _active={{ bgColor: "transparent" }}
            onClick={toggleMenu}
            icon={isMenuOpen ? (
              <CloseIcon color="white" />
            ) : isScrolled ? (
              <MenuIconScrolled style={{ width: "24px", height: "24px" }} />
            ) : (
              <MenuIcon style={{ width: "24px", height: "24px" }} />
            )}
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
          <Flex
            fontSize="20px"
            color="white"
            fontFamily="Roboto"
            as="button"
          >
            About
          </Flex>
          <Flex
            fontSize="20px"
            color="white"
            fontFamily="Roboto"
            as="button"
          >
            Contact Us
          </Flex>
          <Flex
            fontSize="20px"
            color="white"
            fontFamily="Roboto"
            as="button"
          >
            Careers
          </Flex>
          <Flex
            fontSize="20px"
            color="white"
            fontFamily="Roboto"
            as="button"
          >
            Services
          </Flex>
          <Flex
            fontSize="20px"
            color="white"
            fontFamily="Roboto"
            as="button"
          >
            Get a Quote
          </Flex>
          <Flex
            fontSize="20px"
            color="white"
            fontFamily="Roboto"
            as="button"
          >
            Why Choose Us?
          </Flex>
          <Flex
            fontSize="20px"
            color="white"
            fontFamily="Roboto"
            as="button"
          >
            Testimonials
          </Flex>
          <Flex mt="200px">
            <Button _active={{bgColor:"#27272a"}} _hover={{bgColor:"#27272a"}} borderRadius="10px" w="50px" fontSize="14px" fontFamily="Montserrat" color="white" bgColor="#27272a">
              EN
            </Button>
          </Flex>
          </Stack>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default MobileScreenHeader;

