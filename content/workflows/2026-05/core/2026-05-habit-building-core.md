# Habit Building & Tracking System

**Tier:** Core  
**Version:** 1.0  
**Target:** Anyone who wants to build new habits or break bad ones

---

## What This Does

A simple, science-backed system for building habits that stick. Uses proven techniques like habit stacking, implementation intentions, and progress tracking.

---

## Execution Flow

### Step 1: Choose Your Habit
**Trigger:** You want to build a new habit

**Prompt:**
```
Define the habit you want to build:

**Habit:** [What do you want to do?]
Example: "Exercise for 20 minutes", "Write 500 words", "Meditate for 10 minutes"

**Why this habit?**
[What will this give you? How will your life improve?]

**Current state:**
- How often do you do this now? [Frequency]
- What's stopping you? [Barriers]

**Target state:**
- How often do you want to do this? [Frequency]
- By when? [Timeline]

**Habit size check:**
- [ ] Tiny (2 minutes or less) - Easiest to start
- [ ] Small (5-15 minutes) - Moderate difficulty
- [ ] Medium (15-30 minutes) - Requires commitment
- [ ] Large (30+ minutes) - Hardest to sustain

**If Medium or Large:** Can you break this into a smaller habit to start?
Example: "Exercise 60 min" → Start with "Exercise 10 min"
```

**Decision Point:** If habit is too big → start with a tiny version. You can always scale up later.

---

### Step 2: Design Your Habit
**Prompt:**
```
Make your habit specific and actionable:

## Implementation Intention
"I will [BEHAVIOR] at [TIME] in [LOCATION]"

Example: "I will do 10 push-ups at 7:00 AM in my bedroom"

**Your implementation intention:**
"I will [___] at [___] in [___]"

---

## Habit Stacking
Attach your new habit to an existing habit:
"After I [EXISTING HABIT], I will [NEW HABIT]"

Example: "After I pour my morning coffee, I will meditate for 5 minutes"

**Your habit stack:**
"After I [___], I will [___]"

---

## Make It Obvious (Cue)
How will you remember to do this?

**Visual cues:**
- [ ] Put equipment in plain sight (yoga mat, running shoes)
- [ ] Set phone reminder
- [ ] Post sticky note
- [ ] Calendar block
- [ ] Other: [Your idea]

**Your cue:** [What will trigger this habit?]

---

## Make It Easy (Reduce Friction)
How can you make this habit easier to start?

**Reduce friction:**
- [ ] Prepare the night before (lay out workout clothes)
- [ ] Reduce steps (keep journal on nightstand)
- [ ] Start tiny (just 2 minutes)
- [ ] Remove obstacles (delete distracting apps)
- [ ] Other: [Your idea]

**Your friction reducer:** [What will you do?]

---

## Make It Attractive (Motivation)
How can you make this habit more appealing?

**Temptation bundling:**
"I will [HABIT] while [ENJOYABLE ACTIVITY]"
Example: "I will walk on treadmill while watching my favorite show"

**Your temptation bundle:** [What will you pair this with?]

**Reward:**
After completing the habit, give yourself a small reward
Example: Check off habit tracker, enjoy a treat, share progress

**Your reward:** [What will you give yourself?]

---

## Make It Satisfying (Reinforcement)
How will you track and celebrate progress?

**Tracking method:**
- [ ] Habit tracker app (Streaks, Habitica)
- [ ] Paper calendar (X marks the day)
- [ ] Spreadsheet
- [ ] Journal
- [ ] Other: [Your method]

**Celebration:**
How will you celebrate milestones?
- 7 days: [Small reward]
- 30 days: [Medium reward]
- 90 days: [Big reward]
```

---

### Step 3: Anticipate Obstacles
**Prompt:**
```
Plan for obstacles:

## Likely Obstacles
What might prevent you from doing this habit?

**Obstacle 1:** [What might go wrong?]
- If-then plan: "If [obstacle], then I will [backup plan]"
- Example: "If it's raining, then I will do an indoor workout video"

**Obstacle 2:** [What might go wrong?]
- If-then plan: "If [obstacle], then I will [backup plan]"

**Obstacle 3:** [What might go wrong?]
- If-then plan: "If [obstacle], then I will [backup plan]"

---

## Missing a Day
What will you do if you miss a day?

**Never miss twice rule:**
Missing once is an accident. Missing twice is the start of a new (bad) habit.

**Your recovery plan:**
"If I miss a day, I will [specific action to get back on track]"
Example: "If I miss a day, I will do a 2-minute version the next day no matter what"

---

## Low Motivation Days
What will you do when you don't feel like it?

**Minimum viable habit:**
What's the smallest version you can do?
Example: If full workout feels impossible, do 1 push-up

**Your minimum:** [Smallest version of this habit]

**Motivation reminder:**
Why did you start this? (Write it down and read it when motivation is low)
[Your why]
```

---

