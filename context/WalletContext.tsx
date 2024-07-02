'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import React, { Dispatch, SetStateAction, createContext, useCallback, useState } from "react";
import { Button } from "../components/ui/button";
import { ethers } from "ethers";
//import { Modal, message } from "antd";




import { useRouter } from 'next/navigation'

interface IWalletProps {
  connected:boolean;
  selectedAddress:string;
  balance: string;
  visible: boolean;
  signer: string;
  setConnected: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  connectWallet: () => Promise<void>;
  //connectWallet: string;
  // disconnectWallet: Dispatch<SetStateAction<boolean>>;
  disconnectWallet: () => void;
  setSelectedAddress: Dispatch<SetStateAction<string>>;
  // setBalance: Dispatch<SetStateAction<number>>;
  setBalance: Dispatch<SetStateAction<string>>;
  dispatch?: ({ type }: { type: string }) => void;
}

export const WalletContext = createContext({} as IWalletProps);

const desiredNetwork = 8082;

export const WalletProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [connected, setConnected] = useState(false);
  const [visible, setVisible] = useState(false);
  const [signer, setSigner] = useState(null);

  const updateBalance = useCallback(async (account) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  }, []);

  const connectWallet = useCallback(async () => {

    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const chainId = await provider
          .getNetwork()
          .then((network) => network.chainId);
        if (chainId !== desiredNetwork) {{

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Wrong Network</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>

                <AlertDialogDescription>
                  Please connect to the Shardeum Sphinx network.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        }
        return; 
        }
/*           Modal.warning({
            title: "Wrong Network",
            content: "Please connect to the Shardeum Sphinx network.",
          });
          return;
        } */

        // Set signer
        // const router = useRouter()
        const signerInstance = provider.getSigner();
        setSigner(signerInstance);

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setSelectedAddress(accounts[0]);
        await updateBalance(accounts[0]);
        setConnected(true);
        setVisible(true);


    } 
      catch (error) {
        console.error(error);
      }
    finally {
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Metamask is not installed</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogDescription>
                Please install it from https://metamask.io
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

/*       Modal.error({
        title: "Metamask is not installed",
        content: "Please install it from https://metamask.io",
      }); */
    }
    }}, []
  );
  // }, [updateBalance, selectedAddress]);

  const disconnectWallet = useCallback(() => {
    setSelectedAddress(null);
    setBalance(null);
    setConnected(false);
    setSigner(null);
    // message.success("Wallet disconnected");
  }, []);

  return (
    <WalletContext.Provider
      value={{
        connected,
        selectedAddress,
        balance,
        visible,
        signer,
        setConnected,
        setVisible,
        connectWallet,
        disconnectWallet,
        setSelectedAddress,
        setBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
