import React, { useEffect, useState } from "react";
import { Flex, Stack, useColorModeValue,Button } from "@chakra-ui/react";

const Header = () => {
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

  return (
    <Flex
      position="fixed"
      w="full"
      justifyContent="center"
      h="80px"
      bg={isScrolled ? bgColor : defaultBg}
      borderBottom={isScrolled ? border : "none"}
      backdropFilter={isScrolled ? bgFilter : "none"} // Исправлено свойство
      boxShadow={isScrolled ? boxShadow : "none"}
      transition="background-color 0.3s, box-shadow 0.3s, border 0.3s, backdrop-filter 0.3s"
      zIndex="1000"
    >
      <Flex alignItems="center" >
        <Flex justifyContent="space-around" w="100vw">
          <Flex
            color={isScrolled ? tColor : "white"}
            fontSize="50px"
            fontFamily="Jockey One"
          >
            LOGO
          </Flex>
          <Flex>
            <Stack direction="row" spacing="40px">
          <Flex 
          alignItems="center"
          fontFamily="Roboto"
          as="button"
          color={isScrolled ? tColor : "white"}
          >
            About
          </Flex>
          <Flex 
          fontFamily="Roboto"
          alignItems="center"
          as="button"
          color={isScrolled ? tColor : "white"}
          >
            Contact Us
          </Flex>
          <Flex 
          fontFamily="Roboto"
          alignItems="center"
          as="button"
          color={isScrolled ? tColor : "white"}
          >
            Careers
          </Flex>
          <Flex 
          fontFamily="Roboto"
          alignItems="center"
          as="button"
          color={isScrolled ? tColor : "white"}
          >
            Services
          </Flex>
          <Flex 
          alignItems="center"
          fontFamily="Roboto"
          as="button"
          color={isScrolled ? tColor : "white"}
          >
            Get a Quote
          </Flex>
          <Flex 
          alignItems="center"
          fontFamily="Roboto"
          as="button"
          color={isScrolled ? tColor : "white"}
          >
            Why Choose Us?
          </Flex>
          <Flex 
          alignItems="center"
          fontFamily="Roboto"
          as="button"
          color={isScrolled ? tColor : "white"}
          >
            Testimonials
          </Flex>
          </Stack>
          </Flex>
          <Flex alignItems="center">
            <Button borderRadius="10px" w="50px" fontSize="14px" fontFamily="Montserrat" color="white" bgColor="#27272a">
              EN
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
