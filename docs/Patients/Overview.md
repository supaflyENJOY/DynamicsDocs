---
id: PatientOverview
title: Overview
---

# Patient

In our system a Patient refers to the learner or student who is served by an ABA Provider. Our PMS can keep track of anything needed for the Patient. The Intake Rep has simple and easy forms enabling them to enter the necessary information. 

## Contact Main Grid

By clicking on 'Contacts' on the left navigation bar in the Clinical Area, the Contact Main Grid will open up. The Contact Main Grid has a few different views which display Contact records. There are 3 views related to Patients. 
- Active Patients
    - The Active Patients view displays Patient Contact records that are Active. The view displays the First Name, Last Name, Known As, Date of Birth and Address. These are fields most companies find helpful to differentiate between Patients. 
- Current Patients
    -  The Current Patients view displays Patient Contact records that are Active and Current. A Patient is considered 'current' if they have an Active Episode of Care. The view displays the First Name, Last Name, Known As, Date of Birth and Address. These are fields most companies find helpful to differentiate between Patients.
- All Patients
    - The All Patients view displays all the Patients in the system. This includes Active and Inactive records. (This is helpful when a Patient leaves your company and their record is deactivated but later wants to receive services from you again, you can reactivate their contact record from this view.) The view displays the First Name, Last Name, Known As, Date of Birth, Address and Status Reason. These are fields most companies find helpful to differentiate between Patients.


## Contact Main Form

By selecting a record from the Contact Main Grid, the Contact Main Form will open. The Contact Main Form for a Patient has a few tabs to display all information needed. 
- There is a Profile Info tab with the general patient information including Name, DOB, Address, patient preferances etc. 
    - This tab is divided into a few sections:
        - General Information - This contains the First Name, Last Name, Known As, Date of Birth and Gender. The First and Last Name fields are required to save the record. To help eliminate error, the DOB field has a validation which blocks saving the record if the DOB is a date in the future or a date too far in the past. 
            - Error Message: 
                - If you populate the DOB field with a DOB in the future, the following error message will display "Birth Date cannot be in the future." 
                - If you populate the DOB field with a DOB 120 years before todays date, the following error message will display "Birth Date cannot be more than 120 years in the past."
        - Patient Addresses - This section displays all the addresses related to this Patient in a card form. The address can be a billing address or a service address. The Patient can only have 1 billing address which is used when billing the Patient. There is no limit to the amount of service addresses a patient can have. When scheduling an Encounter, the Location field is filtered to display addresses related to this Patient and general addresses i.e. a school where multiple Patients are serviced. To read more about addresses, [click here.](Location.md)
        - Related Contacts - This sub grid displays all contacts connected to the Patient. The first column, Patients Primary Contact, is used to sort the sub grid. The Patients primary contacts display first. The columns listed after are: Full Name, Role, Preferred Conact Method, Home Phone, Mobile Phone and Email. To read more about how to connect the Patient to other Contacts, [click here.](Connection.md) 
        - Patient Preferences - This section does not have to be populated. The information listed here is based on what the Patient prefers. When using the Schedule Assistance tool to find a Practitioner to service a Patient, we populate the filters with the Patients preferences. I.e. If a Patient speaks english and would like to work with a Practitioner who speaks English, you would populate the 'Preferred Languages' field with 'English'. When a Scheduler matches the Patient to a Practitioner, they would match this Patient with a Practitioner who speaks English. Currently, the important preferences are: Preferred Language, Provider Gender Preference and Case Management Notes. The Preferred Languages field can be managed by an organizations needs. 
        - Timeline - This is the last section on this tab. It displays all communication related to the Patient. I.e. emails, calls, appointments, notes, etc.
        
- The next tab is called Medical Info. This displays 2 sub grids side by side. 
    - Conditions - The left sub grid displays the conditions diagnosised to the Patient. To read more about conditions, [click here.](Conditions.md) 
        - There are 2 views. Both views display the following columns: Condition Code, Onset and Clinical Status. 
            - Current Conditions - This view only displays the current conditions of a patient. Once the Historical As Of date is populated, the condition is no longer current. This view also excludes any condition where the Verification Status is entered in error.
            - All Conditions - This views displays all the conditions except where the Verification Status is entered in error.
    - Episode of Care - The right sub grid displays the episodes of care. It displays the Status, Period Start Date and Period End Date. Any Patient with an Active EOC cannot be deactivated. To read more about Episode of Care, [click here.](EpisodeOfCare.md)

- The next tab is the Coverage & Auth tab. This tab displays 2 sub grids as well, but 1 on top of the next. 
    - The Coverages sub grid is on top. This displays the coverage records from the insurance company. We must have a coverage record to schedule Encounters. The columns displayed here are: Name, Beneficiary (Patient), Policy Start Date, Policay End Date and Plan. To read more about Coverages, [click here.](Coverages.md) 
    - The Authorizations sub grid displays the authorization receieved from insurance. The authorization includes the coverage record as well as other information needed before scheduling an Encounter. The columns displayed on the grid are: Plan (Coverage), Patient Name, Authorization Number, Period Start Date, Period End Date and Status Reason. To read more about Authorization, [click here.](Authorization.md) 
- The next tab is called Care Team. This has 2 sub grids 1 which lists the Providers working with the Patient and the other with Care Team Assignments. These sub grids are side by side. 
    - Care Team Participants - Practitioners who are working/have worked with this Patient. This sub grid displays in a card form so only the Practitioner name is displayed. To read more about the Care Team Participants, [click here.](CareTeamParticipants.md)
    - Care Team Assignments - The right sub grid displays the Care Team Assignments. This is used to relate a Practitioner to an Authorization Service. To read more about Care Team Assignments, [click here.](CareTeamAssignments.md)
        - There are 2 views:
            - Current Care Team Assignments - This displays Care Team Assignments where the Period End Date is in the future and the status is active. The columns are Practitioner, Authorization Service, Amount of Hours, Frequency, Period Start Date and Period End Date.
            - All Care Team Assignments - This displays Care Team Assignments where the status is active. The columns are Practitioner, Authorization Service, Amount of Hours, Frequency, Period Start Date, Period End Date and Status Reason.

- The next tab, the Encounters tab, lists the scheduled encounters for the patient divided into 2 grids. 1 for recurring enounters and 1 for single encounters. To read more about Encounters, [click here.](Encounters.md)
    - Recurring Encounters - This displays encounters that are recurring for a period of time. There are 2 views which display the following columns: Practitioners, Start Date/Time, Duration, End Date/Time, Repeat, Location, Service and Status Reason. 
        - All Recurring Encounters - This view displays Recurring Encounters. An Encounter is 'recurring' if the Schedule Type is 'Recurring Encounter'. 
        - Current Recurring Encounters - This view displays Recurring Encounters with related Encounter Occurences with the Status of Active. 
    - Single Encounters/ Encounter Occurrences - This displays encounters that only happen once. There are 2 views which display the following columns: Practitioners, Schedule Type, Start Date/Time, Duration, End Date/Time, Location, Service and Status Reason. 
        - All Enounters - This displays all Encounters where the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.
        - Upcoming Encounters - This displays all Encounters where the Start Date/Time is in the future and the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.

- The last tab is the Calendar tab. This displays the Patients calendar with the Encounter Services scheduled for them. To read more about Calendars, [click here.](Calendar.md)

--Patient availability--

