import React, { useEffect, useState } from "react";
import { Box,Flex, Text,useBreakpointValue } from "@chakra-ui/react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { motion, AnimatePresence } from "framer-motion";
import MobileScreenGoogleMaps from "./ResponsiveGoogleMaps";

const mapContainerStyle = {
  width: "500px",
  height: "340px",
  borderRadius: "20px",
  border: "1px solid transparent",
};

const center = {
  lat: 40.1772,
  lng: 44.50349,
};

const MotionText = motion(Text);

const LargeScreenGoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.none,
  });

  const [map, setMap] = React.useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showText, setShowText] = useState(false);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (hasScrolled) return; 

      const mapElement = document.getElementById("google-map");
      if (mapElement) {
        const { top, bottom } = mapElement.getBoundingClientRect();
        const isVisible = top >= 0 && bottom <= window.innerHeight;

        if (isVisible) {
          setShowText(true);
          setHasScrolled(true); 

          const timer = setTimeout(() => {
            setShowText(false); 
          }, 4000);

          return () => clearTimeout(timer);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasScrolled]);

  if (loadError) return <Box>Error with MAP loading</Box>;
  if (!isLoaded) return <Box>MAP loading...</Box>;

  return (
    <Box
      id="google-map"
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      w="500px"
      h="340px"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          zoomControl: false,
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
          mt="-195px"
          w="290px"
          h="50px"
          fontFamily="Montserrat"
          border="2px solid white"
          transform="translate(-50%, -50%)"
          fontSize="xl"
          fontWeight="bold"
          color="white"      
          bg="rgba(0, 0, 0, 0.6)"
          borderRadius="md"
          ml="100px"
          transition={{ duration: 0.5 }} 
        >
          <Flex justifyContent="center" mt="10px" alignItems="center">
            THIS IS OUR LOCATION    
          </Flex>
        </MotionText>
        )}
      </AnimatePresence>
    </Box>
  );
};

const GoogleMapsComponent = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    
    <Flex>
         {isMobile ? <MobileScreenGoogleMaps/> : <LargeScreenGoogleMaps/>}
    </Flex>
  )
}

export default GoogleMapsComponent
