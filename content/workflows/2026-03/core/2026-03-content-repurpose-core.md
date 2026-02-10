# Content Repurposing Engine

**Tier:** Core  
**Version:** 1.0  
**Target:** Content creators who need to maximize reach across platforms

---

## What This Does

Takes one piece of long-form content (blog post, video script, podcast transcript) and generates platform-specific versions for Twitter, LinkedIn, Instagram, and email newsletters.

---

## Execution Flow

### Step 1: Source Analysis
**Trigger:** User provides URL or pastes content

**Prompt:**
```
Analyze this content:

[PASTE CONTENT HERE]

Extract:
1. Core message (1 sentence)
2. Key insights (3-5 bullet points)
3. Best quotes (2-3 memorable lines)
4. Target audience
5. Tone (professional/casual/educational/inspirational)

Output in this format:
CORE MESSAGE: [sentence]
INSIGHTS:
• [insight 1]
• [insight 2]
KEY QUOTES:
- "[quote 1]"
- "[quote 2]"
AUDIENCE: [description]
TONE: [tone]
```

**Decision Point:** If content is <300 words → warn user: "Source content is short. Repurposing may result in repetitive posts."

---

### Step 2: Platform-Specific Generation

**Prompt for Twitter Thread:**
```
Create a Twitter thread (5-7 tweets) based on the core message and insights.

Rules:
- Tweet 1: Hook (question or bold statement)
- Tweets 2-5: One insight per tweet, expanded with context
- Tweet 6: Key quote
- Tweet 7: CTA (comment, share, or link)
- Max 280 chars per tweet
- Use line breaks for readability
- Add relevant emoji (1-2 per tweet)

Format:
1/ [tweet]
2/ [tweet]
...
```

**Prompt for LinkedIn Post:**
```
Create a LinkedIn post (150-200 words) based on the core message.

Structure:
- Opening: Personal story or question (2 sentences)
- Body: Expand on 2-3 key insights with examples
- Closing: Actionable takeaway + question for engagement
- Tone: Professional but conversational
- Add 3-5 relevant hashtags at the end

Format as a single post ready to copy-paste.
```

**Prompt for Instagram Caption:**
```
Create an Instagram caption (100-150 words) based on the core message.

Structure:
- Hook: First line must grab attention (use emoji)
- Body: Tell a micro-story or share the main insight
- CTA: Ask a question or prompt action
- Hashtags: 10-15 relevant tags (mix of popular and niche)
- Tone: Casual, visual, inspiring

Format:
[Caption text]

[Hashtags]
```

**Prompt for Email Newsletter Snippet:**
```
Create a newsletter section (200-250 words) based on the core message.

Structure:
- Subject line suggestion
- Opening: "This week I learned..." or similar
- Body: Expand on the core message with personal context
- Closing: Link to full content + one-line teaser
- Tone: Conversational, like writing to a friend

Format:
SUBJECT: [subject line]

[Email body]
```

**Decision Point:** User selects which platforms to generate. Default = all four.

---

### Step 3: Review & Customize
**Prompt:**
```
Review all generated content. Check:
- Does each version maintain the core message?
- Are platform-specific best practices followed? (character limits, hashtags, CTAs)
- Is the tone consistent with the source?

Flag any issues and suggest edits.
```

---

## Quality Standards

✅ **Success Criteria:**
- Each platform version feels native (not copy-paste)
- Core message is preserved across all formats
- CTAs are clear and platform-appropriate
- Generated content requires <2 minutes of editing per platform

❌ **Failure Modes:**
- Generic content that could be on any platform
- Losing the original message in translation
- Hashtags or formatting that don't match platform norms

---

## Upgrade Path

**→ Plus Tier:** Add video script generation, carousel post designs (text for slides), and A/B testing suggestions for headlines.

**→ Pro Tier:** Multi-content batching (process 10 posts at once), brand voice customization, and performance prediction based on historical data.

---

## Usage Notes

- **Best source content:** 800-2000 word blog posts or 10-20 min video transcripts
- **Customization:** Edit the tone prompts to match your brand voice
- **Scheduling:** Pair with a social media scheduler for automated posting
