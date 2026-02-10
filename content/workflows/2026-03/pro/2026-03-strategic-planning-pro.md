# Strategic Planning Framework: OKR Design & Execution

**Tier:** Pro  
**Version:** 1.0  
**Target:** Leadership teams and executives setting quarterly or annual strategic goals

---

## What This Does

A comprehensive framework for designing, validating, and cascading OKRs (Objectives and Key Results) across an organization, with built-in alignment checks and execution tracking.

---

## Framework Overview

This is not a single workflow—it's a **strategic planning system** that runs quarterly with monthly check-ins.

**Timeline:**
- Week 1: Strategic context gathering
- Week 2: OKR drafting and validation
- Week 3: Cascading and alignment
- Week 4: Launch and commitment
- Ongoing: Monthly reviews and adjustments

---

## Phase 1: Strategic Context Gathering

### Step 1.1: Environmental Scan
**Prompt:**
```
You are a strategic planning consultant. Help me assess the current environment:

**Market Context:**
1. What's changed in our market in the last quarter? (competitors, customer behavior, regulations)
2. What trends are accelerating? (technology, user expectations, economic factors)
3. What threats or opportunities are emerging?

**Internal Context:**
1. What did we accomplish last quarter? (wins and misses)
2. What capabilities do we have now that we didn't have before?
3. What constraints are we operating under? (budget, headcount, technical debt)

**Strategic Priorities:**
1. What must we achieve this quarter to stay on track for annual goals?
2. What can we defer or deprioritize?
3. What bets are we willing to make?

Output as a structured brief (500-800 words) with clear sections.
```

**Decision Point:** If market context reveals major shifts → flag: "Environment has changed significantly. Consider strategic pivot before setting OKRs."

---

### Step 1.2: Stakeholder Input Collection
**Prompt:**
```
Design a stakeholder input survey for leadership team:

# Q[N] Strategic Planning Input

**Your Role:** [Name/Title]

**1. Looking Back (Last Quarter)**
- What was your biggest win?
- What was your biggest miss?
- What surprised you?

**2. Looking Forward (Next Quarter)**
- What's the most important thing your team needs to achieve?
- What dependencies do you have on other teams?
- What resources or support do you need?

**3. Strategic Bets**
- If you could only focus on ONE thing this quarter, what would it be?
- What should we stop doing?
- What risky bet should we consider?

**4. Concerns & Risks**
- What keeps you up at night?
- What could derail our plans?

---

Compile responses into themes. Look for:
- Alignment (where do leaders agree?)
- Conflicts (where do priorities clash?)
- Gaps (what's not being addressed?)
```

**Decision Point:** If >50% of leaders identify the same risk → escalate: "Critical risk identified by multiple leaders. Address before finalizing OKRs."

---

## Phase 2: OKR Drafting & Validation

### Step 2.1: Company-Level OKR Design
**Prompt:**
```
Based on strategic context and stakeholder input, draft 3-5 company-level OKRs:

**OKR Format:**
OBJECTIVE: [Inspiring, qualitative goal]
KEY RESULTS:
1. [Measurable outcome] - Baseline: [current] → Target: [goal]
2. [Measurable outcome] - Baseline: [current] → Target: [goal]
3. [Measurable outcome] - Baseline: [current] → Target: [goal]

**Rules for Good OKRs:**
- Objectives are ambitious but achievable (70% confidence)
- Key Results are measurable and time-bound
- Each KR has a clear owner
- KRs are outcomes, not activities ("increase revenue by 20%" not "launch 5 features")
- Avoid vanity metrics (focus on impact, not output)

**Example:**
OBJECTIVE: Become the go-to platform for remote teams
KEY RESULTS:
1. Increase active teams from 5K to 8K (+60%)
2. Achieve NPS of 50+ (currently 42)
3. Reduce churn from 5% to 3% monthly

---

Draft company OKRs now. Include rationale for each objective.
```

**Decision Point:** Review with CEO/leadership. If objectives are too conservative → challenge: "These feel safe. Where's the stretch goal?"

---

