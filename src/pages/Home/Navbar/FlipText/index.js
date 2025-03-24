import { useState, useEffect } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const words = [
  "flip_text.create",
  "flip_text.develop",
  "flip_text.design",
  "flip_text.transform"
];

export default function FlipText() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box textAlign="center">
      <Stack direction="column">
        <Flex>
          <Stack direction="row">
            <Flex color="white" lineHeight="40px" fontSize="50px">
              {t("flip_text.we")}{" "}
            </Flex>
            <Box
              display="inline-block"
              textAlign="left"
              position="relative"
              overflow="hidden"
              lineHeight="40px"
              w="500px"
            >
              {words.map((word, i) => (
                <Box
                  key={word}
                  as="span"
                  fontWeight="bold"
                  position="absolute"
                  color="#22d3ee"
                  fontSize="50px"
                  w="100%"
                  opacity={index === i ? 1 : 0}
                  transform={
                    index === i ? "translateY(0)" : "translateY(50px)"
                  }
                  transition="opacity 0.6s ease, transform 0.6s ease"
                >
                  {t(word)}
                </Box>
              ))}
            </Box>
          </Stack>
        </Flex>
        <Flex color="white" lineHeight="60px" fontSize="50px" w="400px" textAlign="left">
          {t("flip_text.your_future")}
        </Flex>
      </Stack>
    </Box>
  );
}
