import React from "react";
import {
    Flex,
    Stack,
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react";
import GoogleMapsComponent from "../GoogleMaps";
import PhotoSlider from "./OfficeSlider";

import { ReactComponent as CircleIcon } from "../../../assets/svg/Circle3.svg";
import OfficePhoto1 from "../../../assets/svg/OfficePhoto.svg";
import OfficePhoto2 from "../../../assets/svg/OfficePhoto2.svg";
import OfficePhoto3 from "../../../assets/svg/OfficePhoto3.svg";

const OurWorkers = () => {
    const photos = [OfficePhoto1, OfficePhoto2, OfficePhoto3];

    // Данные о сотрудниках
    const teamMembers = [
        {
            name: "Hayk Sargsyan",
            role: "Flutter Developer",
            bio: "Flutter Developer",
            photo:"none"
        },
        {
            name: "Vahe Martirosyan",
            role: "Software Engineer • ReactJS• NodeJS • MySQL",
            bio: "I specialize in building dynamic, scalable, and responsive web applications. My technical background enables me to efficiently manage database systems, design user-friendly interfaces, and optimize performance across the full stack. Passionate about continuous learning and staying ahead of industry trends, I strive to deliver high-quality solutions that meet both user needs and business goals.",
            photo: "none"
        },
        {
            name: "Hayk Hovhanisyan",
            role: "Front End Developer",
            bio: "I am a web developer with a year of experience in HTML, CSS, JavaScript, React, Next.js, Redux, and Chakra UI. I develop high-quality, productive, and responsive web applications. In my work, I focus on effective health management, improving productivity, and providing a great user experience. I am ready to use my knowledge to create successful projects and solve complex tasks in your team.",
            photo: "none"
        },
        {
            name: "Artur Kirakosyan",
            role: "Frontend Developer | React.js Enthusiast | Responsive Design Expert",
            bio: "I am a passionate and efficient Frontend Developer with expertise in creating dynamic, responsive, and user-friendly web interfaces. Proficient in modern technologies like React.js, HTML, CSS (Sass/SCSS), Chakra UI, and Material UI, I deliver visually appealing and highly functional web applications.",
            photo: "none"
        }
    ];

    return (
        <Flex w="full" h="1000px" bgGradient="linear-gradient(135deg, white -300%, rgb(91, 17, 182) 40%, white 300%)" justifyContent="center" alignItems="center">
            <Stack direction="column">
                <Flex>
                    <Stack direction="row" spacing="100px">
                        <Flex
                            border="0.5px solid rgb(255, 255, 255)"
                            borderRadius="20px"
                            backdropFilter="blur(8px)"
                            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
                            bgColor="rgba(234, 234, 234, 0.7)"
                            zIndex="1"
                            justifyContent="center"
                            w="500px"
                            h="700px"
                        >
                            <Stack direction="column">
                                <Flex mt="20px"  >
                            <Accordion allowToggle>
                    {teamMembers.map((member, index) => (
                        <AccordionItem key={index}>
                            <AccordionButton>
                                <Box w="400px"  textAlign="left">
                                    <Stack direction="row">
                                    <Flex borderRadius="10px" justifyContent="center" alignItems="center" w="60px" h="60px" bgColor="red">
                                        {member.photo}
                                    </Flex>
                                    <Flex>
                                    <Stack direction="column" spacing="0px">
                                    <Flex fontSize="20px" fontWeight="600">{member.name}</Flex>
                                    <Flex fontSize="10px" color="gray.500">{member.role}</Flex>
                                    </Stack>
                                    </Flex>
                                    </Stack>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel w="450px">
                                <Text fontSize="13px">{member.bio}</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
                </Flex>
                </Stack>
                        </Flex>
                        <Flex>
                            <Stack direction="column" spacing="20px">
                                {/* Photo Slider */}
                                <Flex borderRadius="20px" w="500px" h="340px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)">
                                    <PhotoSlider photos={photos} />
                                </Flex>
                                {/* Google Maps Component */}
                                <Flex borderRadius="20px" w="500px" h="340px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)">
                                    <GoogleMapsComponent />
                                </Flex>
                            </Stack>
                        </Flex>
                    </Stack>
                </Flex>

                {/* Аккордеон с информацией о сотрудниках */}
            </Stack>

            {/* Background Circle Icon */}
            <Flex position="absolute" ml="-1100px">
                <CircleIcon style={{ width: "600px", height: "600px" }} />
            </Flex>
        </Flex>
    );
};

export default OurWorkers;

