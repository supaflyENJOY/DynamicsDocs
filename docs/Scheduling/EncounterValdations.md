---
id: EncounterValidations
title: Encounter Validations
---

# Encounter Validations

When an Encounter Service is created, it is validated to ensure it passes a number of validation rules:

1. The date of the Encounter Service must be within the Start and End date of the Authorization Service.
2. An Encounter Service cannot have more units in the given time period than the Authorization Service or Assignment allows.
3. The Encounter Services for that patient that service that day cannot exceed the MUE Limit for this service (as configured on the Insurance Plan Benefit).
4. The duration of the Encounter Service must be between the min/max units required on the Insurance Plan Benefit.
5. The Practitioner Participants on an Encounter Service must have the required credentials for this service (as configured on the [Insurance Plan Benefit](../AdminSetup/InsurancePlan.md/#RequiredQualifications)).
6. An Encounter Service cannot overlap with another Encounter Encounter Service for the same patient/practitioner.
    - For example, an encounter service for patient John Doe from 12:00 - 2:00 would be an invalid overlap with an encounter service for patient John Doe from 1:30 - 4:30.
    - For example, an encounter service for practitioner Robert Brown from 9:00 - 11:30 would be an invalid overlap with an encounter service for practitioner Robert Brown 11:15 - 2:15.
    - Direction of Technician and Adaptive Behavior Treatment with Protocol Modification services are allowed to overlap with Direct Treatment or Group Behavior Treatment services for the same patient when the Encounters are at the same location, or over telecare.
7. Direction of Technician sessions must fully overlap with Direct Treatment or Group Behavor Treatment sessions.
8. Optional- when "Block Supervision Submission" on the [business unit](../AdminSetup/BusinessUnit.md) is set to Yes, a Direction of Technician session will fail validation until an overlapping Direct Treatment or Group Behavior Treatment session (with the same location / telecare) is submitted. This puts additional accountability on BCBAs to encourage timely session submission for sessions they supervise.
<img src ="/img/BUblockSupervision.png" width="700"/>
9. Optional- when "Grace Period Days" on the [business unit](../AdminSetup/BusinessUnit.md) is populated, the encounter service must be submitted within that many days after the scheduled date of the session.


## Validation Statuses

- When an Encounter is Scheduled, the *Validation Status* on each of its Encounter Services is set to 'Pending'. 
- While validation is running, the *Validation Status* on the Encounter Service is 'Validating'.
- After validation is completed, the *Validation Status* either becomes 'Passed' or 'Failed'.

## Invalid Single Encounters

When an Encounter Service fails validation, in addition to the Validation Status being set to 'failed', a red banner will be displayed at the top of the screen on the Encounter and the failed Encounter Service. The banner can be expanded to view the validation that failed.

## Invalid Recurring Encounters

On recurring encounters, if one or more child encounter occurrences are invalid the encounter will have a red banner displayed.

### Locate Invalid Encounter on a Recurring Encounter

1.  Navigate to the Encounter Validation Failures on the recurring encounter

2.  Select the Encounter Validation Failure

<img src ="/img/SelectEncounterValidationFailures.png" width="700"/>

3.  Select the Encounter Service that hasn't passed validation

<img src ="/img/FailedEncounterService.png" width="700"/>

## Rerun Validation

To rerun validation, open the encounter service you'd like to revalidate, and click "Rerun Validation." Refresh the record to see the updated validation status.

To rerun validation on multiple records:

1. Go to an encounter services view.
2. Select the encounter services you'd like to revalidate.
3. Click "Edit".
4. Navigate to the "Header" tab on the form.
5. Choose "Pending" as the validation status. Save the changes and the selected records will be revalidated.

## Override Validation Failures
Users with the Scheduling Admin [security role](../AdminSetup/SecurityRoles.md) can override validation failures to allow the practitioner to submit sessions that failed for certain reasons.

1. Go to the failed encounter service.
2. Go the Related > Encounter Validation Failure that has been approved to be overriden.
3. Set "Override Allowed" to Yes. The validation failure record will remain active, but the session will not fail validation for this reason again.

Overriden validatons display in a yellow banner on the encounter service so it is clear that this session previously failed a validation and has since been allowed to pass.