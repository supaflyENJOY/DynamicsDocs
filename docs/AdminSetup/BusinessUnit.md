---
id: BusinessUnit
title: Business Unit
---
# Business Unit

Business units are organizational units within your organization. For example, a company that has one Pacific location and one Atlantic location will set up 2 business units. Smaller organizations usually have one business unit for the entire organization.

**Business Unit Information**

- *Name* – organization name
- *Parent Business*
- *UTC Offset* – time zone of the business unit. 
    :::note
    Scheduling may be affected if UTC Offset (time zone) is not configured properly. Additionally, certain records will not be able to be saved/created if this is not filled in, since they rely on the time zone of the business unit to set the time zone on that record. For example, a contact inherits the time zone of the business unit it belongs to. If the time zone on the business unit is not set, a contact record cannot be created/saved.
    :::
- *Rounding Rule* - determines whether a session that is exactly half of a unit (e.g. a 15 minute session, when a billable unit is 30 minutes) is rounded up to be considered a unit (which uses up an entire authorized unit out of the total authorized) or rounded down and not considered a billable unit (which means the practitioner is paid but insurance does not reimburse those minutes).
- *Primary Biller* - a user of the system, included on the Claim for when Payers have questions regarding Claims. An email address and phone number can be configured on the user.
- *Primary Taxonomy Code* 
- *Grace Period Days* 

## Claim Settings

**Billing Provider Information**

- *Billing Provider Type* - either Individual or Organization
- *Billing Provider* - select from Practitioners

**Billing Specifications**

Fill in your organization's billing details properly to ensure Claims are submitted properly.

- *NPI* 
- *Tax ID* 
- *Address Line 1*
- *Address Line 2*
- *City*
- *State*
- *Zip Code*