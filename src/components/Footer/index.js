import React from "react";
import {
    Flex,
    Stack,
    useBreakpointValue
} from "@chakra-ui/react"

import MobileScreenFooter from "./ResponsiveFooter";
import {ReactComponent as FaceBookIcon} from "../../assets/svg/FaceBookIcon.svg"
import {ReactComponent as InstagramIcon} from "../../assets/svg/Instagram.svg"
import {ReactComponent as LinkedinIcon} from "../../assets/svg/Linkedin.svg"

const LargeScreenFooter = () => {
    return(
        <Flex w="full" h="120px"  justifyContent="center" alignItems="center" bgColor="black">
            <Flex alignItems="center" justify="center" w="full">
        <Stack direction="row" spacing="1000px" >
          <Flex
            color="white"
            fontSize="50px"
            alignItems="center"
            fontFamily="Jockey One"
          >
            LOGO
          </Flex>
          <Flex alignItems="center">
            <Stack direction="row" spacing="10px">
                <Flex><LinkedinIcon style={{width:"50px",height:"50px"}}/></Flex>
                <Flex><InstagramIcon style={{width:"50px",height:"50px"}}/></Flex>
                <Flex><FaceBookIcon style={{width:"50px",height:"50px"}}/></Flex>
                <Flex justifyContent="center" alignItems="center">
          </Flex>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
        </Flex>
    )
}

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    
    <Flex>
         {isMobile ? <MobileScreenFooter/> : <LargeScreenFooter/>}
    </Flex>
  )
}

export default Footer