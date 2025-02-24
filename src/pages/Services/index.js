import React from "react";
import { Box, Heading, Text, Grid, GridItem, Flex,Stack } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

import {ReactComponent as Itconsulting} from "../../assets/svg/HumanIcon.svg"
import {ReactComponent as MobileAppDevelopment} from "../../assets/svg/TelephoneIcon.svg"
import {ReactComponent as WebDevelopment} from "../../assets/svg/ProprtiesIcon.svg"


const ServicesPage = () => {
    const { i18n } = useTranslation();
  return (
    <Box  bg="linear-gradient(135deg, white -300%, rgb(111, 19, 203) 40%, white 300%)" py="50px" px={{ base: "10px", md: "50px" }} color="white">
      {/* Введение */}
      <Flex mb="30px">
        <Stack direction="column">
      <Box mt="20px" textAlign="center" mb="50px">
        <Heading fontFamily="Roboto" fontWeight="600" fontSize={{ base: "40px", md: "50px" }} color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa">
        {i18n.t("our_services_page.our_services")}
        </Heading>
        <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto">
        {i18n.t("our_services_page.our_services_title")}
        </Text>
      </Box>

      {/* Список услуг */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
        <GridItem>
          <Box
            bg="gray.800"
            p="20px"
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          >
            <WebDevelopment/>
            <Heading as="h3" size="lg" color="white" mb={3}>
            {i18n.t("our_services_page.web")}
            </Heading>
            <Text color="gray.400" mb={4}>
            {i18n.t("our_services_page.web_title")}
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            bg="gray.800"
            p="20px"
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          >
           <MobileAppDevelopment/>
            <Heading as="h3" size="lg" color="white" mb={3}>
            {i18n.t("our_services_page.mobile")}
            </Heading>
            <Text color="gray.400" mb={4}>
            {i18n.t("our_services_page.mobile_title")}
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            bg="gray.800"
            p="20px"
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          >
            <Itconsulting/>
            <Heading as="h3" size="lg" color="white" mb={3}>
            {i18n.t("our_services_page.it")}
            </Heading>
            <Text color="gray.400" mb={4}>
            {i18n.t("our_services_page.it_title")}
            </Text>
          </Box>
        </GridItem>
      </Grid>

      {/* Дополнительная информация */}
      <Box mt="50px" textAlign="center">
        <Heading as="h2" size="xl" color="white" mb={6}>
        {i18n.t("our_services_page.why_choose_us")}
        </Heading>
        <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto">
        {i18n.t("our_services_page.why_title")}
        </Text>
      </Box>
      </Stack>
      </Flex>
    </Box>
  );
};

export default ServicesPage;
