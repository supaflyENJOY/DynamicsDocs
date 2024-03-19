---
id: BusinessUnit
title: Business Units
---
# Business Units

Business units are organizational units within your organization. Business units allow for tighter control of who has access to which records. 

Based on how an organization is set up, there may be one business unit for all locations, or individual business units for each location. For example, an organization that has one Pacific location and one Atlantic location may set up one business unit for both locations – if their office staff is involved in the intake and scheduling for both locations. Or they may set up two business units, allowing the users within each unit to access only the data for the patients and practitioners in their location. Smaller organizations usually have one business unit for the entire organization. 

Note that users’ access to records within their business unit is further defined by their individual permissions.

**Business Unit Information**

- *Name* – organization name
- *Parent Business Unit* – The parent business unit - if this business unit is a sub-unit of a different business unit. The users assigned to the parent business unit have access to all child business units as well.
- *UTC Offset* – time zone of the business unit. 

:::note
Scheduling may be affected if UTC Offset (time zone) is not configured properly. Additionally, certain records will not be able to be saved/created if this is not filled in, since they rely on the time zone of the business unit to set the time zone on that record. For example, a contact inherits the time zone of the business unit it belongs to. If the time zone on the business unit is not set, a contact record cannot be created/saved.
:::

- *Rounding Rule* - determines whether a session that is exactly half of a unit (e.g. a 15 minute session, when a billable unit is 30 minutes) is rounded up to be considered a unit (which uses up an entire authorized unit out of the total authorized) or rounded down and not considered a billable unit (which means the practitioner is paid but insurance does not reimburse those minutes).
- *Primary Biller* - a user of the system, included on the Claim for when Payers have questions regarding Claims. An email address and phone number can be configured on the user.
- *Charge Period Frequency* - select whether [charge periods](../Billing/ChargePeriods.md) will be created weekly or monthly.
- *Primary Taxonomy Code* - select the taxonomy code for this business unit.
- *Grace Period Days* - enter the amount of days after a session takes place that a session can still be submitted.
- *Block Supervision Submission* -  when set to Yes, a Direction of Technician session will fail validation until an overlapping Direct Treatment session is submitted. This puts additional accountability on BCBAs to encourage timely session submission for sessions they supervise.

<img src ="/img/BUblockSupervision.png" width="700"/>

**Users**

In the Users subgrid, you can view the members of your organization who have access to records in this business unit.

## Claim Settings

**Billing Provider Information**

- *Billing Provider Type* - either Individual or Organization. 
    - If **Individual**, select a practitioner record in the Billing Provider field below, and the practitioner’s NPI number will be used on all claims for this business unit. 
    - If **Organization**, the information in the Billing Specifications section will be used on all claims for this business unit.
- *Billing Provider* - Select a practitioner from your practitioner list.

**Billing Specifications**

Fill in your organization's billing details properly to ensure Claims are submitted properly. Billing details include NPI, Tax ID, and full address.