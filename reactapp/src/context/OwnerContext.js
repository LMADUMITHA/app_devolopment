import React, { createContext, useContext, useState } from 'react';

const OwnerContext = createContext();

export const useOwner = () => {
  return useContext(OwnerContext);
};

export const OwnerProvider = ({ children }) => {
  const [isOwner, setIsOwner] = useState(false);

  return (
    <OwnerContext.Provider value={{ isOwner, setIsOwner }}>
      {children}
    </OwnerContext.Provider>
  );
};
