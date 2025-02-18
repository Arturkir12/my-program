import React from "react";
import { Box, Heading, Text, Grid, GridItem, Flex,Stack } from "@chakra-ui/react";

import {ReactComponent as Itconsulting} from "../../assets/svg/HumanIcon.svg"
import {ReactComponent as MobileAppDevelopment} from "../../assets/svg/TelephoneIcon.svg"
import {ReactComponent as WebDevelopment} from "../../assets/svg/ProprtiesIcon.svg"


const ServicesPage = () => {
  return (
    <Box  bg="linear-gradient(135deg, white -300%, rgb(111, 19, 203) 40%, white 300%)" py="50px" px={{ base: "10px", md: "50px" }} color="white">
      {/* Введение */}
      <Flex mb="90px">
        <Stack direction="column">
      <Box mt="90px" textAlign="center" mb="50px">
        <Heading fontFamily="Roboto" fontWeight="600" fontSize={{ base: "40px", md: "50px" }} color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa">
          Our Services
        </Heading>
        <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto">
          We offer a range of IT services to help your business grow and succeed. From web and mobile development to IT consulting, we’ve got you covered.
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
              Web Development
            </Heading>
            <Text color="gray.400" mb={4}>
              Custom website development using modern technologies like React, Angular, and Node.js.
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
              Mobile App Development
            </Heading>
            <Text color="gray.400" mb={4}>
              Mobile application development for both iOS and Android platforms using Swift, Kotlin, and React Native.
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
              IT Consulting
            </Heading>
            <Text color="gray.400" mb={4}>
              Providing expert advice and support on IT strategy, infrastructure, and digital transformation.
            </Text>
          </Box>
        </GridItem>
      </Grid>

      {/* Дополнительная информация */}
      <Box mt="50px" textAlign="center">
        <Heading as="h2" size="xl" color="white" mb={6}>
          Why Choose Us
        </Heading>
        <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto">
          With years of experience and a team of dedicated professionals, we provide high-quality solutions tailored to your business needs.
        </Text>
      </Box>
      </Stack>
      </Flex>
    </Box>
  );
};

export default ServicesPage;
