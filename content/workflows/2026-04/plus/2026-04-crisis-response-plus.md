# Social Media Crisis Response Playbook

**Tier:** Plus  
**Version:** 1.0  
**Target:** Marketing teams, community managers, and PR professionals handling negative social media situations

---

## What This Does

Provides a structured response framework for social media crises—from initial detection to resolution and post-mortem. Helps you respond quickly and appropriately without making things worse.

---

## Execution Flow

### Step 1: Crisis Detection & Assessment
**Trigger:** Negative sentiment spike, viral complaint, or PR incident

**Prompt:**
```
You are a crisis communications specialist. Assess this situation:

[PASTE: Social media posts, comments, or describe the situation]

**Initial Assessment:**

**1. Severity Level:**
- [ ] Level 1: Minor complaint (1-10 people, low visibility)
- [ ] Level 2: Growing concern (10-100 people, moderate visibility)
- [ ] Level 3: Viral issue (100-1000+ people, high visibility)
- [ ] Level 4: Major crisis (media coverage, brand damage)

**2. Issue Type:**
- [ ] Product/service failure
- [ ] Customer service breakdown
- [ ] Offensive content/statement
- [ ] Security/privacy breach
- [ ] Misinformation about company
- [ ] Employee misconduct
- [ ] Other: [Specify]

**3. Sentiment Analysis:**
- Angry: [%]
- Disappointed: [%]
- Confused: [%]
- Supportive: [%]

**4. Spread Velocity:**
- Mentions in last hour: [N]
- Trending hashtags: [List]
- Influencer involvement: [Yes/No - who?]
- Media pickup: [Yes/No - which outlets?]

**5. Immediate Risk:**
- Brand reputation: [High/Medium/Low]
- Customer churn: [High/Medium/Low]
- Legal exposure: [High/Medium/Low]
- Employee morale: [High/Medium/Low]

**RECOMMENDATION:** [Immediate action needed]
```

**Decision Point:** 
- Level 1-2 → Standard response (continue to Step 2)
- Level 3-4 → Escalate immediately to leadership + legal review

---

### Step 2: Response Strategy Development
**Prompt:**
```
Develop a response strategy for this crisis:

**Response Approach:**

**Option A: Acknowledge & Investigate**
Use when: Facts are unclear, need time to investigate
Template: "We're aware of [issue] and taking it seriously. We're investigating and will share updates as we learn more."
Risk: May seem slow or evasive
Timeline: 1-2 hours to first response

**Option B: Apologize & Fix**
Use when: We're clearly at fault, solution is known
Template: "We messed up. [Specific apology]. Here's what we're doing to fix it: [Actions]."
Risk: Admission of fault (legal review needed)
Timeline: 30 minutes to first response

**Option C: Clarify & Correct**
Use when: Misinformation is spreading
Template: "We've seen confusion about [topic]. Here are the facts: [Clarification]."
Risk: May seem defensive
Timeline: 15 minutes to first response

**Option D: Empathize & Redirect**
Use when: Issue is valid but outside our control
Template: "We understand your frustration with [issue]. While [context], here's what we can do: [Alternative]."
Risk: May not satisfy angry customers
Timeline: 30 minutes to first response

**RECOMMENDED APPROACH:** [Which option]
**RATIONALE:** [Why this approach]

**Key Messages:**
1. [Core message 1]
2. [Core message 2]
3. [Core message 3]

**What NOT to Say:**
- [Phrase to avoid 1]
- [Phrase to avoid 2]
```

**Decision Point:** If legal risk is High → pause for legal review before any public statement.

---

