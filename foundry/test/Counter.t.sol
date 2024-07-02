// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "contracts/Counter.sol";

contract CounterTest is Test {
    Counter counter;

    function setUp() public {
        counter = new Counter();
        counter.setCounter(0);
    }
    // function testGetNumber() public {
    //     assertEq(counter.number(), 0);
    // }
    function testIncrement() public {
        counter.increment();
        assertEq(counter.counter(), 1);
    }
    function testDecrement() public {
        counter.setCounter(10);
        counter.decrement();
        assertEq(counter.counter(), 9);
    }
    function testSetCounter(uint256 x) public {
        counter.setCounter(x);
        assertEq(counter.counter(), x);
    }
    function testResetCounter() public {
        counter.setCounter(0);
        assertEq(counter.counter(), 0);
    }
}
