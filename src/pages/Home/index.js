import React from "react";
import {
    Flex,
    Stack,
    Text,
    Heading,
    VStack,
    Icon,
    Box,
    Container,
    SimpleGrid
} from "@chakra-ui/react"
import Navbar from "./Navbar";
import Marketing from "./OurMarketing";
import Contuctus from "./ContuctUs";
import Trust from "./Trust";
import OurWorkers from "./OurWorkers";
import AmazingTeam from "./AmazingTeam";
import ContactUsPage from "../ContuctUs";
import AboutUsPage from "../AboutUs";
import ServicesPage from "../Services";
import OurServices from "./OurServices";



const Home = () => {
    return(
        <Flex justifyContent="center" w="full">
            <Stack direction="column" w="full" spacing="0px">
                <Navbar/>
                <AmazingTeam/>
                <AboutUsPage/>
                
                {/* <Contuctus/> */}
                
                <Marketing/>
                <ServicesPage/>
                <OurServices/>
                
                <ContactUsPage/>
                {/* <Trust/> */}
            </Stack>
        </Flex>
    )
}

export default Home