# AI Screening Readiness

This document summarizes the current project-completion state for hackathon
review.

## Required Artifacts

- BUIDL: `https://dorahacks.io/buidl/44565`
- Public repository: `https://github.com/predivex/predivex-mantle-alpha-agent`
- Live demo: `https://app.predivex.com/mantle-agent`
- Live API: `https://app.predivex.com/api/mantle/alpha-agent`
- Demo video:
  `https://github.com/predivex/predivex-mantle-alpha-agent/blob/main/demo/predivex-mantle-alpha-agent-deployment-demo.mp4`
- Contract:
  `0x7DA2bC98E2392810a1f088955C65c72EBc76692A`
- Contract explorer:
  `https://explorer.sepolia.mantle.xyz/address/0x7DA2bC98E2392810a1f088955C65c72EBc76692A`

## What Is Working

- The public UI loads a live Mantle Alpha Agent dashboard.
- The public API returns live ranked decisions.
- The agent scans prediction-market data and detects cross-venue spreads plus
  momentum dislocations.
- The live feed includes ELFA-powered market-intelligence enrichment when
  credits are available.
- Each decision has a deterministic proof hash.
- Selected proof hashes are anchored on Mantle Sepolia.
- The UI links anchored decisions to Mantle explorer transactions.
- The live feed scores decisions after anchoring to create an auditable
  reputation trail.

## On-Chain Proof Examples

- `0xffeed79888703679bda8e4caf6c602f8c0c1b3b760dcef7996f4ca0c4d9d704c`
- `0x7407c841de176d541f5f3d9cc2b50dca6f503acd83cfa8197f897e9e4db2fe1c`

## Safety Boundary

Predivex does not custody funds, execute trades, or provide financial advice.
The Mantle Alpha Agent produces verifiable research artifacts only.
