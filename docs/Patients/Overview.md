---
id: PatientOverview
title: Overview
---

# Patients

A Patient refers to the client or learner who is serviced by an ABA Provider. The patient profile is where all of a patient’s information is tracked, managed and viewed.

## Create a Patient Contact

There are 3 Contact Forms. The 'Contact Type' field in the header sets the form as either Patient, Practitioner, or Related Person.

The Contact Main Form for a Patient is divided into multiple tabs for an organized view of the complete patient record.

- The **Profile Info** tab is for general patient information, usually collected upon intake. This tab is divided into a few sections:
    - *General Information* - Enter the patient’s legal name in the First Name/Last Name fields, and the name they are called in the Known As field. Date of birth and gender are tracked here as well.
    - *Patient Addresses* - These are the locations this patient will be serviced at, and/or an address for billing and mail communications. Addresses listed here should be specific to the patient whose profile it is added to; locations such as the organization’s office or a school would be added as a general service location in the Setup area. [Read more about addresses](AdminSetup/Location.md). 

    :::note
    The patient’s billing address is used for insurance billing, and should reflect the address that the patient has registered with their insurance. A patient can only have one billing address at any time. 
    :::

    - *Related Contacts* - This is a list of any people that you are in contact with regarding the patient – parent/s, other guardian, school personnel, etc. The Patient's primary contacts display first. [Read more about how to set up a patient's related contacts](Connection.md).
    - *Patient Preferences* - This section lists a patient’s preferences. When using the [Schedule Assistance](Scheduling/ScheduleAssistance.md) tool to find a Practitioner to service a Patient, the filters are populated with the Patient's preferences, and display practitioners who fit these criteria. 
        - Preferred Languages – Select the languages that the patient is comfortable communicating in.
        - Practitioner Gender Preference – if the patient has a preference to the practitioner gender, set it here.
        - Case Management Notes – Enter any current relevant information that can affect the patient's case, so that everyone that opens the patient’s contact record can see it at a glance. It is best to include a date here – either the date this note was entered, or specific dates this note is relevant for.
    - *Documents* - This section is for uploading and accessing Patient documents, such as assessment reports, diagnoses, or consent forms.
    - *Timeline* - This is a running timeline of any communications or interactions with or regarding the patient. Emails, phone calls, encounters, tasks, and notes related to this patient are all tracked here. You can also initiate emails, phone calls, and tasks directly from the timeline, and the details will be automatically populated. Click the ‘+’ button to add a communication log to the timeline.

- The **Medical Info** tab is for information regarding the patient's diagnosis and treatment. This tab is divided into 2 subgrids:
    - *Conditions* - The left subgrid displays the conditions diagnosed to the patient. The conditions added here are included on the claims created for this patient. [Read more about conditions](Conditions.md).
        - Current Conditions - This view only displays the current conditions of a patient. Once the Historical As Of date passed, the condition is no longer current. 
        - All Conditions - This view displays all the conditions except where the Verification Status is entered in error.
    - *Episode of Care* - The right subgrid displays the episodes of care. In order for a patient to be actively serviced, they must have an active episode of care. A patient with an active episode of care cannot be deactivated. [Read more about Episodes of Care](EpisodeOfCare.md).

- The **Coverage & Auth** tab is for information regarding the patient's insurance coverage and authorizations. This tab is divided into 2 sub grids:
    - *Coverages* - The top subgrid displays the patient's coverage records. Coverage records are required in order to enter authorizations and schedule encounters. [Read more about Coverages](Coverages.md).
    - *Authorizations* - The bottom subgrid displays the patient's authorizations. The authorization includes all the services the patient is authorized to receive, and the number of hours or units per service. The authorization is the driving force behind all encounters – the system runs validations on each scheduled encounter to ensure it meets all the requirements of the authorization service and related insurance plan benefit. [Read more about Authorizations](Authorization.md).

- The **Care Team** tab is for tracking the practitioners who are servicing the Patient. This tab is divided into 2 sub grids:
    - *Care Team Participants* - The left subgrid displays Care Team Participants. Care team participants track practitioners who are servicing/have serviced this patient. [Read more about Care Team Participants](CareTeamParticipants.md).
    - *Care Team Assignments* - The right subgrid displays the Care Team Assignments. Care team assignments track practitioners who are assigned a number of hours for a certain authorization service with the patient. [Read more about Care Team Assignments](../Scheduling/CareTeamAssignments).

- The **Encounters** tab lists the scheduled encounters for the patient. This tab is divided into 2 sub grids: 
    - *Recurring Encounters* - The top subgrid displays encounters that are recurring for a period of time. [Read more about Recurring Encounters](../Scheduling/RecurringEncounters.md).
    - *Single Encounters* - The bottom subgrid displays individual encounters (encounter occurrences and single encounters). [Read more about Single Encounters](../Scheduling/SingleEncounters.md). The default view is set to 'Upcoming Encounters' - all Encounters where the Start Date/Time is in the future.

- The **Calendar** tab displays a calendar of the patient’s encounter services  scheduled for them. [Read more about the patient's Calendar](Calendar.md).

## Searching Contacts

Select 'Contacts' on the left navigation bar in the Clinical Area to open the Contact Main Grid. The Contact Main Grid has 3 views related to Patient contacts. All views display the First Name, Last Name, Known As, Date of Birth, Address and Status Reason.  
- Active Patients
    - The Active Patients view displays Patient Contact records that are Active.
- Current Patients
    -  The Current Patients view displays Patient Contact records that are Active and Current. A Patient is considered 'current' if they have an Active [Episode of Care](EpisodeOfCare.md). 
- All Patients
    - The All Patients view displays all the Patients in the system. This includes Active and Inactive records. (This is helpful when a Patient leaves your organization and their record is deactivated but later wants to receive services from you again. You can reactivate their contact record from this view.)

