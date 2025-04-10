import { IBackendApiCallBaseResponse } from "common/types/types.backend";
import { IResUserData, IUserData } from "common/types/types.profile";
import { fetchUserLoginStatus } from "common/utils/backends/utils.backends.user";
import { useState, createContext, useCallback, useEffect } from "react";
import { Bounce, ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface XappProviderContextType {
  user?: IUserData;
  logout: () => void;
  showToast: (type?: string, message?: string) => void;
  showToastResponse: (res: IBackendApiCallBaseResponse) => void;
}

export const XappProviderContext = createContext<XappProviderContextType>(
  {} as XappProviderContextType
);

interface XappProviderProps {
  children: React.ReactNode;
}
const XappProvider: React.FC<XappProviderProps> = ({ children }) => {

  const [user, setUser] = useState<IUserData>();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
    window.location.pathname = '/login';
    // await fetchLogout();
  };
  const options: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  }
  const showToast = (type?: string, message?: string) => {
    if (type === "success") {
      toast.success(message, options);
    } else if (type === 'warn') {
      toast.warn(message, options);
    } else if (type === 'error') {
      toast.error(message || "Something is wrong", options);
    } else if (type === 'info') {
      toast.info(message || "Something is wrong", options);
    } 
    else {
      toast(message, options);
    }
  }
  const showToastResponse = (res: IBackendApiCallBaseResponse) => {
    if (res.status === "success") {
      toast.success(res.message, options);
    } else if (res.status === 'warn') {
      toast.warn(res.message, options);
    } else if (res.status === 'error') {
      toast.error(res.message || "Something is wrong", options);
    } else if (res.status === 'info') {
      toast.info(res.message || "Something is wrong", options);
    }
    else {
      toast(res.message, options);
    }
  }
  const loadData = async () => {
    const userdata: IResUserData | null = await fetchUserLoginStatus();
    if (!userdata) {
      if (window.location.pathname !== '/login') {
        window.location.pathname = '/login';
      }
    } else {
      setUser(userdata.user);
      if (window.location.pathname === '/login') {
        window.location.pathname = '/home';
      }
    }
  }
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <XappProviderContext.Provider
      value={{
        user,
        logout,
        showToast,
        showToastResponse
      }}
    >
      {children}
      <ToastContainer />
    </XappProviderContext.Provider>
  );
};

export default XappProvider;
