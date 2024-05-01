---
id: EncounterValidations
title: Encounter Validations
---

# Encounter Validations

When an Encounter Service is created, it is validated to ensure it passes a number of validation rules:

1. An Encounter Participant cannot overlap with another Encounter Participant.
    - For example, a patient included as the encounter participant on both an encounter from 12:00 - 2:00 and an encounter from 1:30 - 4:30 would be invalid.
    - Direction of Technician and Adaptive Behavior Treatment with Protocol Modification services are allowed to overlap with Direct Treatment services for the same patient when the Encounters are at the same location, or over telecare.
2. An Encounter Service cannot have more units in the given time period than the Authorization Service or Assignment allows.
3. The Practitioner Participants on an Encounter Service must have the required credentials for this service (as configured on the [Insurance Plan Benefit](../AdminSetup/InsurancePlan.md/#RequiredQualifications)).
4. The duration on the Encounter Service must be between the min/max units required from the Insurance Plan Benefit.
5. The Encounter Services for that service that day cannot exceed the MUE Limit for this service (as configured on the Insurance Plan Benefit).
6. The date of the Encounter Service must be within the Start and End date of the Authorization.
7. Direction of Technician services must fully overlap with Direct Treatment sessions.
8. Optional- when "Block Supervision Submission" on the [business unit](../AdminSetup/BusinessUnit.md) is set to Yes, a Direction of Technician session will fail validation until an overlapping Direct Treatment session (with the same location / telecare) is submitted. This puts additional accountability on BCBAs to encourage timely session submission for sessions they supervise. 

<img src ="/img/BUblockSupervision.png" width="700"/>


## Validation Statuses

- When an Encounter is Scheduled, the *Validation Status* on each of its Encounter Services is set to 'Pending'. 
- While validation is running, the *Validation Status* on the Encounter Service is 'Validating'.
- After validation is completed, the *Validation Status* either becomes 'Passed' or 'Failed'.

## Invalid Single Encounters

When an Encounter Service or Encounter Participant fails validation, in addition to the Validation Status being set to 'failed', a red banner will be displayed at the top of the screen on the Encounter, the failed Encounter Service, and/or the failed Encounter Participant. The banner can be expanded to view the validation that failed.

## Invalid Recurring Encounters

On recurring encounters, if one or more child encounter occurrences are invalid the encounter will have a red banner displayed.

### Locate Invalid Encounter on a Recurring Encounter

1.  Navigate to the Encounter Validation Failures on the recurring encounter

2.  Select the Encounter Validation Failure

<img src ="/img/SelectEncounterValidationFailures.png" width="700"/>

3.  Select the Encounter Service that hasn't passed validation

<img src ="/img/FailedEncounterService.png" width="700"/>

## Rerun Validation

To rerun validation, open the encounter service or encounter participant you'd like to revalidate, and click "Rerun Validation." Refresh the record to see the updated validation status.

To rerun validation on multiple records:

1. Go to an encounter service or encounter participants view.
2. Select the encounter services/participants you'd like to revalidate.
3. Click "Edit".
4. Navigate to the "Header" tab on the form.
5. Choose "Pending" as the validation status. Save the changes and the selected records will be revalidated.

