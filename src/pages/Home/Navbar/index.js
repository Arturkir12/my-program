import React, { useState, useEffect } from "react";
import { Flex, Stack, Button, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import MobileScreenNavbar from "./ResponsiveNavbar";
import VideoComponent from "../NavbarVideo";

const LargeScreenNavbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const gradientStart =
    "linear-gradient(135deg, white -300%, rgb(111, 19, 203) 40%, white 300%)";
  const gradientEnd =
    "linear-gradient(130deg, rgb(111, 19, 203) 40%, white 300%, white -300%)";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      transition="background-size 0.5s ease-in-out, background-position 0.5s ease-in-out"
      background={isScrolled ? gradientEnd : gradientStart}
      backgroundSize="200% 200%"
      backgroundPosition={isScrolled ? "100% 100%" : "0% 0%"}
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
                  <Flex
                    letterSpacing="0px"
                    w="500px"
                    fontFamily="Roboto"
                    fontWeight="900"
                    fontSize="40px"
                    color="white"
                  >
                    {t("navbar.build_future")}
                  </Flex>
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
                    >
                      {t("navbar.start")}
                    </Button>
                  </Flex>
                </Stack>
              </Flex>
              <Flex mt="320px" position="relative">
                <Flex
                  position="absolute"
                  w="500px"
                  h="500px"
                  bgGradient="linear(to-b,rgb(174, 28, 232), white)"
                  ml="80px"
                  mt="-50px"
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
