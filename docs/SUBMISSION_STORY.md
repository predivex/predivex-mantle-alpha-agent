# Predivex Mantle Alpha Agent

## One-liner

Predivex is the prediction-market intelligence terminal; Mantle is the
verifiable proof and reputation layer for AI market calls.

## Short Pitch

Prediction markets are fragmented across venues. Traders need to compare odds,
detect dislocations, and understand whether an AI signal has a real track
record. Most AI trading demos stop at a black-box recommendation.

Predivex already scans live prediction-market data across venues. The Mantle
Alpha Agent turns that stream into a research-copilot workflow. It detects
cross-venue spreads and violent probability moves, generates ranked market
calls, explains what to inspect or monitor next, creates deterministic proof
hashes for both decisions and the research brief, anchors selected calls on
Mantle Sepolia, and then scores the agent against later market movement.

For Phase II, the live feed also includes ELFA-powered market-intelligence
enrichment when credits are available. That makes the agent a stronger
AI Alpha & Data submission: Predivex contributes prediction-market signal
detection, while ELFA adds external narrative and token-context signals.

The result is a public reputation trail for AI market intelligence and agent
advice. The agent is not a custodian and does not execute trades. It produces
verifiable research artifacts that users can inspect before deciding what to do
elsewhere.

## Why Mantle

Mantle gives the agent an audit layer. A market call or research brief can be
made in Predivex, hashed, anchored on Mantle Sepolia, and linked back to the
live decision feed. That creates a path from AI insight to public proof to agent
reputation.

## What Works Today

- Live demo: `https://app.predivex.com/mantle-agent`
- Live API: `https://app.predivex.com/api/mantle/alpha-agent`
- Contract: `0x7DA2bC98E2392810a1f088955C65c72EBc76692A`
- Network: Mantle Sepolia, chain id `5003`
- Agent id: `predivex-mantle-alpha-agent`
- Signals: cross-venue spreads and momentum dislocations
- ELFA enrichment: key status, trending narratives, and token-context signals
- Research brief: inspect, monitor, context, risk, and proof-audit items
- Proofs: deterministic decision hashes
- On-chain layer: `PredivexDecisionRegistry`
- Reputation layer: scored calls track market movement after the anchor

## Architecture

1. Predivex scans live market data across supported prediction-market venues.
2. The Mantle Alpha Agent ranks opportunities by edge, confidence, liquidity,
   and signal type.
3. The research copilot turns those signals into next-step context and risk
   boundaries.
4. Each decision payload and research brief is hashed into a deterministic
   `proofHash`.
5. The anchor script records selected hashes in `PredivexDecisionRegistry` on
   Mantle Sepolia.
6. The UI shows live calls, research-brief guidance, proof hashes, explorer links,
   and post-anchor performance.

## Track Fit

Track: AI Alpha & Data.

This is not a generic AI trading bot. It is a data, intelligence, and
research layer for a market category where timing, provenance, and reputation
matter. Mantle turns the agent's output into verifiable public evidence.

## Demo Links

- DoraHacks BUIDL: `https://dorahacks.io/buidl/44565`
- Demo page: `https://app.predivex.com/mantle-agent`
- API endpoint: `https://app.predivex.com/api/mantle/alpha-agent`
- Contract explorer:
  `https://explorer.sepolia.mantle.xyz/address/0x7DA2bC98E2392810a1f088955C65c72EBc76692A`

## Safety Boundary

Predivex does not custody user funds, does not execute trades, and does not
provide financial advice. The Mantle Alpha Agent creates verifiable research
artifacts only.

## X Thread Draft

1/ We built Predivex Mantle Alpha Agent for `#MantleAIHackathon`.

Predivex is the prediction-market intelligence terminal; Mantle is the
verifiable proof and reputation layer for AI market calls.

2/ Prediction markets are fragmented across venues. The agent scans live market
data and ranks cross-venue spreads plus momentum dislocations.

Each call includes edge, confidence, evidence, and a deterministic proof hash.

3/ The research copilot turns the raw signals into a brief: what to inspect,
what moved, what outside context matters, which risk boundary applies, and which
Mantle proofs to audit.

4/ The proof hash is anchored on Mantle Sepolia through a simple decision
registry contract.

Contract:
`0x7DA2bC98E2392810a1f088955C65c72EBc76692A`

5/ The demo links each anchored call to the Mantle explorer, so the signal can
be audited outside our UI.

Live demo:
`https://app.predivex.com/mantle-agent`

6/ After anchoring, Predivex scores the agent against later market movement.
That turns AI calls from black-box recommendations into a public reputation
feed.

7/ Safety boundary: no custody, no order execution, no financial advice.

The agent creates verifiable research artifacts only.

8/ Demo video:
`https://youtu.be/9sgV45369Vo`

Backup videos are included in the public repo:
`demo/predivex-mantle-alpha-agent-demo.mp4`
`demo/predivex-mantle-alpha-agent-deployment-demo.mp4`

DoraHacks: `https://dorahacks.io/buidl/44565`

GitHub: `https://github.com/predivex/predivex-mantle-alpha-agent`

Track: AI Alpha & Data.

## DoraHacks Description

Predivex Mantle Alpha Agent is a verifiable AI intelligence layer and research
copilot for prediction markets. It scans live cross-venue market data, emits
ranked alpha calls with evidence and confidence, turns them into
inspect/monitor/context/risk/proof-audit brief items, hashes every decision
payload and research brief, anchors selected proof hashes on Mantle Sepolia,
and tracks post-anchor movement to build an auditable agent reputation feed.

The product is intentionally non-custodial. It does not execute trades or hold
funds. Predivex provides market intelligence; Mantle provides the public proof
layer for autonomous agent calls.
