# Personal Knowledge Base Builder

**Tier:** Core  
**Version:** 1.0  
**Target:** Knowledge workers who consume lots of content and want to retain and connect ideas

---

## What This Does

Transforms scattered notes, articles, and highlights into a structured personal knowledge base with interconnected concepts. Think of it as building your "second brain."

---

## Execution Flow

### Step 1: Content Capture
**Trigger:** You've read/watched something valuable

**Prompt:**
```
Capture the key information from this content:

[PASTE: Article, video transcript, book notes, or your raw notes]

Extract:
**Source:** [Title, author, URL]
**Date:** [When you consumed this]
**Type:** [Article/Book/Video/Podcast/Course]
**Topic:** [Main subject]

**Key Ideas (3-5 max):**
1. [Idea 1 in your own words]
2. [Idea 2 in your own words]
3. [Idea 3 in your own words]

**Best Quotes (1-3):**
- "[Quote 1]"
- "[Quote 2]"

**Personal Insights:**
[What did this make you think? How does it connect to what you already know?]

**Actionable Takeaways:**
- [Action 1: Something you'll do differently]
- [Action 2: Something you'll try]

**Tags:** [3-5 keywords for finding this later]
```

**Decision Point:** If content is >5000 words → break into multiple notes by section.

---

### Step 2: Concept Extraction
**Prompt:**
```
Identify the core concepts in this note:

[PASTE YOUR NOTE FROM STEP 1]

For each key idea, extract the underlying concept:

**Concept 1:** [Name, e.g., "Compound Interest"]
- Definition: [What is this concept?]
- Related to: [Other concepts this connects to]
- Examples: [Real-world applications]

**Concept 2:** [Name]
- Definition: [What is this concept?]
- Related to: [Other concepts this connects to]
- Examples: [Real-world applications]

---

These concepts become nodes in your knowledge graph.
```

---

### Step 3: Connection Mapping
**Prompt:**
```
Connect this new note to your existing knowledge:

**New Note:** [Title/Topic]

**Connections to Existing Notes:**

**Strong Connection (directly related):**
- [Existing note 1]: [How they connect]
- [Existing note 2]: [How they connect]

**Weak Connection (tangentially related):**
- [Existing note 3]: [How they connect]

**Contradicts:**
- [Existing note 4]: [How they disagree]

**Builds On:**
- [Existing note 5]: [How this extends that idea]

**New Insights from Connections:**
[What do you see when you connect these ideas?]

---

If you don't have existing notes yet, skip this step for now. Connections will emerge over time.
```

**Decision Point:** If >5 strong connections → this is a "hub" concept. Consider creating a dedicated concept page.

---

### Step 4: Note Formatting
**Prompt:**
```
Format the note for your knowledge base:

# [Title]

**Source:** [Citation]  
**Date:** [Date]  
**Tags:** #[tag1] #[tag2] #[tag3]

---

## Summary
[2-3 sentence overview of the content]

## Key Ideas

### [Idea 1]
[Explanation in your own words]

**Example:** [Concrete example]

### [Idea 2]
[Explanation in your own words]

**Example:** [Concrete example]

## Quotes
> "[Quote 1]"

> "[Quote 2]"

## My Thoughts
[Your personal insights and reactions]

## Connections
- [[Related Note 1]] - [How they connect]
- [[Related Note 2]] - [How they connect]

## Action Items
- [ ] [Action 1]
- [ ] [Action 2]

---

**Last Updated:** [Date]
```

---

### Step 5: Concept Page Creation (for recurring concepts)
**Prompt:**
```
When a concept appears in 3+ notes, create a dedicated concept page:

# Concept: [Name]

## Definition
[Clear, concise definition in your own words]

## Why It Matters
[Why is this concept important or useful?]

## Key Principles
1. [Principle 1]
2. [Principle 2]
3. [Principle 3]

## Examples
- [Example 1: Real-world application]
- [Example 2: Real-world application]
- [Example 3: Real-world application]

## Related Concepts
- [[Concept 1]] - [Relationship]
- [[Concept 2]] - [Relationship]

## Sources
- [[Note 1]] - [What it says about this concept]
- [[Note 2]] - [What it says about this concept]
- [[Note 3]] - [What it says about this concept]

## My Understanding
[Your synthesis of this concept across all sources]

## Open Questions
- [Question 1: What you're still unclear about]
- [Question 2: What you want to explore further]

---

**Last Updated:** [Date]
```

---

### Step 6: Weekly Review & Maintenance
**Prompt:**
```
Review your knowledge base weekly:

**This Week's Additions:**
- [Note 1]
- [Note 2]
- [Note 3]

**Emerging Patterns:**
[What themes or concepts are showing up repeatedly?]

**Orphan Notes (no connections):**
- [Note 1] - Action: [Connect to X or delete?]
- [Note 2] - Action: [Connect to X or delete?]

**Stale Notes (>6 months old, no updates):**
- [Note 1] - Action: [Still relevant? Update or archive?]

**Concept Pages to Create:**
[Which concepts have appeared 3+ times this month?]

**Insights from Connections:**
[What new understanding emerged from connecting ideas?]

**Next Week's Focus:**
[What topic or concept do you want to explore deeper?]

---

Spend 15-30 minutes on this review every Sunday.
```

---

## Quality Standards

✅ **Success Criteria:**
- Notes are in your own words (not copy-paste)
- Each note has 3-5 connections to other notes
- Concept pages exist for recurring ideas
- You can find any note within 30 seconds
- Weekly review is completed consistently
- Knowledge base helps you think, not just store

❌ **Failure Modes:**
- Copy-pasting without understanding
- No connections (just a pile of isolated notes)
- Over-organizing (spending more time organizing than learning)
- Hoarding (saving everything, reading nothing)
- No review (notes go stale and forgotten)

---

## Upgrade Path

**→ Plus Tier:** Add spaced repetition for key concepts, automated connection suggestions, and visual knowledge graphs.

**→ Pro Tier:** AI-powered insight generation, cross-domain pattern recognition, and personalized learning paths based on your knowledge gaps.

---

## Usage Notes

- **Tools:** Obsidian, Roam Research, Notion, or plain Markdown files
- **Frequency:** Capture daily, review weekly, refactor monthly
- **Start small:** Begin with 10-20 notes, let the system grow organically
- **Quality over quantity:** Better to have 50 well-connected notes than 500 isolated ones
- **Make it yours:** Adapt the format to match how you think
