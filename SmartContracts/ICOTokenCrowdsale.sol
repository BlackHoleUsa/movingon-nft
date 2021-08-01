pragma solidity ^0.5.16;

import "./ICOToken.sol";
import "./Reentrancyguard.sol";
import "./SafeMath.sol";
import "./Ownable.sol";

contract ICOTokenCrowdsale is ReentrancyGuard, Ownable {
    
    using SafeMath for uint256;
    
    ICOToken internal _token;
    
    bool public crowdsaleFinalized;
    
    uint256 private icoCap;
    uint256 public soldTokens;
    
    // Address where funds are collected
    address payable private _wallet;
    
    uint256 private _rate;

    // Amount of wei raised
    uint256 private _weiRaised;
    
    event TokensPurchased(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);
    
    constructor (uint256 rate, ICOToken token, uint256 _icocap) public 
    Ownable(msg.sender)
    {
        _rate = rate;
        _wallet = msg.sender;
        _token = token; 
        crowdsaleFinalized = false;
        icoCap = _icocap;
    }
    
    /**
     * @dev fallback function ***DO NOT OVERRIDE***
     * Note that other contracts will transfer funds with a base gas stipend
     * of 2300, which is not enough to call buyTokens. Consider calling
     * buyTokens directly when purchasing tokens from a contract.
     */
    function () external payable {
        buyTokens(msg.sender);
    }

    /**
     * @return the token being sold.
     */
    function token() public view returns (IERC20) {
        return _token;
    }

    /**
     * @return the address where funds are collected.
     */
    function wallet() public view returns (address payable) {
        return _wallet;
    }

    /**
     * @return the number of token units a buyer gets per wei.
     */
    function rate() public view returns (uint256) {
        return _rate;
    }

    /**
     * @return the amount of wei raised.
     */
    function weiRaised() public view returns (uint256) {
        return _weiRaised;
    }

    /**
     * @dev low level token purchase ***DO NOT OVERRIDE***
     * This function has a non-reentrancy guard, so it shouldn't be called by
     * another `nonReentrant` function.
     * @param beneficiary Recipient of the token purchase
     */
    function buyTokens(address beneficiary) public nonReentrant payable {
        
        require(!crowdsaleFinalized,"Crowdsale is finalized!");
        require(beneficiary != address(0), "Crowdsale: beneficiary is the zero address");
        require(beneficiary == msg.sender, "Crowdsale: beneficiary is not the sender");
        require(msg.value != 0, "Crowdsale: weiAmount is 0");
        
        uint256 weiAmount = msg.value;

        // calculate token amount to be created
        uint256 tokens = _getTokenAmount(weiAmount);

        // update state
        _weiRaised = _weiRaised.add(weiAmount);

        _processPurchase(beneficiary, tokens);
        
        emit TokensPurchased(msg.sender, beneficiary, weiAmount, tokens);

        _forwardFunds();
    }
    
    function finalizeCrowdsale() public onlyOwner{
        require(!crowdsaleFinalized,"Crowdsale is finalized!");
        crowdsaleFinalized = true;
    }
    
    /**
     * @dev Executed when a purchase has been validated and is ready to be executed. Doesn't necessarily emit/send
     * tokens.
     * @param beneficiary Address receiving the tokens
     * @param tokenAmount Number of tokens to be purchased
     */
    function _processPurchase(address beneficiary, uint256 tokenAmount) internal {
        // require(soldTokens.add(tokenAmount) < icoCap , "ICO limit reached");
        
        soldTokens = soldTokens.add(tokenAmount);
        _token.mint(beneficiary, tokenAmount);
    }
    
    /**
     * @dev Override to extend the way in which ether is converted to tokens.
     * @param weiAmount Value in wei to be converted into tokens
     * @return Number of tokens that can be purchased with the specified _weiAmount
     */
    function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
        uint256 tokens = weiAmount;
        tokens = tokens.mul(_rate);
        tokens = tokens.mul(1e8);
        tokens = tokens.div(1e18);
        return tokens;
        
    }
    
    /**
     * @dev Determines how ETH is stored/forwarded on purchases.
     */
    function _forwardFunds() internal {
        _wallet.transfer(msg.value);
    }
}

