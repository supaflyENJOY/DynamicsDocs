---
id: FeeSchedules
title: Fee Schedule
---

# Fee Schedules

Fee schedules are price lists where you can track the Expected and Billing Rate per service in Fee Schedule Items.

 - *Name*
 - *Fee Schedule Number*
 - *Fee Schedule Type*

 Fee schedules where Fee Schedule Type is "Billing" can be related to a [Business Unit](../AdminSetup/BusinessUnit.md) or to a specific [Insurance Plan](../AdminSetup/InsurancePlan.md).

## Fee Schedule Items
 
 - *Product/Service* - the service code being billed.
 - *Expected Amount* - the contracted rate.
 - *Billing Amount* - included on the claim as the price per unit of this service.

Organizations can choose to bill with the contracted rate by keeping Expected and Billing Amounts the same, or leaving the Expected Amounts blank.

Organizations can also choose to use the same Billing Rates per service for all payers, by populating Billing Amount on the Business Unit Fee Schedule and payer-specific Expected amounts on [Insurance Plan Fee Schedules](../AdminSetup/InsurancePlan.md/#insurance-plan-fee-schedules).

## Modifiers

Modifiers are related to Fee Schedule Items to be included on the Claims for that service code.

To create a modifier, go to Related > Modifiers on the Fee Schedule Item, and create a new Modifier.

- *Name* - enter a name for the modifier.
- *Modifier* - choose from modifier codes.
- *Order*
- *Billing Amount* - overrides the Billing Amount on the Fee Schedule when this modifier is included on a claim
- *Expected Amount* - overrides the Expected Amount when this modifier is included on a claim

Modifiers can be added to [encounter services](../Scheduling/SingleEncounters.md/#encounter-services) by schedulers, or to a claim it is submitted.
