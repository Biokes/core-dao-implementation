// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {Storage} from "../src/Storage.sol";

contract StorageTest is Test {
    Storage public counter;

    function setUp() public {
        counter = new Storage();
        counter.store(0);
    }

    function test_Increment() public view {
        assertEq(counter.retrieve(), 0);
    }

    function testFuzz_SetNumber(uint256 x) public {
        counter.store(x);
        assertEq(counter.retrieve(), x);
    }
}

