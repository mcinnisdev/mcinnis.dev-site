---
title: "Building a CMS Around Markdown Instead of a Database"
excerpt: "Most CMS platforms start with a database. This one starts with a folder of Markdown files. Here's why that changes everything."
date: 2026-02-24
project: "static-sites"
tags: ["Eleventy", "Markdown", "Static sites", "Content"]
---

Every CMS I've had to administer started the same way: a database, a schema, an admin panel bolted on top, and a backup strategy I'd end up owning. The content was in there somewhere, in tables, reachable only through the application that put it there.

Start from a folder of Markdown files instead and most of that disappears.

## What you get for free

The content is portable. It opens in any editor, diffs in git, greps from a terminal, and survives the software that produced it. If the tooling goes away tomorrow, the writing is still writing.

Versioning is already solved. A commit history is a better content audit log than anything I've configured in an admin panel — who changed what, when, and what the previous version said, without a plugin.

Editing is whatever you already like. Obsidian, VS Code, a text editor on a phone. The files are just files.

And deployment gets boring in the best way. A build step turns the folder into HTML, and HTML goes anywhere — a CDN, static hosting, a directory on a server. Nothing to patch at 2am because a content platform shipped an advisory.

## What you give up

Editors who expect a WYSIWYG admin panel do not want to hear about frontmatter, and pretending otherwise is how these projects fail. Markdown is a real ask for a non-technical writer, and the honest answer is that this approach fits a certain kind of site and a certain kind of person maintaining it.

You also lose queries. Anything a database gives you cheaply — filtering across thousands of entries, relational lookups, per-user content — you now do at build time, which is fine at a few hundred files and stops being fine well before a few hundred thousand.

## The trade I'd make again

For a personal site, a documentation set, a small marketing site — anything where the content is written once by a handful of people and read by many — the folder wins. The content outlives the tool, which is the only durability guarantee I actually trust.

For an application with users generating content, use a database. That's what it's for.
