# Predivex Mantle Alpha Agent

Open-source Mantle proof layer for the Predivex Alpha Agent hackathon demo.

Predivex remains a production prediction-market intelligence product. This
repository publishes the hackathon-specific proof layer: Solidity contract,
deployment/anchoring scripts, demo artifacts, and public documentation.

## Live Demo

- DoraHacks BUIDL: https://dorahacks.io/buidl/44565
- App: https://app.predivex.com/mantle-agent
- API: https://app.predivex.com/api/mantle/alpha-agent
- Contract: `0x7DA2bC98E2392810a1f088955C65c72EBc76692A`
- Explorer:
  https://explorer.sepolia.mantle.xyz/address/0x7DA2bC98E2392810a1f088955C65c72EBc76692A
- Network: Mantle Sepolia, chain id `5003`

## What This Does

The Predivex Alpha Agent scans live prediction-market data and emits ranked
market calls with evidence, confidence, and deterministic proof hashes.

This repository shows how selected agent calls are anchored to Mantle Sepolia
through `PredivexDecisionRegistry`. The on-chain record does not custody funds,
execute trades, or provide financial advice. It records verifiable research
artifacts so each call can be audited outside the Predivex UI.

## Architecture

1. Predivex scans live prediction markets.
2. The alpha agent emits decision payloads and deterministic `proofHash` values.
3. `anchor-decisions.ts` fetches the public agent feed.
4. `PredivexDecisionRegistry.recordDecision` stores the proof hash, decision id,
   metadata URI, recorder, and timestamp on Mantle Sepolia.
5. The live UI links anchored calls to Mantle explorer transactions and shows
   post-anchor scoring.

## Run Locally

```bash
pnpm install
pnpm typecheck
pnpm dry-run
```

To deploy a fresh registry:

```bash
cp .env.example .env
# Add a local Mantle Sepolia private key to .env.
pnpm deploy
```

To anchor decisions from the live public API:

```bash
pnpm anchor
```

The scripts write runtime outputs to `.tmp/`, which is intentionally ignored by
git.

## Demo Videos

- Social cut: `demo/predivex-mantle-alpha-agent-demo.mp4`
- Deployment-award walkthrough:
  `demo/predivex-mantle-alpha-agent-deployment-demo.mp4`

## Hackathon Track

Primary track: AI Alpha & Data.

Positioning: Predivex is the prediction-market intelligence terminal; Mantle is
the verifiable proof and reputation layer for AI market calls.

## Safety Boundary

No custody. No order execution. No financial advice. This proof layer records
agent research artifacts only.
