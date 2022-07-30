// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CampaignFactory {

    address[] public deployedCampaigns;

   function createCampaign(uint minimum) public {
       address newCampaign = address(new Campaign(minimum, msg.sender));
       deployedCampaigns.push(newCampaign);
   }

   function getDeployedCampaigns() public view returns (address[] memory) {
       return deployedCampaigns;
   }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint public minContribution;
    uint public contributorCount;
    uint public requestIndex;

    mapping(address =>  bool) public approvers;
    mapping(uint => Request) public requests;

    constructor(uint minimum, address creator) payable {
        manager = creator;
        minContribution = minimum;
        contributorCount = 0;
        requestIndex = 0;
    }

    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }

    function contribute() public payable {
        require(msg.value > minContribution);
    
        if (!approvers[msg.sender]) {
            approvers[msg.sender] = true;
            contributorCount++;
        }
    }

    function createRequests(string memory description, uint value, address payable recipient) 
    public onlyManager {
        require(value <= address(this).balance);
        Request storage request = requests[requestIndex];

        request.description = description;
        request.recipient = recipient;
        request.value = value;
        request.complete = false;
        request.approvalCount = 0;
        
        requestIndex++;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(request.value != 0); // checks if the request exists
        require(!request.complete); 
        require(approvers[msg.sender]); // checks if signee is an approver
        require(request.approvals[msg.sender] == false); // only allow signing once

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public onlyManager {
        Request storage request = requests[index];
        
        require(!request.complete);
        require(request.approvalCount > (contributorCount / 2));
        
        request.complete = true;
        request.recipient.transfer(request.value);
        
    }

    function getSummary() public view returns (uint, uint, uint, uint, address) {
        return (
            minContribution,
            address(this).balance,
            requestIndex,
            contributorCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requestIndex;
    }
}