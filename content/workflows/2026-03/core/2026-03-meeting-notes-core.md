# Meeting Notes & Action Items Extractor

**Tier:** Core  
**Version:** 1.0  
**Target:** Anyone attending 3+ meetings per week who needs structured follow-up

---

## What This Does

Converts messy meeting transcripts or raw notes into structured summaries with clear action items, decisions, and next steps.

---

## Execution Flow

### Step 1: Input Processing
**Trigger:** Paste transcript or upload audio file

**Prompt:**
```
You are a professional meeting note-taker. Process this meeting content:

[PASTE TRANSCRIPT OR NOTES HERE]

Extract:
1. Meeting metadata: Date, attendees, duration, topic
2. Key discussion points (bullet list, max 5)
3. Decisions made (numbered list)
4. Action items with owners and deadlines

Use this exact format:
---
MEETING: [Topic]
DATE: [Date] | ATTENDEES: [Names] | DURATION: [Time]

DISCUSSION:
• [Point 1]
• [Point 2]
...

DECISIONS:
1. [Decision with context]
2. [Decision with context]

ACTION ITEMS:
[ ] [Task] - @[Owner] - Due: [Date]
[ ] [Task] - @[Owner] - Due: [Date]
---
```

**Decision Point:** If no clear action items found → prompt user: "No action items detected. Was this an informational meeting?"

---

### Step 2: Action Item Validation
**Prompt:**
```
Review the action items list. For each item, check:
- Is there a clear owner? (If not, flag as "UNASSIGNED")
- Is there a deadline? (If not, suggest "End of week" or "TBD")
- Is the task specific and actionable? (If vague, rewrite to be concrete)

Output validated action items with any changes highlighted.
```

**Decision Point:** If >3 items are unassigned → alert user: "Multiple tasks lack owners. Assign now or schedule follow-up?"

---

### Step 3: Distribution & Tracking
**Prompt:**
```
Generate a follow-up email to all attendees:

Subject: [Meeting Topic] - Notes & Action Items

Hi team,

Thanks for joining today's meeting on [topic]. Here's a quick summary:

[Insert DECISIONS section]

Action Items:
[Insert ACTION ITEMS with owners and deadlines]

Please confirm your assigned tasks or flag any issues by EOD.

Best,
[Your name]
```

**Decision Point:** User approves → send email. User declines → save to drafts.

---

## Quality Standards

✅ **Success Criteria:**
- All action items have owners and deadlines
- Summary is <1 page (300 words max)
- Key decisions are clearly stated
- Notes are shareable within 5 minutes of meeting end

❌ **Failure Modes:**
- Missing critical decisions (check for "agreed", "decided", "will do")
- Vague action items ("follow up on X" → needs specificity)
- Wrong attendee names (validate against calendar invite)

---

## Upgrade Path

**→ Plus Tier:** Auto-sync action items to project management tools (Asana, Notion), recurring meeting templates, and sentiment analysis for team morale.

**→ Pro Tier:** Cross-meeting insights (track recurring issues), automated follow-up reminders, and executive summary generation for leadership.

---

## Usage Notes

- **Audio transcripts:** Use Whisper or similar for transcription first
- **Recurring meetings:** Save the format as a template for consistency
- **Private meetings:** Redact sensitive info before sharing
