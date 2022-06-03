import { createContext, FC, useContext, useState } from 'react';

interface MyProps {
  children?: React.ReactNode;
}
const Web3Context = createContext<any>(null);

const Web3Provider: FC<MyProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState({ test: 'Hello Provider!' });

  return <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>;
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
