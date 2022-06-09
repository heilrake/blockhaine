import { createContext, FC, useContext, useEffect, useState } from 'react';
<<<<<<< HEAD
import { createDefaultState, Web3State, loadContract } from './ultils';
=======
import { createDefaultState, Web3State } from './ultils';
>>>>>>> 82332f9493b5d91dada2c5191f0e84e21fce4a05
import { ethers } from 'ethers';

interface MyProps {
  children?: React.ReactNode;
}
const Web3Context = createContext<any>(null);

const Web3Provider: FC<MyProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());
<<<<<<< HEAD
  useEffect(
    () =>
      function initWeb3() {
        async function initWeb3() {
          const provider = new ethers.providers.Web3Provider(window.ethereum as any);
          const contract = await loadContract('NftMarket', provider);
=======

  useEffect(() => {
    function initWeb3() {
      const provider = new ethers.providers.Web3Provider(window.ethereum as any);

      setWeb3Api({
        ethereum: window.ethereum,
        provider,
        contract: null,
        isLoading: false,
      });
    }

    initWeb3();
  }, []);
>>>>>>> 82332f9493b5d91dada2c5191f0e84e21fce4a05

          setWeb3Api({
            ethereum: window.ethereum,
            provider,
            contract,
            isLoading: false,
          });
        }
        initWeb3();
      },
    [],
  );
  return <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>;
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
