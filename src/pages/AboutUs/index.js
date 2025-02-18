import React from "react";
import { Box, Heading, Text, Stack, Button, Image, Grid, GridItem } from "@chakra-ui/react";

const AboutUsPage = () => {
  return (
    <Box bg="black" py="50px" px={{ base: "10px", md: "50px" }} color="white">
      {/* Введение */}
      <Box textAlign="center" mb="50px">
        <Heading as="h1" size="2xl" color="white" fontFamily="Roboto" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto">
          We are a passionate IT company focused on delivering innovative technology solutions. Our team of experts is dedicated to providing high-quality services and solutions for your business needs.
        </Text>
      </Box>

      {/* Миссия компании */}
      <Box textAlign="center" mb="50px">
        <Heading as="h2" size="xl" color="white" mb={4}>
          Our Mission
        </Heading>
        <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto">
          Our mission is to empower businesses with cutting-edge technology, helping them stay ahead of the curve in an ever-evolving digital world. We believe in creating solutions that drive success and growth for our clients.
        </Text>
      </Box>

      {/* Команда */}
      <Box textAlign="center" mb="50px">
        <Heading as="h2" size="xl" color="white" mb={6}>
          Meet Our Team
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
          <GridItem>
            <Box bg="gray.800" p="20px" borderRadius="md" boxShadow="lg" textAlign="center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                borderRadius="full"
                mb={4}
              />
              <Heading as="h3" size="lg" color="white" mb={2}>
                John Doe
              </Heading>
              <Text color="gray.400">CEO & Founder</Text>
              <Text color="gray.500" mt={4}>
                John is the visionary behind our company, with over 15 years of experience in IT and technology. He leads our team with passion and determination.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box bg="gray.800" p="20px" borderRadius="md" boxShadow="lg" textAlign="center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                borderRadius="full"
                mb={4}
              />
              <Heading as="h3" size="lg" color="white" mb={2}>
                Jane Smith
              </Heading>
              <Text color="gray.400">Lead Developer</Text>
              <Text color="gray.500" mt={4}>
                Jane leads our development team, ensuring that all projects are executed to the highest standards. Her expertise in software development is unmatched.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box bg="gray.800" p="20px" borderRadius="md" boxShadow="lg" textAlign="center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                borderRadius="full"
                mb={4}
              />
              <Heading as="h3" size="lg" color="white" mb={2}>
                Michael Brown
              </Heading>
              <Text color="gray.400">Marketing Director</Text>
              <Text color="gray.500" mt={4}>
                Michael brings a wealth of experience in digital marketing, helping our company reach new heights with innovative campaigns and strategies.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Контактные данные */}
      <Box textAlign="center" mt="50px">
        <Heading as="h2" size="xl" color="white" mb={4}>
          Get in Touch
        </Heading>
        <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto" mb={6}>
          Have questions? Feel free to reach out to us for more information about our services. We're here to help you with your IT needs.
        </Text>
        <Button colorScheme="teal" variant="solid">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
