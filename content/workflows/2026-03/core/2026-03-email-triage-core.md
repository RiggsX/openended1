# Email Triage & Response Workflow

**Tier:** Core  
**Version:** 1.0  
**Target:** Anyone with 20+ daily emails who needs quick inbox management

---

## What This Does

Automatically categorizes incoming emails, drafts responses for routine messages, and flags urgent items requiring human attention.

---

## Execution Flow

### Step 1: Inbox Scan
**Trigger:** Manual or scheduled (every 2 hours)

**Prompt:**
```
Read my last 20 unread emails. For each email:
1. Categorize: [Urgent/Action Required/FYI/Newsletter/Spam]
2. Extract: Sender, subject, key request/question
3. Sentiment: [Positive/Neutral/Negative/Angry]

Output as a table with columns: ID | Category | Sender | Subject | Sentiment | Key Point
```

**Decision Point:** If any email is categorized as "Urgent" → proceed to Step 2 immediately. Otherwise, continue batch processing.

---

### Step 2: Draft Responses (Action Required only)
**Prompt:**
```
For emails marked "Action Required", draft a response following these rules:
- Tone: Professional but warm
- Length: 2-3 paragraphs max
- Include: Direct answer to their question + next steps
- End with: Clear call-to-action or confirmation

Format each draft as:
---
TO: [email]
SUBJECT: Re: [original subject]
DRAFT:
[response text]
---
```

**Decision Point:** Review drafts. If confidence is high (simple requests), send. If complex, flag for human review.

---

### Step 3: Archive & Label
**Prompt:**
```
For processed emails:
- "FYI" → Archive, label as "Read"
- "Newsletter" → Archive, label as "Newsletter"
- "Spam" → Delete
- "Urgent" + "Action Required" → Keep in inbox until response sent

Execute these actions now.
```

---

## Quality Standards

✅ **Success Criteria:**
- 90%+ categorization accuracy
- Zero false negatives on urgent emails
- Drafts require <30 seconds of human editing
- Inbox reduced by 60%+ after each run

❌ **Failure Modes:**
- Missing urgent emails (check sentiment analysis)
- Generic responses that don't address the question
- Over-archiving (user can't find important emails)

---

## Upgrade Path

**→ Plus Tier:** Add sentiment-based priority scoring, auto-follow-up reminders, and integration with calendar for meeting requests.

**→ Pro Tier:** Multi-inbox management, VIP sender profiles, predictive response templates based on historical patterns.

---

## Usage Notes

- **First run:** Review all drafts to calibrate tone
- **Adjust categories:** Edit the prompt to add custom labels (e.g., "Client", "Internal")
- **Spam filter:** After 3 runs, the AI learns your spam patterns
