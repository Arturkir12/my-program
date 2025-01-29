import React, {useRef } from "react";
import { Box, Flex,useBreakpointValue } from "@chakra-ui/react";

// Импорт видео как пути к файлу
import NavbarVideo from "../../../assets/png/6117788_Nobody Empty Coworking Office Chairs_By_Daniel_Megias_Del_Pozo_Artlist_HD.mp4";
import MobileScreenVideoComponent from "./ResponsiveNavbarVideo";

const LargeScreenVideoComponent = () => {
  const videoRef = useRef(null); // Ссылка на видео элемент

  return (
    <Flex w="full" h="680px" justifyContent="center" alignItems="center">
      <Flex>
      <Box
       w="full"
       h="680px"
      >
        <video
          ref={videoRef}    
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={NavbarVideo} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </Box>
      </Flex>
    </Flex>
  );
};

const VideoComponent = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    
    <Flex>
         {isMobile ? <MobileScreenVideoComponent/> : <LargeScreenVideoComponent/>}
    </Flex>
  )
}

export default VideoComponent

