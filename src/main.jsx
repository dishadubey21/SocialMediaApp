import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { ChakraProvider , defaultSystem} from "@chakra-ui/react";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChakraProvider value={defaultSystem}>
    <App />
  </ChakraProvider>
  </BrowserRouter>
)
