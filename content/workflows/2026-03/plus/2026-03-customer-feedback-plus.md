# Customer Feedback Analysis & Action Pipeline

**Tier:** Plus  
**Version:** 1.0  
**Target:** Product managers and customer success teams drowning in feedback from multiple channels

---

## What This Does

Aggregates customer feedback from surveys, support tickets, reviews, and social media, then identifies patterns, prioritizes issues, and generates action plans.

---

## Execution Flow

### Step 1: Feedback Collection & Normalization
**Trigger:** Weekly batch or real-time feed

**Prompt:**
```
You are a customer insights analyst. Process this batch of customer feedback:

[PASTE FEEDBACK DATA: surveys, tickets, reviews, social comments]

For each piece of feedback:
1. **Source:** [Survey/Ticket/Review/Social]
2. **Customer ID:** [if available, otherwise "Anonymous"]
3. **Sentiment:** [Very Positive/Positive/Neutral/Negative/Very Negative]
4. **Category:** [Feature Request/Bug Report/UX Issue/Pricing/Support/Other]
5. **Urgency:** [Critical/High/Medium/Low] based on impact and frequency
6. **Key Quote:** Extract the most telling sentence

Output as a structured table:
| ID | Source | Sentiment | Category | Urgency | Key Quote |

Total feedback items: [N]
```

**Decision Point:** If >20% of feedback is "Critical" urgency → alert: "High volume of critical issues detected. Escalate immediately?"

---

### Step 2: Pattern Detection & Clustering
**Prompt:**
```
Analyze the feedback table. Identify recurring patterns:

1. **Top Issues:** What problems appear most frequently? (min 3 mentions)
2. **Sentiment Trends:** Which categories have the worst sentiment?
3. **Feature Requests:** What new features are customers asking for?
4. **Quick Wins:** What issues are mentioned frequently AND easy to fix?

For each pattern:
---
PATTERN: [Name]
Frequency: [N mentions]
Avg Sentiment: [score]
Affected Customers: [list IDs if available]
Representative Quotes:
- "[quote 1]"
- "[quote 2]"
Impact Assessment: [High/Medium/Low]
---

Rank patterns by: (Frequency × Impact) - Sentiment
```

**Decision Point:** If top 3 patterns account for >60% of feedback → focus: "These issues dominate. Address first before tackling long tail."

---

### Step 3: Root Cause Analysis
**Prompt:**
```
For the top 3 patterns, perform root cause analysis:

PATTERN: [Name]

**Symptoms:** What are customers experiencing?
[Describe the problem from customer perspective]

**Possible Root Causes:**
1. [Hypothesis 1] - Likelihood: [High/Medium/Low]
   - Evidence: [what supports this?]
   - Test: [how to validate?]

2. [Hypothesis 2] - Likelihood: [High/Medium/Low]
   - Evidence: [what supports this?]
   - Test: [how to validate?]

**Recommended Investigation:**
[What data/tests needed to confirm root cause?]

---

Repeat for each top pattern.
```

**Decision Point:** If root causes are unclear → prompt: "Need more data. Suggest follow-up questions for affected customers?"

---

### Step 4: Action Plan Generation
**Prompt:**
```
Create an action plan for each top pattern:

# Action Plan: [Pattern Name]

## Problem Statement
[1-2 sentences: What's broken and why it matters]

## Proposed Solution
**Option A:** [Solution description]
- Effort: [Low/Medium/High] (dev time estimate)
- Impact: [Low/Medium/High] (customer satisfaction gain)
- Risk: [Low/Medium/High] (what could go wrong)

**Option B:** [Alternative solution]
- Effort: [Low/Medium/High]
- Impact: [Low/Medium/High]
- Risk: [Low/Medium/High]

**Recommendation:** [Which option and why]

## Implementation Steps
1. [Step 1] - Owner: [Team/Person] - Timeline: [timeframe]
2. [Step 2] - Owner: [Team/Person] - Timeline: [timeframe]
3. [Step 3] - Owner: [Team/Person] - Timeline: [timeframe]

## Success Metrics
- [Metric 1]: Target [value]
- [Metric 2]: Target [value]

## Customer Communication
**Message:** [Draft announcement to affected customers]
**Timing:** [When to communicate: before/during/after fix]

---

Repeat for top 3-5 patterns.
```

**Decision Point:** User reviews and approves action plans. If resource constraints exist → prioritize by Impact/Effort ratio.

---

### Step 5: Reporting & Tracking
**Prompt:**
```
Generate executive summary for leadership:

# Customer Feedback Report - [Date Range]

## Overview
- Total Feedback: [N items]
- Sentiment Breakdown: [X% positive, Y% neutral, Z% negative]
- Top 3 Issues: [list]

## Key Insights
1. **[Insight 1]:** [What we learned]
   - Action: [What we're doing]
   - Timeline: [When]

2. **[Insight 2]:** [What we learned]
   - Action: [What we're doing]
   - Timeline: [When]

## Wins This Period
• [Positive feedback highlight 1]
• [Positive feedback highlight 2]

## Risks & Escalations
• [Critical issue 1] - Status: [In Progress/Blocked/Resolved]
• [Critical issue 2] - Status: [In Progress/Blocked/Resolved]

## Next Steps
[What happens next week]

---

Format: 1-page max, suitable for email or Slack
```

---

## Quality Standards

✅ **Success Criteria:**
- 95%+ of feedback correctly categorized
- Top issues identified within 1 hour of batch processing
- Action plans are specific and resourced
- Sentiment trends tracked over time
- Customer communication is empathetic and clear

❌ **Failure Modes:**
- Missing critical issues buried in noise
- Vague action plans ("improve UX")
- No follow-through tracking
- Ignoring positive feedback (miss what's working)
- Over-reacting to vocal minority

---

## Upgrade Path

**→ Pro Tier:** Add predictive churn analysis, automated sentiment tracking dashboards, competitive feedback comparison, and AI-powered response suggestions for support teams.

---

## Usage Notes

- **Frequency:** Run weekly for ongoing products, daily for launches
- **Integration:** Connect to Zendesk, Intercom, App Store reviews, Twitter mentions
- **Feedback quality:** Encourage structured feedback with specific prompts
- **Close the loop:** Always communicate back to customers when issues are fixed
