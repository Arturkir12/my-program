import { Flex,Box, Container, Stack, Text, Link, Divider,  } from "@chakra-ui/react";


import { ReactComponent as InstagramIcon } from "../../assets/svg/Instagram (1).svg";
import { ReactComponent as FaceBookIconText } from "../../assets/svg/Facebooktext.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/Linkedin.svg";
import { useTranslation } from "react-i18next";


const Footer = () => {
   const { i18n } = useTranslation();
  return (
    <Box bg="#18181b" color="gray.200" py={6}>
      <Container maxW="container.lg">
        <Stack direction={{ base: "column", md: "row" }} justify="space-between" align="center">
          <Text>&copy; {new Date().getFullYear()} IT Company. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Link href="/about">{i18n.t("about")}</Link>
            <Link href="/services">{i18n.t("services")}</Link>
            <Link href="/contact">{i18n.t("contact_us")}</Link>
          </Stack>
          <Stack justifyContent="center" borderRadius="20px" direction="row" spacing={2} w="300px" bgColor="white">
            <Flex as="button"><InstagramIcon style={{width:"90px",height:"40px"}}/></Flex>
            <Flex as="button"><FaceBookIconText style={{width:"90px",height:"40px"}}/></Flex>
            <Flex as="button"><LinkedinIcon style={{width:"80px",height:"40px"}}/></Flex>
          </Stack>
        </Stack>
        <Divider my={4} borderColor="gray.700" />
        <Text fontSize="sm" textAlign="center">
          Made with ❤️ at "(company name)"
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
