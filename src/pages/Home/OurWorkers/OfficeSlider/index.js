import React, { useState, useEffect } from "react";
import { Box, IconButton, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// Иконки для навигации
import { ReactComponent as ChevronRightIcon } from "../../../../assets/svg/chevron-right.svg";
import { ReactComponent as ChevronLeftIcon } from "../../../../assets/svg/chevron-left.svg";

// Примеры SVG-компонентов
import { ReactComponent as OfficePhoto1 } from "../../../../assets/svg/OfficePhoto.svg";
import { ReactComponent as OfficePhoto2 } from "../../../../assets/svg/OfficePhoto2.svg";
import { ReactComponent as OfficePhoto3 } from "../../../../assets/svg/OfficePhoto3.svg";

// Компонент для мобильной версии
import MobileScreenOfficeSlider from "./ResponsiveOfficeSlider";

// Анимационные элементы Framer Motion
const MotionBox = motion(Box);
const MotionText = motion(Text);

// Основной компонент для десктопной версии слайдера
const LargeScreenOfficeSlider = ({ photos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Индекс текущей фотографии
  const [hasScrolled, setHasScrolled] = useState(false); // Проверка, был ли текст показан
  const [showText, setShowText] = useState(false); // Отображение текста

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const onScroll = () => {
      if (hasScrolled) return;

      const sliderElement = document.getElementById("photo-slider");
      if (sliderElement) {
        const { top, bottom } = sliderElement.getBoundingClientRect();
        const isVisible = top >= 0 && bottom <= window.innerHeight;

        if (isVisible) {
          setShowText(true);
          setHasScrolled(true);

          const timer = setTimeout(() => {
            setShowText(false); // Прячем текст через 4 секунды
          }, 4000);

          return () => clearTimeout(timer);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasScrolled]);

  if (photos.length === 0) {
    return (
      <Flex align="center" justify="center" p={4} h="200px">
        <Text fontSize="lg" color="gray.500">
          No photos availablee
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      id="photo-slider"
      h="340px"
      align="center"
      justify="center"
      direction="row"
      position="relative"
    >
      <IconButton
        aria-label="Previous photo"
        icon={<ChevronLeftIcon />}
        onClick={handleLeftClick}
        w="40px"
        borderRadius="16px"
        bgColor="white"
        h="40px"
        position="absolute"
        left="10px"
        zIndex={2}
        boxShadow="md"
      />

      {/* Основной блок с фотографией */}
      <MotionBox
        w={{ base: "300px", md: "500px" }}
        h={{ base: "300px", md: "340px" }}
        overflow="hidden"
        borderRadius="20px"
        position="relative"
        initial={{ opacity: 0.8, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {typeof photos[currentIndex] === "string" ? (
          <motion.img
            src={photos[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <Flex
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
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
              mt="-195px"
              w="230px"
              h="50px"
              fontFamily="Montserrat"
              border="2px solid white"
              transform="translate(-50%, -50%)"
              fontSize="xl"
              fontWeight="bold"
              color="white"
              bg="rgba(0, 0, 0, 0.6)"
              borderRadius="md"
              ml="130px"
              transition={{ duration: 0.5 }}
            >
              <Flex justifyContent="center" mt="10px" alignItems="center">
                THIS IS OUR OFFICE
              </Flex>
            </MotionText>
          )}
        </AnimatePresence>
      </MotionBox>

      <IconButton
        aria-label="Next photo"
        icon={<ChevronRightIcon />}
        onClick={handleRightClick}
        w="40px"
        borderRadius="16px"
        bgColor="white"
        h="40px"
        position="absolute"
        right="10px"
        zIndex={2}
        boxShadow="md"
      />
    </Flex>
  );
};

const PhotoSlider = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const photos = [
    <OfficePhoto1 />,
    <OfficePhoto2 />,
    <OfficePhoto3 />,
  ];

  return (
    <Flex>
      {isMobile ? (
        <MobileScreenOfficeSlider photos={photos} />
      ) : (
        <LargeScreenOfficeSlider photos={photos} />
      )}
    </Flex>
  );
};

export default PhotoSlider;


