import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Movies from "./components/Movies";  // new

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Movies />  {/* new */}
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)