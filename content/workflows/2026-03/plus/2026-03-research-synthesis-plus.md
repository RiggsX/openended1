# Research Synthesis & Insight Engine

**Tier:** Plus  
**Version:** 1.0  
**Target:** Researchers, analysts, and strategists who need to process multiple sources into actionable insights

---

## What This Does

Takes 5-20 research sources (articles, papers, reports) and synthesizes them into a structured brief with key themes, conflicting viewpoints, and actionable recommendations.

---

## Execution Flow

### Step 1: Source Intake & Validation
**Trigger:** User provides URLs, PDFs, or text dumps

**Prompt:**
```
You are a research analyst. I'm providing multiple sources on [TOPIC].

First, validate each source:
1. Extract: Title, author, publication date, source type (academic/blog/news/report)
2. Assess credibility: [High/Medium/Low] based on author expertise, publication venue, citations
3. Identify bias: [Neutral/Pro-X/Anti-X/Commercial]
4. Note recency: Is this current (<1 year) or historical?

Output as a table:
| # | Title | Author | Date | Type | Credibility | Bias | Recency |

Flag any sources with Low credibility or Strong bias for user review.
```

**Decision Point:** If >30% of sources are Low credibility → warn: "Source quality is mixed. Proceed with caution or replace weak sources?"

---

### Step 2: Content Extraction & Tagging
**Prompt:**
```
For each validated source, extract:

1. **Main Argument:** What is the author's primary claim? (1 sentence)
2. **Supporting Evidence:** What data/examples support this? (2-3 bullet points)
3. **Key Insights:** What's novel or surprising? (1-2 points)
4. **Limitations:** What does the author acknowledge as gaps or weaknesses?
5. **Tags:** Assign 3-5 thematic tags (e.g., "cost-benefit", "user behavior", "regulatory")

Format:
---
SOURCE #[N]: [Title]
MAIN ARGUMENT: [sentence]
EVIDENCE:
• [point 1]
• [point 2]
INSIGHTS:
• [insight 1]
LIMITATIONS: [limitations]
TAGS: [tag1, tag2, tag3]
---

Process all sources now.
```

**Decision Point:** If sources have <50% tag overlap → note: "Sources cover diverse angles. Consider narrowing focus or splitting into sub-topics."

---

### Step 3: Theme Identification & Clustering
**Prompt:**
```
Analyze all extracted content. Identify 3-5 major themes that emerge across sources.

For each theme:
1. **Theme Name:** [descriptive label]
2. **Sources Supporting:** [list source numbers]
3. **Consensus View:** What do most sources agree on?
4. **Conflicting Views:** Where do sources disagree? (if any)
5. **Evidence Strength:** [Strong/Moderate/Weak] based on number of sources and quality

Output:
---
THEME 1: [Name]
Sources: #1, #3, #5
Consensus: [summary]
Conflicts: [summary or "None"]
Evidence: [Strong/Moderate/Weak]
---

Repeat for all themes.
```

**Decision Point:** If no clear themes emerge → prompt: "Sources are too scattered. Refine research question or add more focused sources?"

---

### Step 4: Synthesis & Insight Generation
**Prompt:**
```
Create a research synthesis document:

# Research Brief: [TOPIC]
**Date:** [Date] | **Sources Analyzed:** [N]

## Executive Summary
[3-4 sentences: What did you learn? What's the bottom line?]

## Key Themes

### Theme 1: [Name]
**What We Know:**
[2-3 paragraphs synthesizing consensus view with citations]

**What's Debated:**
[1-2 paragraphs on conflicting viewpoints, if any]

**Evidence Quality:** [Strong/Moderate/Weak]

[Repeat for each theme]

## Gaps & Unknowns
• [What questions remain unanswered?]
• [What data is missing?]
• [Where is more research needed?]

## Actionable Insights
1. **[Insight 1]:** [What should be done based on this research?]
   - Confidence: [High/Medium/Low]
   - Next Steps: [specific actions]

2. **[Insight 2]:** [What should be done based on this research?]
   - Confidence: [High/Medium/Low]
   - Next Steps: [specific actions]

[Repeat for 3-5 insights]

## Source List
[Numbered list with full citations]

---

Rules:
- Cite sources inline using [#N] notation
- Highlight conflicting views explicitly
- Insights must be actionable (not just "interesting")
- Total length: 1500-2500 words
```

**Decision Point:** User reviews synthesis. If insights are unclear → iterate with: "Which insight needs more detail or evidence?"

---

### Step 5: Visualization & Export
**Prompt:**
```
Generate supplementary materials:

1. **Theme Map:** Create a text-based diagram showing relationships between themes
2. **Evidence Matrix:** Table showing which sources support which themes
3. **Confidence Scorecard:** Rate each insight on Evidence/Feasibility/Impact (1-5 scale)

Format for easy copy-paste into presentations or reports.
```

---

## Quality Standards

✅ **Success Criteria:**
- All major themes identified with supporting evidence
- Conflicting viewpoints clearly articulated
- Insights are specific and actionable
- Synthesis is readable by non-experts
- Source citations are accurate

❌ **Failure Modes:**
- Cherry-picking sources to support a predetermined conclusion
- Missing major conflicting viewpoints
- Vague insights ("we should explore this more")
- Over-reliance on low-credibility sources
- Synthesis is too long (>3000 words)

---

## Upgrade Path

**→ Pro Tier:** Add automated source discovery (find related papers), longitudinal analysis (track how views change over time), and competitive intelligence integration.

---

## Usage Notes

- **Optimal source count:** 8-15 sources for balanced coverage
- **Source diversity:** Mix academic, industry, and practitioner perspectives
- **Iteration:** Run Step 4 multiple times to refine insights
- **Collaboration:** Share synthesis with domain experts for validation
