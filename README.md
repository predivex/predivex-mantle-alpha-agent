# Predivex Mantle Alpha Agent

Open-source Mantle proof layer for the Predivex Alpha Agent hackathon demo.

Predivex remains a production prediction-market intelligence product. This
repository publishes the hackathon-specific proof layer: Solidity contract,
deployment/anchoring scripts, demo artifacts, and public documentation.

## Live Demo

- DoraHacks BUIDL: https://dorahacks.io/buidl/44565
- App: https://app.predivex.com/mantle-agent
- API: https://app.predivex.com/api/mantle/alpha-agent
- Demo video: https://youtu.be/9sgV45369Vo
- Contract: `0x7DA2bC98E2392810a1f088955C65c72EBc76692A`
- Explorer:
  https://explorer.sepolia.mantle.xyz/address/0x7DA2bC98E2392810a1f088955C65c72EBc76692A
- Network: Mantle Sepolia, chain id `5003`

## Submission Completeness

This repo is structured for hackathon review and automated screening:

- Public GitHub repository: yes.
- Public live demo: yes, `https://app.predivex.com/mantle-agent`.
- Public API endpoint: yes, `https://app.predivex.com/api/mantle/alpha-agent`.
- Demo video: yes, https://youtu.be/9sgV45369Vo and committed under `demo/`.
- Smart contract: yes, deployed on Mantle Sepolia.
- Transaction-producing on-chain component: yes,
  `PredivexDecisionRegistry.recordDecision`.
- Live AI/data output: yes, deterministic scanner candidates, agent-ranked
  prediction-market calls, ELFA enrichment, and an agent brief with its own
  proof hash.
- Live Alpha Router: yes, each call exposes concrete YES/NO market legs that
  open the relevant Predivex market trading desk with the selected side marked.
- Market-level intelligence brief: yes, market pages now show scanner context,
  risk flags, related-market cross-checks, route hints, and a proof hash.
- Safety boundary: no custody, no order execution, no financial advice.

Example anchored decisions:

- `0xffeed79888703679bda8e4caf6c602f8c0c1b3b760dcef7996f4ca0c4d9d704c`
- `0x7407c841de176d541f5f3d9cc2b50dca6f503acd83cfa8197f897e9e4db2fe1c`

## Track Fit

Primary track: AI Alpha & Data.

The project fit for Mantle and the AI Alpha & Data track is summarized in
`docs/TRACK_FIT.md`.

## What This Does

Predivex scanners read live prediction-market data and produce deterministic
spread and momentum candidates. The Mantle Alpha Agent turns those candidates
into ranked market calls with evidence, confidence, risk context, and
deterministic proof hashes.
Each call also includes an Alpha Router trade plan: concrete YES/NO legs for
cross-venue spreads or a selected side for momentum signals. Those links open
the matching Predivex market route and focus the trading desk, while the user
still confirms, rejects, or routes out manually.
On each market page, the Market Intelligence brief adds a local agent view:
summary, signal snapshot, risk flags, related-market cross-checks, suggested
actions, YES/NO route hints, and a deterministic proof hash ready for Mantle
reputation workflows.

The live feed also includes ELFA-powered market-intelligence enrichment when
credits are available, so reviewers can see both the deterministic Predivex
prediction-market signals and the external AI/data context used by the
hackathon build.

This repository shows how selected agent calls are anchored to Mantle Sepolia
through `PredivexDecisionRegistry`. The on-chain record does not custody funds,
execute trades, or provide financial advice. It records verifiable research
artifacts so each call can be audited outside the Predivex UI.

## Architecture

1. Deterministic Predivex scanners read live prediction markets.
2. The alpha agent ranks candidates, adds context/risk, and emits decision
   payloads with deterministic `proofHash` values.
3. The UI renders Alpha Router legs that open the relevant Predivex market
   trading desk with `side=yes` or `side=no` selected.
4. `anchor-decisions.ts` fetches the public agent feed.
5. `PredivexDecisionRegistry.recordDecision` stores the proof hash, decision id,
   metadata URI, recorder, and timestamp on Mantle Sepolia.
6. The live UI links anchored calls to Mantle explorer transactions and shows
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

- YouTube walkthrough: https://youtu.be/9sgV45369Vo
- Social cut: `demo/predivex-mantle-alpha-agent-demo.mp4`
- Deployment-award walkthrough:
  `demo/predivex-mantle-alpha-agent-deployment-demo.mp4`

## Hackathon Track

Primary track: AI Alpha & Data.

Positioning: Predivex is the prediction-market intelligence terminal; the
Mantle Alpha Agent is the verifiable market-intelligence layer for AI calls and
research artifacts.

## Safety Boundary

No custody. No order execution. No financial advice. This proof layer records
agent research artifacts only.
