---
id: InsurancePlan
title: Insurance Plans
---
# Insurance Plans
Insurance Plans are the various options each insurance provider offers. Add one insurance plan for each of the different plans that you will be accepting for that payer. Each insurance plan can have its own fee schedule to reflect the billing differences for that plan.

The insurance plans set up here, will be the available options when setting up your patients’ coverage records.

- *Payer* – The payer of this plan
- *Name* – The plan name

Once the Insurance Plan record is saved, you can add Insurance Plan Benefits.

## Insurance Plan Benefits
In each insurance plan, add insurance plan benefits for the services covered by this plan. Here, you will define the payer's requirements that need to be met for this service to be rendered. Insurance plan benefits control how encounters can be scheduled, serviced, and billed. 

The following fields should be set on an Insurance Plan Benefit:

- *Insurance Plan* – Select the Insurance Plan that this Insurance Plan Benefit belongs to.
- *Service* – Select the [Healthcare Service](HealthcareService.md) that best fits this Insurance Plan Benefit. 
:::note
The Service here will control the behavior of the session in the Note app, for each encounter scheduled against this Insurance Plan Benefit. [Read more about Healthcare Service Types](HealthcareService.md).
:::
- *Procedure Code* – Select the procedure code that this service should be billed with. See [Product Codes](#product-codes).
- *Requires Assignment* – Set as ‘Yes’ if you want to restrict scheduling encounters against this service code without an assignment, otherwise set as ‘No’.
- *Requires Patient Present* – Set as ‘Yes’ if you want to restrict scheduling the patient on another encounter at the same time as an encounter for this service is taking place.
- *Unit of Measure* – The number of minutes that a single unit of this service consists of.
- *Minimum Units Required* – The minimum units required to schedule an encounter for this service.
- *Maximum Units Allowed* – The maximum units allowed to schedule for an encounter for this service.
- *MUE Limit* - The maximum units allowed to schedule for this service for a patient on one day.

Once the Insurance Plan Benefit record is saved, the Required Qualifications can be added.

### Product Codes
This is the list of products – service codes – that you will be providing to your clients. These will be carried over to your claims when you bill insurance payers.

Additional product codes can be set up for your organization by support. 


## Required Qualifications{#RequiredQualifications}
These are the qualification requirements for each service. Once they are set up here, the system will validate that any time an encounter is scheduled for this service – the practitioner on the encounter has the required credentials and they are not expired. 

Each required qualification should be added individually. If a required qualification can be interchanged with another qualification, they can be added as one required qualification and the system will validate that the practitioner has either one of the qualifications selected. 

## Insurance Plan Fee Schedules

To create fee schedules specific to an insurance plan (which will override any [business unit fee schedules](../AdminSetup/FeeSchedules.md) for that service code), go to Related > Insurance Plan Fee Schedules on the Insurance Plan, and create a new Insurance Plan Fee Schedule.


## Insurance Plan Billing Requirements

To control how Claims for an insurance plan are created, go to Related > Insurance Plan Billing Requirements on the Insurance Plan, and create a new Insurance Plan Billing Requirement.

Select from existing billing rules:
- Include the time portion on the claim lines
- Modifier 95 for services provided via telehealth
- Modifier GT for all telehealth services
- POS 02 for all telehealth services
- POS 10 for all telehealth home and 02 for all other
- Referring provider required
- Rendering provider taxonomy code required
- Modifier 93 audio-only telehealth
- Modifier FQ audio-only telehealth
- Modifier HO BCBA services with GT via telehealth, U7 for out-of-clinic and U6 for in-clinic
- Modifier U5 for BT services with GT via telehealth, U7 for out-of-clinic and U6 for in-clinic
- Single claim item per session required
- Split claim lines with different POS/Modifier combinations: claim lines that have different POS/modifier combinations will not be grouped together, even for the same service/same day.