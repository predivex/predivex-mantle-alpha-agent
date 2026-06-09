# Predivex Mantle Alpha Agent Demo Script

Target length: 60-90 seconds for the social cut.

The deployment-award cut uses the same beats stretched to 2+ minutes because
the DoraHacks deployment milestone requires a demo video of at least 2 minutes.

## Voiceover

Predivex is the trading terminal and intelligence layer for prediction markets.
For the Mantle Turing Test Hackathon, we added a verifiable AI alpha agent.

The agent scans live markets across venues and ranks two signal types:
cross-venue spreads and momentum dislocations. Each call includes the market,
side, edge, confidence, evidence, and a deterministic proof hash.

The important part is that the call is not just shown in our UI. The proof hash
is anchored to Mantle Sepolia through a simple decision registry contract. The
demo links each anchored call to the Mantle explorer, so anyone can verify that
the proof existed on-chain.

After anchoring, Predivex scores the agent against later market movement. That
turns AI market calls from black-box suggestions into an auditable reputation
feed.

This is not a broker, custodian, or auto-trader. No user funds move through the
agent. Predivex produces market intelligence; Mantle provides the proof and
reputation layer.

## Screen Beats

1. Open `https://app.predivex.com/mantle-agent`.
2. Show live scan metrics: markets scanned, agent calls, best edge, scored
   calls, latency.
3. Show the decision feed: evidence, venue pair, confidence, proof hash.
4. Show anchored calls with Mantle transaction links.
5. Open one transaction on Mantle Sepolia explorer.
6. Return to the proof state panel: contract, anchored count, scored count.
7. Close with the one-liner:

> Predivex is the prediction-market intelligence terminal; Mantle is the
> verifiable proof and reputation layer for AI market calls.

## Safety Line

No custody. No order execution. No financial advice. The agent creates
verifiable research artifacts only.
