# Competition And Requirements Review

Checked: 2026-06-10.

## Official Requirements

Main submission path:

- Deployed on Mantle Network.
- Open-source repo.
- Runnable demo.
- Project pitch.
- Nominated from at least one track.

Grand Champion scoring:

- Technical depth: 30%.
- Innovation: 25%.
- Mantle ecosystem contribution: 25%.
- Product completeness: 20%.

General track scorecard:

- Technical: 15/50.
- Ecosystem fit: 10/50.
- Business potential: 10/50.
- Innovation: 10/50.
- User experience: 5/50.

Alpha & Data track-specific scorecard has two paths:

- Data & Analytics: insight value, data source quality, investment utility, scalability.
- Trading Strategy: strategy alpha, verifiability, investment potential, risk management.

Best fit for Predivex:

- Track: AI Alpha & Data.
- Path: Trading Strategy, with Data & Analytics positioning as secondary.

## Predivex Fit

Strong:

- Live frontend is public.
- Live API is public.
- Mantle Sepolia contract is deployed.
- Decisions have deterministic proof hashes.
- Selected decisions are anchored on Mantle.
- Agent output is scored after anchoring.
- The story is differentiated from a generic AI trading bot.

Weak:

- Contract verification on Mantle Explorer still needs to be completed.
- Deployment award asks for a 2+ minute video, so use the deployment demo file.
- The contract records AI decision proofs, but does not itself run inference. Frame it as inference result written on-chain.

## Deployment Award Checklist

- Smart contract deployed on Mantle Mainnet or Testnet: yes.
- Contract verified on Mantle Explorer: pending.
- At least one AI-powered function callable on-chain: arguable; recordDecision records inference proof hashes.
- Frontend demo publicly accessible: yes.
- Deployment address included in DoraHacks: ready.
- Demo video at least 2 minutes: yes, use `demo/predivex-mantle-alpha-agent-deployment-demo.mp4`.
- Open-source GitHub repo with README: yes, use `https://github.com/ebinxdd/predivex-mantle-alpha-agent`.

## Participant Scan

DoraHacks public API showed:

- Hackers: 1089.
- Applications: 259.
- Teams: 12.
- Hacker profiles with submitted BUIDL names: 139.
- Keyword-flagged relevant profiles scanned: 167.

Notable nearby competitors from public hacker/profile data:

- The Undesirables: Sovereign A2A Oracle Infrastructure.
- MantleAlpha - On-Chain Intelligence Bot.
- AlphaProof.
- ElfaQuant.
- Mantle Agent Radar.
- WhaleWatcher.
- Mantle Alpha Trading Agent.
- MantleArb.
- PrediX.
- AGON - The On-Chain Proving Ground for AI Agents.
- RangeClaw.
- Sentinel Arena.

Positioning response:

- Do not pitch as a generic alpha bot.
- Lead with prediction-market-specific data, live market scanning, proof hash anchoring, and scored reputation.
- Say Mantle is the public proof/reputation layer, not just a chain where we deployed a toy contract.
