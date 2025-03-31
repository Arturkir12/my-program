import React, { useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";


import NavbarVideo from "../../../../assets/png/6117788_Nobody Empty Coworking Office Chairs_By_Daniel_Megias_Del_Pozo_Artlist_HD.mp4";

const MobileScreenVideoComponent = () => {
  const videoRef = useRef(null);

  return (
    // <Flex  w="full" h="100px"justifyContent="center" alignItems="center">
    //   <Box
    //    w="full"
    //    mt="199px"
    //   >
    //     <video
    //       ref={videoRef}    
    //       autoPlay
    //       muted
    //       loop
    //       playsInline
    //     >
    //       <source src={NavbarVideo} type="video/mp4" />
    //       Ваш браузер не поддерживает видео.
    //     </video>
    //   </Box>
    // </Flex>
    <>
    </>
  );
};

export default MobileScreenVideoComponent;

