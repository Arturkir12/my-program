import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { ReactComponent as CircleIcon } from "../../../assets/svg/Circle.svg";

const Trust = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="full"
      h="1000px"
      position="relative"
      bgColor="white"
    >
      <Stack direction="row">
        <Flex
          justifyContent="center"
          w="550px"
          h="700px"
          position="relative"
          zIndex={2}
          border="0.5px solid rgb(255, 255, 255)"
          borderRadius="20px"
          backdropFilter="blur(15px)"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
          bgColor="rgba(234, 234, 234, 0.7)"
        >
          <Stack mt="20px" direction="column">
            <Flex textDecoration="underline" textDecorationColor="#a41752" justify="center" textAlign="center" fontSize="30px" color="#18181b" fontWeight="700">We are a team of professionals you can trust!</Flex>
            <Flex justifyContent="center">
            <Flex fontSize="14px" mt="20px" w="490px"  fontFamily="Roboto">
              Our company is made up of experienced specialists who know how to tackle the most complex challenges in IT. We pride ourselves on our reputation and approach to work, where every solution is crafted to meet your unique needs.
            </Flex>   
            </Flex>
            
            <Flex mt="30px" color="#18181b" fontSize="20px" ml="30px" fontFamily="Roboto">Our experts:</Flex>
            <Flex ml="30px">
                <Stack direction="row">
                <Flex w="8px" bgColor="#18181b" borderRadius="50px" mt="9px" ml="2px" h="8px"/>
                <Flex>Have deep expertise in modern technologies.</Flex>
                </Stack>
            </Flex>
            <Flex ml="30px">
                <Stack direction="row">
                <Flex w="8px" bgColor="#18181b" borderRadius="50px" mt="9px" ml="2px" h="8px"/>
                <Flex>Continuously refine their skills to offer only the best solutions.</Flex>
                </Stack>
            </Flex>
            <Flex ml="30px">
                <Stack direction="row">
                <Flex w="8px" bgColor="#18181b" borderRadius="50px" mt="9px" ml="2px" h="8px"/>
                <Flex>Work with attention to detail, quality, and deadlines.</Flex>
                </Stack>
            </Flex>
            <Flex ml="30px">
                <Stack direction="row">
                <Flex w="8px" bgColor="#18181b" borderRadius="50px" mt="9px" ml="2px" h="8px"/>
                <Flex>Put your business goals at the heart of everything we do.</Flex>
                </Stack>
            </Flex>   
            <Flex justifyContent="center">
            <Flex mt="100px" textAlign="center" fontSize="16px" fontWeight="500" w="400px">
              With us, you can be confident in the results. We don't just create solutions; we lay the foundation for your success, helping your business grow and thrive.
            </Flex>
            </Flex>
            <Flex mt="50px" justifyContent="center">
                <Stack direction="column">
                <Flex justifyContent="center" fontWeight="700" fontFamily="Montserrat">Trust the professionals.</Flex>
                <Flex fontFamily="Roboto" >We will not only meet your expectations, but exceed them.</Flex>
                </Stack>
            </Flex>
          </Stack>
        </Flex>

        <Flex position="absolute" mt="100px" ml="300px" transform="rotate(45deg)" zIndex={1}>
          <CircleIcon style={{ width: "400px", height: "400px" }} />
        </Flex>

        <Flex position="absolute" mt="420px" ml="-120px" zIndex={1}>
          <CircleIcon style={{ width: "280px", height: "500px" }} />
        </Flex>

        <Flex transform="rotate(-50deg)" position="absolute" mt="-100px" ml="-100px" zIndex={1}>
          <CircleIcon style={{ width: "300px", height: "300px" }} />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Trust;
