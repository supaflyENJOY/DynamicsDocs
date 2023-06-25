---
id: EncounterValidations
title: Encounter Validation
---

# Encounter Validation

When an Encounter Service is created, it is validated to ensure it passes a number of validation rules:

1. An Encounter Participant cannot overlap with another Encounter Participant.
    - For example, a patient included as the encounter participant on both an encounter from 12:00 - 2:00 and an encounter from 1:30 - 4:30 would be invalid.
2. An Encounter cannot have more Encounter Services units in the given time period than the Authorization Services or Assignments allow.
3. The Practitioner Participants on an Encounter Service must have the required credentials for this service (as configured on the [Insurance Plan Benefit](../AdminSetup/InsurancePlan.md/#RequiredQualifications)).
4. The duration on the Encounter Service must be between the min/max units required from the Insurance Plan Benefit.
5. The date of the Encounter Service must be within the Start and End date of the Authorization.

- When an Encounter is Scheduled, the *Validation Status* on each of its Encounter Services is set to "Pending". 
- While validation is running, the *Validation Status* on the Encounter Service is "Validating".
- After validation is completed, the *Validation Status* either becomes "Passed" or "Failed".

## Invalid Single Encounters
When an Encounter Service or Encounter Participant fails validation, in addition to the Validation Status being set to "failed", a red banner will be displayed at the top of the screen on the Encounter, the failed Encounter Service, and/or the failed Encounter Participant. The banner can be expanded to view the validation that failed.

## Invalid Recurring Encounters

On recurring encounters, if one or move child encounter occurrences are invalid the encounter will have a red banner displayed.

### Locate Invalid Encounter on a Recurring Encounter

1.  Navigate to the related tab on the encounter/recurring encounter
2.  Select Encounter Validation Failures

<img src ="/img/RelatedEncounterValidationFailures.png" width="700"/>

3.  Select the Encounter Validation Failure

<img src ="/img/SelectEncounterValidationFailures.png" width="700"/>

4.  Select the Encounter Service that hasn't passed validation

<img src ="/img/FailedEncounterService.png" width="700"/>