### Step 4: Track Your Progress
**Prompt:**
```
Set up tracking system:

# Habit Tracker: [Habit Name]

**Start Date:** [Date]
**Target Frequency:** [Daily/X times per week]
**Current Streak:** [Days]
**Longest Streak:** [Days]

---

## Weekly Tracker

**Week 1:**
- Mon: [ ] - Notes: [How it went]
- Tue: [ ] - Notes: [How it went]
- Wed: [ ] - Notes: [How it went]
- Thu: [ ] - Notes: [How it went]
- Fri: [ ] - Notes: [How it went]
- Sat: [ ] - Notes: [How it went]
- Sun: [ ] - Notes: [How it went]

**Week 1 Reflection:**
- Days completed: [X/7]
- What worked: [Observation]
- What was hard: [Challenge]
- Adjustment for next week: [Change]

---

## Monthly Review

**Month 1:**
- Total days completed: [X/30]
- Completion rate: [%]
- Longest streak: [Days]
- How I feel: [Better/Same/Worse]
- What I learned: [Insight]
- Continue/Adjust/Stop: [Decision]

---

## Milestones

**7 Days:** [Date achieved] ✓
**14 Days:** [Date achieved] ✓
**21 Days:** [Date achieved] ✓
**30 Days:** [Date achieved] ✓
**60 Days:** [Date achieved] ✓
**90 Days:** [Date achieved] ✓

**At 90 days:** This habit should feel automatic. If not, reassess your approach.
```

---

### Step 5: Weekly Check-In
**Prompt:**
```
Review your habit weekly:

# Weekly Habit Check-In - Week of [Date]

**Habit:** [Name]
**Days completed:** [X/7]
**Current streak:** [Days]

---

## What Went Well
- [Success 1]
- [Success 2]

## What Was Challenging
- [Challenge 1]
- [Challenge 2]

## Patterns I Notice
- [Pattern 1: e.g., "Easier to do in morning than evening"]
- [Pattern 2: e.g., "Harder on weekends"]

## Adjustments for Next Week
- [Adjustment 1: e.g., "Set alarm 10 min earlier"]
- [Adjustment 2: e.g., "Prepare equipment night before"]

---

## Motivation Check
**How motivated am I?** [1-10]

**If <5:** 
- Revisit your "why"
- Make habit smaller
- Add more rewards
- Find an accountability partner

**If >7:**
- Consider scaling up
- Add a related habit
- Help someone else build this habit
```

---

### Step 6: Troubleshooting
**Prompt:**
```
If your habit isn't sticking, diagnose the issue:

## Troubleshooting Checklist

**Problem: I keep forgetting to do it**
- [ ] Add more obvious cues (visual reminders)
- [ ] Use habit stacking (attach to existing habit)
- [ ] Set phone alarm
- [ ] Tell someone who will remind you

**Problem: I don't have time**
- [ ] Make habit smaller (2-minute version)
- [ ] Do it first thing in morning (before day gets busy)
- [ ] Remove something else (what can you stop doing?)
- [ ] Combine with existing activity (temptation bundling)

**Problem: I'm not motivated**
- [ ] Reconnect with your "why"
- [ ] Make it more enjoyable (add music, do with friend)
- [ ] Increase rewards
- [ ] Track progress visually (seeing progress motivates)
- [ ] Join a community (social accountability)

**Problem: It's too hard**
- [ ] Start smaller (much smaller)
- [ ] Remove friction (make it easier to start)
- [ ] Get help (coach, trainer, mentor)
- [ ] Change the habit (maybe this isn't the right one)

**Problem: I keep missing days**
- [ ] Apply "never miss twice" rule
- [ ] Have a backup plan for obstacles
- [ ] Lower the bar (minimum viable habit)
- [ ] Get an accountability partner

**Problem: I'm bored**
- [ ] Add variety (different exercises, locations)
- [ ] Track different metrics (not just completion)
- [ ] Set new challenges (increase difficulty)
- [ ] Find a community (make it social)

---

## When to Pivot
Sometimes a habit just isn't working. It's OK to change course.

**Consider stopping if:**
- You've tried for 30 days with <50% completion
- The habit doesn't align with your values anymore
- You've found a better alternative
- It's causing more stress than benefit

**Before you quit:**
- Try making it 50% smaller
- Try a different time of day
- Try a different approach
- Ask: "Is this the right habit for my goal?"
```

---

## Quality Standards

✅ **Success Criteria:**
- Habit is specific and measurable
- You complete it 80%+ of target days
- Habit feels easier after 30 days
- You have a tracking system you actually use
- You have backup plans for obstacles
- You celebrate milestones

❌ **Failure Modes:**
- Habit is too vague ("be healthier")
- Starting too big (burnout)
- No tracking (can't see progress)
- All-or-nothing thinking (one miss = failure)
- No plan for obstacles
- Relying only on motivation (not systems)

---

## Upgrade Path

**→ Plus Tier:** Add habit stacking frameworks for multiple habits, advanced tracking analytics, and accountability partnerships.

**→ Pro Tier:** Add personalized habit coaching, behavioral psychology insights, and custom habit design for complex goals.

---

## Usage Notes

- **Start small:** Better to do 2 minutes daily than 60 minutes once
- **One at a time:** Focus on one habit until it's automatic (30-90 days)
- **Be patient:** Habits take time. Don't expect overnight change
- **Track everything:** What gets measured gets managed
- **Forgive yourself:** Missing a day doesn't mean failure
- **Celebrate wins:** Acknowledge progress, even small wins
