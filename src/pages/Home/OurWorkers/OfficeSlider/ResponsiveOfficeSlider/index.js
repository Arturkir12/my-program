import React,{useState,useEffect} from "react";
import { Box, IconButton, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// Иконки для навигации
import { ReactComponent as ChevronRightIcon } from "../../../../../assets/svg/chevron-right.svg";
import { ReactComponent as ChevronLeftIcon } from "../../../../../assets/svg/chevron-left.svg";

import { ReactComponent as OfficePhoto1 } from "../../../../../assets/svg/OfficePhoto.svg";
import { ReactComponent as OfficePhoto2 } from "../../../../../assets/svg/OfficePhoto2.svg";
import { ReactComponent as OfficePhoto3 } from "../../../../../assets/svg/OfficePhoto3.svg";

// Анимационные компоненты Framer Motion
const MotionBox = motion(Box);
const MotionText = motion(Text);

const MobileScreenOfficeSilder = () => {
    const photos = [
        <OfficePhoto1 />,
        <OfficePhoto2 />,
        <OfficePhoto3 />,
      ];
    const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  // Размеры элементов в зависимости от ширины экрана
  const iconSize = useBreakpointValue({ base: "30px", md: "40px" });

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    setShowText(true);
    const timer = setTimeout(() => setShowText(false), 4000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (photos.length === 0) {
    return (
      <Flex align="center" justify="center" p={4} h="200px">
        <Text fontSize="lg" color="gray.500">
          No photos available
        </Text>
      </Flex>
    );
  }

    return(
        <Flex
      id="photo-slider"
      h="200px"
      align="center"
      justify="center"
      direction="row"
      position="relative"
    >
      <IconButton
        aria-label="Previous photo"
        icon={<ChevronLeftIcon />}
        onClick={handleLeftClick}
        w={iconSize}
        h={iconSize}
        borderRadius="full"
        bgColor="white"
        position="absolute"
        left="10px"
        zIndex={2}
        boxShadow="md"
        _hover={{ bgColor: "gray.100" }}
        transition="all 0.2s"
      />

      {/* Основной блок с фотографией */}
      <MotionBox
        w="300px"
        h="300px"
        overflow="hidden"
        borderRadius="20px"
        position="relative"
        initial={{ opacity: 0.8, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {typeof photos[currentIndex] === "string" ? (
          <motion.img
            src={photos[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.onerror = null; // Убираем бесконечные вызовы
              e.target.src = "/placeholder-image.png"; // Путь к fallback-изображению
            }}
          />
        ) : (
          <Flex
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            bg="Transparent"
          >
            {photos[currentIndex]}
          </Flex>
        )}

        {/* Анимация текста */}
        <AnimatePresence>
          {showText && (
            <MotionText
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              position="absolute"
              mt="-170px"
              ml="70px"
              transform="translate(-50%, -50%)"
              fontSize="13px"
              fontWeight="bold"
              color="white"
              bg="rgba(0, 0, 0, 0.6)"
              borderRadius="md"
              px="20px"
              py="10px"
              textAlign="center"
              transition={{ duration: 0.5 }}
            >
              THIS IS OUR OFFICE
            </MotionText>
          )}
        </AnimatePresence>
      </MotionBox>

      <IconButton
        aria-label="Next photo"
        icon={<ChevronRightIcon />}
        onClick={handleRightClick}
        w={iconSize}
        h={iconSize}
        borderRadius="full"
        bgColor="white"
        position="absolute"
        right="10px"
        zIndex={2}
        boxShadow="md"
        _hover={{ bgColor: "gray.100" }}
        transition="all 0.2s"
      />
    </Flex>
    )
}
export default MobileScreenOfficeSilder