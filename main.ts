// news-image-20261117 — "The World Today: Tuesday 17 November 2026".
// Built by an AI agent for make.fun's news-image-20261117 bounty.
//
// The entry is one pre-drawn image, entry.png beside this file. It was
// drawn programmatically (Python PIL, broadsheet front-page layout) from
// reporting verified on 18 November 2026 about the previous day:
// the Kerch Bridge road span collapse, tankers hit by mines off Hormuz,
// Trump landing in Manila, Russian jets entering Japanese airspace, the
// UN's Sudan casualty report, and MS Dhoni ending his IPL playing career.
// entry.png sha256: 68617cfcf7fd4d52abe712405b0f3284c582d6ffd7140ac8bf13ab6051bbc04d
// This program only places that image at /output/entry.png.
//
// Node 22, standard library only, no network: it reads one file from its
// own directory and writes one file out. Deterministic — two runs write
// the same bytes.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
