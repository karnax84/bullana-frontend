import React from "react";
import ThemesProvider from "./provider.theme";
import StoreProvider from "./provider.store";
import XappProvider from "./provider.xapp";
import ChakraProvider from "./provider.chakra";

interface AllProviderProps {
  children: React.ReactNode;
}
const AllProvider: React.FC<AllProviderProps> = ({ children }) => {
  return (
    <ThemesProvider>
      <ChakraProvider>
        <XappProvider>
          <StoreProvider>
            {children}
          </StoreProvider>
        </XappProvider>
      </ChakraProvider>
    </ThemesProvider>
  );
};

export default AllProvider;
