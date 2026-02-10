# Competitive Intelligence Framework: Market Positioning & Strategy

**Tier:** Pro  
**Version:** 1.0  
**Target:** Product leaders, strategists, and executives who need systematic competitive analysis

---

## What This Does

A comprehensive framework for ongoing competitive intelligence—tracking competitors, analyzing their moves, identifying market gaps, and informing strategic decisions.

---

## Framework Overview

This is a **continuous intelligence system**, not a one-time analysis. Run quarterly deep dives with monthly updates.

**Components:**
1. Competitor profiling and tracking
2. Feature/capability comparison
3. Market positioning analysis
4. Strategic move prediction
5. Opportunity identification

---

## Phase 1: Competitor Landscape Mapping

### Step 1.1: Competitor Identification & Segmentation
**Prompt:**
```
You are a competitive intelligence analyst. Map the competitive landscape for [YOUR PRODUCT/MARKET].

**Competitor Categories:**

**Direct Competitors** (same solution, same audience)
- [Company 1]: [1-sentence description]
- [Company 2]: [1-sentence description]

**Indirect Competitors** (different solution, same problem)
- [Company 1]: [1-sentence description]
- [Company 2]: [1-sentence description]

**Emerging Threats** (new entrants, adjacent players)
- [Company 1]: [Why they're a threat]
- [Company 2]: [Why they're a threat]

**For each competitor, assess:**
- Market position: [Leader/Challenger/Niche/Emerging]
- Funding stage: [Bootstrap/Seed/Series A-D/Public]
- Estimated revenue: [Range]
- Team size: [Approximate headcount]
- Geographic focus: [Markets]
- Target customer: [ICP description]

Output as a structured table with all competitors.
```

**Decision Point:** If >15 competitors identified → prioritize: "Focus on top 5 by market share + 2 emerging threats for deep analysis."

---

### Step 1.2: Competitor Profile Deep Dive
**Prompt:**
```
For each priority competitor, create a detailed profile:

# Competitor Profile: [Company Name]

## Overview
- **Founded:** [Year]
- **HQ:** [Location]
- **Funding:** [Total raised] | [Last round]
- **Valuation:** [If known]
- **Team:** [Size] | [Key executives]
- **Customers:** [Estimated count] | [Notable logos]

## Product & Positioning
- **Core offering:** [What they sell]
- **Value proposition:** [Their pitch in their words]
- **Pricing:** [Model and tiers]
- **Key features:** [Top 5 capabilities]
- **Differentiators:** [What makes them unique]

## Go-to-Market
- **Target market:** [Who they sell to]
- **Sales model:** [Self-serve/Sales-led/Hybrid]
- **Marketing channels:** [Where they show up]
- **Partnerships:** [Key alliances]
- **Distribution:** [How they reach customers]

## Strengths & Weaknesses
**Strengths:**
• [Strength 1] - Evidence: [What shows this]
• [Strength 2] - Evidence: [What shows this]

**Weaknesses:**
• [Weakness 1] - Evidence: [What shows this]
• [Weakness 2] - Evidence: [What shows this]

## Strategic Direction
- **Recent moves:** [Last 6 months: launches, hires, funding]
- **Signals:** [What they're investing in]
- **Likely next moves:** [Predictions based on patterns]

## Threat Level
**Overall:** [Critical/High/Medium/Low]
**Rationale:** [Why this rating]

---

Sources: [List where you got this info]
Last updated: [Date]
```

**Decision Point:** If threat level is "Critical" for any competitor → schedule war room session with leadership.

---

## Phase 2: Feature & Capability Analysis

### Step 2.1: Feature Comparison Matrix
**Prompt:**
```
Create a feature comparison matrix across all priority competitors:

| Feature Category | Us | [Comp 1] | [Comp 2] | [Comp 3] | Market Leader |
|------------------|-------|----------|----------|----------|---------------|
| **Core Features** |
| [Feature 1] | ✅ Full | ✅ Full | ⚠️ Partial | ❌ None | ✅ Full |
| [Feature 2] | ✅ Full | ⚠️ Partial | ✅ Full | ✅ Full | ✅ Full |
| **Advanced Features** |
| [Feature 3] | ⚠️ Beta | ❌ None | ✅ Full | ❌ None | ✅ Full |
| **Integrations** |
| [Integration 1] | ✅ | ✅ | ✅ | ❌ | ✅ |

**Legend:**
- ✅ Full: Feature is mature and well-executed
- ⚠️ Partial: Feature exists but limited or buggy
- 🔄 Beta: In development or early access
- ❌ None: Not available

**Analysis:**
1. **Parity gaps:** Where are we behind? (❌ or ⚠️ where others have ✅)
2. **Differentiators:** Where are we ahead? (✅ where others have ❌)
3. **Table stakes:** What does everyone have? (all ✅)
4. **White space:** What does no one have? (all ❌)

**Strategic Implications:**
- Must-build: [Features needed for parity]
- Double-down: [Features where we lead]
- Ignore: [Features that don't matter to our ICP]
```

