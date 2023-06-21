---
id: QualificationDefinition
title: Qualification Definition
---

## Qualification Codes
This is the list of qualifications that you want to be able to track on practitioners. This list will also be referenced when tracking which qualifications/credentials each payer requires for each service.
The qualification codes included in Autism Care upon installation are:
- BCBA
- Behavior Technician

## Qualification Definitions
This builds upon the qualification codes above. Here we add more detail defining the type of qualification – certification, license, etc. These qualification definitions will be added to each practitioner’s profile (based on the licenses and certifications they have) along with start date and expiration date. 

These qualification definitions will also be added to [insurance plan benefits](InsurancePlan.md) that require the servicing practitioner to have specific qualifications. This will enable the system to cross check each encounter that is scheduled, and ensure the practitioner has the necessary credentials to conduct the encounter.

(The Qualification Definition entity does not currently hold much information itself, it is a layer upon which further functionality can be built. For example, if you would want to enforce that for any practitioner qualification that is of the ‘State License’ type, the expiration date is required, the Qualification Definition entity enables that – since you can’t add a ‘type’ on the codeable concept record.)
