# Daily Standup Report Generator

**Tier:** Core  
**Version:** 1.0  
**Target:** Remote teams and solo workers who need structured daily updates

---

## What This Does

Generates a concise daily standup report by analyzing your calendar, task list, and recent activity. Perfect for async teams or personal accountability.

---

## Execution Flow

### Step 1: Data Collection
**Trigger:** Run at 9 AM daily or on-demand

**Prompt:**
```
Gather information for today's standup:

1. Check calendar: What meetings/events are scheduled for today?
2. Review task list: What tasks are in progress or due today?
3. Check yesterday's notes: What was completed yesterday?

Compile this data:
YESTERDAY: [completed tasks/activities]
TODAY: [planned tasks/meetings]
BLOCKERS: [any known issues or dependencies]
```

**Decision Point:** If no data found → prompt user: "No calendar or tasks detected. Enter manual update or skip?"

---

### Step 2: Report Generation
**Prompt:**
```
Create a standup report using this format:

📅 STANDUP - [Date]

✅ YESTERDAY:
• [Completed item 1]
• [Completed item 2]
• [Completed item 3]

🎯 TODAY:
• [Planned item 1] (Priority: High/Medium/Low)
• [Planned item 2] (Priority: High/Medium/Low)
• [Planned item 3] (Priority: High/Medium/Low)

🚧 BLOCKERS:
• [Blocker 1] - Needs: [what's needed to unblock]
• [None] (if no blockers)

💬 NOTES:
[Any additional context, 1-2 sentences max]

Rules:
- Max 3 items per section
- Be specific (not "worked on project" but "completed API integration for user auth")
- Blockers must include what's needed to resolve
- Keep total report under 150 words
```

**Decision Point:** If >5 tasks planned for today → warn: "Today's plan looks overloaded. Prioritize top 3?"

---

### Step 3: Distribution
**Prompt:**
```
Prepare the standup report for distribution:

1. Format for Slack/Discord: Keep emoji and formatting
2. Format for email: Remove emoji, use plain text
3. Format for project management tool: Extract tasks as checklist

Which format do you need?
```

**Decision Point:** User selects distribution method. Default = Slack format.

---

## Quality Standards

✅ **Success Criteria:**
- Report generated in <60 seconds
- All items are specific and actionable
- Blockers clearly state what's needed
- Report is scannable (team can read in 30 seconds)

❌ **Failure Modes:**
- Vague items ("work on stuff")
- Missing blockers that actually exist
- Overloaded today section (>5 items)
- No connection between yesterday and today

---

## Upgrade Path

**→ Plus Tier:** Add team aggregation (compile multiple standups), trend analysis (track velocity), and automated blocker escalation.

**→ Pro Tier:** Predictive planning (suggest tomorrow's tasks based on patterns), cross-project dependency mapping, and executive summary for leadership.

---

## Usage Notes

- **First run:** Manually input yesterday's work to establish baseline
- **Integration:** Connect to Todoist, Asana, or Notion for automatic task pulling
- **Team use:** Each member runs individually, then compile into team digest
- **Customization:** Adjust priority levels (High/Medium/Low) to match your system
