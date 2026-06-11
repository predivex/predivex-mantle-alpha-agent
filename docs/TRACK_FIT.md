# Track Fit

This document explains why Predivex Mantle Alpha Agent fits the Mantle Turing
Test Hackathon and the AI Alpha & Data track. It is not a self-assigned score;
it is a concise evidence map for reviewers.

## Primary Track

AI Alpha & Data, sponsored by Mirana Ventures.

Best fit inside the track: Trading Strategy, with Data & Analytics as a
secondary lens.

## Mantle Fit

| Area                     | Evidence                                                                                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technical implementation | Live API, live UI, deterministic proof hashing, Solidity registry, deploy and anchor scripts, and Mantle Sepolia transactions.                                                     |
| Ecosystem contribution   | Mantle is used as the public proof and reputation layer for AI market calls, not only as a passive deployment target.                                                              |
| Product direction        | Predivex is an existing prediction-market intelligence product with a path to subscriptions, alerts, API access, and agent-driven market-intelligence workflows.                   |
| Differentiation          | The project combines deterministic market scanning, agent-ranked calls, agent briefs, proof hashes, on-chain anchoring, and post-anchor scoring into an auditable reputation feed. |
| User experience          | The public demo shows live scan metrics, ranked decisions, evidence, agent-brief items, proof hashes, Mantle status, and explorer links in one reviewable interface.               |

## AI Alpha & Data Fit

| Area                           | Evidence                                                                                                                                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Strategy alpha                 | Deterministic scanners surface cross-venue spreads and momentum dislocations from live prediction-market data; the agent ranks, explains, risk-checks, and routes the calls.                         |
| Verifiability and auditability | Each call has a deterministic `proofHash`; selected hashes are anchored on Mantle Sepolia through `PredivexDecisionRegistry`; the UI links to explorer transactions and tracks post-anchor movement. |
| Investment utility             | The output is designed for prediction-market research workflows: market discovery, spread monitoring, momentum alerts, and auditable signal history.                                                 |
| Risk management                | The demo does not execute trades or custody funds. Calls include confidence, evidence, liquidity, and scoring. The system records research artifacts and avoids automatic order execution.           |
| Data quality                   | The demo uses live Predivex market data plus ELFA market-intelligence enrichment when credits are available.                                                                                         |
| Scalability                    | The architecture separates market scanning, decision hashing, on-chain anchoring, and frontend review, so more venues, signals, and data providers can be added without changing the proof contract. |
| Agent brief                    | The agent turns raw signals into a market brief: what to inspect, what moved, what outside context matters, which risk boundary applies, and which Mantle proofs to audit.                           |

## Safety Boundary

Predivex does not custody funds, execute trades, or provide financial advice.
The project produces verifiable research artifacts only.
