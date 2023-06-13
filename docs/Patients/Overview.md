---
id: PatientOverview
title: Overview
---

# Patient

A Patient refers to the client or learner who is served by an ABA Provider. Autism Care provides simple and easy forms to enable intake representatives to track all necessary information for a patient. 

## Contact Main Grid

Select 'Contacts' on the left navigation bar in the Clinical Area to open the Contact Main Grid. The Contact Main Grid has 3 views related to Patient contacts. All views display the First Name, Last Name, Known As, Date of Birth, Address and Status Reason.  
- Active Patients
    - The Active Patients view displays Patient Contact records that are Active.
- Current Patients
    -  The Current Patients view displays Patient Contact records that are Active and Current. A Patient is considered 'current' if they have an Active [Episode of Care](EpisodeOfCare.md). 
- All Patients
    - The All Patients view displays all the Patients in the system. This includes Active and Inactive records. (This is helpful when a Patient leaves your company and their record is deactivated but later wants to receive services from you again. You can reactivate their contact record from this view.)

## Contact Main Form

Select a record from the Contact Main Grid to open the Contact Main Form. 


There are 2 Contact Main Forms. The "Contact Type" fied in the header sets the form as either Patient, Practitioner, or Related Person.


The Contact Main Form for a Patient is divided into multiple tabs for an organized view of the complete Patient record.
- The **Profile Info** tab is for general Patient Information, usually collected upon intake. This tab is divided into a few sections:
    - *General Information* - This contains the First Name, Last Name, Known As, Date of Birth and Gender. The First and Last Name fields are required to save the record.
    - *Patient Addresses* - This section displays all the addresses related to this Patient. Addresses can be either billing addresses or service addresses. The Patient can only have 1 billing address which is used when billing the Patient. There is no limit to the amount of service addresses a patient can have. [Read more about addresses.](Location.md)
    - *Related Contacts* - This sub grid displays all contacts connected to the Patient. The Patient's primary contacts display first. [Read more about how to connect the Patient to other Contacts.](Connection.md) 
    - *Patient Preferences* - This section does not have to be populated. The information listed here is based on what the Patient prefers. When using the Schedule Assistance tool to find a Practitioner to service a Patient, the filters are populated with the Patient's preferences. I.e. If a Patient speaks English and would like to work with a Practitioner who speaks English, you would populate the 'Preferred Languages' field with 'English'. When a Scheduler matches the Patient to a Practitioner, they would match this Patient with a Practitioner who speaks English.
    - *Documents* - This section is for uploading and accessing Patient documents, such as assessment reports, diagnoses, or consent forms.
    - *Timeline* - This is the last section on this tab. It displays all communication related to the Patient: Emails, calls, appointments, notes, or tasks.
        
- The **Medical Info** tab is for information regarding the Patient's diagnosis and treatment. This tab is didvided into 2 subgrids:
    - *Conditions* - The left sub grid displays the conditions diagnosised to the Patient. [Read more about conditions.](Conditions.md) 
        - Current Conditions - This view only displays the current conditions of a patient. Once the Historical As Of date is populated, the condition is no longer current. 
        - All Conditions - This views displays all the conditions except where the Verification Status is entered in error.
    - *Episode of Care* - The right sub grid displays the episodes of care. Any Patient with an Active Episode of Care cannot be deactivated. [Read more about Episodes of Care.](EpisodeOfCare.md)

- The **Coverage & Auth** tab is for information regarding the Patient's insurance coverage and authorizations. This tab is divided into 2 sub grids:
    - *Coverages* - The top sugrid displays the coverage records from the insurance company. Coverage records are necessary in order to schedule Encounters. [Read more about Coverages.](Coverages.md) 
    - *Authorizations* - The bottom sub grid displays the authorizations receieved from insurance. The authorization includes the coverage record as well as other information needed before scheduling an Encounter. [Read more about Authorizations.](Authorization.md) 
- The **Care Team** tab is for tracking the practitioners who are servicing the Patient. This tab is divided into 2 sub grids:
    - *Care Team Participants* - The left sub grid displays Care team Participants. Care Team Participants track Practitioners who are servicing/have serviced this Patient. [Read more about Care Team Participants.](CareTeamParticipants.md)
    - *Care Team Assignments* - The right sub grid displays the Care Team Assignments. Care Team Assignments track Practitioners who are assigned a utilization of hours for a certain authorization service with the Patient. [Read more about Care Team Assignments.](CareTeamAssignments.md)

- The **Encounters** tab lists the scheduled encounters for the Patient. This tab is divided into 2 sub grids: [Read more about Encounters.](Encounters.md)
    - *Recurring Encounters* - The top sub grid displays encounters that are recurring for a period of time. 
        - All Recurring Encounters - This view displays Recurring Encounters. An Encounter is 'recurring' if the Schedule Type is 'Recurring Encounter'. 
        - Current Recurring Encounters - This view displays Recurring Encounters with related Encounter Occurences with the Status of Active. 
    - *Single Encounters* - This displays individual encounters (encounter occurrences). There are 2 views which display the following columns: Practitioners, Schedule Type, Start Date/Time, Duration, End Date/Time, Location, Service and Status Reason. 
        - All Enounters - This displays all Encounters where the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.
        - Upcoming Encounters - This displays all Encounters where the Start Date/Time is in the future and the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.

- The **Calendar** tab displays the Patient's calendar of Encounter Services scheduled for them. [Read more about Calendars](Calendar.md)

