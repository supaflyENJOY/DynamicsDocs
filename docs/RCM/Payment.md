---
id: Payment
title: Payments
---

# Payments

Click "Payments" on the sitemap of the RCM app to view all payments that have come in from payers to your clearinghouse.

A payment can also include a Payment Adjustment (can be positive or negative amount) - when the payer wants to make an adjustment that is not related to a specific remit, or when it is for a remit not included in this payment (a past remit for example).

**Transaction Information**
- *X12 Data*
- *Transaction Number*
- *Check Issue or Eft Effective Date*
- *Credit Or Debit Flag*
- *Payment Format*
- *Payment Method*
- *Transaction Handling Code*

**Payer Information**
- *Payer*
- *Billing Office*
- *Sender Account Number*
- *Sender Dfi Id Number*
- *Sender Dfi Id Number Type*

**Payee Information**
- *Payee*
- *Financial Dimension*
- *Delivered To*

**Payment Information**
- *Payment Amount* - the total amount paid.
- *Total Payment Adjustments* 

## Create a Manual Payment

1. On a claim, go to the Remits Summary tab. Click 'New Claim Payment' to create a new claim payment for this claim. Claim information will be populated based on the claim it is created from. 
    - Fill out the relevant remit information (claim filing indicator, claim status code, etc.)
    - In the Payment lookup field, you can either select an existing payment record, or create a new one. To create a new Payment record, click 'Add New Payment'. Payment type will default to Manual, and allow you to enter the following fields: payment reference number, payment date, payer, paid amount. Click Save and Close on this Quick Create form.
    - When you are done entering the Remit information, click Save. 
2. Once saved, remit lines for all claim lines on the claim will be populated according to the information on the corresponding claim lines (procedure code, dates of service, quantity, billed amount, etc.). The Paid Amount field will be blank on all Remits and Remit Lines.
3. Enter the Paid Amount on each Remit Line.
4. Once you're done entering the total paid on the remit lines, you can go back to claim, and refresh or click 'Recalculate' to get the updated totals.


## Search Payments

Select 'Payments' on the left navigation bar in the RCM app to open the Payments Main Grid. The Payments Main Grid has 3 different views.

- The **All Payments** view displays all Payment records in the system. 
- The **Recent Payments** view displays all Payment records created in the last 30 days.
- The **Manual Payments** view displays all Manual Payment records.
