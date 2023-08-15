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
3. When the payments/remits are received, they are matched up to the claims they are paying up, and can be reviewed to ensure that the maximum reimbursement was received.
4. Very often, there will be adjustments or denials that the organization can resubmit (e.g., if a claim was submitted with the wrong authorization number, if the payer unrightfully denies payment as unauthorized, if the payer claims the member is not covered, etc.). The affected claims are then modified and resubmitted and the process begins again
