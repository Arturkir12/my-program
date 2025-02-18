import React, { useRef, useState } from "react";
import { Box, Flex, Button, useBreakpointValue } from "@chakra-ui/react";

import NavbarVideo from "../../../assets/png/6117788_Nobody Empty Coworking Office Chairs_By_Daniel_Megias_Del_Pozo_Artlist_HD.mp4";
import MobileScreenVideoComponent from "./ResponsiveNavbarVideo";


import {ReactComponent as PlayIcon} from "../../../assets/svg/Play.svg"

const LargeScreenVideoComponent = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Flex w="700px" h="680px" justifyContent="center" alignItems="center" position="relative">
      <Box w="full" h="680px" >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          onClick={handlePlayPause}
        >
          <source src={NavbarVideo} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        {!isPlaying && (
          <Flex justifyContent="center" mt="-230px">
          <Button
            onClick={handlePlayPause}
            zIndex="10"
            w="60px"
            h="60px"
            bgColor="#27272a"
            borderRadius="50px"
            p={6}
          >
            <Flex justifyContent="center" alignItems="center">
              <PlayIcon/>
            </Flex>
          </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

const VideoComponent = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <Flex>{isMobile ? <MobileScreenVideoComponent /> : <LargeScreenVideoComponent />}</Flex>;
};

export default VideoComponent;

