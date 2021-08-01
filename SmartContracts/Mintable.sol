pragma solidity ^0.5.16;

import "./ERC20.sol";

contract Mintable is ERC20{
    
    mapping (address => bool) internal minterList;
    
    modifier onlyMinter() {
        require( minterList[msg.sender] ,"ERC20: Not the Minter!");
        _;
    }
    
    function mint(address account, uint256 amount)public onlyMinter returns(bool){
        _mint(account, amount);
        return true;
    }
    
    // function mint(address account, uint256 amount) public onlyMinter {
    //     // require(!finalized,"ERC20: No more tokens can be minted!");
    //     require(account != address(0), "ERC20: mint to the zero address");
    //     require(amount.add(_totalSupply) <= cap, "ERC20: Exceeding maxSupply");

    //     _totalSupply = _totalSupply.add(amount);
    //     _balances[account] = _balances[account].add(amount);
    //     // emit Transfer(address(0), account, amount);
    // }
    
}
