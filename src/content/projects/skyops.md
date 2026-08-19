---
title: "SkyOps — M365 Automation and Operations"
kicker: "Internal tool · Castle Rock Sky · 2025"
status: active
summary: "An internal automation platform for an MSP — the M365, ticketing, monitoring and billing toolchain pulled into one operational view, with reporting and the common remediations running on a schedule. Built on Azure Functions and Static Web Apps as Service Desk Manager."
tags: ["Azure Functions", "Azure Static Web Apps", "M365", "PowerShell", "Graph", "Entra", "Internal tool"]
order: 4
featured: false
meta:
  - ["Status", "Active · internal"]
  - ["Role", "Service Desk Manager"]
  - ["Org", "Castle Rock Sky"]
  - ["Since", "2025"]
  - ["Stack", "Azure · Graph · PS"]
---

An MSP toolchain is five products that do not talk to each other. Tenant health lives in one place, tickets in another, monitoring alerts in a third, billing somewhere else entirely. Every month somebody assembles a report by hand out of all of it.

## What it does

SkyOps pulls those pieces into one operational view: tenant health from Graph, ticket volume, monitoring alerts, and billing reconciliation. The monthly reports generate on a schedule. The remediations that used to be a runbook — the same six things, done by hand, every week — run themselves.

## How it's built

Azure Functions handle the scheduled and event-driven work; an Azure Static Web App serves the operator UI. Authentication and tenant access run through Entra, and everything touching M365 goes through Graph — or PowerShell, where Graph has gaps. It has gaps.

## What it changed

The part worth writing down is not the automation. It is that a service desk stops being reactive once the recurring work is invisible. The tickets that used to fill a morning stopped arriving as tickets.
