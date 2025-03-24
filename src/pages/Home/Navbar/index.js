import React, { useState, useEffect } from "react";
import { Flex, Stack, Button, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import MobileScreenNavbar from "./ResponsiveNavbar";
import VideoComponent from "../NavbarVideo";
import FlipText from "./FlipText";

const LargeScreenNavbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const gradientStart =
    "linear-gradient(135deg, white -300%, rgb(11, 80, 109) 40%, white 300%)";
  // const gradientEnd =
  //   "linear-gradient(130deg, rgb(16, 101, 137) 40%, white 300%, white -300%)";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: 3200,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      transition="background-size 0.5s ease-in-out, background-position 0.5s ease-in-out"
      background={gradientStart}
      backgroundSize="200% 200%"
      direction="column"
      w="full"
      justifyContent="center"
      alignItems="center"
      h="800px"
      position="relative"
      overflow="hidden"
    >
      <Stack direction="column" zIndex={2}>
        <Flex justify="center">
          <Flex>
            <Stack direction="row" spacing="px">
              <Flex
                w="650px"
                fontWeight="700"
                fontFamily="Roboto"
                letterSpacing="0.9px"
                alignItems="center"
              >
                <Stack direction="column" spacing="0px">
                  <FlipText /> 
                  <Flex
                    fontFamily="Montserrat"
                    w="440px"
                    fontWeight="900"
                    background="none"
                    textShadow="none"
                    fontSize="18px"
                    color="#18181b"
                  >
                    {t("navbar.welcome")}
                  </Flex>
                  <Flex mt="80px">
                    <Button
                      _hover={{ bgColor: "white", color: "#18181b" }}
                      fontSize="13px"
                      w="200px"
                      fontWeight="500"
                      fontFamily="Montserrat"
                      color="white"
                      bgColor="#18181b"
                      onClick={scrollDown}
                    >
                      {t("navbar.start")}
                    </Button>
                  </Flex>
                </Stack>
              </Flex>
              <Flex mt="320px" position="relative">
                <Flex
                  position="absolute"
                  w="900px"
                  h="900px"
                  bgGradient="linear(to-b,rgb(1, 238, 255), white)"
                  ml="200px"
                  mt="-190px"
                  zIndex={-1}
                  filter="blur(300px)"
                />
                <VideoComponent width="700px" height="700px" zIndex={1} />
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <Flex>{isMobile ? <MobileScreenNavbar /> : <LargeScreenNavbar />}</Flex>;
};

export default Navbar;
