---
id: BillingSetup
title: Billing Workflow
---

# Billing Workflow

The majority of the billing workflow is automated to ensure claims are created, scrubbed, and submitted to the clearinghouse seamlessly.

The Billing workflow happens primarily in the **Claims** app.

1. A [charge item](../Billing/ChargePeriods.md) is automatically created when an encounter service is created. The status of the charge item is set to "Scheduled". 
    - When the session is started in the Note app, the charge item is set to status "Awaiting Submission."
    - When the session is submitted in the Note app, the charge item is set to status "New."
2. A billing reviewer manually updates the status of the New charge item to 'Ready to Bill' after reviewing it. Charge items can be updated in bulk.
    - A billing reviewer also manually updates te status of Awaiting Resubmission charge items "Claim Line Created" after determining if the edits made to the session necessitate modifying and resubmitting the claim. Update charge item from "Awaiting Resubmission" to "Claim Line Created" and [modify and resubmit](../RCM/RCMworkflow.md/#correcting-claims) the claim based on the updates made to the session.
3. A [claim line](../Billing/ClaimItems.md) is automatically created from 'Ready to Bill' charge items, and the charge items' statuses are updated to 'Claim Line Created'.
    - Charge items with the same Patient, Start Date, End Date, Procedure Code, Auth Number, Place of Service, and Rendering Provider are grouped onto one claim line.
4. A [claim](../Billing/Claims.md) is automatically created for all 'Ready to Bill' charge periods on a weekly/monthly basis (based on the *Charge Period Frequency* on the [business unit](../AdminSetup/BusinessUnit.md)).
    - Claim lines with the same Patient, Auth Number, Rendering Provider, Place of Service, and Facility are grouped onto one Claim (not exceeding 50 claim lines per claim).
5. Claims and claim line statuses are automatically updated to 'Draft' if the claim does not pass all claim validations.
6. A billing reviewer can manually edit Draft claims and click 'Validate' to revalidate the claim that did not pass all claim validations.
7. Claims and claim line statuses are automatically updated to 'Ready to Submit' if the claim passes all claim validations. 
8. Claims and claim line statuses that are 'Ready to Submit' are automatically submitted to the clearinghouse and updated to 'Submitted' on an hourly basis. A [claims transaction](../RCM/Transactions.md) is automatically created.


