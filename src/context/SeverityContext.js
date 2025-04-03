import React, { createContext, useState, useContext } from 'react';

const SeverityContext = createContext();

export const SeverityProvider = ({ children }) => {
    const [severity, setSeverity] = useState(null);

    return (
        <SeverityContext.Provider value={{ severity, setSeverity }}>
            {children}
        </SeverityContext.Provider>
    );
};

export const useSeverity = () => useContext(SeverityContext);