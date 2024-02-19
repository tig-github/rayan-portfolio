import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./sections/Layout";
import Home from "./sections/Home";

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: () => ({
        dialog: {
          bg: "purple.100"
        }
      })
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
