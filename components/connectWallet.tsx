
'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from "./ui/button"
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
    {
        if (!address) {
            return (
                <>
                    <Button variant="outline" className="mr-5 bg-green-300 hover: bg-green-200 dark:bg-green-500 dark:hover:bg-green-400"
                        onClick={connect}>
                        Connect
                    </Button>
                </>
            )
        }
        if (address) {
            return (
                <>
                    <Button variant="outline" className="mr-5 bg-red-300 hover: bg-red-200 dark:bg-red-500 dark:hover:bg-red-400" onClick={disConnect}>
                        Disconnect</Button> 
                </>
            )
        }

    }

}