### Step 2.2: OKR Validation Framework
**Prompt:**
```
Validate each OKR against these criteria:

**Alignment Check:**
- Does this OKR support our annual strategy? (Yes/No/Partial)
- Does it address a key market opportunity or threat? (Yes/No)
- Will achieving this move the needle on company success? (High/Medium/Low impact)

**Feasibility Check:**
- Do we have the resources to achieve this? (Yes/No/Need to acquire)
- Are there dependencies outside our control? (List them)
- What's our confidence level? (10-90%)

**Clarity Check:**
- Can someone outside the leadership team understand this? (Yes/No)
- Is success clearly defined? (Yes/No)
- Can we measure progress weekly? (Yes/No)

**Conflict Check:**
- Does this OKR conflict with other priorities? (Yes/No)
- If we achieve this, what might we sacrifice? (Trade-offs)

---

For each OKR, output:
✅ PASS | ⚠️ NEEDS WORK | ❌ REJECT

Include specific recommendations for improvement.
```

**Decision Point:** If any OKR scores ❌ REJECT → revise or replace. If >2 OKRs score ⚠️ NEEDS WORK → schedule workshop to refine.

---

## Phase 3: Cascading & Alignment

### Step 3.1: Team-Level OKR Derivation
**Prompt:**
```
For each company OKR, identify which teams need to contribute:

COMPANY OKR: [Objective]
KEY RESULT 1: [Metric and target]

**Contributing Teams:**
1. **[Team Name]** - Contribution: [What they need to deliver]
   - Suggested Team OKR: [Draft objective]
   - Suggested KRs: [2-3 measurable outcomes]
   - Rationale: [Why this team?]

2. **[Team Name]** - Contribution: [What they need to deliver]
   - Suggested Team OKR: [Draft objective]
   - Suggested KRs: [2-3 measurable outcomes]
   - Rationale: [Why this team?]

---

Rules:
- Each team should own 2-4 OKRs max
- Team OKRs should ladder up to company OKRs (clear line of sight)
- Avoid duplicate work across teams
- Flag dependencies explicitly
```

**Decision Point:** Share draft team OKRs with team leads. If any team objects → negotiate: "What would make this achievable for your team?"

---

### Step 3.2: Dependency Mapping
**Prompt:**
```
Create a dependency map showing how team OKRs interconnect:

**Format:**
[Team A] → [Team B]: [What Team B needs from Team A]
Example: Engineering → Product: API specs by Week 2

**Critical Path Analysis:**
1. Which dependencies are on the critical path? (blocking multiple teams)
2. Which teams are bottlenecks? (many teams depend on them)
3. What happens if a dependency is delayed?

**Risk Mitigation:**
For each critical dependency:
- Backup plan: [What if this fails?]
- Early warning: [How will we know if it's at risk?]
- Owner: [Who manages this dependency?]

---

Output as a visual diagram (text-based) and a risk matrix.
```

**Decision Point:** If >5 critical dependencies exist → simplify: "Too many dependencies. Can we reduce coupling or sequence work differently?"

---

## Phase 4: Launch & Commitment

### Step 4.1: OKR Communication Plan
**Prompt:**
```
Create a communication plan to launch OKRs across the organization:

**Audience 1: Leadership Team**
- Format: 60-min workshop
- Content: Full context, rationale, and Q&A
- Outcome: Leadership commits publicly

**Audience 2: All Employees**
- Format: Company all-hands + written memo
- Content: High-level strategy, company OKRs, how teams contribute
- Outcome: Everyone understands the "why"

**Audience 3: Individual Teams**
- Format: Team meetings led by managers
- Content: Team-specific OKRs, how they ladder up, individual contributions
- Outcome: Each person knows their role

**Draft All-Hands Script:**
[Opening: Why this quarter matters]
[Company OKRs: Present each with context]
[Team Contributions: How everyone fits in]
[Q&A: Address concerns]
[Closing: Call to action]

**Draft Written Memo:**
[Subject: Q[N] Strategic Priorities]
[Body: 500 words max, scannable format]
```

---

### Step 4.2: Commitment Ritual
**Prompt:**
```
Design a commitment ritual to make OKRs feel real:

**Option 1: Public Commitment**
Each team lead presents their OKRs to the company and states:
"We commit to [Objective]. We'll know we've succeeded when [Key Results]."

**Option 2: Written Commitment**
Each team signs a "commitment document" that includes:
- Our OKRs
- Our confidence level (%)
- What we need from other teams
- What we'll stop doing to make room

**Option 3: Bet System**
Leadership makes public bets on which OKRs will be achieved.
Creates accountability and fun.

---

Choose one and execute. The goal: Make OKRs feel like a promise, not just a document.
```

---

## Phase 5: Execution & Tracking

