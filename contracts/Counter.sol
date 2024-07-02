// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Counter {
    uint256 public counter;

    function setCounter(uint256 _counter) public {
        counter = _counter;
    }
    function getCounter() public view returns ( uint256 ) {
        return counter;
    }
    function increment() public {
        counter++;
    }
    function decrement() public {
        counter--;
    }
    function resetCounter() public {
        counter = 0;
    }
}
