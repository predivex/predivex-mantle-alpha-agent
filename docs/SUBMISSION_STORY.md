# Predivex Mantle Alpha Agent

## One-liner

Predivex is the prediction-market intelligence terminal; Mantle is the
verifiable proof and reputation layer for AI market calls.

## Short Pitch

Prediction markets are fragmented across venues. Traders need to compare odds,
detect dislocations, and understand whether an AI signal has a real track
record. Most AI trading demos stop at a black-box recommendation.

Predivex already scans live prediction-market data across venues. The Mantle
Alpha Agent turns that stream into auditable market calls. It detects
cross-venue spreads and violent probability moves, generates a deterministic
proof hash for each decision, anchors selected calls on Mantle Sepolia, and then
scores the agent against later market movement.

The result is a public reputation trail for AI market intelligence. The agent is
not a custodian and does not execute trades. It produces verifiable research
artifacts that users can inspect before deciding what to do elsewhere.

## Why Mantle

Mantle gives the agent an audit layer. A market call can be made in Predivex,
hashed, anchored on Mantle Sepolia, and linked back to the live decision feed.
That creates a path from AI insight to public proof to agent reputation.

## What Works Today

- Live demo: `https://app.predivex.com/mantle-agent`
- Live API: `https://app.predivex.com/api/mantle/alpha-agent`
- Contract: `0x7DA2bC98E2392810a1f088955C65c72EBc76692A`
- Network: Mantle Sepolia, chain id `5003`
- Agent id: `predivex-mantle-alpha-agent`
- Signals: cross-venue spreads and momentum dislocations
- Proofs: deterministic decision hashes
- On-chain layer: `PredivexDecisionRegistry`
- Reputation layer: scored calls track market movement after the anchor

## Architecture

1. Predivex scans live market data across supported prediction-market venues.
2. The Mantle Alpha Agent ranks opportunities by edge, confidence, liquidity,
   and signal type.
3. Each decision payload is hashed into a deterministic `proofHash`.
4. The anchor script records selected hashes in `PredivexDecisionRegistry` on
   Mantle Sepolia.
5. The UI shows live calls, proof hashes, explorer links, and post-anchor
   performance.

## Track Fit

Track: AI Alpha & Data.

This is not a generic AI trading bot. It is a data and intelligence layer for a
market category where timing, provenance, and reputation matter. Mantle turns
the agent's output into verifiable public evidence.

## Demo Links

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

3/ The proof hash is anchored on Mantle Sepolia through a simple decision
registry contract.

Contract:
`0x7DA2bC98E2392810a1f088955C65c72EBc76692A`

4/ The demo links each anchored call to the Mantle explorer, so the signal can
be audited outside our UI.

Live demo:
`https://app.predivex.com/mantle-agent`

5/ After anchoring, Predivex scores the agent against later market movement.
That turns AI calls from black-box recommendations into a public reputation
feed.

6/ Safety boundary: no custody, no order execution, no financial advice.

The agent creates verifiable research artifacts only.

7/ Demo video: `<add video link>`

GitHub: `https://github.com/ebinxdd/predivex-mantle-alpha-agent`

Track: AI Alpha & Data.

## DoraHacks Description

Predivex Mantle Alpha Agent is a verifiable AI intelligence layer for prediction
markets. It scans live cross-venue market data, emits ranked alpha calls with
evidence and confidence, hashes every decision payload, anchors selected proof
hashes on Mantle Sepolia, and tracks post-anchor movement to build an auditable
agent reputation feed.

The product is intentionally non-custodial. It does not execute trades or hold
funds. Predivex provides market intelligence; Mantle provides the public proof
layer for autonomous agent calls.