### Step 5.1: Weekly Check-In Format
**Prompt:**
```
Design a lightweight weekly check-in for each OKR:

**OKR:** [Objective]
**Owner:** [Name]

**This Week:**
- Progress: [What moved forward?]
- Metric Update: [Current vs. Target]
- Confidence: [10-90%] (↑↓→ vs. last week)

**Next Week:**
- Focus: [Top 3 priorities]
- Blockers: [What's in the way?]
- Help Needed: [What do you need from others?]

**Format:** 5 minutes per OKR, async or in standup

**Aggregation:** Roll up to leadership dashboard showing:
- OKRs on track (green)
- OKRs at risk (yellow)
- OKRs off track (red)
```

---

### Step 5.2: Monthly Review & Adjustment
**Prompt:**
```
Conduct a monthly OKR review:

**Review Agenda (60 min):**

**1. Progress Review (30 min)**
For each company OKR:
- Current status: [% complete]
- Trend: [Accelerating/Steady/Slowing]
- Confidence: [Will we hit target?]

**2. Blocker Resolution (20 min)**
- What's blocking progress?
- What decisions need to be made?
- What resources need to be reallocated?

**3. Adjustment Discussion (10 min)**
- Should we adjust any targets? (if context changed)
- Should we add/remove any OKRs? (if priorities shifted)
- What's working well that we should double down on?

**Output:**
- Updated OKR dashboard
- Action items to unblock progress
- Any approved adjustments (with rationale)

---

Rules:
- Adjustments are OK if context changed (not just because it's hard)
- Document why adjustments were made (transparency)
- Celebrate progress, even if targets aren't hit yet
```

**Decision Point:** If >50% of OKRs are off track → escalate: "Systemic issue. Need strategic review, not just execution tweaks."

---

## Phase 6: End-of-Quarter Retrospective

### Step 6.1: OKR Scoring & Analysis
**Prompt:**
```
Score each OKR at quarter end:

**OKR:** [Objective]
**Final Score:** [0.0 - 1.0]
- 0.0-0.3: Missed significantly
- 0.4-0.6: Partial progress
- 0.7-0.9: Strong achievement (target zone)
- 1.0: Exceeded (may have been too easy)

**Analysis:**
- What went well? (wins to celebrate)
- What went wrong? (root causes, not blame)
- What did we learn? (insights for next quarter)
- What should we do differently? (actionable changes)

**Aggregate Insights:**
- Overall company score: [Average across all OKRs]
- Best performing team: [Team name]
- Biggest surprise: [What we didn't expect]
- Key lesson: [What we learned about execution]

---

Share results transparently with the company.
```

---

### Step 6.2: Strategic Insights Extraction
**Prompt:**
```
Extract strategic insights from the quarter:

**What This Quarter Taught Us:**

**About Our Market:**
- [Insight 1: What we learned about customers, competitors, trends]
- [Insight 2]

**About Our Capabilities:**
- [Insight 1: What we're good at, what we struggle with]
- [Insight 2]

**About Our Execution:**
- [Insight 1: How we work, what slows us down]
- [Insight 2]

**Implications for Next Quarter:**
- [What should we do more of?]
- [What should we stop doing?]
- [What new bets should we consider?]

---

Use these insights to inform next quarter's strategic planning.
```

---

## Quality Standards

✅ **Success Criteria:**
- OKRs are ambitious (70% confidence, not 95%)
- Clear line of sight from individual work to company goals
- Progress is visible and tracked weekly
- Adjustments are made when context changes
- Team achieves 0.7+ average score (strong execution)
- Retrospective insights inform next quarter

❌ **Failure Modes:**
- OKRs are too easy (sandbag targets)
- No clear ownership (everyone's responsible = no one's responsible)
- Set-and-forget (no tracking or adjustment)
- Blame culture when OKRs are missed
- OKRs become a bureaucratic exercise (no real impact)

---

## Upgrade Path

**→ Custom Pro:** Add predictive analytics (forecast OKR achievement), automated dashboards, competitive benchmarking, and executive coaching on strategic planning.

---

## Usage Notes

- **First time:** Expect 2-3 quarters to get good at OKRs
- **Culture:** OKRs require psychological safety (it's OK to miss stretch goals)
- **Tooling:** Use a dedicated OKR tool (Lattice, 15Five, or simple spreadsheet)
- **Cadence:** Quarterly OKRs, monthly reviews, weekly check-ins
- **Leadership:** CEO must model transparency and commitment
