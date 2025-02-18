import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import { ReactComponent as InstagramIcon } from "../../../assets/svg/Instagram (1).svg";
import { ReactComponent as FaceBookIconText } from "../../../assets/svg/Facebooktext.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/svg/Linkedin.svg";
import MobileScreenInfiniteSlider from "./ResponsiveInfiniteSlider";

const icons = [
  { Component: LinkedinIcon, width: "140px", height: "100px" },
  { Component: InstagramIcon, width: "170px", height: "100px" },
  { Component: FaceBookIconText, width: "140px", height: "100px" },
];

const LargeScreenInfiniteSlider = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!sliderRef.current) return;

    let animationFrame;
    let scrollStep = 1;

    const scroll = () => {
      if (!sliderRef.current) return; // Дополнительная проверка
      if (!isPaused) {
        sliderRef.current.scrollLeft += scrollStep;
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <Box
      ref={sliderRef}
      overflow="hidden"
      whiteSpace="nowrap"
      h="100px"
      borderRadius="10px"
      bgColor="white"
      position="relative"
      width="400px"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Flex gap="10" display="inline-flex" alignItems="center" justifyContent="center">
        {icons.concat(icons).map(({ Component, width, height }, index) => (
          <Flex key={index}>
            <Component style={{ width, height }} />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

const InfiniteSlider = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex>
      {isMobile ? <MobileScreenInfiniteSlider /> : <LargeScreenInfiniteSlider />}
    </Flex>
  );
};

export default InfiniteSlider;
