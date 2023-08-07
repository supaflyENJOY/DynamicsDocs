--- 
id: RCMworkflow
title: RCM Workflow
---

# Remits Workflow

The Remits workflow happens primarily in the **RCM** app.

1. A [transaction](../RCM/Transactions.md) is received from the clearinghouse to your financial dimension. 
    - The transaction can include one [payment](../RCM/Payment.md) from one payer, or multiple payments from multiple payers.
    - Each payment from a payer can include a [remit](../RCM/Remits.md) (claim payment) for a single claim, or multiple remits (claim payments) for multiple claims. 
2. A [payment](../RCM/Payments.md) is automatically created when a payment comes into your clearinghouse.
2. The payment is automatically posted to the claim it was paid against. The payment information fields are updated on the claim.



A payment can also include a Payment Adjustment (can be positive or negative amount) - when the payer wants to make an adjustment that is not related to a specific remit, or when it is for a remit not included in this payment (a past remit for example).
When the payments/remits are received, they are matched up to the claims they are paying up, and reviewed, to make sure that max reimbursement was received.
Very often, there will be adjustments or denials that the organization can re-bill - for example, if a claim was submitted in error with the wrong authorization number, or if the payer denies payment as unauthorized but we do have an auth for it. Sometimes they have the member as not covered, and really the member is covered, etc, etc, etc.... 
The affected claims are then modified and resubmitted and the process begins again