import React from "react";
import { Box, Heading, Text, Stack, Flex, Button, Image, Grid, GridItem, Link } from "@chakra-ui/react";
import { ReactComponent as Personicon } from "../../assets/svg/person.svg";

const teamMembers = [
  {
    name: "Hayk Sargsyan",
    role: "Full-Stack Web Developer | Flutter Developer",
    description:"I specialize in building dynamic, scalable, and responsive web applications. My technical background enables me to efficiently manage database systems, design user-friendly interfaces, and optimize performance across the full stack. Passionate about continuous learning and staying ahead of industry trends, I strive to deliver high-quality solutions that meet both user needs and business goals",
    link:"https://www.linkedin.com/in/hayk-sargsyan-474a65213/"
  },
  {
    name: "Hayk Hovhannisyan",
    role: "Front End Developer",
    description:"I am a web developer with a year of experience in HTML, CSS, JavaScript, React, Next.js, Redux, and Chakra UI. I develop high-quality, productive, and responsive web applications. In my work, I focus on effective health management, improving productivity, and providing a great user experience. I am ready to use my knowledge to create successful projects.",
    link:"https://www.linkedin.com/in/hayk-hovhannisyan-4b6998248/"
  },
  {
    name: "Artur Kirkosyan",
    role: "Frontend Developer | React.js Enthusiast | Responsive Design Expert",
    description:"I am a passionate and efficient Frontend Developer with expertise in creating dynamic, responsive, and user-friendly web interfaces. Proficient in modern technologies like React.js, HTML, CSS (Sass/SCSS), Chakra UI, and Material UI, I deliver visually appealing and highly functional web applications.",
    link:"https://www.linkedin.com/in/artur-kirakosyan-8bb001234/"
  },
  {
    name: "Vahe Martirosyan",
    role: "Full-Stack Web Developer",
    description:"I specialize in building dynamic, scalable, and responsive web applications. My technical background enables me to efficiently manage database systems, design user-friendly interfaces, and optimize performance across the full stack. Passionate about continuous learning and staying ahead of industry trends, I strive to deliver high-quality solutions that meet both user needs and business goals",
    link:"https://www.linkedin.com/in/vahe-martirosyan/"
  },
];

const AboutUsPage = () => {
  return (
    <Box bg="linear-gradient(135deg, white -300%, rgb(111, 19, 203) 40%, white 300%)" py="50px" px={{ base: "10px", md: "50px" }} color="white">
      <Flex mt="100px">
        <Stack direction="column">
          <Box textAlign="center" mb="50px">
            <Heading mb="10px" fontFamily="Roboto" fontWeight="600" fontSize={{ base: "40px", md: "50px" }} color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa">
              About Us
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto">
              We are a passionate IT company focused on delivering innovative technology solutions. Our team of experts is dedicated to providing high-quality services and solutions for your business needs.
            </Text>
          </Box>

          <Box textAlign="center" mb="50px">
            <Heading as="h2" size="xl" color="white" mb={4}>
              Our Mission
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto">
              Our mission is to empower businesses with cutting-edge technology, helping them stay ahead of the curve in an ever-evolving digital world. We believe in creating solutions that drive success and growth for our clients.
            </Text>
          </Box>

          <Box textAlign="center" mb="50px">
            <Heading as="h2" size="xl" color="white" mb={6}>
              Meet Our Team
            </Heading>
            <Grid justifyItems="center" justifyContent="center" templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
              {teamMembers.map((member, index) => (
                <GridItem key={index}>
                  <Box transition="0.3s" _hover={{ transform: "scale(1.05)", boxShadow: "xl" }} bg="gray.800" p="20px" borderRadius="md" boxShadow="lg" textAlign="center">
                    <Personicon />
                    <Heading as="h3" size="lg" color="white" mb={2}>
                      {member.name}
                    </Heading>
                    <Text color="gray.400">{member.role}</Text>
                    <Text color="gray.500" mt={4}>{member.description}</Text>
                    <Button
                     fontFamily="roboto"
                      w="full"
                      fontSize="13px"
                      mt="13px"
                      onClick={() => window.location.href = member.link} // Перенаправление при клике
                    >
                      <Link _hover={{ textDecoration: "none" }} href={member.link} isExternal>
                           More information
                      </Link>
                    </Button>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>

          <Box textAlign="center" mt="50px">
            <Heading as="h2" size="xl" color="white" mb={4}>
              Get in Touch
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="800px" mx="auto" mb={6}>
              Have questions? Feel free to reach out to us for more information about our services. We're here to help you with your IT needs.
            </Text>
            <Button onClick={() => window.location.href = "/contact"} fontFamily="roboto" bgColor="white" >
             <Link href="/contact" _hover={{textDecor:"none"}}>Contact Us</Link> 
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AboutUsPage;

