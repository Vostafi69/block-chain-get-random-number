// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Random {
    uint8 public randNum;

    function generateNumber() public returns (uint8) {
        bytes32 hash = blockhash(block.number);
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, hash, msg.sender)));
        randNum = uint8((randomNumber % 20) + 1);
        return randNum;
    }
}
