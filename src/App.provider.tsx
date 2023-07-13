import React, { PropsWithChildren } from 'react';

type AppContext = {
  greeting: string;
};

const defaultState: AppContext = {
  greeting: '',
};

const Context = React.createContext<AppContext>(defaultState);

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Context.Provider value={{ greeting: 'Hello' }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => React.useContext(Context);