**Decision Point:** If >5 parity gaps exist → prioritize: "Which gaps are deal-breakers for target customers?"

---

### Step 2.2: User Experience Benchmarking
**Prompt:**
```
Conduct a UX teardown of top 3 competitors:

For each competitor, evaluate:

**Onboarding Experience**
- Time to first value: [Minutes]
- Friction points: [Where users get stuck]
- Aha moments: [What delights users]
- Rating: [1-5 stars]

**Core Workflow**
- Task: [Common user task]
- Steps required: [Number]
- Cognitive load: [Low/Medium/High]
- Error handling: [How they handle mistakes]
- Rating: [1-5 stars]

**Visual Design**
- Modern/dated: [Assessment]
- Clarity: [Easy to understand?]
- Consistency: [Design system quality]
- Rating: [1-5 stars]

**Performance**
- Load time: [Seconds]
- Responsiveness: [Snappy/Sluggish]
- Mobile experience: [Good/Poor]
- Rating: [1-5 stars]

**Overall UX Score:** [Average of ratings]

**What They Do Better Than Us:**
• [Insight 1]
• [Insight 2]

**What We Do Better:**
• [Insight 1]
• [Insight 2]

**Steal-worthy Ideas:**
• [Idea 1] - Adaptation: [How we'd implement]
• [Idea 2] - Adaptation: [How we'd implement]
```

---

## Phase 3: Market Positioning Analysis

### Step 3.1: Positioning Map
**Prompt:**
```
Create a 2x2 positioning map for the market:

**Axes:**
- X-axis: [Dimension 1, e.g., "Simple → Powerful"]
- Y-axis: [Dimension 2, e.g., "Affordable → Premium"]

**Plot competitors:**
```
Premium
   |
   |  [Comp A]
   |              [Comp B]
   |
   |        [US]
   |  [Comp C]
   |                    [Comp D]
   |
Affordable
   |________________________
   Simple            Powerful
```

**Analysis:**
1. **Crowded quadrants:** Where is competition intense?
2. **White space:** Are there underserved positions?
3. **Our position:** Are we differentiated or commoditized?
4. **Movement:** Where are competitors moving? (arrows)

**Strategic Questions:**
- Should we defend our position or move?
- Is there a better position to own?
- What would it take to move there?
```

**Decision Point:** If we're in a crowded quadrant → consider: "Can we redefine the axes to create new differentiation?"

---

### Step 3.2: Value Proposition Analysis
**Prompt:**
```
Analyze how each competitor articulates their value:

**[Competitor 1]**
- **Tagline:** "[Their tagline]"
- **Pitch:** "[Their homepage pitch]"
- **Core promise:** [What they guarantee]
- **Proof points:** [How they back it up]
- **Emotional appeal:** [What feeling they evoke]
- **Effectiveness:** [Strong/Weak] - Why: [Rationale]

**[Competitor 2]**
[Repeat format]

**Our Value Prop:**
[Same analysis for us]

**Comparative Analysis:**
- **Clarity:** Who has the clearest message? [Ranking]
- **Differentiation:** Who stands out most? [Ranking]
- **Credibility:** Who is most believable? [Ranking]
- **Resonance:** Who connects emotionally? [Ranking]

**Recommendations:**
1. [What we should steal/adapt]
2. [What we should avoid]
3. [How we can differentiate better]
```

---

## Phase 4: Strategic Intelligence & Prediction

