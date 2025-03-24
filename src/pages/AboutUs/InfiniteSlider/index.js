import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import {ReactComponent as FlutterIcon} from "../../../assets/svg/flutter-logo 1.svg"
import MobileScreenInfiniteSlider from "./ResponsiveInfiniteSlider";
import {ReactComponent as MaterialUIIcon} from "../../../assets/svg/material-ui-4a66e3fd52c7ec9469f4684b68aca251 1 (1).svg"
import {ReactComponent as ReactIcon} from "../../../assets/svg/React_logo_wordmark 1.svg"
import {ReactComponent as SQLIcon} from "../../../assets/svg/mysql.svg"
import {ReactComponent as PythonIcon} from "../../../assets/svg/Python-Logo 1 (1).svg"
import {ReactComponent as NodeIcon} from "../../../assets/svg/Node.js_logo_2015.svg 1.svg"
import {ReactComponent as ChakraIcon} from "../../../assets/svg/chakraui.svg"
import {ReactComponent as CplusIcon} from "../../../assets/svg/C++-Logo.wine 1 (1).svg"
import {ReactComponent as CsharpIcon} from "../../../assets/svg/Logo_C_sharp.svg 1.svg"
import {ReactComponent as CssIcon} from "../../../assets/svg/css3-logo-png-transparent 1.svg"
import {ReactComponent as JavaScriptIcon} from "../../../assets/svg/JavaScript-Symbol 1 (1).svg"
import {ReactComponent as HTML5Icon} from "../../../assets/svg/HTML5_logo_and_wordmark.svg 1.svg"
import {ReactComponent as JavaIcon} from "../../../assets/svg/java-logo-1 1.svg"
import {ReactComponent as TypeScriptIcon} from "../../../assets/svg/typescript-def 1.svg"
import {ReactComponent as GOIcon} from "../../../assets/svg/GoLogo (1).svg"
import {ReactComponent as SASSIcon} from "../../../assets/svg/SASSlogo (1).svg"
const icons = [
  { Component: FlutterIcon, width: "170px", height: "100px" },
  { Component: ReactIcon, width: "160px", height: "100px" },
  { Component: SQLIcon, width: "120px", height: "100px" },
  { Component: PythonIcon, width: "180px", height: "100px" }, 
  { Component: NodeIcon, width: "170px", height: "100px" },
  { Component: MaterialUIIcon, width: "220px", height: "100px" },
  { Component: ChakraIcon, width: "170px", height: "100px" },
  { Component: CplusIcon, width: "100px", height: "100px" },
  { Component: CsharpIcon, width: "60px", height: "100px" },
  { Component: CssIcon, width: "90px", height: "100px" },
  { Component: JavaScriptIcon, width: "72px", height: "100px" },
  { Component: HTML5Icon, width: "80px", height: "100px" },
  { Component: JavaIcon, width: "90px", height: "100px" },
  { Component: TypeScriptIcon, width: "90px", height: "100px" },
  { Component: GOIcon, width: "150px", height: "100px" },
  { Component: SASSIcon, width: "110px", height: "100px" },

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
      position="relative"
      width="full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Flex gap="14" display="inline-flex" alignItems="center" justifyContent="center">
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
