import React from "react";
import { useNavigate } from "react-router-dom";


 const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    const [isSeller, setIsSeller] = React.useState(false);
      const [showUserLogin, setShowUserLogin] = React.useState(false);
    const value = {navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin};
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => React.useContext(AppContext);