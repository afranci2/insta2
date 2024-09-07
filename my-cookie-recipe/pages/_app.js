import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react"; // Import ChakraProvider

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider> {/* Wrap the app with ChakraProvider */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
