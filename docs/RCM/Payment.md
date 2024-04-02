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

# Create a Manual Payment
To create a new Payment record, click 'Add New Payment'. Payment type will default to Manual, and allow you to enter the following fields: payment reference number, payment date, payer, paid amount.

The following fields will be recalculated on payments as you post remits to claims:
- *Total Amount Posted*: amount of the payment applied towards claims.
- *Total Amount Not Posted*: amount of the payment not applied towards any claims.

## Search Payments

Select 'Payments' on the left navigation bar in the RCM app to open the Payments Main Grid. The Payments Main Grid has 5 different views.

- The **All Payments** view displays all Payment records in the system. 
- The **Recent Payments** view displays all Payment records created in the last 30 days.
- The **Manual Payments** view displays all Manual Payment records.
- The **All Automatic Payments** view displays all Payment records that came from an X12 Transaction.
- The **Recent Automatic Payments** view displays all Payment records that came from an X12 Transaction and were created in the last 30 days.
