import React from "react";
import {
    Flex,
    Stack
} from "@chakra-ui/react"
import Navbar from "./Navbar";
import Marketing from "./OurMarketing";
import Contuctus from "./ContuctUs";
import Trust from "./Trust";
import OurWorkers from "./OurWorkers";
import AmazingTeam from "./AmazingTeam";
import VideoComponent from "./NavbarVideo";



const Home = () => {
    return(
        <Flex justifyContent="center" w="full">
            <Stack direction="column" w="full" spacing="0px">
                <Navbar/>
                <Marketing/>
                <Contuctus/>
                <Trust/>
                <AmazingTeam/>
                <OurWorkers/>
            </Stack>
        </Flex>
    )
}

export default Home