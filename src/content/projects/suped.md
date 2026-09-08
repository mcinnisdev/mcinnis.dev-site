---
title: "suped — A Persistent Computer for Agents"
kicker: "Open source · suped.ai · 2026"
status: active
statusLabel: "Live · v0.1"
summary: "One command gives an agent a real Linux computer instead of another abstraction. It builds a persistent Ubuntu box locally — shell, Python, Node, git, ffmpeg, Chromium, passwordless sudo — with a home directory that survives resets. No agent ships with it: anything that can run a shell command can use it."
tags: ["Node.js", "Docker", "Ubuntu", "CLI", "Playwright", "Agents", "Open source"]
order: 3
featured: false
link: "https://suped.ai"
linkLabel: "suped.ai"
meta:
  - ["Status", "Live · v0.1"]
  - ["Role", "Design & build"]
  - ["Year", "2026"]
  - ["Licence", "MIT"]
  - ["Install", "npx suped@latest"]
---

Models are capable, and we keep surrounding them with abstractions designed for weaker ones. suped starts from the opposite premise: give the agent a real computer, tell it what you want, and get out of the way.

## What it is

`npx suped@latest`. The first run builds an Ubuntu 24.04 image locally from a Dockerfile that ships inside the npm package — there is no registry image to trust and nothing phones home — and drops you into a shell as a user with passwordless sudo. Run it again and it is instant: same home, same files, same tools you installed.

Inside is what an engineer expects. bash and tmux, Python with uv, Node, git, curl, jq, sqlite3, ripgrep, ffmpeg, and Playwright with Chromium already resolved system-wide. Need something else, `apt-get install` it. There is no special filesystem abstraction and no suped-specific anything in the box. Linux is Linux.

`/home/suped` is a separate Docker volume, so it survives a stop, a machine restart, a container reset and an image rebuild. Only `destroy` takes it. The docs say plainly which of those keeps apt packages and which doesn't, because that is the part people get wrong.

## What it deliberately doesn't ship

An agent. suped ships the computer; anything that can run a shell command can drive it, either from outside through `suped exec` or installed inside the box.

No personas, no harness, no orchestrator, no memory system, no skill packs. The argument is that each layer between a capable model and a real machine is a bet the model can't be trusted with the machine — and each one is somewhere for things to go wrong, to be maintained, to be explained, and to be carried to the next tool. The recommended system prompt is five sentences, lives at `/etc/suped/prompt.md`, and `suped prompt` prints it so you can pipe it wherever. Add the objective, then resist adding more.

## Where it goes

Two phases, in a fixed order. Phase one is the computer, which is what exists now, and the work there is refinement rather than features. Phase two is the human layer — seeing what the agent is doing, steering it, picking it up from another machine.

The boundary is the point: abstractions go on the human side. An agent reads a calendar through an API. A person needs to see the calendar.

Docs are at [suped.dev](https://suped.dev), source at [github.com/suped-ai/suped](https://github.com/suped-ai/suped), MIT.
