import { createContext } from 'react';

const GlobalContext = createContext({
    globalVariable: '',
    setGlobalVariable: () => {},
});

export const setGlobalVariable = (value) => {
    this.globalVariable = value
};

export default GlobalContext;