### Step 3: Response Drafting
**Prompt:**
```
Draft the initial public response:

**Platform:** [Twitter/LinkedIn/Instagram/Blog/All]

**DRAFT RESPONSE:**

[Opening: Acknowledge the issue]

[Body: Explain what happened and/or what you're doing]

[Closing: Next steps and timeline]

[Sign-off: Name/title if appropriate]

---

**Tone Check:**
- [ ] Empathetic (shows we care)
- [ ] Transparent (honest about situation)
- [ ] Accountable (owns the issue)
- [ ] Action-oriented (clear next steps)
- [ ] Human (not corporate-speak)

**Red Flags to Avoid:**
- [ ] Defensive language ("Actually...", "To be fair...")
- [ ] Blame-shifting ("It's not our fault...")
- [ ] Minimizing ("It's not a big deal...")
- [ ] Over-promising ("This will never happen again...")
- [ ] Jargon or corporate speak

**Character Count:** [For Twitter: must be <280]

**Approval Needed From:**
- [ ] Legal
- [ ] CEO/Leadership
- [ ] PR team
- [ ] Customer support lead
```

**Decision Point:** For Level 3-4 crises → require CEO approval before posting.

---

### Step 4: Multi-Channel Coordination
**Prompt:**
```
Coordinate response across all channels:

**Timeline:**

**T+0 (Immediate):**
- [ ] Post initial response on primary platform
- [ ] Pin response to top of profile
- [ ] Notify customer support team (prepare for volume)
- [ ] Alert leadership team

**T+15 min:**
- [ ] Monitor replies and sentiment
- [ ] Respond to top comments (prioritize influencers)
- [ ] Cross-post to other social channels

**T+1 hour:**
- [ ] Publish blog post with full details (if needed)
- [ ] Send email to affected customers (if applicable)
- [ ] Update help center/FAQ

**T+4 hours:**
- [ ] Post progress update
- [ ] Share metrics (e.g., "We've resolved 50% of cases")

**T+24 hours:**
- [ ] Post resolution update
- [ ] Thank community for patience
- [ ] Outline preventive measures

**Response Templates for Common Replies:**

**"This is unacceptable!"**
→ "You're right to be upset. We're [specific action] to fix this. Can you DM us your details so we can help directly?"

**"I'm switching to [competitor]"**
→ "We understand your frustration. Before you go, we'd like to make this right. DM us?"

**"Why did this happen?"**
→ "Here's what we know: [Brief explanation]. We're investigating further and will share a full update by [time]."

**"What are you doing about it?"**
→ "We're [Action 1], [Action 2], and [Action 3]. Timeline: [When]."
```

---

### Step 5: Internal Communication
**Prompt:**
```
Brief internal teams on the crisis:

# Internal Crisis Brief - [Date/Time]

**TO:** All employees
**FROM:** [Leadership]
**RE:** Social media situation - [Brief description]

**What Happened:**
[2-3 sentences explaining the situation]

**Our Response:**
[What we've said publicly]

**What You Need to Know:**
1. [Key point 1]
2. [Key point 2]
3. [Key point 3]

**If Customers Ask You:**
Use this response: "[Approved talking point]"

**If Media Contacts You:**
Refer all inquiries to: [PR contact]

**What We're Doing:**
- [Action 1]
- [Action 2]
- [Action 3]

**Timeline:**
[When we expect resolution]

**Questions?**
Contact: [Crisis lead]

---

**For Customer Support Team:**

**Expected Volume:** [Estimate]
**Priority:** [High/Critical]

**Response Scripts:**
[Provide templated responses for common questions]

**Escalation Path:**
[When to escalate to manager/leadership]
```

---

### Step 6: Monitoring & Adjustment
**Prompt:**
```
Set up real-time monitoring:

**Metrics to Track (hourly):**
- Mention volume: [Current count]
- Sentiment ratio: [Positive/Neutral/Negative %]
- Reach/impressions: [Total]
- Response rate: [% of mentions we've replied to]
- Resolution rate: [% of issues resolved]

**Sentiment Tracking:**
Hour 1: [Sentiment score]
Hour 2: [Sentiment score]
Hour 3: [Sentiment score]
→ Trend: [Improving/Stable/Worsening]

**Decision Points:**
- If sentiment worsens after 2 hours → revise response strategy
- If mention volume doubles → escalate resources
- If media picks up story → prepare formal statement
- If legal threats emerge → involve legal immediately

**Adjustment Triggers:**
✅ **Good signs (continue current approach):**
- Sentiment improving
- Mention volume decreasing
- Positive replies increasing
- Influencers defending us

⚠️ **Warning signs (adjust strategy):**
- Sentiment not improving after 4 hours
- New issues emerging
- Misinformation spreading
- Competitors piling on

🚨 **Red flags (major escalation):**
- Media coverage expanding
- Boycott hashtags trending
- Employee backlash
- Legal action threatened
```

