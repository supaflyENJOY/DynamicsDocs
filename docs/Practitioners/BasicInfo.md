---
id: BasicInfo
title: Overview
---

# Practitioner

A Practitioner refers to the ABA provider who is servicing a client. Autism Care provides simple and easy forms to enable intake representatives to track all necessary information for a Practitioner. 

## Create a Practitioner Contact

There are 2 Contact Main Forms. The "Contact Type" fied in the header sets the form as either Patient, Practitioner, or Related Person.

The Contact Main Form for a Practitioner is divided into multiple tabs for an organized view of the complete Practitioner record.

- The **Profile Info** tab is for general Practitioner Information, usually collected upon intake. This tab is divided into a few sections:
    - *General Information* - This section displays the First Name, Last Name, Known As, Date of Birth, Gender, Marital Status, and NPI Number. The First and Last Name fields are required to save the record.
    - *Address Information* - This section displays the Practitioner's address.
    - *Contact Information* - This section displays the contact information for the Practioner, including Cell Phone, Home Phone, Work Phone, Email Address, and Preferred Contact Method. The Email Address here is the email address the Practitioner will use to access the Note app.
    - *Provider Preferences* - This section does not have to be populated. The information listed here is based on what the Practitioner prefers. When using the Schedule Assistance tool to find a Practitioner to service a Patient, the filters are populated with the Patient's preferences.  
    - *Documents* - This section is for uploading and accessing Practitioner documents, such as resume, photo ID, or I-9 forms.
    - *Roles* - This sub grid displays the Practioner Role for the Practitioner: either BCBA or Behavior Technician. [Read more about Practitioner Roles](PractitionerRoles.md).
    - *Timeline* - This is the last section on this tab. It displays all communication related to the Practitioner: emails, calls, appointments, notes, or tasks.
        
- The **Qualifications** tab is for information regarding the Practitioner's certification to practice. A Practitioner can have multiple qualifications, such as Behavior Technician who gets certified as a BCBA, or a BCBA-LBA.

- The **Care Team Assignments** tab is for assigning a utilization of hours authorized for a certain authorization service to a Practitioner. [Read more about Care Team Assignments](../Scheduling/CareTeamAssignments).

- The **Encounters** tab lists the scheduled encounters for the Practitioner. This tab is divided into 2 sub grids: [Read more about Encounters](../Scheduling/SingleEncounters).
    - *Recurring Encounters* - The top sub grid displays encounters that are recurring for a period of time. 
        - All Recurring Encounters - This view displays Recurring Encounters. An Encounter is 'recurring' if the Schedule Type is 'Recurring Encounter'. 
        - Current Recurring Encounters - This view displays Recurring Encounters with related Encounter Occurences with the Status of Active. 
    - *Single Encounters* - This displays individual encounters (encounter occurrences). There are 2 views which display the following columns: Patients, Schedule Type, Start Date/Time, Duration, End Date/Time, Location, Service and Status Reason. 
        - All Enounters - This displays all Encounters where the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.
        - Upcoming Encounters - This displays all Encounters where the Start Date/Time is in the future and the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.

- The **Calendar** tab displays the Practitioner's calendar of Encounter Services scheduled for them. [Read more about Calendars](Calendar.md).

- The **Payroll** tab is for tracking the Practitioner's contract and payroll information.  This tab is divided into 2 sub grids:
    - *Payroll Items* - The left sub grid displays payroll items for the Practitioner.
        - Payroll Items - Current Payroll Period
        - All Payroll Items
    - *Practitioner Contracts* - The right sub grid displays the Practitioner's contracts. 

## Search Contacts

Select 'Contacts' on the left navigation bar in the Clinical Area to open the Contact Main Grid. The Contact Main Grid has 4 views related to Practitioner contacts. All views display the First Name, Last Name, Known As, Date of Birth, Address and Status Reason.  
- Active Practitioners
    - The Active Practitioners view displays Practitioner Contact records that are Active.
- Active BCBAs
    - The Active BCBAs view displays Practitioner Contact records that are Active and have a [Practitioner Role](PractitionerRoles.md) that is current with the Practitioner Role Code "BCBA."
- Active BTs
    - The Active BTs view displays Practitioner Contact records that are Active and have a [Practitioner Role](PractitionerRoles.md) that is current with the Practitioner Role Code "Behavior Technician."
- All Practitioners
    - The All Practitioners view displays all the Practitioners in the system. This includes Active and Inactive records. (This is helpful when a Practitioner stops servicing clients at your company and their record is deactivated but later wants to continue servicing. You can reactivate their contact record from this view.)


