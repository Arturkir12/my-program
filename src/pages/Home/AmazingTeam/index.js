import React from "react";
import {
    Flex,
    Stack,
    useBreakpointValue
} from "@chakra-ui/react"
import MobileScreenAmazingTeam from "./ResponsiveAmazingTeam";


const LargeScreenAmazingTeam = () => {
    return(
        <Flex justifyContent="center" w="full" h="400" bgColor="#18181b" alignItems="center">
            <Stack direction="column">
                <Flex justify="center" color="#db2777" fontWeight="500" fontSize="16px" fontFamily="Montserrat">
                ABOUT OUR TEAM AND OFFICE
                </Flex>
                            <Flex fontFamily="Roboto" fontWeight="600"  justify="center" fontSize="30px" color="white" textShadow="0 0 0px #fafafa, 0 0 4px #fafafa">
                                Meet the Heart of Our Office: Our Amazing Team!
                            </Flex>
                            <Flex w="700px" textAlign="center" fontFamily="Roboto" fontSize="20px" fontWeight="600" color="#e4e4e7" justify="center">
                            We are a team of talented professionals united by one goal: to create innovative solutions for our clients. Our employees are the heart of the company, and each of us contributes our unique skills to the development of the project. We value teamwork, a creative approach, and a constant strive for excellence.
                            </Flex>
            </Stack>
        </Flex>
    )
}


const AmazingTeam = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    return (
      
      <Flex>
           {isMobile ? <MobileScreenAmazingTeam/> : <LargeScreenAmazingTeam/>}
      </Flex>
    )
  }
  
  export default AmazingTeam