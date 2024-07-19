
'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from "./ui/button"
// import { useEffect } from 'react'
import { injected } from 'wagmi/connectors'
import { polygonZkEvmCardona } from 'viem/chains';
import { useRouter } from 'next/navigation'




export function ConnectWalletButton() {
    const router = useRouter()
    const { connectAsync } = useConnect()
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const connect = async () => {
        if (!address) {
            await connectAsync({ chainId: polygonZkEvmCardona.id, connector: injected() })
            router.push('/greeting')
         }
    }
    const disConnect = () => {
                // if (address) {
        disconnect()
        router.push('/')
                // }
    }
/* 
    useEffect(() => {
        connect() 
    }, [address]); */

    {
        if (!address) {
            return (
                <div className='hidden md:flex'>
                    <Button variant="outline" className="mr-5 text-[#0891b2] hover:text-[#0f766e] dark:text-[#2dd4bf] "
                        onClick={connect}>
                        Connect
                    </Button>
                </div>
            )
        }
        if (address) {
            return (
                <div className='hidden md:flex'>
                    <Button variant="outline" className="mr-5 text-[#be185d] dark:text-[#fb7185] hover:text-[#be123c] " onClick={disConnect}>
                        Disconnect</Button> 
                </div>
            )
        }

    }

}
