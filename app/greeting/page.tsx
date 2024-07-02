'use client';

import { useAccount, useBalance, useChainId } from 'wagmi';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { useEffect, useState } from "react";
import { Address } from 'viem'
import { Button } from "../../components/ui/button"
import getContractData from "../../hooks/contractData";

export default function Greeting() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { data } = useBalance({
    address: '0x03013e039b495bD56Ac7929a499E0680c2578C36',
    //address: `${address}`
  });

  ////////////
  const [hasMounted, setHasMounted] = useState(false)
  const [info, setInfo] = useState('')
  const [initialInfo, setInitialInfo] = useState('');

  const { isConnected } = useAccount()

  const { infoAbi, infoAddr } = getContractData();
  const { data: hash, writeContract } = useWriteContract();

  const { data: currentInfo, refetch } = useReadContract({
    abi: infoAbi,
    address: infoAddr as Address,
    functionName: "getInfo",
  })

  const { isLoading, isSuccess } =
    useWaitForTransactionReceipt({
      hash,
    })

  useEffect(() => {
    if (isSuccess) refetch()
    console.log({ currentInfo })
    setInfo(currentInfo)
  }, [currentInfo, isSuccess, refetch])

  if (!hasMounted) return null
  ////////////
  return (
    <div className="px-3 py-2 z-0">
      Greeting: {address}
      Greeting: Hello Chain: {chainId} {data?.formatted} {data?.symbol}
      <h1>Info:{info}</h1>
      {isLoading && <p>Updating Info...</p>}
      {isConnected && <Button onClick={getInfo} className="m-2">+1</Button>
      }
    </div>
  );
}
