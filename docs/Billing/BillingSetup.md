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


## Duplicate Billing Report

Billers can review a "Duplicates Report" to understand which new/ready to bill charge items have "duplicate charge items" (i.e., for the same patient, date of service, and service code) that are still awaiting submission.

This gives billers visibility to sessions that will be grouped together on a claim once all are submitted, and should therefore not be billed yet, as they may face denials if billed on separate claims.

**How to export a Duplicates Report:**

1. In the Claims App, in the Billing area, go to "Charge Items" on the sitemap to open the Charge Items view.
2. Click "Export Duplicate Report" on the ribbon.
3. Select a start date and end date within which you'd like to check for sessions that would be grouped together on claims once submitted.
4. Click export. The excel export will include all session details as well as links to the encounter services.


## Billing Export

If your organization uses an external billing system, when you are ready to bill for the charge items in a charge period, generate a billing export to upload to your billing system.

1. On the Charge Items Main Grid, select the Ready to Bill charge item(s) you'd like to generate a report for.
2. Click "Billing Export" on the ribbon.
3. An excel file will be generated with the following columns:
    - Practitioner First and Last Name
    - Employee ID
    - Contract Type (salary or hourly based on [practitioner contract](../Payroll/Contracts.md))
    - Salary (for practitioners with salary contracts)
    - Payroll Period 
    - Default Rate (hourly rate for practitioners with hourly contracts)
    - Actual Rate (rate on the payroll item, based on [payroll fee schedules](../AdminSetup/FeeSchedules.md/#payroll-fee-schedules))
    - Regular Hours (total hours on all payroll items for this practitioner and this rate)
    - Regular Pay (calculated pay amount for this practitioner and this rate)
    - Non-billable Hours (total hours on all payroll items for [non-billable services](../AdminSetup/HealthcareService.md) for this practitioner and this rate)
    - Non-billable Pay (calculated pay amount for this practitioner and this rate)
    - Reimbursements (calculated pay amount for reimbursement payroll items)
4. You will be prompted whether you'd like to mark the exported charge items as "billed externally" to track that these charge items have been exported for billing through an external system.