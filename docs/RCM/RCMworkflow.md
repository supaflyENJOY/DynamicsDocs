--- 
id: RCMworkflow
title: RCM Workflow
---

# Remits Workflow

The Remits workflow happens primarily in the **RCM** app.

1. A [transaction](../RCM/Transactions.md) is received from the clearinghouse to your financial dimension. 
    - The transaction can include one [payment](../RCM/Payment.md) from one payer, or multiple payments from multiple payers.
    - Each payment from a payer can include a [remit](../RCM/Remits.md) (claim payment) for a single claim, or multiple remits (claim payments) for multiple claims. 
2. A [payment](../RCM/Payments.md) is automatically created when a payment comes into your clearinghouse. The payment is automatically posted to the claim it was paid against. The payment information fields are updated on the claim.
    - A payment can also include a Payment Adjustment (positive or negative) - when the payer wants to make an adjustment that is not related to a specific remit, or when it is for a remit not included in this payment (a past remit for example).
3. When the payments/remits are received, they are automatically posted to the claims they are paying up, and can be reviewed to ensure that the maximum reimbursement was received.
    - When the system does not identify a claim to post a remit to, you can manually post the "orphaned" remit to a claim. The same goes for posting orphaned remit lines to claim lines. See [Posting Orphaned Remits](../RCM/RCMworkflow.md/#posting-orphaned-remits)
4. Very often, there will be adjustments or denials that the organization can resubmit (e.g., if a claim was submitted with the wrong authorization number, if the payer unrightfully denies payment as unauthorized, if the payer claims the member is not covered, etc.). The affected claims are then modified and resubmitted and the process begins again.

## Correcting Claims
To submit a corrected claim, click the 'Modify & Resubmit' button on the claim. This generates a copy of the claim in 'Draft' status, allowing edits to the claim and claim line information.

When the modified claim is ready to be submitted, click the 'Save & Submit' button. The system will run a validation check to ensure the claim has all required fields. If the claim is missing any required fields, a notification banner will display to indicate which fields are missing.

If the validation passes, the status reason of the claim will be updated to 'Ready to Submit', and will be submitted with the next batch of claims being submitted to the clearinghouse.

## Session Resubmissions
When an encounter service was reopened to allow the practitioner to make edits, if a claim line was already created, the charge item will be set to "Awaiting Resubmission".

Review "Awaiting Resubmission" charge items to determine if the edits made to the session necessitate modifying and resubmitting the claim.

Update charge item from "Awaiting Resubmission" to "Claim Line Created" and modify and resubmit the claim based on the updates made to the session.

## Cases
Create a case on a claim to effectively track historical information regarding resubmissions.
1. On a claim, go to the Cases tab.
2. Click 'New Case' to create a new case. Fill in the relevant detail on the case, including subject, CARC codes, account, and patient.
3. Save the case.

To add an existing case to multiple claims, either:

- Open the case. In the Bulk Case Claims section, click 'Add Existing Claim'. Choose the claim to link to this case.

or:
- On each claim you'd like to link to this case, go to the Cases tab. Click 'Add Existing Case'. Choose the case to link to the this claim.

## Posting Orphaned Remits

Orphaned Remits are remits that come in from your clearinghouse but are not posted to any specific claim. 
- Posting orphaned remits to the right claims will help you identify which claim lines the orphaned remit lines should be posted to. 
- Posting orphaned remit lines (lines on a remit that were not posted to any claim lines) to claim lines will give you accurate tracking of the outstanding and paid amounts on every claim, as well as on a line by line basis.

<details>
<summary> How to Post Orphaned Remits to Claims</summary>

1. On a Claim, go to the Remits Summary tab.
2. Click 'Add Existing Claim Payment'. You will be brought to a lookup of all Remits.
3. With your cursor in the "Look for records" field, press enter. At the bottom of the results, click 'Advanced lookup'.

<img src ='/img/advanced lookup.png' width='800'/>

4. Switch from the "Claim Payment Lookup View" to the "Orphaned Remits" view. Identify the remit for the claim based on the patient/date of service, etc.

</details>

Alternately, you can utilize the "Orphaned Remits" view to go through all orphaned remits and populate the claim field on each remit.

<details>
<summary> How to Post Orphaned Remit lines to Claim lines</summary>

1. Use the "Remits with Orphaned Remit Lines" view to review remits where some of the remit lines have not been posted to claim lines.
2. Open a remit and go to the Remit Lines tab. Remit lines that haven't been posted to claim lines display in the "Orphaned Remit Lines" subgrid.
3. Below the orphaned remit lines subgrid, you can review the claim lines on the claim this remit was posted to.
4. Identify the claim line to post each orphaned remit to (based on the patient/date of service etc.). Copy the name of the claim line, and paste it into the claim line lookup field on the orphaned remit line.
5. Click "Recalculate" on the claim to view the updated total outstanding and paid amounts based on the remit lines that were posted to the claim lines on the claim.

<img src ='/img/orphanedremitlines.png' width='800'/>
</details>
