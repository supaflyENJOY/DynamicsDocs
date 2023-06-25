---
id: SingleEncounters
title: Encounter
---

# Encounters 
Encounters are the sessions conducted by Practitioners. An Encounter is the parent record for the session, and will always contain children records representing the services that were conducted as well as the participants.

There are 3 ways to create encounters:

1. Create a Single Encounter, manually or from [Schedule Assistance](../Scheduling/ScheduleAssistance.md)
2. Create a [Recurring Encounter](../Scheduling/RecurringEncounters.md), manually or from [Schedule Assistance](../Scheduling/ScheduleAssistance.md)
3. Create a [Care Team Assignment](../Scheduling/CareTeamAssignments.md) so that a Practitioner can create an encounter in the Note app.

## Create a Single Encounter{#CreateSingleEncounter}
Single encounters are scheduled on a one-off basis. 
To create a new Encounter, click on the New Single Encounter button on the Encounters subgrid on a Patient/Practitioner, or on the Encounters Main Grid. This will open up the New Encounter Main Form.

### Set Timing and Duration
Select the date, time, service, and duration of the session.
- *Start Date/Time* - the start date and time of the session.
- *Duration* - the duration of the session (can be automatically calculated based on start/end time)
- *End Date/Time* - the end date and time of the session (can be automatically calculated based on start time/duration)

Click Next on the Encounter setup flow to add encounter services.

### Encounter Services
Click "Add new Encounter Service" on the Encounter Services subgrid. The encounter services you add do not need to have the same timing as the parent Encounter. However, the Encounter timing needs to include the timing of any encounter services under it. 

For example, if a Behavior Techician has a direct care session from 9:00-12:00, and the BCBA supervises from 10:00-11:00, there would be 2 encounter services with their respective timings, under one Encounter with timing 9:00-12:00.

**Encounter Service Information**
- *Encounter* - prepopulated with the Encounter you are adding the Encounter Service to.
- *Service Type* - choose from 2 options:
    - Assignment - session will be validated against the Care Team Assignment. Provider will have access to edit the session in the Note app.
    - Service - session will be validated against the Authorization Service. Provider will have limited access to edit the session in the Note app (only can be edited within the same week for the same or shorter duration)
- *Assignment* - displays on form when Service Type is set to "Assignment". The Encounter Patient and Practitioner will be created based on the Patient and Practitioner on the Care Team Assignment.
- *Encounter Patient* - displays on form when Service Type is set to "Service". Select the patient.
- *Encounter Practitioner* - displays on form when Service Type is set to "Service". Select the practitioner.
- *Authorization Service* - displays on form when Service Type is set to "Service". Select the Authorization for this Patient.
- *Start Date/Time* - prepopulated with the start date/time of the Encounter you are adding the Encounter Service to.
- *End Date/Time* - prepopulated with the end date/time of the Encounter you are adding the Encounter Service to.
- *Payroll Modifiers* - 

An Encounter Service cannot be saved if the Service Code on the Authorizaton requires an Assignment and the Assignment field on the Encounter Service is null.

### Encounter Participants
Encounter Participants are generated automatically based on the Patients and Practitioners for all Encounter Services on an Encounter.

A Patient Encounter Participant is only generated automatically when the Authorization Service's Service Code (see [Insurance Plan Benefits](../AdminSetup/InsurancePlan.md/#InsurancePlanBenefits)) requires patient present.

Additional Encounter Participants can be created manually (e.g., to add a parent as a participant to a Parent Training session). 
To create an encounter participant, click "New Encounter Practitioner" on the Encounter Practitioners subgrid.

**Encounter Participant Information**
- *Participant* - select the participant. To filter this lookup, select the Type first, and this lookup will be filtered to Contacts of that type.
- *Type* - select the type of Contact to add:
    - Patient
    - Practitioner
    - Related Contact
- *Start Date/Time* - prepopulated with the start date/time of the Encounter you are adding the Encounter Participant to.
- *Duration* - prepopulated with the duration of the Encounter you are adding the Encounter Participant to.
- *End Date/Time* - prepopulated with the end date/time of the Encounter you are adding the Encounter Participant to.

### Encounter Location
Th final step of creating an encounter is selecting the Location.

The Location field is filtered to display addresses related to this Patient and general addresses (e.g. a school where multiple Patients are serviced).

The Location on the Encounter will be included as the Place of Service on the Claim.

[Read more about locations](../AdminSetup/Location.md).