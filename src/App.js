import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import RoutesProviders from "./routes/Routes"

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <RoutesProviders />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
