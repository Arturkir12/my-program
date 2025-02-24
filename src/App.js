import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import RoutesProviders from "./routes/Routes";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n";
import { Global } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={`
      body::-webkit-scrollbar {
        display: none; /* Скрывает скролл в Chrome/Safari */
      }
    `}
  />
);

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <GlobalStyles />
        <RoutesProviders />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
