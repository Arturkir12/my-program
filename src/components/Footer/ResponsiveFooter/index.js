import React from "react";
import {
    Flex,
    Stack,
} from "@chakra-ui/react"

import {ReactComponent as FaceBookIcon} from "../../../assets/svg/FaceBookIcon.svg"
import {ReactComponent as InstagramIcon} from "../../../assets/svg/Instagram.svg"
import {ReactComponent as LinkedinIcon} from "../../../assets/svg/Linkedin.svg"

const MobileScreenFooter = () => {
    return(
        <Flex w="full" h="120px" justifyContent="center" alignItems="center" bgColor="black">
      <Flex w="full" justifyContent="space-between" alignItems="center" px={4}>
        {/* Логотип */}
        <Flex color="white" fontSize="30px" alignItems="center" fontFamily="Jockey One">
          LOGO
        </Flex>

        {/* Иконки социальных сетей */}
        <Stack direction="row" spacing="10px" align="center">
          <LinkedinIcon style={{ width: "50px", height: "50px" }} />
          <InstagramIcon style={{ width: "50px", height: "50px" }} />
          <FaceBookIcon style={{ width: "50px", height: "50px" }} />
        </Stack>

        {/* Кнопка выбора языка */}
      </Flex>
    </Flex>
    )
}

export default MobileScreenFooter