### Step 4.1: Signal Tracking
**Prompt:**
```
Track strategic signals from competitors (monthly update):

**[Competitor Name]**

**Product Signals:**
- New features launched: [List]
- Beta programs announced: [List]
- Deprecations: [What they're killing]
- → Interpretation: [What this tells us about their strategy]

**Go-to-Market Signals:**
- Pricing changes: [What changed]
- New market segments: [Who they're targeting]
- Partnership announcements: [Who they're working with]
- → Interpretation: [What this tells us about their strategy]

**Organizational Signals:**
- Key hires: [Roles, especially C-level]
- Funding rounds: [Amount, investors]
- Office openings/closings: [Locations]
- → Interpretation: [What this tells us about their strategy]

**Marketing Signals:**
- Campaign themes: [What they're emphasizing]
- Content focus: [Topics they're covering]
- Event presence: [Where they're showing up]
- → Interpretation: [What this tells us about their strategy]

**Predicted Next Moves:**
1. [Prediction 1] - Confidence: [High/Medium/Low] - Timeline: [When]
2. [Prediction 2] - Confidence: [High/Medium/Low] - Timeline: [When]

**Our Response:**
- [What we should do proactively]
- [What we should prepare for]
```

**Decision Point:** If high-confidence prediction threatens our position → develop counter-strategy immediately.

---

### Step 4.2: Scenario Planning
**Prompt:**
```
Develop scenarios for how the competitive landscape might evolve:

**Scenario 1: [Name, e.g., "Consolidation Wave"]**
- **What happens:** [Description of scenario]
- **Trigger:** [What would cause this]
- **Probability:** [High/Medium/Low]
- **Impact on us:** [How we'd be affected]
- **Our response:** [What we'd do]

**Scenario 2: [Name, e.g., "New Entrant Disruption"]**
- **What happens:** [Description]
- **Trigger:** [What would cause this]
- **Probability:** [High/Medium/Low]
- **Impact on us:** [How we'd be affected]
- **Our response:** [What we'd do]

**Scenario 3: [Name, e.g., "Market Commoditization"]**
- **What happens:** [Description]
- **Trigger:** [What would cause this]
- **Probability:** [High/Medium/Low]
- **Impact on us:** [How we'd be affected]
- **Our response:** [What we'd do]

**Recommended Hedges:**
[What we should do now to prepare for multiple scenarios]
```

---

## Phase 5: Opportunity Identification

### Step 5.1: Gap Analysis
**Prompt:**
```
Identify market opportunities based on competitive analysis:

**Customer Pain Points Competitors Miss:**
1. [Pain point 1]
   - Evidence: [Customer feedback, reviews, forums]
   - Why competitors miss it: [Reason]
   - Opportunity size: [Large/Medium/Small]
   - Our advantage: [Why we're positioned to solve this]

2. [Pain point 2]
   [Repeat format]

**Underserved Segments:**
1. [Segment 1, e.g., "Mid-market companies in healthcare"]
   - Why underserved: [Reason]
   - Size: [TAM estimate]
   - Our fit: [Why we could win here]

**Feature Gaps:**
1. [Feature no one does well]
   - Current state: [How competitors handle this]
   - Ideal state: [What customers want]
   - Difficulty: [Easy/Medium/Hard to build]
   - Impact: [High/Medium/Low if we nail it]

**Business Model Innovations:**
1. [Alternative model, e.g., "Usage-based pricing"]
   - Current norm: [How competitors price]
   - Alternative: [New approach]
   - Advantage: [Why this could win]
   - Risk: [What could go wrong]

**Prioritization Matrix:**
| Opportunity | Impact | Effort | Strategic Fit | Priority |
|-------------|--------|--------|---------------|----------|
| [Opp 1] | High | Low | High | P0 |
| [Opp 2] | High | High | Medium | P1 |
```

**Decision Point:** Present top 3 opportunities to leadership for strategic planning.

---

### Step 5.2: Competitive Strategy Playbook
**Prompt:**
```
Develop strategic plays based on competitive position:

**Play 1: Head-to-Head (when we're strong)**
- **When to use:** [Situation]
- **Tactics:**
  • [Tactic 1: e.g., "Feature parity + superior UX"]
  • [Tactic 2: e.g., "Aggressive pricing"]
  • [Tactic 3: e.g., "Migration incentives"]
- **Risks:** [What could backfire]
- **Success metrics:** [How we measure]

**Play 2: Flanking (when we're outgunned)**
- **When to use:** [Situation]
- **Tactics:**
  • [Tactic 1: e.g., "Target underserved segment"]
  • [Tactic 2: e.g., "Specialize deeply in niche"]
  • [Tactic 3: e.g., "Build community moat"]
- **Risks:** [What could backfire]
- **Success metrics:** [How we measure]

**Play 3: Redefine (when market is commoditized)**
- **When to use:** [Situation]
- **Tactics:**
  • [Tactic 1: e.g., "Change the buying criteria"]
  • [Tactic 2: e.g., "Bundle with adjacent solution"]
  • [Tactic 3: e.g., "Shift to platform play"]
- **Risks:** [What could backfire]
- **Success metrics:** [How we measure]

**Current Recommended Play:** [Which play for now]
**Rationale:** [Why this play]
```

