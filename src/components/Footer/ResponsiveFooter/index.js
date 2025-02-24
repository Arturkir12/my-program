import { Flex,Box,useBreakpointValue, Container, Stack, Text, Link, Divider,  } from "@chakra-ui/react";


import { ReactComponent as InstagramIcon } from "../../../assets/svg/Instagram (1).svg";
import { ReactComponent as FaceBookIconText } from "../../../assets/svg/Facebooktext.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/svg/Linkedin.svg";
import { useTranslation } from "react-i18next";


const MobileScreenFooter = () => {
   const { i18n } = useTranslation();
  return (
    <Box w="full" bg="#18181b" color="gray.200" py={6}>
      <Container maxW="container.lg">
        <Stack direction="row" justify="space-between" align="center">
          <Stack direction="column">
          <Stack mt="30px" direction="column" spacing={4}>
            <Flex fontSize="20px" color="#db2777" fontWeight="700" fontFamily="Roboto">Navigation</Flex>
            <Stack direction="column">
            <Link href="/about">{i18n.t("about")}</Link>
            <Link href="/services">{i18n.t("services")}</Link>
            <Link href="/contact">{i18n.t("contact_us")}</Link>
            </Stack>
          </Stack>
          </Stack>
          <Stack textAlign="right" mt="30px" direction="column" spacing={4}>
            <Flex fontSize="20px" color="#db2777" fontWeight="700" fontFamily="Roboto" ml="22px">Contacts</Flex>
            <Stack direction="column">
            <Flex>+374 ** *** ***</Flex>
            <Flex>+374 ** *** ***</Flex>
            <Flex ml="18px">Street name</Flex>
            </Stack>
          </Stack>
          
        </Stack>
        <Divider my={4} borderColor="gray.700" />
        <Stack direction="column">
        <Flex justifyContent="center">
        <Text>&copy; {new Date().getFullYear()} IT Company. All rights reserved.</Text>
        </Flex>
        <Flex justifyContent="center">(our logo)</Flex>
        <Flex justifyContent="center">
        <Stack justifyContent="center" borderRadius="20px" direction="row" spacing={2} w="300px" bgColor="white">
            <Flex as="button"><InstagramIcon style={{width:"90px",height:"40px"}}/></Flex>
            <Flex as="button"><FaceBookIconText style={{width:"90px",height:"40px"}}/></Flex>
            <Flex as="button"><LinkedinIcon style={{width:"80px",height:"40px"}}/></Flex>
          </Stack>
          </Flex>
        </Stack>
        
      </Container>
    </Box>
  );
};

export default MobileScreenFooter