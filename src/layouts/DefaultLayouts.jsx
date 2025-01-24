import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
