---
title: "Chop Deck — Browser Sampler and Sequencer"
kicker: "Open source · chopdeck.com · 2026"
status: active
summary: "A sampler and sequencer in the shape of a late-90s hardware drum machine, running entirely in the browser. Chop a break onto the pads, record a sequence, mix it down. Free, MIT-licensed, works offline, and installs as a desktop app — no account needed to make a beat."
tags: ["TypeScript", "Web Audio", "Web MIDI", "React", "Tauri", "Cloudflare D1", "Open source"]
order: 7
featured: false
link: "https://chopdeck.com"
linkLabel: "chopdeck.com"
meta:
  - ["Status", "Live"]
  - ["Role", "Design & build"]
  - ["Year", "2026"]
  - ["Licence", "MIT"]
  - ["Stack", "TS · Web Audio"]
---

The 16-bit samplers that built a lot of records are now secondhand, expensive, and mostly sitting in closets. Chop Deck is one of them rebuilt as a web page. The URL is the app: you load it and look down at the machine, and everything happens on the LCD and the front panel the way it did on the hardware.

## What it does

Ninety-nine sequences of sixty-four tracks at 96 ppq — real-time and step recording, timing correct with swing, note repeat, loop record, punch, undo, song mode. Underneath that a thirty-two voice sampler: twenty-four programs, four drum slots, a resonant low-pass filter, envelopes, velocity modulation, mute groups.

You sample from a microphone or from the machine itself, then trim, loop, slice a zone across the pads, time-stretch and resample. There is a mixer with per-note level and pan, two multi-effect chains, two reverbs, and Web MIDI in and out for pads, clock and footswitches.

Files live on a browser disk with real folders. Standard MIDI files and WAVs go in and out, projects export as bundles, and it autosaves.

## How it's built

TypeScript, with the firmware separated from the sound. `src/kernel/` is the machine's operating logic — modes, screens, fields, the cursor, the DATA wheel — and `src/screens/` holds one file per mode where **every screen is a pure function of machine state**. That means the whole interface can be asserted as text in unit tests, which is what makes a machine this stateful tractable to change. The audio engine, the DSP and the offline bounce sit behind their own boundary in `src/audio/`.

It has its own design system, the same way this site does — tokens first, components ported from them.

## Where it runs

The build output is the whole instrument as static files. Serve it from a web server, a USB stick, or nothing at all: with no site behind it the machine notices and hides the site's links. Tauri wraps the same build in a native window for Windows, macOS and Linux.

The account on chopdeck.com is optional and always was. It carries a project between computers, adds libraries of kits and public-domain samples, and lets you publish a beat for someone else to open and remix. Skip it and the machine still works offline, with no ads and no tracking.

Source is at [github.com/mcinnisdev/chopdeck](https://github.com/mcinnisdev/chopdeck), MIT — though the name and the mark are not part of the licence, and forks are asked to pick their own.
