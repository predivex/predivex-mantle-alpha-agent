import { spawnSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const workspaceRoot = root;
const demoDir = path.join(root, "demo");
const frameDir = path.join(workspaceRoot, ".tmp", "mantle-demo-frames");

const url =
  process.env.PREDIVEX_DEMO_URL ??
  "https://app.predivex.com/mantle-agent?demo=mantle";
const apiUrl =
  process.env.PREDIVEX_MANTLE_AGENT_API_URL ??
  "https://app.predivex.com/api/mantle/alpha-agent";

const outputBasename =
  process.env.PREDIVEX_DEMO_OUTPUT_BASENAME ??
  "predivex-mantle-alpha-agent-demo";
const isDefaultOutput = outputBasename === "predivex-mantle-alpha-agent-demo";
const finalVideo = path.join(demoDir, `${outputBasename}.mp4`);
const thumbnail = path.join(
  demoDir,
  isDefaultOutput
    ? "predivex-mantle-alpha-agent-thumbnail.jpg"
    : `${outputBasename}-thumbnail.jpg`,
);
const contactSheet = path.join(
  demoDir,
  isDefaultOutput
    ? "predivex-mantle-alpha-agent-contact-sheet.jpg"
    : `${outputBasename}-contact-sheet.jpg`,
);
const manifestPath = path.join(
  demoDir,
  isDefaultOutput
    ? "recording-manifest.json"
    : `${outputBasename}-manifest.json`,
);

const slideDurationSeconds = Number(
  process.env.PREDIVEX_DEMO_SLIDE_DURATION_SECONDS ?? 8,
);
const transitionSeconds = 0.6;
const width = 1440;
const height = 900;
const fps = 30;

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: workspaceRoot,
    stdio: "inherit",
    windowsHide: true,
  });
  if (result.status !== 0) {
    throw new Error(`${command} failed with exit code ${result.status}`);
  }
}

function relative(filePath) {
  return path.relative(workspaceRoot, filePath).replaceAll("\\", "/");
}

rmSync(frameDir, { recursive: true, force: true });
mkdirSync(frameDir, { recursive: true });
mkdirSync(demoDir, { recursive: true });

const agentPayload = await fetch(apiUrl).then((response) => response.json());
const anchoredCount = agentPayload.decisions.filter(
  (decision) => decision.mantle.status === "anchored",
).length;

const slides = [
  {
    file: "01-intro.png",
    highlight: "Predivex Mantle Alpha Agent",
    kicker: "Predivex x Mantle",
    title: "Verifiable AI calls for prediction markets",
    body: "Predivex scans live prediction markets; Mantle records proof that the agent made each call at a specific time.",
  },
  {
    file: "02-live-scan.png",
    highlight: "Markets Scanned",
    kicker: "Live scan",
    title: `${agentPayload.stats.marketsScanned.toLocaleString()} markets, ${agentPayload.stats.decisions} calls`,
    body: "The agent ranks cross-venue spreads and momentum dislocations from live Predivex market data.",
  },
  {
    file: "03-decision-feed.png",
    highlight: "Agent Decision Feed",
    kicker: "Agent feed",
    title: "Evidence, edge, confidence, and a hash",
    body: "Every decision payload becomes a deterministic proof hash instead of a black-box recommendation.",
  },
  {
    file: "04-mantle-tx.png",
    highlight: "Mantle tx",
    kicker: "Mantle proof",
    title: `${anchoredCount}/${agentPayload.stats.decisions} calls anchored`,
    body: "Anchored calls link directly to Mantle Sepolia transactions, so the demo can be audited outside Predivex.",
  },
  {
    file: "05-scored-calls.png",
    highlight: "Scored Calls",
    kicker: "Agent reputation",
    title: `${agentPayload.stats.scoredDecisions} scored calls`,
    body: "Once a proof is anchored, Predivex tracks how the market moved from the anchored baseline.",
  },
  {
    file: "06-proof-state.png",
    highlight: "Mantle Proof State",
    kicker: "On-chain receipt",
    title: "The proof lives on Mantle Sepolia",
    body: `Contract: ${agentPayload.agent.contract}. The UI links every anchored call to its Mantle transaction.`,
  },
  {
    file: "07-safety.png",
    highlight: "No custody",
    kicker: "Safety boundary",
    title: "No custody, no execution, no financial advice",
    body: "The agent creates verifiable research artifacts only. Users inspect the signal before deciding what to do elsewhere.",
  },
  {
    file: "08-close.png",
    highlight: "Mantle Proof State",
    kicker: "Submission story",
    title: "Prediction-market terminal first, proof layer second",
    body: "Predivex is the intelligence terminal; Mantle is the public proof and reputation layer for AI market calls.",
  },
];

const estimatedVideoDurationSeconds =
  slides.length * slideDurationSeconds -
  (slides.length - 1) * transitionSeconds;
const contactSheetIntervalSeconds = Math.max(
  4,
  Math.floor(estimatedVideoDurationSeconds / 8),
);

const browser = await chromium.launch({
  headless: true,
  args: ["--disable-dev-shm-usage"],
});
const page = await browser.newPage({
  viewport: { width, height },
  deviceScaleFactor: 1,
});

await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
await page.waitForSelector("text=Predivex Mantle Alpha Agent", {
  timeout: 30_000,
});
await page.waitForSelector("text=Mantle tx", { timeout: 30_000 });

