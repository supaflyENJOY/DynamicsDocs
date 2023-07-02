---
id: Claims
title: Claims
---

# Claims

A claim is a list of services which have been provided to a patient which is sent to an insurer for reimbursement.

The Claim Form is divided into multiple tabs for an organized view of the complete claim.

**Claim Details** 
- *Claim Number*
- *Diagnosis Codes*
- *Claim Type*
- *Place of Service*
- *Total Billed* 

The **Patient & Coverage Details** section of a claim display information from the [patient](../Patients/Overview.md) record and the patient's [coverage](../Patients/Coverages.md).
- *Patient*
- *Date of Birth*
- *Patient Address*
- *Gender*
- *Member Id*
- *Coverage*
- *Payer*

**Rendering Provider Details**
- *Rendering Provider* - populated based on the claim settings for either the [business unit](../AdminSetup/BusinessUnit.md/#claim-settings), [payer](../AdminSetup/Account.md/#claim-settings), or [authorization](../Patients/Authorization.md/#claim-settings). 
- *NPI* - NPI of the practitioner populated as the Rendering Provider.

**Referring Provider Details**
- *Referring Provider* -
- *NPI* - NPI of the contact populated as the Referring Provider

**Resubmission Details**
- *Claim Frequency Code*
- *Original Reference Number* -
- *Delay Reason Code*

The **Claim Lines** subgrid displays the claim items on the claim. [Read more about claim items](../Billing/ClaimItems.md).

The **Additional Claim Info** tab contains other information sometimes relevant to claims:
- *Billing Provider*
- *NPI*
- *Tax ID*
- *Facility*

The **Submissions Summary** tab shows a list of submissions representing the full story of the claim (how and when it was submitted, modified, resubmitted, etc.).


## Claim Statuses

- **Draft** - Claim has not yet been submitted and fields can be edited.
- **Ready to Submit** - Claim has been saved and submitted and can no longer be edited.
- **Submitted Submission** - Claim has been submitted to the clearinghouse.
- **Historical Submission** - Claim has since been modified and resubmitted, and this is a historical record of a previous submission.

There are 4 views for configured for easy access to viewing claims based on their statuses:
1. All Claims
2. Draft Claims
3. Historical Claims
4. Ready to Submit Claims
5. Submitted Claims

## Submit Claims

To submit claims, click 'Save & Submit' on any draft claim. The claim status will become 'Ready to Submit'. All 'Ready to Submit' claims are submitted to the clearinghouse on an hourly basis.

## Modify and Resubmit Claims

To modify and resubmit a claim, click 'Modify & Resubmit' on any submitted claim. A new Draft Claim will be opened with all of the information from the previously submitted claim. 

The previously submitted claim's status will be set to 'historical submission' and will be displayed on the submissions summary tab on future claims with that claim number.
