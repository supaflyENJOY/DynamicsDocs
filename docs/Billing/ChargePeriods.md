---
id: ChargePeriods
title: Charge Items
---
# Charge Items

When a session is submitted from the Note app, the status of the encounter service will change to 'Submitted', and a charge item will be created for the encounter service. The Charge Item is used to track all claims submitted to payers for reimbursement of its related encounter service. Charge items are grouped (by patient) into Charge Periods that cover a specific range of service dates – charge periods can be set up to span a weekly, bi-weekly, or monthly period, (or any other frequency,) according to the way your organization/billing cycle operates. 

- *Charge Period* - the charge period this charge item is included on.
- *Encounter Service* - the [encounter service](../Scheduling/SingleEncounters.md/#encounter-services) this charge item was created for. Relevant fields from the encounter service display below it:
    - *Authorization Service*
    - *Assignment*
    - *Encounter Patient*
    - *Practitioner Participant*
    - *Start Time*
    - *End Time* 
    - *Duration*
- *Modifiers* - any billing [modifiers](../AdminSetup/FeeSchedules.md/#modifiers) included on the encounter service are displayed. Additional modifiers can be entered here.
- *Billable Units* - the amount of billable units, based on the duration of the encounter service and the duration of a billable unit for that service (as configured on the [insurance plan benefit](../AdminSetup/InsurancePlan.md/#insurance-plan-benefits)).
- *Coverage* - the patient's [coverage](../Patients/Coverages.md).

### Charge Item Statuses

When reviewing charge items, you can easily view the status of the charge items to identify what needs to be done for each charge item:

- Charge items are created with status **New**.
- Charge items that are fit to be included on Claims should be marked as **Ready to Bill** by the biller who reviewed them.
- Charge items can be marked as **On Hold** to indicate that they should not be billed yet (e.g., if they are waiting on remaining sessions in conducted in that charge period to be submitted).
- Charge items that are included on a claim already are at status **Claim Line Created**

To update the status of charge items:

1. Select the charge items you'd like to update on the charge items subgrid on a charge period.
2. Click 'Set Status'
3. Choose a Status: the only statuses available to manually update charge items to are 'On Hold' and 'Ready to Bill'. Charge items cannot be set to 'Ready to Bill' if the encounter service was not yet submitted. 

At the frequency your organization chooses, the system will take all 'Ready to Bill' charge items and include them as [claim lines](../Billing/Claims.md/#claim-lines) on claims.

## Charge Periods

Charge periods are containers for all the charge items for a specific patient during the period for which you are submitting a claim.

For example, if your organization submits claims on a monthly basis, a charge period will be created per month per patient, and all charge items for that patient that month will be related to that charge period.

The charge period frequency can be configured as either weekly or monthly on a [business unit](../AdminSetup/BusinessUnit.md).

**Charges Information**
- *Patient* - the patient services were provided to.
- *Birthday* - the patient's birthday, as set on the [patient](../Patients/Overview.md) record.

**Coverages**
View the patient's [coverages](../Patients/Coverages.md) here.

**Charge Items**
View the charge items for this charge period here.

### Charge Period Statuses
When reviewing charge periods, you can easily view the status of the charge periods to identify what needs to be done with the charge items they contain:

- **New** - Charge periods that include any 'new' charge items.
- **Blocked** - Charge periods that include any 'on hold' charge items (and no 'new' charge items), or charge periods that don't include any charge items.
- **Ready to Bill** - Charge periods that include any 'ready to bill charge items (and no 'new' or 'on hold' charge items).
- **Claim Created** - Charge periods where all charge items are at status 'Claim Line Created'.

There are 4 views configured for easy access to viewing charge periods based on their status:
1. All Charge Periods
2. New Charge Periods
3. Ready to Bill Charge Periods
4. Aging Blocked Charge Periods


