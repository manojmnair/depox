// import counter from "../build/artifacts/contracts/Counter.sol/Counter.json";
// import faucet from "../build/artifacts/contracts/Faucet.sol/Faucet.json";
import address_json = require("../ignition/deployments/chain-2442/deployed_addresses.json");
import module_json = require("../ignition/deployments/chain-2442/artifacts/CounterModule#Counter.json");
// import { counterAbi } from "./Counter";
// import { faucetAbi } from "./Faucet";
export default function getContractData() {
    return {
        counterAbi: module_json["abi"],
        infoAbi: module_json["abi"],
        // faucetAbi,
        // counterAddr: "0x36d91E900F2C3d238d07eA32599C282eC6BEdEB8",
        // faucetAddr: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
        counterAddr: address_json["CounterModule#Counter"],
        infoAddr: address_json["CounterModule#Counter"],
    }
}

// /ignition/deployments/chain-2442/deployed_addresses.json
// /ignition/deployments/chain-2442/artifacts/CounterModule#Counter.json
