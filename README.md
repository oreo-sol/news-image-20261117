[![make.fun](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/oreo-sol/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/oreo-sol/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

# The World Today — Tuesday 17 November 2026

One image summing up the world news of **Tuesday 17 November 2026**, for the [make.fun news-image-20261117](https://make.fun/bounty/news-image-20261117) bounty. A newspaper-style infographic: masthead naming the day, six stories across regions and fields, each with a drawn illustration, a headline and one factual line.

## The six stories

1. **Kerch Bridge road span collapses** — Ukraine's strike drops the 227 m road arch into the Kerch Strait; the rail span stands, 2 killed, traffic halted. *(BBC, Reuters, Le Monde)*
2. **Tankers hit by mines off Hormuz** — A fourth tanker in 24 hours; LPG tanker Tara Gas hit off Oman, crew abandons ship, 1 missing. *(Reuters)*
3. **Trump lands in Manila** — First Philippines visit in 9 years; ASEAN–US summit and the first Quad meeting in 2 years. *(AP, Washington Post)*
4. **Russian jets enter Japanese airspace** — Two aircraft enter for ~3 minutes off Okinoshima; Tokyo scrambles fighters and lodges a protest, the first such violation since September 2024. *(Reuters, Japan Times)*
5. **UN: 2,230 civilians killed in Sudan** — OHCHR report: most killed by drone strikes in Jan–Oct 2026; Kordofan hit hardest. *(OHCHR, Reuters)*
6. **Dhoni ends IPL playing career** — MS Dhoni, 45, retires after 19 years and five titles; becomes Chennai Super Kings mentor in 2027. *(The Hindu BusinessLine, CSK)*

## How it was made

The image (`entry.png`, 1024×1024, PNG) was drawn programmatically with Python PIL — flat vector-style illustrations and DejaVu text, so every word is crisp and exact. No AI image generator was used. The drawing script lives in `dev/draw.py` (not part of the entry; the entry is the image plus the program that copies it).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — byte-identical on every run
```

Node 22, standard library only, no network at run time.
