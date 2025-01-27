import React from "react";
import {
    Flex,
    Stack,
    Box,
    Text,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react"

import GoogleMapsComponent from "../../GoogleMaps";
import PhotoSlider from "../OfficeSlider";


import OfficePhoto1 from "../../../../assets/svg/OfficePhoto.svg";
import OfficePhoto2 from "../../../../assets/svg/OfficePhoto2.svg";
import OfficePhoto3 from "../../../../assets/svg/OfficePhoto3.svg";


const MobileScreenOurWorkers = () => {
    const photos = [OfficePhoto1, OfficePhoto2, OfficePhoto3];

  // Данные о сотрудниках
  const teamMembers = [
    {
      name: "Hayk Sargsyan",
      role: "Flutter Developer",
      bio: "Flutter Developer",
      photo: null,
    },
    {
      name: "Vahe Martirosyan",
      role: "Software Engineer • ReactJS• NodeJS • MySQL",
      bio: "I specialize in building dynamic, scalable, and responsive web applications. My technical background enables me to efficiently manage database systems, design user-friendly interfaces, and optimize performance across the full stack. Passionate about continuous learning and staying ahead of industry trends, I strive to deliver high-quality solutions that meet both user needs and business goals.",
      photo: null,
    },
    {
      name: "Hayk Hovhanisyan",
      role: "Front End Developer",
      bio: "I am a web developer with a year of experience in HTML, CSS, JavaScript, React, Next.js, Redux, and Chakra UI. I develop high-quality, productive, and responsive web applications. In my work, I focus on effective health management, improving productivity, and providing a great user experience. I am ready to use my knowledge to create successful projects and solve complex tasks in your team.",
      photo: null,
    },
    {
      name: "Artur Kirakosyan",
      role: "Frontend Developer | React.js Enthusiast | Responsive Design Expert",
      bio: "I am a passionate and efficient Frontend Developer with expertise in creating dynamic, responsive, and user-friendly web interfaces. Proficient in modern technologies like React.js, HTML, CSS (Sass/SCSS), Chakra UI, and Material UI, I deliver visually appealing and highly functional web applications.",
      photo: null,
    },
  ];
    return(
        <Flex
      w="full"
      py={{ base: "20px", md: "50px" }}
      px={{ base: "10px", md: "20px" }}
      bgGradient="linear-gradient(135deg, white -300%, rgb(91, 17, 182) 40%, white 300%)"
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction={{ base: "column", lg: "row" }} spacing="50px" align="center">
        {/* Левая часть: Аккордеон */}
        <Flex
          border="0.5px solid rgb(255, 255, 255)"
          borderRadius="20px"
          backdropFilter="blur(8px)"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
          bgColor="rgba(234, 234, 234, 0.7)"
          w={{ base: "90%", md: "500px" }}
          p="20px"
        >
          <Accordion allowToggle>
            {teamMembers.map((member, index) => (
              <AccordionItem key={index}>
                <AccordionButton>
                  <Box w="full" textAlign="left">
                    <Stack direction="row" align="center" spacing="10px">
                      <Flex
                        borderRadius="10px"
                        justifyContent="center"
                        alignItems="center"
                        w="60px"
                        h="60px"
                        bgColor="gray.200"
                      >
                        {member.photo ? (
                          <Image src={member.photo} alt={member.name} borderRadius="10px" />
                        ) : (
                          <Text fontSize="sm" color="gray.500">
                            No Photo
                          </Text>
                        )}
                      </Flex>
                      <Stack spacing="0">
                        <Flex fontSize="16px" fontWeight="600">
                          {member.name}
                        </Flex>
                        <Flex fontSize="12px" color="gray.500">
                          {member.role}
                        </Flex>
                      </Stack>
                    </Stack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Text fontSize="14px">{member.bio}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>

        {/* Правая часть: Фото + Карта */}
        <Stack direction="column" spacing="20px">
          {/* Photo Slider */}
          <Flex
            borderRadius="20px"
            w={{ base: "90%", md: "500px" }}
          >
            <PhotoSlider photos={photos} />
          </Flex>

          {/* Google Maps Component */}
          <Flex
            borderRadius="20px"
            w={{ base: "90%", md: "500px" }}
          >
            <GoogleMapsComponent />
          </Flex>
        </Stack>
      </Stack>
    </Flex>
    )
}
export default MobileScreenOurWorkers