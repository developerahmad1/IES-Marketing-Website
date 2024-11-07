// context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLeadPoupOpen, setIsLeadPoupOpen] = useState(false);

    const openLeadpoup = () => setIsLeadPoupOpen(true);
    const closeLeadpoup = () => setIsLeadPoupOpen(false);

    return (
        <AppContext.Provider value={{ isLeadPoupOpen, openLeadpoup, closeLeadpoup }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
