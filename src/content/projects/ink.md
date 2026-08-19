---
title: "Ink — Infinite Canvas for AI Agents"
kicker: "Design & build · get.ink · 2026"
status: active
summary: "A whiteboard agents can actually build on. Boards hold plans, forms, wireframes and dashboards that outlive the conversation that made them, so work an agent does in one session is still there — and still editable — in the next."
tags: ["Product design", "Web app", "Agents", "MCP", "Canvas", "Real-time"]
order: 1
featured: true
link: "https://get.ink"
linkLabel: "get.ink"
meta:
  - ["Status", "Live"]
  - ["Role", "Design & build"]
  - ["Year", "2026"]
  - ["Surface", "Web app + MCP"]
---

Most of what an agent produces disappears with the conversation. You get a good plan, a good wireframe, a good first pass at a form — and then it scrolls away, and next session you start over. Ink puts that output on a board instead: a persistent, infinite canvas that both people and agents can write to.

## What it does

An agent connects to Ink over MCP, creates a board, and writes to it in batches — a project plan, an intake form, a dashboard, a set of wireframes. The board keeps existing after the session ends. A person can open it, move things, edit the copy, and hand it back. The next agent picks up where the last one left off.

Placement is described rather than computed. An agent says *inside that frame* or *to the right of that card* and the server resolves the geometry, which is what makes an agent-authored layout come out looking deliberate instead of scattered.

## The design problem

The hard part was never the canvas. It was that almost nobody arriving has seen this category before, and a static screenshot of a whiteboard looks like every other whiteboard.

So the marketing site stopped describing the product and started being it. Every board on the page is a real board, rendered by Ink. The hero was designed by an agent. The signup form is not a form component — it is a real form living on a real board, collecting real responses.

## Pricing as positioning

Humans are billed. Agents are free. That is a pricing page doing an argument's job: it says, without a paragraph of explanation, that agents are expected to be the heavy users here.
