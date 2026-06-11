# Predivex Mantle Alpha Agent

## One-liner

Predivex is the prediction-market intelligence terminal; Mantle is the
verifiable proof and reputation layer for AI market calls.

## Short Pitch

Prediction markets are fragmented across venues. Traders need to compare odds,
detect dislocations, and understand whether an AI signal has a real track
record. Most AI trading demos stop at a black-box recommendation.

Predivex already scans live prediction-market data across venues with
deterministic code. The Mantle Alpha Agent turns that stream into a
market-intelligence workflow: it ranks spread and momentum candidates, explains
what to inspect or monitor next, adds context and risk boundaries, creates
deterministic proof hashes for both decisions and the agent brief, anchors
selected calls on Mantle Sepolia, routes each call into concrete Predivex
YES/NO market legs, and then scores the agent against later market movement.

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
- Signals: deterministic cross-venue spread candidates and momentum
  dislocations
- Alpha Router: concrete YES/NO legs that open the selected Predivex market
  trading desk
- ELFA enrichment: key status, trending narratives, and token-context signals
- Agent brief: inspect, monitor, context, risk, and proof-audit items
- Proofs: deterministic decision hashes
- On-chain layer: `PredivexDecisionRegistry`
- Reputation layer: scored calls track market movement after the anchor

## Architecture

1. Deterministic Predivex scanners read live market data across supported
   prediction-market venues.
2. The Mantle Alpha Agent ranks candidates by edge, confidence, liquidity,
   semantic fit, risk, and signal type.
3. The intelligence agent turns those signals into next-step context and risk
   boundaries.
4. The Alpha Router exposes concrete market legs and selected YES/NO sides in
   Predivex.
5. Each decision payload and research brief is hashed into a deterministic
   `proofHash`.
6. The anchor script records selected hashes in `PredivexDecisionRegistry` on
   Mantle Sepolia.
7. The UI shows live calls, Alpha Router links, agent-brief guidance, proof hashes, explorer links,
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

2/ Prediction markets are fragmented across venues. Deterministic scanners find
cross-venue spreads plus momentum dislocations; the agent ranks and explains
what matters.

Each call includes edge, confidence, evidence, and a deterministic proof hash.

3/ The intelligence agent turns raw scanner signals into a brief: what to inspect,
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

Predivex Mantle Alpha Agent is a verifiable intelligence layer for prediction
markets. Deterministic scanners read live cross-venue market data; the agent
emits ranked alpha calls with evidence and confidence, turns them into
inspect/monitor/context/risk/proof-audit brief items, hashes every decision
payload and agent brief, anchors selected proof hashes on Mantle Sepolia,
and tracks post-anchor movement to build an auditable agent reputation feed.

The product is intentionally non-custodial. It does not execute trades or hold
funds. Predivex provides market intelligence; Mantle provides the public proof
layer for autonomous agent calls.
