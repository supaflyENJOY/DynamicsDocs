---
id: Account
title: Account
---
# Account
An account represents a payer that will be reimbursing your organization for services you provide to clients. Essentially, these are the insurance companies that your organization works with. 

The following fields and settings on an account should be set:
- *Account Type* – Payer
- *Name* – The payer’s name
- *Phone* – Payer’s phone number – it entered here, you will be able to make calls to the payer directly from Dynamics (if you have a connected phone), and the basic call details can be automatically tracked in the timeline of the patient you are calling about.
- *Fax, Website, Address* – These are optional fields that will make it easier in the long run for your employees to contact the payer in any way. 
- *Rendering Provider* (Claim Settings) – This refers to how the payer requires you to bill services on a claim. Do they want to see the Behavior Technician on the claim service line, and some payers want to see the BCBA that is overseeing the Behavior Technicians on each claim service line.

Once the Payer record is saved, you can then add Insurance Plans.

:::note Ghost Payers
One generic payer account and insurance plan can be created per organization, to use in the case where an organization elects to service a patient that has not (yet) been authorized for services by their insurance. 

Since all services that are scheduled for a patient are validated against an authorization, and ‘Plan’ is a required field on an authorization, this generic plan would enable the patient to be serviced under the organization’s authorization.

For example, when a BCBA was late in submitting a reassessment, causing a delay in receiving the patient’s reauthorization, the organization may decide to continue servicing the patient for those days (even though they won’t be able to bill insurance), to fill the gap between authorizations. In such a case, an authorization would be created with the organization as the authorizing payer/plan, for the exact services that the organization is authorizing, and encounters can be scheduled for the patient, against this authorization. 

Other scenarios can include a patient that has a lapse in coverage while switching from one payer and plan to another. 
:::