**Decision Point:** If sentiment doesn't improve after 4 hours → reconvene crisis team to revise strategy.

---

### Step 7: Resolution & Follow-Up
**Prompt:**
```
Once the crisis is contained, post resolution update:

**Resolution Post Template:**

# Update: [Issue] - Resolved

**What We Fixed:**
[Specific actions taken]

**Results:**
- [Metric 1: e.g., "All affected accounts restored"]
- [Metric 2: e.g., "Response time reduced to <1 hour"]
- [Metric 3: e.g., "New safeguards implemented"]

**What We Learned:**
[1-2 sentences on lessons learned]

**Preventing This in the Future:**
1. [Preventive measure 1]
2. [Preventive measure 2]
3. [Preventive measure 3]

**Thank You:**
[Acknowledge community patience and feedback]

**Questions?**
[How to reach support]

---

**Follow-Up Actions:**
- [ ] Email affected customers with resolution details
- [ ] Update help center with new information
- [ ] Post case study (if appropriate) on how we handled it
- [ ] Thank employees who helped resolve the crisis
```

---

### Step 8: Post-Mortem Analysis
**Prompt:**
```
Conduct a post-crisis review (within 1 week):

# Crisis Post-Mortem: [Issue Name]

**Timeline:**
- First mention: [Time]
- Crisis declared: [Time]
- First response: [Time]
- Peak volume: [Time]
- Resolution: [Time]
- Total duration: [Hours/Days]

**By the Numbers:**
- Total mentions: [N]
- Peak sentiment: [Negative %]
- Final sentiment: [Negative %]
- Customers affected: [N]
- Support tickets: [N]
- Media articles: [N]
- Estimated reach: [N people]

**What Went Well:**
1. [Success 1]
2. [Success 2]
3. [Success 3]

**What Went Wrong:**
1. [Failure 1] - Root cause: [Why]
2. [Failure 2] - Root cause: [Why]
3. [Failure 3] - Root cause: [Why]

**Lessons Learned:**
1. [Lesson 1]
2. [Lesson 2]
3. [Lesson 3]

**Action Items:**
- [ ] [Preventive measure 1] - Owner: [Name] - Due: [Date]
- [ ] [Preventive measure 2] - Owner: [Name] - Due: [Date]
- [ ] [Process improvement 1] - Owner: [Name] - Due: [Date]

**Playbook Updates:**
[What should be added to this playbook for next time?]

---

Share with leadership and relevant teams.
```

---

## Quality Standards

✅ **Success Criteria:**
- First response within 1 hour (Level 1-2) or 30 min (Level 3-4)
- Sentiment improves within 4 hours of response
- <5% of responses are defensive or tone-deaf
- Internal teams are briefed within 2 hours
- Post-mortem completed within 1 week
- Preventive measures implemented within 1 month

❌ **Failure Modes:**
- Slow response (>2 hours for Level 3-4)
- Defensive or dismissive tone
- Inconsistent messaging across channels
- Making promises we can't keep
- Ignoring the issue hoping it goes away
- No follow-through on commitments

---

## Upgrade Path

**→ Pro Tier:** Add predictive crisis detection (AI sentiment monitoring), automated escalation workflows, media training for spokespeople, and crisis simulation exercises.

---

## Usage Notes

- **Preparation:** Have pre-approved response templates ready
- **Team:** Designate crisis lead and backup
- **Tools:** Use social listening tools (Brandwatch, Sprout Social)
- **Practice:** Run crisis simulations quarterly
- **Legal:** Know when to involve legal (always for Level 4)
