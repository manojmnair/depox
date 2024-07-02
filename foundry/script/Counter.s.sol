// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// import {Script, console} from "forge-std/Script.sol";
import "forge-std/Script.sol";
import "forge-std/console.sol";
import {Counter} from "contracts/Counter.sol";

contract CounterScript is Script {
//    function setUp() public {}

    function run() external returns (Counter) {
        vm.startBroadcast();
        Counter counter = new Counter();
        vm.stopBroadcast();
        return counter;
    }
} 
/* contract CounterScript is Script {
    function run() external {
        uint256[] memory deployerPrivateKeys = vm.envUint("WARRINGSTAKES_PRIVATE_KEY", ",");
        address payable ownerAddress = payable(vm.addr(deployerPrivateKeys[0]));
        vm.startBroadcast(ownerAddress);
        new Counter();
        // NFT nft = new NFT("NFT_tutorial", "TUT", "baseUri");
        vm.stopBroadcast();
    }

} */
