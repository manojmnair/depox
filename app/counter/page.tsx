'use client';

import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { useEffect, useState } from "react";
import { Address } from 'viem'
import { Button } from "../../components/ui/button"
import getContractData from "../../hooks/contractData";


export default function Counter() {
  const [hasMounted, setHasMounted] = useState(false)
  const [counter, setCounter] = useState(0)
  const [initialCount, setInitialCount] = useState(0); 
  const { address } = useAccount();
  const { isConnected } = useAccount()

  const { counterAbi, counterAddr } = getContractData();
  const { data: hash, writeContract } = useWriteContract();

  const { data: currentCounter, refetch } = useReadContract({
    abi: counterAbi,
    address: counterAddr as Address,
    functionName: "counter",
  })
  const { isLoading, isSuccess } =
    useWaitForTransactionReceipt({
      hash,
    })
  const handleIncrement = () => {
    writeContract({
      abi: counterAbi,
      address: counterAddr as Address,
      functionName: "increment",
    })
  }

  const handleDecrement = () => {
    writeContract({
      abi: counterAbi,
      address: counterAddr as Address,
      functionName: "decrement",
    })
  }

  const handleReset = () => {
    writeContract({
      abi: counterAbi,
      address: counterAddr as Address,
      functionName: "resetCounter",
    })
  }
   async function handleSetCount() {
    writeContract({
      abi: counterAbi,
      address: counterAddr as Address,
      functionName: "setCounter",
      args: [
        initialCount
      ],
    })
  } 

  const handleInitialCountChange = (event: React.ChangeEvent<HTMLInputElement>,) => {
    setInitialCount(Number(event.target.value));
  };
  useEffect(() => {
    setHasMounted(true);
  }, []) 


  useEffect(() => {
    if (isSuccess) refetch()
    console.log({ currentCounter })
    setCounter(Number(currentCounter) )
  }, [currentCounter, isSuccess, refetch])

  if (!hasMounted) return null

  return (
    <div className="px-3 py-2 z-0">
      { address }
      <h1>Counter:{counter}</h1> 
      {isLoading && <p>Updating Count...</p>}

      {isConnected && 
<>
        <Button onClick={handleIncrement}  className ="m-2">+1</Button>

        <Button onClick={handleDecrement}  className="m-2">-1</Button>


        <Button onClick={handleReset}  className="m-2">Reset</Button>

      <div className="m-2" >
        <input className="text-base border-r-8 p-2"
          type="number"
            value={initialCount}
          onChange={handleInitialCountChange}
        />
        <Button
            onClick={handleSetCount}
          className="p-1 text-base ml-1 border-r-4 cursor-pointer border-none outline-none" >
          Set Initial Count
        </Button>    
      </div> 
        </>
      }
    </div>
  );
}
