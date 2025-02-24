import React,{useState,useEffect} from "react";
import {
    Flex,
    Stack,
    Button
} from "@chakra-ui/react"

import { useTranslation } from "react-i18next";
import VideoComponent from "../../NavbarVideo";

const MobileScreenNavbar = () => {
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
      const scrollDown = () => {
        window.scrollBy({
          top: 3800,  // Сколько пикселей вниз прокручиваем
          behavior: "smooth",  // Плавная прокрутка
        });
      };
    return(
        <Flex 
        transition="background-size 0.5s ease-in-out, background-position 0.5s ease-in-out"
        background={isScrolled ? gradientEnd : gradientStart}
        backgroundSize="200% 200%"
        backgroundPosition={isScrolled ? "100% 100%" : "0% 0%"}
        direction="column"
        w="full"
        justifyContent="center"
        alignItems="center"
        h="670px"
        >
        <Stack direction="column">
        <Flex
          w="full"
          fontWeight="700"
          fontFamily="Roboto"
          letterSpacing="0.9px"
          alignItems="center"  
        >
          <Stack direction="column" spacing="0px">
            <Flex justifyContent="center" w="full">
            <Stack direction="column">
            <Flex  justifyContent="center" textAlign="center" letterSpacing="0px"  fontFamily="Roboto" fontWeight="900" fontSize="17px"  color="white" >{t("navbar.build_future")}</Flex>
            <Flex justifyContent="center" textAlign="center" fontFamily="Montserrat"  fontWeight="900" background="none" textShadow="none" fontSize="13px" color="#18181b">{t("navbar.welcome")}</Flex>
            </Stack>
            </Flex>
            <Flex justifyContent="center" mt="80px">
              <Button onClick={scrollDown}  _hover={{bgColor:"white",color:"#18181b"}}  fontSize="13px" w="130px" fontWeight="500" fontFamily="Montserrat"   color="white" bgColor="#18181b">{t("navbar.start")}</Button>
            </Flex>
          </Stack>
        </Flex>
        <Flex>
          <VideoComponent/>
        </Flex>
        </Stack>
        </Flex>
    )
}
export default MobileScreenNavbar