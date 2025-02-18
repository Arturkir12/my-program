import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import { ReactComponent as InstagramIcon } from "../../../../assets/svg/Instagram (1).svg";
import { ReactComponent as FaceBookIconText } from "../../../../assets/svg/Facebooktext.svg";
import { ReactComponent as LinkedinIcon } from "../../../../assets/svg/Linkedin.svg";

const icons = [
  { Component: LinkedinIcon, width: "120px", height: "80px" },
  { Component: InstagramIcon, width: "140px", height: "80px" },
  { Component: FaceBookIconText, width: "120px", height: "80px" },
];

const MobileScreenInfiniteSlider = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!sliderRef.current) return;

    let animationFrame;
    let scrollStep = 1;

    const scroll = () => {
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
      h="80px"
      borderRadius="10px"
      bgColor="white"
      position="relative"
      width="300px"
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

export default MobileScreenInfiniteSlider;
