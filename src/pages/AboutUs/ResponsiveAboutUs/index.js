import React from "react";
import { Flex, Heading, Text, VStack, Divider,Box,Button } from "@chakra-ui/react";
import OfficeSlider from "../../Home/OurWorkers/OfficeSlider";


const MobileScreenAboutUs = () => {
  return (
    <Flex bg="#18181b" color="white" direction="column" py={{ base: 8, md: 16 }}>
      <Flex mt="50px" justify="center" w="full">
        <VStack spacing={6} maxW="container.sm" mx="auto" textAlign="center">
          <Heading as="h1" size="lg" color="pink.400">
            About Us
          </Heading>
          <Text fontSize="sm" px={4}>
            We are a cutting-edge IT company dedicated to simplifying technology and optimizing digital workspaces. Our goal is
            to enhance productivity and streamline workflows.
          </Text>
          <Divider borderColor="gray.600" />
          <Heading as="h2" size="md">Mission</Heading>
          <Text fontSize="sm" px={4}>
            We empower businesses with innovative solutions that eliminate IT complexity and foster seamless collaboration.
          </Text>
          <Divider borderColor="gray.600" />
          <Heading as="h2" size="md">Why Us?</Heading>
          <VStack spacing={4} px={4}>
            <Text fontWeight="bold">Innovative Solutions</Text>
            <Text>Tailored technology to meet your needs.</Text>
            <Text fontWeight="bold">Top Security</Text>
            <Text>Enterprise-grade security measures.</Text>
            <Text fontWeight="bold">24/7 Support</Text>
            <Text>Always available to assist you.</Text>
          </VStack>
          <Divider borderColor="gray.600" />
          <Heading as="h2" size="md">Achievements</Heading>
          <Text fontSize="sm" px={4}>
            - 10+ years in the IT industry
            <br />- 500+ successful projects
            <br />- Trusted by Fortune 500 companies
          </Text>
          <Divider borderColor="gray.600" />
          <Heading as="h2" size="md">Job Openings</Heading>
          <Text fontSize="sm" px={4}>
            We're hiring:
            <br />- Software Engineers
            <br />- UX/UI Designers
            <br />- Project Managers
            <br />- DevOps Specialists
          </Text>
          <Divider borderColor="gray.600" />
          <Heading as="h2" size="md">Our Office</Heading>
          <OfficeSlider />
          <Divider borderColor="gray.600" />
          <Heading as="h2" size="md">More About Us</Heading>
          <Text fontSize="sm" px={4}>
            We are a team of skilled professionals passionate about technology and innovation. Our solutions drive real impact for
            businesses.
          </Text>
          <Heading as="h2" size="md">Find Us Here!</Heading>
          
          <Box py={8} bg="pink.700" borderRadius="0px" w="full">
            <Heading as="h3" size="lg" color="white" mb={4}>
              Ready to work with us?
            </Heading>
            <Text fontSize="md" color="white" mb={4}>
              Join us and experience the future of IT solutions.
            </Text>
            <Button >
              Contact Us
            </Button>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default MobileScreenAboutUs;
