# Budget Planning & Expense Tracking

**Tier:** Core  
**Version:** 1.0  
**Target:** Anyone who wants to take control of their personal finances

---

## What This Does

A simple system for creating a realistic budget, tracking expenses, and making informed financial decisions. No complex spreadsheets required.

---

## Execution Flow

### Step 1: Financial Snapshot
**Trigger:** Beginning of month or when you want to start budgeting

**Prompt:**
```
Take a snapshot of your current finances:

## Income
**Monthly take-home pay:** $[Amount after taxes]
**Other income:** $[Side gigs, investments, etc.]
**Total monthly income:** $[Total]

---

## Fixed Expenses (Same every month)
- Rent/Mortgage: $[Amount]
- Utilities: $[Amount]
- Insurance: $[Amount]
- Loan payments: $[Amount]
- Subscriptions: $[Amount]
- Other: $[Amount]

**Total fixed expenses:** $[Total]

---

## Variable Expenses (Changes each month)
**Last 3 months average:**
- Groceries: $[Amount]
- Dining out: $[Amount]
- Transportation: $[Amount]
- Entertainment: $[Amount]
- Shopping: $[Amount]
- Personal care: $[Amount]
- Other: $[Amount]

**Total variable expenses:** $[Total]

---

## Current Financial Status
**Total income:** $[Amount]
**Total expenses:** $[Amount]
**Difference:** $[Income - Expenses]

**Status:**
- [ ] Surplus (income > expenses) ✅
- [ ] Break-even (income = expenses) ⚠️
- [ ] Deficit (income < expenses) ❌

**Savings:**
- Emergency fund: $[Amount]
- Other savings: $[Amount]
- Investments: $[Amount]

**Debt:**
- Credit cards: $[Amount]
- Student loans: $[Amount]
- Other debt: $[Amount]
```

**Decision Point:** If you're in deficit → immediate action needed to cut expenses or increase income.

---

### Step 2: Set Financial Goals
**Prompt:**
```
Define your financial goals:

## Short-Term Goals (1-12 months)
1. [Goal 1: e.g., "Build $1000 emergency fund"]
   - Target amount: $[Amount]
   - Target date: [Date]
   - Monthly savings needed: $[Amount]

2. [Goal 2: e.g., "Pay off credit card"]
   - Target amount: $[Amount]
   - Target date: [Date]
   - Monthly payment needed: $[Amount]

---

## Medium-Term Goals (1-5 years)
1. [Goal 1: e.g., "Save for down payment"]
   - Target amount: $[Amount]
   - Target date: [Date]
   - Monthly savings needed: $[Amount]

---

## Long-Term Goals (5+ years)
1. [Goal 1: e.g., "Retirement savings"]
   - Target amount: $[Amount]
   - Target date: [Date]
   - Monthly savings needed: $[Amount]

---

## Priority Ranking
1. [Highest priority goal]
2. [Second priority]
3. [Third priority]

**Total monthly savings needed:** $[Sum of all goals]
```

---

### Step 3: Create Your Budget
**Prompt:**
```
Create a realistic monthly budget:

# Monthly Budget - [Month, Year]

## Income
- Take-home pay: $[Amount]
- Other income: $[Amount]
**Total income:** $[Amount]

---

## Expenses

### Fixed (Must-Pay)
- Housing: $[Amount] ([%] of income)
- Utilities: $[Amount] ([%] of income)
- Insurance: $[Amount] ([%] of income)
- Debt payments: $[Amount] ([%] of income)
- Subscriptions: $[Amount] ([%] of income)
**Total fixed:** $[Amount] ([%] of income)

### Variable (Flexible)
- Groceries: $[Budget] ([%] of income)
- Dining out: $[Budget] ([%] of income)
- Transportation: $[Budget] ([%] of income)
- Entertainment: $[Budget] ([%] of income)
- Shopping: $[Budget] ([%] of income)
- Personal care: $[Budget] ([%] of income)
**Total variable:** $[Amount] ([%] of income)

### Savings & Goals
- Emergency fund: $[Amount] ([%] of income)
- Goal 1: $[Amount] ([%] of income)
- Goal 2: $[Amount] ([%] of income)
- Retirement: $[Amount] ([%] of income)
**Total savings:** $[Amount] ([%] of income)

---

## Budget Summary
- Total income: $[Amount]
- Total expenses: $[Amount]
- Total savings: $[Amount]
- **Remaining:** $[Amount]

**Budget balance:** [Balanced/Surplus/Deficit]

---

## Budget Guidelines (50/30/20 Rule)
- 50% Needs (fixed expenses): $[Amount] - Actual: [%]
- 30% Wants (variable expenses): $[Amount] - Actual: [%]
- 20% Savings: $[Amount] - Actual: [%]

**Are you within guidelines?** [Yes/No]
**If no:** [What needs to adjust?]
```

**Decision Point:** If budget doesn't balance → either cut expenses or find ways to increase income.

---

