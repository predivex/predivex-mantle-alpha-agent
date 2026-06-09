// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract PredivexDecisionRegistry {
    struct Decision {
        address recorder;
        string decisionId;
        string metadataUri;
        uint64 recordedAt;
    }

    string public agentId;
    address public owner;
    mapping(bytes32 => Decision) public decisions;

    event DecisionRecorded(
        bytes32 indexed proofHash,
        string decisionId,
        string metadataUri,
        address indexed recorder,
        uint64 recordedAt
    );

    error EmptyAgentId();
    error EmptyDecisionId();
    error EmptyProofHash();
    error AlreadyRecorded(bytes32 proofHash);

    constructor(string memory initialAgentId) {
        if (bytes(initialAgentId).length == 0) revert EmptyAgentId();
        owner = msg.sender;
        agentId = initialAgentId;
    }

    function recordDecision(
        bytes32 proofHash,
        string calldata decisionId,
        string calldata metadataUri
    ) external {
        if (proofHash == bytes32(0)) revert EmptyProofHash();
        if (bytes(decisionId).length == 0) revert EmptyDecisionId();
        if (decisions[proofHash].recordedAt != 0) {
            revert AlreadyRecorded(proofHash);
        }

        uint64 recordedAt = uint64(block.timestamp);
        decisions[proofHash] = Decision({
            recorder: msg.sender,
            decisionId: decisionId,
            metadataUri: metadataUri,
            recordedAt: recordedAt
        });

        emit DecisionRecorded(
            proofHash,
            decisionId,
            metadataUri,
            msg.sender,
            recordedAt
        );
    }

    function isRecorded(bytes32 proofHash) external view returns (bool) {
        return decisions[proofHash].recordedAt != 0;
    }
}
