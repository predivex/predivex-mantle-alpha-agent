# Judging Alignment

This document maps Predivex Mantle Alpha Agent to the official judging model:
one general Mantle scorecard plus one track-specific scorecard per reviewed
project.

## Primary Track

AI Alpha & Data, sponsored by Mirana Ventures.

Best path inside the track: Trading Strategy, with Data & Analytics as a
secondary lens.

## Mantle General Scorecard

| Criterion | Weight | Predivex Evidence |
| --- | ---: | --- |
| Technical | 15 | Live API, live UI, deterministic proof hashing, Solidity registry, deploy and anchor scripts, Mantle Sepolia transactions. |
| Ecosystem fit | 10 | Mantle is used as the public proof and reputation layer for AI market calls, not only as a passive deployment target. |
| Business potential | 10 | Predivex is an existing prediction-market intelligence product with a clear terminal/research workflow and a credible path to paid subscriptions, alerts, and API access. |
| Innovation | 10 | The project combines prediction-market intelligence, AI-ranked calls, proof hashes, on-chain anchoring, and post-anchor scoring into an auditable reputation feed. |
| User experience | 5 | The public demo shows live scan metrics, ranked decisions, evidence, proof hashes, Mantle status, and explorer links in one reviewable interface. |

## Alpha & Data Track: Trading Strategy Path

| Criterion | Weight | Predivex Evidence |
| --- | ---: | --- |
| Strategy alpha | 15 | The agent surfaces cross-venue spreads and momentum dislocations from live prediction-market data, ranking calls by edge, confidence, liquidity, and signal type. |
| Verifiability and auditability | 15 | Each call has a deterministic `proofHash`; selected hashes are anchored on Mantle Sepolia through `PredivexDecisionRegistry`; the UI links to explorer transactions and tracks post-anchor movement. |
| Investment potential | 12 | The output is designed for prediction-market research workflows: market discovery, spread monitoring, momentum alerts, and auditable signal history. It is non-custodial and can scale into a paid intelligence terminal/API. |
| Risk management | 8 | The demo does not execute trades or custody funds. Calls include confidence, evidence, liquidity, and scoring. The system records research artifacts and avoids automatic order execution. |

## Alpha & Data Track: Data & Analytics Lens

| Criterion | Weight | Predivex Evidence |
| --- | ---: | --- |
| Insight value | 15 | The live feed highlights prediction-market dislocations that are hard to inspect manually across venues. |
| Data source quality | 15 | The demo uses live Predivex market data plus ELFA market-intelligence enrichment when credits are available. |
| Investment utility | 12 | The agent output is actionable research: market title, side, edge, confidence, evidence, proof hash, and post-anchor score. |
| Scalability and sustainability | 8 | The architecture separates market scanning, decision hashing, on-chain anchoring, and frontend review, so more venues, signals, and data providers can be added without changing the proof contract. |

## Grand Champion Lens

| Criterion | Weight | Predivex Evidence |
| --- | ---: | --- |
| Technical depth | 30% | End-to-end working system: live data, agent decisions, hashing, contract, deployment, anchoring, explorer links, and public demo. |
| Innovation | 25% | Verifiable AI market-call reputation for prediction markets is a differentiated AI x Web3 workflow. |
| Mantle ecosystem contribution | 25% | Mantle becomes the proof layer for autonomous market intelligence, giving the ecosystem a concrete agent-reputation use case. |
| Product completeness | 20% | Public demo, public API, public GitHub repo, demo video, safety boundary, and deployment artifacts are all available. |

## Safety Boundary

Predivex does not custody funds, execute trades, or provide financial advice.
The project produces verifiable research artifacts only.
