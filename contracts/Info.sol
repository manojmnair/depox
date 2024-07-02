// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Info {
    string private info = "Hello, World!";

    function getInfo() public view returns (string memory) {
        return info;
    }

    function setInfo(string memory _info) public {
        info = _info;
    }


    }
