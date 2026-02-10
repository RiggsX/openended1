# Project Kickoff & Alignment Workshop

**Tier:** Plus  
**Version:** 1.0  
**Target:** Project managers and team leads starting new initiatives with cross-functional teams

---

## What This Does

Facilitates a structured project kickoff by generating discussion guides, alignment documents, and a project charter that gets everyone on the same page before work begins.

---

## Execution Flow

### Step 1: Pre-Kickoff Information Gathering
**Trigger:** 2-3 days before kickoff meeting

**Prompt:**
```
You are a project management consultant. Help me prepare for a project kickoff.

Answer these questions:
1. Project name and 1-sentence description
2. Why are we doing this? (business goal)
3. Who are the key stakeholders? (list names and roles)
4. What's the rough timeline? (start date, target launch)
5. What's the budget or resource constraint?
6. What are the known risks or concerns?

Format:
PROJECT: [name]
DESCRIPTION: [1 sentence]
WHY: [business goal]
STAKEHOLDERS:
- [Name] - [Role] - [Involvement level: Lead/Contributor/Informed]
TIMELINE: [dates]
CONSTRAINTS: [budget/resources]
RISKS: [known concerns]
```

**Decision Point:** If stakeholders list is >10 people → suggest: "Large stakeholder group. Consider splitting into core team + advisory group?"

---

### Step 2: Kickoff Agenda Generation
**Prompt:**
```
Create a 90-minute kickoff meeting agenda based on the project info:

# Project Kickoff: [Project Name]
**Date:** [Date] | **Duration:** 90 minutes | **Attendees:** [Core team]

## Agenda

**0:00-0:10 | Welcome & Context** (Facilitator)
- Why we're here
- Meeting goals: Align on vision, roles, and next steps

**0:10-0:25 | Project Vision & Goals** (Project Lead)
- Business context: [Why this matters]
- Success metrics: [What does "done" look like?]
- Q&A

**0:25-0:40 | Scope & Deliverables** (Project Lead)
- What's in scope: [key deliverables]
- What's out of scope: [explicit exclusions]
- Open discussion: Any scope concerns?

**0:40-0:55 | Roles & Responsibilities** (Facilitator)
- Team structure: [who does what]
- Decision-making process: [who has final say on what]
- Communication norms: [how we'll work together]

**0:55-1:15 | Timeline & Milestones** (Project Lead)
- High-level roadmap: [phases]
- Key milestones: [dates and deliverables]
- Dependencies: [what needs to happen first]

**1:15-1:25 | Risks & Mitigation** (Team)
- Known risks: [list]
- Mitigation strategies: [how we'll address]
- Open floor: What are we missing?

**1:25-1:30 | Next Steps & Close** (Facilitator)
- Immediate action items
- Next meeting scheduled
- Parking lot items

---

Include facilitation notes for each section (e.g., "Use round-robin to ensure everyone speaks").
```

**Decision Point:** User reviews agenda. If timeline is tight (<60 min) → suggest condensed version focusing on vision + roles only.

---

### Step 3: Discussion Guide & Prompts
**Prompt:**
```
For each agenda section, create facilitation prompts to drive productive discussion:

## Vision & Goals
**Prompt:** "In one sentence, what does success look like for this project?"
**Follow-up:** "How will we measure that? What's the key metric?"
**Watch for:** Misaligned expectations, vague goals

## Scope & Deliverables
**Prompt:** "What are we explicitly NOT doing in this project?"
**Follow-up:** "If we had to cut 30% of scope, what would go first?"
**Watch for:** Scope creep, unrealistic expectations

## Roles & Responsibilities
**Prompt:** "Who is the final decision-maker for [X]?"
**Follow-up:** "What happens if [key person] is unavailable?"
**Watch for:** Unclear ownership, bottlenecks

## Timeline & Milestones
**Prompt:** "What's the riskiest part of this timeline?"
**Follow-up:** "What buffer do we need for unknowns?"
**Watch for:** Overly optimistic estimates, missing dependencies

## Risks & Mitigation
**Prompt:** "What keeps you up at night about this project?"
**Follow-up:** "What's our plan B if [risk] happens?"
**Watch for:** Unspoken concerns, technical debt

---

Include a "Parking Lot" section for off-topic items that come up.
```

---

### Step 4: Project Charter Generation
**Prompt:**
```
After the kickoff meeting, compile notes into a project charter:

# Project Charter: [Project Name]
**Version:** 1.0 | **Date:** [Date] | **Owner:** [Name]

## Executive Summary
[2-3 sentences: What is this project and why does it matter?]

## Goals & Success Metrics
**Primary Goal:** [Main objective]
**Success Metrics:**
- [Metric 1]: Target [value]
- [Metric 2]: Target [value]

## Scope
**In Scope:**
• [Deliverable 1]
• [Deliverable 2]

**Out of Scope:**
• [Exclusion 1]
• [Exclusion 2]

## Team & Roles
| Name | Role | Responsibilities | Availability |
|------|------|------------------|--------------|
| [Name] | [Role] | [What they do] | [% time] |

## Timeline & Milestones
| Milestone | Deliverable | Target Date | Owner |
|-----------|-------------|-------------|-------|
| [M1] | [Deliverable] | [Date] | [Name] |

## Risks & Mitigation
| Risk | Impact | Likelihood | Mitigation | Owner |
|------|--------|------------|------------|-------|
| [Risk 1] | High/Med/Low | High/Med/Low | [Strategy] | [Name] |

## Communication Plan
- **Weekly sync:** [Day/Time]
- **Status updates:** [Frequency/Channel]
- **Escalation path:** [Who to contact for issues]

## Approval
- [ ] Project Sponsor: [Name]
- [ ] Tech Lead: [Name]
- [ ] Product Owner: [Name]

---

Rules:
- Keep charter to 2 pages max
- All roles must have clear owners
- All risks must have mitigation plans
- Timeline must include buffer for unknowns
```

**Decision Point:** Circulate charter for approval. If any stakeholder objects → schedule follow-up alignment session.

---

### Step 5: Post-Kickoff Action Items
**Prompt:**
```
Generate immediate next steps from the kickoff:

# Post-Kickoff Action Items

**Week 1:**
[ ] [Action 1] - @[Owner] - Due: [Date]
[ ] [Action 2] - @[Owner] - Due: [Date]

**Week 2:**
[ ] [Action 3] - @[Owner] - Due: [Date]

**Ongoing:**
[ ] Weekly status updates - @[Project Lead]
[ ] Risk monitoring - @[Risk Owner]

**Parking Lot (for later):**
• [Item 1]
• [Item 2]

---

Send this list to all attendees within 24 hours of kickoff.
```

---

## Quality Standards

✅ **Success Criteria:**
- All stakeholders agree on project goals and scope
- Roles and responsibilities are clear (no "we'll figure it out later")
- Timeline includes realistic buffer (10-20% for unknowns)
- Risks are identified and have mitigation plans
- Charter is approved within 1 week of kickoff

❌ **Failure Modes:**
- Vague goals ("improve user experience")
- Unclear decision-making authority
- Overly optimistic timeline with no buffer
- Unspoken concerns that surface later
- Charter sits in draft forever

---

## Upgrade Path

**→ Pro Tier:** Add stakeholder analysis matrix, change management planning, automated status reporting, and post-project retrospective templates.

---

## Usage Notes

- **Pre-work:** Send agenda 48 hours before meeting so attendees can prepare
- **Recording:** Record the kickoff for absent stakeholders
- **Follow-up:** Schedule a 2-week check-in to revisit assumptions
- **Iteration:** Update charter as project evolves (version control)
