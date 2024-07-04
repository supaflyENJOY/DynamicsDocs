---
id: EncounterValidations
title: Encounter Validations
---

# Encounter Validations

When an Encounter Service is created, it is validated to ensure it passes a number of validation rules.

- When an Encounter is Scheduled, the *Validation Status* on each of its Encounter Services is set to 'Pending'. 
- While validation is running, the *Validation Status* on the Encounter Service is 'Validating'.
- After validation is completed, the *Validation Status* either becomes 'Passed' or 'Failed'.

When validation fails, a red banner will display at the top of the screen on the Encounter and the failed Encounter Service. The banner can be expanded to view the validation that failed.

On recurring encounters, if one or more child encounter occurrences are invalid, a red banner will display on the Encounter. The Encounter Validation tab shows all failures and which encounter service they apply to for this recurring encounter.

**Encounter Validations**

1. Session date is within authorized date range.
2. Session does not exceed the authorized or assigned units for a given date range.
3. Session does not exceed the MUE limit of units of this service allowed per day.
4. Session duration is between the minimum units required and maximum units allowed.
5. Practitioner of the session has required credentials for this service.
6. Session does not overlap with another session for the same patient/practitioner.
7. Supervision sessions fully overlap with Direct or Group Treatment sessions.
8. Supervision sessions fully overlap with *submitted* Direct or Group Treatment sessions (optional).
9. Session is submitted within the configured grace period (optional).


## Resolving Encounter Validation Failures

### Date is not Within Authorized Date Range
This validation ensures that all sessions will be billed within the date range of the authorization service to prevent them from being denied as unauthorized services.

<details>
<summary> How to Resolve this Validation Failure</summary>

1. If the Service Type on the encounter service is: 
    - Assignment, click on the assignment, then select the authorization service to open it and view its dates. 
    - Service, click the authorization service to open it and view its dates. 
2. Go back to the failed encounter service. Either update the date to be within the authorization service, or determine if the encounter service is connected to the wrong authorization service:
    -  View all authorizations in the Coverage & Auths tab on the patient contact.
    -  Determine which authorization it should be connected to. Update the assignment or authorization service on the encounter service to the correct authorization service.
3. Save the record. Validation will rerun on the encounter service and it will update to 'Passed.'

</details>

### Exceeds Authorized Units
This validation ensures that the authorized units per week/month/authorization period on the authorization service is not exceeded to prevent sessions from being denied as unauthorized services.

:::note
The authorized units can be set to hours/units per week/month/authorization period. When set to hours/units per week/month, you can choose whether encounters are validated as authorized, or based on how the authorized units would convert to total units per authorization period.

This allows for tracking utilization on a weekly/monthly basis, while validating encounters based on total units for the entire authorization period.
Read more about [authorization services](../Patients/AuthorizationServices.md).
:::

<details>
<summary> How to Resolve this Validation Failure</summary>

1. If the service type on the encounter service is: 
    - Assignment, click on the assignment, then select the authorization service to open it.
    - Service, click the authorization service to open it.
2. Review the authorized units.
3. Identify and shorten/cancel sessions as needed:
    - If the authorization service is authorized per week/month and validated as authorized, open the patient's calendar and go to the week/month of the failing session. Review the hours scheduled and determine how much to shorten/cancel the failed session.
    - If the authorization service is authorized or validated as total units, identify which sessions in the date range of the authorization service should be shortened/canceled.

</details>

### Exceeds Assigned Units
This validation ensures that the assigned hours per day/week/month/assignment period on the [care team assignment](../Scheduling/CareTeamAssignments.md) is not exceeded to prevent sessions from being denied as unauthorized services, even when scheduled by practitioners.

<details>
<summary> How to Resolve this Validation Failure</summary>

1. Click on the assignment on the encounter service.
2. Review the assignment units.
3. Identify and shorten/cancel sessions as needed:
    - If the care team assignment is assigned per day/week/month, open the practitioner's calendar and go to the day/week/month of the failing session. Review the hours scheduled and inform the practitioner how much to shorten/cancel the failed session.
    - If the care team assignment is assigned per assignment period, inform the practitioner which sessions in the date range of the care team assignment should be shortened/canceled.