---

## Phase 6: Reporting & Dissemination

### Step 6.1: Executive Competitive Brief
**Prompt:**
```
Create a quarterly competitive intelligence brief for leadership:

# Competitive Intelligence Brief - Q[N] [Year]

## Executive Summary
[3-4 sentences: What changed, what matters, what we should do]

## Market Dynamics
- **Market growth:** [Trend]
- **New entrants:** [Who joined]
- **Exits:** [Who left or pivoted]
- **Funding activity:** [Notable rounds]

## Competitive Moves
**[Competitor 1]:** [Key moves this quarter]
**[Competitor 2]:** [Key moves this quarter]
**[Competitor 3]:** [Key moves this quarter]

## Our Position
- **Strengths:** [Where we lead]
- **Vulnerabilities:** [Where we're exposed]
- **Momentum:** [Improving/Stable/Declining]

## Strategic Implications
1. **[Implication 1]:** [What this means for us]
   - Recommended action: [What we should do]
   - Timeline: [When]

2. **[Implication 2]:** [What this means for us]
   - Recommended action: [What we should do]
   - Timeline: [When]

## Watch List
- [Thing 1 to monitor closely]
- [Thing 2 to monitor closely]

---

Format: 2 pages max, suitable for board presentation
```

---

### Step 6.2: Sales Battlecards
**Prompt:**
```
Create battlecards for sales team (one per competitor):

# Battlecard: [Competitor Name]

## Quick Facts
- **Position:** [Market position]
- **Pricing:** [Range]
- **Typical deal size:** [Range]
- **Sales cycle:** [Length]

## When You'll Compete
[Situations where this competitor shows up]

## Their Pitch
"[How they position themselves]"

## Our Counter-Positioning
"[How we differentiate]"

## Strengths (What They'll Say)
• [Strength 1]
  - **Our response:** [How to handle this]
• [Strength 2]
  - **Our response:** [How to handle this]

## Weaknesses (What We Emphasize)
• [Weakness 1]
  - **Proof point:** [Evidence/customer story]
• [Weakness 2]
  - **Proof point:** [Evidence/customer story]

## Landmine Questions
[Questions that expose their weaknesses]
1. "[Question 1]"
   - Why this works: [Explanation]
2. "[Question 2]"
   - Why this works: [Explanation]

## Win Stories
- [Customer who chose us over them]
- [Why they chose us]

## Loss Analysis
- [Common reasons we lose to them]
- [How to avoid this]

---

Keep this updated monthly. Share wins/losses with product team.
```

---

## Quality Standards

✅ **Success Criteria:**
- Competitor profiles updated quarterly (monthly for top 3)
- Strategic predictions are 70%+ accurate
- Sales team uses battlecards in 80%+ of competitive deals
- Win rate vs. top competitors improves over time
- Product roadmap informed by competitive gaps
- Leadership makes strategic decisions based on intelligence

❌ **Failure Modes:**
- Analysis paralysis (too much data, no action)
- Reactive strategy (always following competitors)
- Stale intelligence (outdated profiles)
- Ignoring emerging threats
- Obsessing over competitors instead of customers
- Copying competitors without understanding why

---

## Upgrade Path

**→ Custom Pro:** Add automated competitor tracking (web scraping, alerts), predictive analytics, win/loss analysis integration, and dedicated competitive intelligence dashboard.

---

## Usage Notes

- **Cadence:** Quarterly deep dives, monthly updates, weekly signal tracking
- **Sources:** Competitor websites, G2/Capterra reviews, LinkedIn, funding databases, customer interviews, sales team feedback
- **Ethics:** Only use publicly available information (no corporate espionage)
- **Balance:** Spend 80% of time on customers, 20% on competitors
- **Action-oriented:** Every insight should lead to a decision or experiment
