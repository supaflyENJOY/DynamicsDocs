---
id: BillingSetup
title: Billing Automation
---

# Billing Workflow

The majority of the billing workflow is automated to ensure claims are created, scrubbed, and submitted to the clearinghouse seamlessly.

The Billing workflow happens primarily in the Claims app.

1. A [charge item](../Billing/ChargePeriods.md) is automatically created when a practitioner submits a session in the Note app. 
2. A billing reviewer manually updates the status of the new charge item to 'Ready to Bill' after reviewing it. Charge items can be updated in bulk.
3. A [claim line](../Billing/ClaimItems.md) is automatically created, and the charge item status is updated to 'Claim Line Created'. 
4. [Claims](../Billing/Claims.md) are automatically created for all 'Ready to Bill' charge items on a monthly bases (or at a cadence set by your organization).
5. Claims and claim line statuses are automatically updated to 'Draft' if the claim does not pass all claim validations.
6. A billing reviewer can manually edit Draft claims and click 'Validate' to revalidate the claim that did not pass all claim validations.
7. Claims and claim line statuses are automatically updated to 'Ready to Submit' if the claim passes all claim validations. 
8. Claims and claim line statuses that are 'Ready to Submit' are automatically submitted to the clearing house and updated to 'Submitted' on an hourly bases.