const overlayCss = `
  *, *::before, *::after {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition-duration: 0s !important;
    scroll-behavior: auto !important;
  }
  .demo-caption {
    position: fixed;
    left: 36px;
    bottom: 36px;
    z-index: 2147483647;
    width: min(760px, calc(100vw - 72px));
    padding: 22px 24px;
    border: 2px solid rgba(36, 255, 167, 0.55);
    background: rgba(3, 7, 18, 0.94);
    color: #f7fff9;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    backdrop-filter: blur(12px);
  }
  .demo-caption__kicker {
    color: #24ffa7;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .demo-caption__title {
    margin-top: 8px;
    font-size: 30px;
    line-height: 1.05;
    font-weight: 950;
    letter-spacing: 0;
    text-transform: uppercase;
  }
  .demo-caption__body {
    margin-top: 10px;
    color: rgba(247, 255, 249, 0.78);
    font-size: 17px;
    line-height: 1.45;
    font-weight: 650;
  }
  .demo-highlight {
    outline: 4px solid rgba(36, 255, 167, 0.82) !important;
    outline-offset: 5px !important;
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.22), 0 0 38px rgba(36, 255, 167, 0.35) !important;
  }
`;

await page.addStyleTag({ content: overlayCss });
await page.evaluate(() => {
  const caption = document.createElement("div");
  caption.className = "demo-caption";
  caption.innerHTML = `
    <div class="demo-caption__kicker"></div>
    <div class="demo-caption__title"></div>
    <div class="demo-caption__body"></div>
  `;
  document.body.appendChild(caption);
});

async function setSlide(slide) {
  await page.evaluate((input) => {
    document
      .querySelectorAll(".demo-highlight")
      .forEach((element) => element.classList.remove("demo-highlight"));

    const caption = document.querySelector(".demo-caption");
    caption.querySelector(".demo-caption__kicker").textContent = input.kicker;
    caption.querySelector(".demo-caption__title").textContent = input.title;
    caption.querySelector(".demo-caption__body").textContent = input.body;

    if (input.highlight === "No custody") {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      window.scrollTo(0, 0);
    }

    const elements = Array.from(
      document.querySelectorAll("h1,h2,h3,p,div,a,code,article"),
    );
    const match = elements.find((element) =>
      element.textContent
        ?.toLowerCase()
        .includes(input.highlight.toLowerCase()),
    );
    if (match) {
      match.classList.add("demo-highlight");
      match.scrollIntoView({ behavior: "auto", block: "center" });
    }
  }, slide);
  await page.waitForTimeout(250);
}

for (const slide of slides) {
  await setSlide(slide);
  const framePath = path.join(frameDir, slide.file);
  await page.screenshot({ path: framePath, fullPage: false });
  slide.path = framePath;
}

await browser.close();

const ffmpegInputs = slides.flatMap((slide) => [
  "-loop",
  "1",
  "-t",
  String(slideDurationSeconds),
  "-i",
  slide.path,
]);
const normalizeFilters = slides.map(
  (_slide, index) =>
    `[${index}:v]scale=${width}:${height}:force_original_aspect_ratio=increase,crop=${width}:${height},setsar=1,fps=${fps},settb=AVTB,format=yuv420p[v${index}]`,
);
const transitionFilters = [];
let previous = "[v0]";
for (let index = 1; index < slides.length; index += 1) {
  const output = index === slides.length - 1 ? "[out]" : `[x${index}]`;
  const offset = (slideDurationSeconds - transitionSeconds) * index;
  transitionFilters.push(
    `${previous}[v${index}]xfade=transition=fade:duration=${transitionSeconds}:offset=${offset.toFixed(2)}${output}`,
  );
  previous = output;
}
const filterComplex = [...normalizeFilters, ...transitionFilters].join(";");

run("ffmpeg", [
  "-y",
  ...ffmpegInputs,
  "-filter_complex",
  filterComplex,
  "-map",
  "[out]",
  "-c:v",
  "libx264",
  "-pix_fmt",
  "yuv420p",
  "-preset",
  "slow",
  "-crf",
  "18",
  "-movflags",
  "+faststart",
  "-an",
  finalVideo,
]);

run("ffmpeg", [
  "-y",
  "-ss",
  "00:00:06",
  "-i",
  finalVideo,
  "-frames:v",
  "1",
  "-q:v",
  "2",
  "-update",
  "1",
  thumbnail,
]);

run("ffmpeg", [
  "-y",
  "-i",
  finalVideo,
  "-vf",
  `fps=1/${contactSheetIntervalSeconds},scale=360:-1,tile=4x2`,
  "-frames:v",
  "1",
  "-q:v",
  "2",
  "-update",
  "1",
  contactSheet,
]);

writeFileSync(
  manifestPath,
  JSON.stringify(
    {
      sourceUrl: url,
      apiUrl,
      generatedAt: new Date().toISOString(),
      renderer: "smooth-screenshot-xfade",
      stats: agentPayload.stats,
      contract: agentPayload.agent.contract,
      finalVideo: relative(finalVideo),
      thumbnail: relative(thumbnail),
      contactSheet: relative(contactSheet),
      framesDir: relative(frameDir),
      slideDurationSeconds,
      transitionSeconds,
    },
    null,
    2,
  ) + "\n",
);

console.log(relative(finalVideo));
