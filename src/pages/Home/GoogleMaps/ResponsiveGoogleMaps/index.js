import React, { useEffect, useState, useCallback } from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { motion, AnimatePresence } from "framer-motion";

const MobileScreenGoogleMaps = () => {
    const center = { lat: 40.1772, lng: 44.50349 };

const MotionText = motion(Text);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
  });

  const [showText, setShowText] = useState(false);
  const mapSize = useBreakpointValue({ base: "300px", md: "500px" });

  const onLoad = useCallback((map) => {
    map.setCenter(center);
  }, []);

  const handleScroll = useCallback(() => {
    const mapElement = document.getElementById("google-map");
    if (!mapElement) return;

    const { top, bottom } = mapElement.getBoundingClientRect();
    const isVisible = top >= 0 && bottom <= window.innerHeight;

    if (isVisible) {
      setShowText(true);
      setTimeout(() => setShowText(false), 88000);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (loadError) return <Box>Error loading map</Box>;
  if (!isLoaded) return <Box>Loading map...</Box>;

    return(
        <Box
      id="google-map"
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      w={mapSize}
      h="340px"
      boxShadow="md"
    >
      <GoogleMap
        mapContainerStyle={{
          width: mapSize,
          height: "340px",
          borderRadius: "20px",
        }}
        center={center}
        zoom={10}
        onLoad={onLoad}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          zoomControl: true,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
      <AnimatePresence>
        {showText && (
          <MotionText
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            position="absolute"
            mt="-200px"
            ml="70px"
            transform="translate(-50%, -50%)"
            px="16px"
            py="8px"
            fontSize="13px"
            fontWeight="bold"
            color="white"
            bg="rgba(0, 0, 0, 0.6)"
            borderRadius="md"
            transition={{ duration: 0.5 }}
            textAlign="center"
          >
            THIS IS OUR LOCATION
          </MotionText>
        )}
      </AnimatePresence>
    </Box>
    )
}


export default MobileScreenGoogleMaps