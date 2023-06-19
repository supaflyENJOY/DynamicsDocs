---
id: InsurancePlan
title: Insurance Plan
---
# Insurance Plan
Insurance Plans are the various options each insurance provider offers. Add one insurance plan for each of the different plans that you will be accepting for that payer. These same plans will be used to track your patients’ coverage records.
- *Payer* – The payer of this payer.
- *Name* – The plan name.
Once the Insurance Plan record is saved, you can add Insurance Plan Benefits.

## Insurance Plan Benefits
For each insurance plan, add insurance plan benefits, which define the payer's requirements that need to be met to receieve the benefits of the insurance plan. Insurance plan benefits control how encounters can be scheduled, serviced, and billed. 
The following fields should be set on an Insurance Plan Benefit:
- *Insurance Plan* – Select the Insurance Plan that this Insurance Plan Benefit belongs to.
- *Service* – Select the [Healthcare Service](HealthcareService.md) that best fits this Insurance Plan Benefit. 
:::note
The Service here will control the behavior of te session in the Note app, for each encounter scheduled against this Insurance Plan Benefit. [Read more about Healthcare Service Types](HealthcareService.md).
:::
- *Procedure Code* – Select the procedure code that this service should be billed with. See Product Codes(#Product Codes).
- *Requires Assignment* – Set as ‘Yes’ if you want to restrict scheduling encounters against this service code without an assignment, otherwise set as ‘No’.
- *Requires Patient Present* – Set as ‘Yes’ if you want to restrict scheduling the patient on another encounter at the same time as an encounter for this service is taking place.
- *Unit of Measure* – The number of minutes that a single unit of this service consists of. See [Healthcare Units](#Healthcare Units).
- *Minimum Units Required* – The minimum units required to schedule an encounter for this service.
- *Maximum Units Allowed* – The maximum units allowed to schedule for an encounter for this service.
Once the Insurance Plan Benefit record is saved, the Required Qualifications can be added.

### Healthcare Units
These records define the number of minutes in one unit of service. These records differentiate between a service that is billed in 15 minute increments, versus one that is billed in 1 hour increments.
Upon installation of the Autism Care app, 4 Healthcare Service records are included – 1 Minute, 15 minutes, 30 minutes and 1 Hour. 
If any additional denominations are needed, please reach out to your customer success lead or support for assistance. 

### Product Codes
This is the list of products – service codes – that you will be providing to your clients. These will be carried over to your claims when you bill insurance payers. (Most fields should have the same value, they will be referenced to from different records within the app.)
- Name – Service code
- Code - Service code
- System - https://schemas.chorus.cloud/usclscodes/autismcare

## Required Qualifications
These are the qualification requirements for each service. Once they are set up here, the system will validate that any time an encounter is scheduled for this service – the practitioner on the encounter has the required credentials and they are not expired. 

Each required qualification should be added individually. If a required qualification can be interchanged with another qualification, they can be added as one required qualification and the system will validate that the practitioner has either one of the qualifications selected. 

## Ghost Payers
