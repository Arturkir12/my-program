import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import RoutesProviders from "./routes/Routes"
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n"

function App() {
  return (
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <ChakraProvider>
        <RoutesProviders />
      </ChakraProvider>
    </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
