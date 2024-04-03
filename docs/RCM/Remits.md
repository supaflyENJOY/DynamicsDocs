---
id: Remits
title: Remits
---

# Remits

Remits, or claim payments, represent electronic remittance advice (ERA) that contain information regarding the claim payment  - what was paid per claim line, what adjustments the payer made on each claim line (what they did not pay) along with CARC codes for each adjustment, which explains what the adjustment is about (e.g., "CO-45" means according to the contract, the payer agreed to pay only x amount, so the amount paid was adjusted).

A remit can also include a Remit Adjustment (can be positive or negative amount) - when the payer wants to make an adjustment to a few lines in the claim/remit. 

## Create a Manual Remit

1. On a claim, go to the Remits Summary tab. Click 'New Claim Payment' to create a new claim payment for this claim. Claim information will be populated based on the claim it is created from. 
    - Fill out the relevant remit information (claim filing indicator, claim status code, etc.)
    - In the [Payment](../RCM/Payment.md) lookup field, select an existing payment record, or create a new one. To create a new Payment record, click 'Add New Payment'. Payment type will default to Manual, and allow you to enter the following fields: payment reference number, payment date, payer, paid amount. Click Save and Close on this Quick Create form.
    - When you are done entering the Remit information, click Save. 
2. Once saved, remit lines for all claim lines on the claim will be populated according to the information on the corresponding claim lines (procedure code, dates of service, quantity, billed amount, etc.). The Paid Amount field will be blank on all Remits and Remit Lines.
3. Enter the Paid Amount on each Remit Line.
4. Once you have entered the total paid on the remit lines, go back to claim and refresh or click 'Recalculate' to get the updated totals.

## Search Remits

Select 'Remits' on the sitemap in the RCM app to open the Remits Main Grid. The Remits Main Grid has 3 different views:
- The **Recent Remits** (default) view displays remits where the related [transaction](../RCM/Transactions.md) was created in the last 30 days.
- The **All Remits** view displays all the remit records in the system. 
- The **Orphaned Remits** view displays remits that do not have a related claim. These remits should be [posted to claims](../RCM/RCMworkflow.md/#posting-orphaned-remits) to accurately update the outstanding and paid amounts on claims.
- The **Remits with Orphaned Remit Lines** view displays all the remits where remit lines weren’t posted to claim lines. These remit lines should be [posted to claim lines](../RCM/RCMworkflow.md/#posting-orphaned-remits) for accurate A/R on a line-by-line basis. Remit lines are named with Procedure Code and Start Date for easy matching to claim lines.
