import React, { useState, useEffect } from "react";
import { Flex, Stack, Button, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Iconhello } from "../../../assets/svg/3d-holographic-fluid-shape-illustration-b 1.svg";
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
      h="1540px"
    >
      <Stack direction="column">
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
                    fontFamily="Montserrat"
                    color="white"
                    fontWeight="900"
                    textShadow="0 0 0px #fafafa, 0 0 6px #fafafa"
                    textDecor="underline"
                    fontSize="20px"
                  >
                    {t("navbar.ambitions")}
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
              <Flex transform="scaleX(-1)">
                <Iconhello style={{ width: "700px", height: "700px" }} />
              </Flex>
            </Stack>
          </Flex>
        </Flex>
        <Flex>
          <VideoComponent />
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

