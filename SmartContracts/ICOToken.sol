pragma solidity ^0.5.16;

import "./ERC20Detailed.sol";
import "./Ownable.sol";
import "./Mintable.sol";

contract ICOToken is ERC20Detailed, Ownable, Mintable{
    
    constructor (string memory _name, string memory _symbol, uint8 _decimals, uint256 _cap)
    ERC20Detailed(_name,_symbol,_decimals)
    Ownable (msg.sender)
    public{
        cap = _cap;
    }
    
    function addMinter(address _minter) public onlyOwner{
        require(_minter != address(0),"Invalid minter address!");
        minterList[_minter] = true;
    }
    
    function removeMinter(address _minter) public onlyOwner{
        require(_minter != address(0),"Invalid minter address!");
        minterList[_minter] =false;
    }
}