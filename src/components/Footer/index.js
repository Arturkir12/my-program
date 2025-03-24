import { Flex,Box,useBreakpointValue, Container, Stack, Text, Link, Divider,  } from "@chakra-ui/react";


import { ReactComponent as InstagramIcon } from "../../assets/svg/Instagram (1).svg";
import { ReactComponent as FaceBookIconText } from "../../assets/svg/Facebooktext.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/Linkedin.svg";
import { useTranslation } from "react-i18next";
import MobileScreenFooter from "./ResponsiveFooter";

const LargeScreenFooter = () => {
   const { i18n } = useTranslation();
  return (
    <Box w="full" bg="#18181b" color="gray.200" py={6}>
      <Container maxW="container.lg">
        <Stack direction={{ base: "column", md: "row" }} justify="space-between" align="center">
          <Stack direction="column">
          <Stack mt="30px" direction="column" spacing={4}>
            <Flex fontSize="20px" color="#67e8f9" fontWeight="700" fontFamily="Roboto">NAVIGATION</Flex>
            <Stack direction="column">
            <Link _hover={{textDecor:"none"}} fontFamily="Montserrat" href="/about">{i18n.t("about")}</Link>
            <Link _hover={{textDecor:"none"}} fontFamily="Montserrat"  textDecor="none" href="/services">{i18n.t("services")}</Link>
            <Link _hover={{textDecor:"none"}} fontFamily="Montserrat"  textDecor="none" href="/contact">{i18n.t("contact_us")}</Link>
            </Stack>
          </Stack>
          </Stack>
          <Stack textAlign="right" mt="30px" direction="column" spacing={4}>
            <Flex fontSize="20px" color="#67e8f9" fontWeight="700" fontFamily="Roboto" >CONTACTS</Flex>
            <Stack fontFamily="Montserrat" textAlign="right" direction="column">
            <Flex>+374 ** *** ***</Flex>
            <Flex>+374 ** *** ***</Flex>
            <Flex ml="0px">Street name</Flex>
            </Stack>
          </Stack>
          
        </Stack>
        <Divider my={4} borderColor="gray.700" />
        <Flex justifyContent="space-around" direction="row">
        <Flex justifyContent="center">
        <Text>&copy; {new Date().getFullYear()} IT Company. All rights reserved.</Text>
        </Flex>
        <Flex>(our logo)</Flex>
        <Stack justifyContent="center" borderRadius="20px" direction="row" spacing={2} w="300px" bgColor="white">
            <Flex as="button"><InstagramIcon style={{width:"90px",height:"40px"}}/></Flex>
            <Flex as="button"><FaceBookIconText style={{width:"90px",height:"40px"}}/></Flex>
            <Flex as="button"><LinkedinIcon style={{width:"80px",height:"40px"}}/></Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <Flex>{isMobile ? <MobileScreenFooter /> : <LargeScreenFooter />}</Flex>;
};

export default Footer;