</details>

### Exceeds MUE Limit
This validation ensures that the total time for a service in one day doesn’t go over the MUE limit for each patient, whether it's provided by one practitioner or several. .  
*MUE - Medically Unlikely Edit* is the maximum number of units per service a patient may receive in a day. 

<details>
<summary> How to Resolve this Validation Failure</summary>

1. If the service type on the encounter service is: 
    - Assignment, click on the assignment, then select the authorization service to open it. Next, click on the service code to view the related [insurance plan benefit](../AdminSetup/InsurancePlan.md/#insurance-plan-benefits). 
    - Service, click the authorization service, then click the service code to open the related insurance plan benefit. 
2. Check the units in the MUE Limit field and multiply by the unit of measure to find the total hours allowed for this service per day. 
3. Go to the patient’s calendar to see which session needs to be shortened or rescheduled. 
4. Click on the encounter service that needs to be updated and make the necessary changes. 
5. Save the record. Validation will rerun on the failed encounter service and it will update to 'Passed.' 

</details>

### Duration Exceeds the Maximum Units Allowed
This validation ensures that a session's duration does not exceed the maximum duration allowed for a session of this service.

<details>
<summary> How to Resolve this Validation Failure</summary>

1. If the Service Type on the encounter service is: 
    - Assignment, click on the assignment, then select the authorization service to open it. Next, click on the service code to view the related insurance plan benefit. 
    - Service, click the authorization service, then click the service code to open the related insurance plan benefit. 
2. Check the units in the Max Units Allowed field and multiply by the unit of measure to get the maximum duration for sessions of this service. 
3. Go back to the failed encounter service and adjust the session duration so it doesn’t exceed the maximum units allowed. 
4. Save the record. Validation will rerun on the encounter service and it will update to 'Passed.'

</details>

### Duration Does not meet the Minimum Units Required
This validation ensures that a session lasts at least the minimum duration required for this service.  

<details>
<summary> How to Resolve this Validation Failure</summary>

1. If the Service Type on the encounter service is: 
    - Assignment, click on the assignment, then select the authorization service to open it. Next, click on the service code to view the related insurance plan benefit. 
    - Service, click the authorization service, then click the service code to open the related insurance plan benefit. 
2. Check the units in the Min Units Required field and multiply by the unit of measure to get the minimum duration for sessions of this service. 
3. Go back to the failed encounter service and adjust the duration to meet or exceed the minimum duration required. 
4. Save the record. Validation will rerun on the encounter service and it will update to 'Passed.'

</details>


### Practitioner Does not have Required Credentials
This validation ensures that the practitioner on the session has the required credentials for this service (as configured on the [Insurance Plan Benefit](../AdminSetup/InsurancePlan.md/#RequiredQualifications)).

<details>
<summary> How to Resolve this Validation Failure</summary>

1. If the Service Type on the encounter service is: 
    - Assignment, click on the assignment, then select the authorization service to open it. Next, click on the service code to view the related insurance plan benefit. 
    - Service, click the authorization service, then click the service code to open the related insurance plan benefit. 
2. Review the Required Qualifications set on this insurance plan benefit
3. Go to the Qualifications tab on the practitioner contact. Add a new practitioner qualification as needed, or update the expiration date of the existing one.
4. Go back to the failed encounter service and [Rerun Validation](../Scheduling/EncounterValdations.md/#rerun-validation), and it will update to 'Passed.'

</details>

### Patient/Practitioner Overlaps with Another Encounter
This validation ensures that sessions do not overlap with eachother to prevent billed sessions from being denied for overlapping with other billed sessions.

**Validation fails**:

- If a practitioner on an encounter service is scheduled on another encounter service where the timing of the sessions overlap. For example, an encounter service for practitioner Robert Brown from 11:30 - 1:30 would fail validation for overlapping with an encounter service for practitioner Robert Brown 9:45 - 11:45.
- If a patient on an encounter service is scheduled on another encounter service where the timing of the sessions overlap. For example, an encounter service for patient John Doe from 1:30 - 4:30 would be an invalid overlap with an encounter service for patient John Doe from 12:00 - 2:00, unless it is an allowed overlap:
    1. Direction of Technician with Direct Treatment
    2. Direction of Technician with Group Behavior Treatment
    3. Adaptive Behavior Treatment with Protocol Modification with Direct Treatment
    4. Adaptive Behavior Treatment with Protocol Modification with Group Behavior Treatment

:::note
Direction of Technician and Adaptive Behavior Treatment with Protocol Modification services are only allowed to overlap with Direct Treatment or Group Behavior Treatment services for the same patient when the encounters are at the same location, or over telecare.
Allowed overlaps are based on the service type on the [Healthcare Service](../AdminSetup/HealthcareService.md).
:::

<details>
<summary> How to Resolve this Validation Failure</summary>

1. Go to the patient/practitioner calendar to view the overlapping sessions.
2. Determine which session should be adjusted and update the time to not overlap. Or, instruct the practitioner to adjust the time of the session in Note.
3. Validation will rerun on the failed encounter service and it will update to 'Passed.'

</details>

### Supervision does not Fully Overlap Direct Care 
This validation ensures supervision happens during a direct care session with the same patient, either at the same location or through telecare. 
:::note
Supervision validations only run on sessions where the [Healthcare Service](../AdminSetup/HealthcareService.md) of the related authorization service is set to ‘Direction of Technician’ service type. Check that Service Type is set correctly to ensure this validation is running for the correct services. 
:::

**Validation fails**:

- If a supervision session does not fully overlap with a direct or group treatment session. 
- If a supervision and a direct/group treatment session are not scheduled at the same location and neither are set to telecare. 

<details>
<summary> How to Resolve this Validation Failure</summary>

1. Go to the session on the patient’s calendar to see what the error is. 
2. After determining the error and confirming with the practitioner, you can either: 
    - Update the supervision session time to occur during the direct care session on the failed encounter service. 
    - Ask the practitioner to correct the timing of the session in Note and sync their app. 
3. Save the record. Validation will rerun on the failed encounter service and it will update to 'Passed.'

</details>

### Overlapping Direct Care Session was not yet Submitted
This validation ensures supervision happens during a *submitted* direct care session with the same patient, either at the same location or through telecare. This puts additional accountability on BCBAs to encourage timely session submission for sessions they supervise.

This validation is optional and only runs when "Block Supervision Submission" on the [business unit](../AdminSetup/BusinessUnit.md) of the authorization is set to Yes.

<img src ="/img/BUblockSupervision.png" width="700"/>

<details>
<summary> How to Resolve this Validation Failure</summary>

1. Go to the session on the patient’s calendar to view the overlapping session
2. Ask the practitioner of the direct/group treatment session to submit the session in Note. 
3. When the direct/group treatment session is submitted, validation will rerun on the failed supervision session and it will update to 'Passed.'

</details>


### Encounter Service is not Within Grace Period
This validation ensures sessions can only be submitted within a certain amount of days after the scheduled date of the session.

This validation is optional and only runs when "Grace Period Days" on the [business unit](../AdminSetup/BusinessUnit.md) is populated.


<details>
<summary> How to Resolve this Validation Failure</summary>


 1. If the practitioner has been approved to submit a session past the grace period, [override the validation failure](../Scheduling/EncounterValdations.md/#override-validation-failures)


</details>

## Override Validation Failures
Users with the Scheduling Admin [security role](../AdminSetup/SecurityRoles.md) can override validation failures to allow the practitioner to submit sessions that failed for certain reasons.

1. Go to the failed encounter service.
2. Go the Related > Encounter Validation Failure that has been approved to be overriden.
3. Set "Override Allowed" to Yes. The validation failure record will remain active, but the session will not fail validation for this reason again.

Overriden validatons display in a yellow banner on the encounter service so it is clear that this session previously failed a validation and has since been allowed to pass.

## Rerun Validation

To rerun validation, open the encounter service you'd like to revalidate, and click "Rerun Validation." Refresh the record to see the updated validation status.

To rerun validation on multiple records:

1. Go to an encounter services view.
2. Select the encounter services you'd like to revalidate.
3. Click "Edit".
4. Navigate to the "Header" tab on the form.
5. Choose "Pending" as the validation status. Save the changes and the selected records will be revalidated.

