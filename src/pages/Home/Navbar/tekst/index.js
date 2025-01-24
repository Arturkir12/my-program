import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";

const ScrollAnimatedText = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Флаг для отслеживания, была ли анимация
  const [isVisible, setIsVisible] = useState(false); // Флаг видимости текста

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200 && !hasAnimated) { // Анимация запускается только один раз
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Как только текст стал видимым, фиксируем, что анимация прошла
  useEffect(() => {
    if (isVisible) {
      setHasAnimated(true);
    }
  }, [isVisible]);

  return (
    <Box w="100%" p={4}>
      <motion.div
        initial={{ opacity: 0, x: -200 }} // Текст начинает слева и невидим
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : -200, // Когда текст становится видимым, он двигается слева направо
        }}
        transition={{ duration: 1 }}
      >
        <Heading as="h2" size="xl">
          Добро пожаловать на наш сайт!
        </Heading>
        <Text mt={4}>
          Мы рады приветствовать вас. Прокрутите вниз, чтобы узнать больше.
        </Text>
      </motion.div>
    </Box>
  );
};

export default ScrollAnimatedText;