### Step 4: Track Daily Expenses
**Prompt:**
```
Track expenses daily (takes 2 minutes):

# Daily Expense Log - [Date]

**Morning:**
- [Time]: [Item] - $[Amount] - Category: [Category]
- [Time]: [Item] - $[Amount] - Category: [Category]

**Afternoon:**
- [Time]: [Item] - $[Amount] - Category: [Category]

**Evening:**
- [Time]: [Item] - $[Amount] - Category: [Category]

**Daily total:** $[Amount]

**Budget check:**
- Groceries: $[Spent today] / $[Monthly budget] remaining
- Dining out: $[Spent today] / $[Monthly budget] remaining
- Entertainment: $[Spent today] / $[Monthly budget] remaining

**Status:** [On track / Over budget / Under budget]

---

## Tracking Methods

**Option 1: Manual (Notebook/Spreadsheet)**
- Write down every expense
- Categorize at end of day
- Total weekly

**Option 2: App (Mint, YNAB, EveryDollar)**
- Link bank accounts
- Auto-categorize transactions
- Real-time budget tracking

**Option 3: Envelope System (Cash)**
- Withdraw cash for each category
- Put in labeled envelopes
- When envelope is empty, stop spending

**Choose method:** [What works for you?]
```

---

### Step 5: Weekly Review
**Prompt:**
```
Review your spending weekly:

# Weekly Budget Review - Week of [Date]

## Spending by Category

**Groceries:**
- Budgeted: $[Amount]
- Spent: $[Amount]
- Remaining: $[Amount]
- Status: [On track / Over / Under]

**Dining Out:**
- Budgeted: $[Amount]
- Spent: $[Amount]
- Remaining: $[Amount]
- Status: [On track / Over / Under]

**Entertainment:**
- Budgeted: $[Amount]
- Spent: $[Amount]
- Remaining: $[Amount]
- Status: [On track / Over / Under]

[Repeat for all categories]

---

## This Week's Insights

**Biggest expense:** [Item] - $[Amount]
**Surprise expense:** [Item] - $[Amount]
**Money saved:** [How] - $[Amount]

**Overspending categories:**
- [Category 1]: Over by $[Amount]
- [Category 2]: Over by $[Amount]

**Underspending categories:**
- [Category 1]: Under by $[Amount]
- [Category 2]: Under by $[Amount]

---

## Adjustments for Next Week

**Cut back on:**
- [Category]: Reduce by $[Amount]
- [Strategy]: [How you'll cut back]

**Reallocate:**
- Move $[Amount] from [Category] to [Category]

**Watch out for:**
- [Upcoming expense or temptation]
```

---

### Step 6: Monthly Review
**Prompt:**
```
Review your budget monthly:

# Monthly Budget Review - [Month, Year]

## Budget vs. Actual

| Category | Budgeted | Actual | Difference | % of Budget |
|----------|----------|--------|------------|-------------|
| Housing | $[Amount] | $[Amount] | $[+/-] | [%] |
| Groceries | $[Amount] | $[Amount] | $[+/-] | [%] |
| Dining Out | $[Amount] | $[Amount] | $[+/-] | [%] |
| Transportation | $[Amount] | $[Amount] | $[+/-] | [%] |
| Entertainment | $[Amount] | $[Amount] | $[+/-] | [%] |
| Shopping | $[Amount] | $[Amount] | $[+/-] | [%] |
| Savings | $[Amount] | $[Amount] | $[+/-] | [%] |

**Total:** $[Budgeted] | $[Actual] | $[Difference]

---

## Financial Health Check

**Savings rate:** [%] (Savings / Income)
- Target: 20%
- Status: [On track / Below target / Above target]

**Emergency fund:** $[Current balance]
- Target: [3-6 months of expenses]
- Status: [% of target]

**Debt paydown:** $[Amount paid this month]
- Target: $[Amount]
- Status: [On track / Behind / Ahead]

---

## Wins This Month
1. [Win 1: e.g., "Stayed under dining out budget"]
2. [Win 2: e.g., "Saved $200 extra"]
3. [Win 3: e.g., "Paid off credit card"]

## Challenges This Month
1. [Challenge 1: e.g., "Overspent on shopping"]
2. [Challenge 2: e.g., "Unexpected car repair"]

## Lessons Learned
- [Lesson 1]
- [Lesson 2]

---

## Next Month's Budget Adjustments

**Increase budget for:**
- [Category]: From $[Old] to $[New]
- Reason: [Why]

**Decrease budget for:**
- [Category]: From $[Old] to $[New]
- Reason: [Why]

**New goals:**
- [Goal]: Save $[Amount]

**Subscriptions to cancel:**
- [Subscription 1]: Save $[Amount]/month
- [Subscription 2]: Save $[Amount]/month
```

---

## Quality Standards

✅ **Success Criteria:**
- Budget is realistic (based on actual spending)
- Expenses tracked 90%+ of days
- Savings rate is 10%+ of income
- Emergency fund is growing
- Debt is decreasing (if applicable)
- You feel in control of your money

❌ **Failure Modes:**
- Budget is too restrictive (unsustainable)
- Not tracking expenses (flying blind)
- No emergency fund (vulnerable to shocks)
- Lifestyle inflation (spending increases with income)
- Ignoring small expenses (death by a thousand cuts)
- No financial goals (no direction)

---

## Upgrade Path

**→ Plus Tier:** Add investment planning, debt payoff strategies, tax optimization, and financial goal modeling.

**→ Pro Tier:** Add comprehensive financial planning, retirement planning, wealth building strategies, and CFP consultation.

---

## Usage Notes

- **Start simple:** Don't overcomplicate with too many categories
- **Be honest:** Track everything, even small purchases
- **Be flexible:** Adjust budget as life changes
- **Automate savings:** Pay yourself first (auto-transfer to savings)
- **Review regularly:** Weekly check-ins prevent big surprises
- **Celebrate progress:** Acknowledge financial wins, no matter how small
