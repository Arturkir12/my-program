import React from "react";
import { useColorModeValue, Box, VStack, Icon, Container, SimpleGrid, Heading, Text, Grid, GridItem, Flex, Stack } from "@chakra-ui/react";
import { FaCode, FaMobileAlt, FaLaptopCode, FaPalette, FaUsersCog, FaTools, FaCheckCircle, FaRegHandshake, FaUsers } from "react-icons/fa";
import InfiniteSlider from "../AboutUs/InfiniteSlider";
import { useTranslation } from "react-i18next";

const services = [
  { icon: FaLaptopCode, title: "our_services_page.web", description: "our_services_page.web_title" },
  { icon: FaMobileAlt, title: "our_services_page.mobile", description: "our_services_page.mobile_title" },
  { icon: FaCode, title: "our_services_page.it", description: "our_services_page.it_title" },
  { icon: FaPalette, title: "our_services_page.designui", description: "our_services_page.designui_title" },
  { icon: FaUsersCog, title: "our_services_page.team", description: "our_services_page.team_title" },
  { icon: FaTools, title: "our_services_page.custom", description: "our_services_page.custom_title" }
];

const ServicesPage = () => {
  const { t } = useTranslation();
  const bgColor = useColorModeValue("rgba(90, 239, 227, 0.7)", "gray.800");
  const bgFilter = "blur(10px)";
  const border = useColorModeValue("3px solid rgb(0, 229, 255)");

  return (
    <Box bg="linear-gradient(135deg, white -600%, rgb(0, 0, 0) 40%, white 400%)" py="50px" px={{ base: "10px", md: "50px" }} color="white">
      <Flex mb="30px">
        <Stack direction="column">
          <Box mt="20px" textAlign="center" mb="50px">
            <Heading fontFamily="Roboto" fontWeight="600" fontSize={{ base: "40px", md: "50px" }} color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa">
              {t("our_services_page.our_services")}
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto">
              {t("our_services_page.our_services_title")}
            </Text>
          </Box>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
            {services.map((service, index) => (
              <GridItem key={index}>
                <Box
                  bgColor={bgColor}
                  backdropFilter={bgFilter}
                  border={border}
                  p="20px"
                  borderRadius="md"
                  boxShadow="lg"
                  textAlign="center"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
                >
                  <Flex justifyContent="flex-start">
                    <Icon as={service.icon} w={6} h={6} color="white" mb={3} />
                  </Flex>
                  <Heading as="h3" size="lg" color="white" mb={3}>
                    {t(service.title)}
                  </Heading>
                  <Text color="#333" mb={4}>
                    {t(service.description)}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>

          <Box mt="50px" textAlign="center">
            <Container maxW="7xl">
              <Heading as="h1" size="2xl" textAlign="center" mb={8} color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa">
                {t("our_services_page.why_choose_us")}
              </Heading>
              <Text fontSize="xl" textAlign="center" mb={16} color="gray.400">
                {t("our_services_page.why_title")}
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                <VStack spacing={4} align="center" color="#333">
                  <Icon as={FaCheckCircle} w={10} h={10} color="#22d3ee" />
                  <Heading color="white" size="lg">{t("our_services_page.quality")}</Heading>
                  <Text color="gray.400" textAlign="center">
                    {t("our_services_page.quality_title")}
                  </Text>
                </VStack>

                <VStack spacing={4} align="center" color="#333">
                  <Icon as={FaRegHandshake} w={10} h={10} color="#22d3ee" />
                  <Heading size="lg" color="white">{t("our_services_page.colabaration")}</Heading>
                  <Text color="gray.400" textAlign="center">
                    {t("our_services_page.colabaration_title")}
                  </Text>
                </VStack>

                <VStack spacing={4} align="center" color="#333">
                  <Icon as={FaUsers} w={10} h={10} color="#22d3ee" />
                  <Heading color="white" size="lg">{t("our_services_page.team")}</Heading>
                  <Text color="gray.400" textAlign="center">
                    {t("our_services_page.team_title")}
                  </Text>
                </VStack>

                <VStack spacing={4} align="center" color="#333">
                  <Icon as={FaCode} w={10} h={10} color="#22d3ee" />
                  <Heading color="white" size="lg">{t("our_services_page.expertise")}</Heading>
                  <Text color="gray.400" textAlign="center">
                    {t("our_services_page.expertise_title")}
                  </Text>
                </VStack>
              </SimpleGrid>
            </Container>
          </Box>
        </Stack>
      </Flex>
      <InfiniteSlider />
    </Box>
  );
};

export default ServicesPage;
