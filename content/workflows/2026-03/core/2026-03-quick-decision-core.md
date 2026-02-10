# Quick Decision Framework

**Tier:** Core  
**Version:** 1.0  
**Target:** Anyone facing a decision and needing structured thinking

---

## What This Does

Guides you through a rapid decision-making process using a proven framework. Gets you from "I don't know what to do" to "Here's my decision" in 15 minutes.

---

## Execution Flow

### Step 1: Frame the Decision
**Trigger:** You have a decision to make

**Prompt:**
```
Let's frame your decision clearly.

Answer these:
1. What decision are you trying to make? (1 sentence)
2. Why does this decision matter? (impact if you get it right/wrong)
3. When do you need to decide by? (deadline)
4. Who else is affected by this decision?
5. What's your gut feeling right now? (before analysis)

Format:
DECISION: [What you're deciding]
IMPACT: [Why it matters]
DEADLINE: [When]
STAKEHOLDERS: [Who's affected]
GUT FEELING: [Initial instinct]
```

**Decision Point:** If deadline is <24 hours → use fast mode (skip Step 3). If >1 week → use deep mode (add research phase).

---

### Step 2: Generate Options
**Prompt:**
```
Brainstorm all possible options (aim for 3-5):

OPTION 1: [Description]
- Pros: [What's good about this]
- Cons: [What's bad about this]
- Effort: [Low/Medium/High]

OPTION 2: [Description]
- Pros: [What's good about this]
- Cons: [What's bad about this]
- Effort: [Low/Medium/High]

OPTION 3: [Description]
- Pros: [What's good about this]
- Cons: [What's bad about this]
- Effort: [Low/Medium/High]

[Add more options if needed]

OPTION X: Do Nothing
- Pros: [What happens if you don't decide]
- Cons: [Cost of inaction]
- Effort: [Zero]

---

Rules:
- Include at least one "creative" option (not obvious)
- Always include "do nothing" as an option
- Be honest about cons (don't sugarcoat)
```

---

### Step 3: Evaluate Against Criteria
**Prompt:**
```
Score each option against key criteria (1-5 scale):

**Criteria:**
1. **Impact:** How much does this move the needle?
2. **Feasibility:** How realistic is this?
3. **Risk:** How much could go wrong? (inverse: 5 = low risk)
4. **Alignment:** Does this fit with your goals/values?
5. **Reversibility:** Can you undo this if it fails? (5 = easily reversible)

**Scoring:**
| Option | Impact | Feasibility | Risk | Alignment | Reversibility | TOTAL |
|--------|--------|-------------|------|-----------|---------------|-------|
| Opt 1  | [1-5]  | [1-5]       | [1-5]| [1-5]     | [1-5]         | [Sum] |
| Opt 2  | [1-5]  | [1-5]       | [1-5]| [1-5]     | [1-5]         | [Sum] |
| Opt 3  | [1-5]  | [1-5]       | [1-5]| [1-5]     | [1-5]         | [Sum] |

**Highest Score:** [Option name]

---

Note: This is a guide, not a mandate. If the highest score doesn't feel right, trust your gut.
```

**Decision Point:** If top 2 options are within 2 points → they're essentially tied. Use gut feeling as tiebreaker.

---

### Step 4: Test Your Decision
**Prompt:**
```
You're leaning toward: [Option name]

Test this decision with these questions:

**Regret Minimization:**
"Will I regret NOT doing this in 1 year?"
[Your answer]

**10-10-10 Rule:**
"How will I feel about this in 10 minutes? 10 months? 10 years?"
- 10 minutes: [Feeling]
- 10 months: [Feeling]
- 10 years: [Feeling]

**Worst Case Scenario:**
"If this goes completely wrong, can I recover?"
[Your answer]

**Opportunity Cost:**
"What am I giving up by choosing this?"
[Your answer]

**Confidence Check:**
"On a scale of 1-10, how confident am I in this decision?"
[Your score]

---

If confidence is <6, revisit your options or gather more information.
```

**Decision Point:** If confidence is <6 → either gather more data or choose a more reversible option.

---

### Step 5: Commit & Plan
**Prompt:**
```
Make your decision official:

# DECISION: [Your choice]

**Rationale:**
[2-3 sentences: Why you chose this]

**Next Steps:**
1. [Immediate action] - Do by: [Date]
2. [Follow-up action] - Do by: [Date]
3. [Check-in point] - Review on: [Date]

**Success Criteria:**
[How will you know if this was the right decision?]

**Escape Hatch:**
[Under what conditions would you reverse this decision?]

**Communication:**
[Who needs to know about this decision? How will you tell them?]

---

Document this decision for future reference.
```

---

## Quality Standards

✅ **Success Criteria:**
- Decision made within 15 minutes (fast mode) or 1 hour (deep mode)
- All major options considered
- Clear rationale documented
- Next steps are specific and time-bound
- Confidence level is 6+ out of 10

❌ **Failure Modes:**
- Analysis paralysis (overthinking)
- Ignoring gut feeling entirely
- Not considering "do nothing" option
- Choosing based on what others want (not your values)
- No plan for execution after deciding

---

## Upgrade Path

**→ Plus Tier:** Add stakeholder input collection, decision trees for complex scenarios, and post-decision review templates.

**→ Pro Tier:** Multi-criteria decision analysis (MCDA), scenario modeling, and decision journal for tracking long-term outcomes.

---

## Usage Notes

- **When to use:** Any decision where you feel stuck or uncertain
- **When NOT to use:** Life-or-death situations (get expert help)
- **Iteration:** If new information emerges, re-run the framework
- **Journaling:** Keep a decision log to learn from past choices
