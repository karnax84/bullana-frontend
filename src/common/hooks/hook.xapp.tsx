import { useCallback, useContext } from "react";
import { XappProviderContext } from "providers/provider.xapp";

export const useAccount = () => {
  const contextData = useContext(XappProviderContext);
  return contextData;
};
