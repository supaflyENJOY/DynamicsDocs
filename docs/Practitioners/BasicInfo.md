---
id: BasicInfo
title: Overview
---

# Practitioners

A Practitioner refers to the ABA provider who is servicing a client. The practitioner profile is where all of a practitioner’s information is tracked, managed and viewed.

## Create a Practitioner Contact

The 'Contact Type' fied in the header sets the form as either Patient, Practitioner, or Related Person.

The Contact Main Form for a Practitioner is divided into multiple tabs for an organized view of the complete practitioner record.

- The **Profile Info** tab is for general practitioner information, usually collected upon intake. This tab is divided into a few sections:
    - *General Information* - This section displays the First Name, Last Name, Known As, Date of Birth, Gender, Marital Status, NPI Number, and Employee ID.
    - *Address Information* - This section displays the practitioner's address.
    - *Contact Information* - This section displays the contact information for the practitioner, including Cell Phone, Home Phone, Work Phone, Email Address, and Preferred Contact Method. The Email Address here is the email address the practitioner will use to access the Note app.
    - *Provider Preferences* - This section does not have to be populated. The information listed here is based on what the practitioner prefers. When using the [Schedule Assistance](../Scheduling/ScheduleAssistance.md) tool to find a practitioner to service a patient, the filters are populated with the patient's preferences.  
    - *Documents* - This section is for uploading and accessing practitioner documents, such as resume, photo ID, or I-9 forms.
    - *Roles* - This subgrid displays the Practioner Role for the practitioner: either BCBA or Behavior Technician. [Read more about Practitioner Roles](PractitionerRoles.md).
    - *Timeline* - This is the last section on this tab. It displays all communication related to the practitioner: emails, calls, appointments, notes, or tasks.
        
- The **Qualifications** tab is for information regarding the practitioner's certification to practice. A practitioner can have multiple qualifications, such as a Behavior Technician who gets certified as a BCBA, or a BCBA-LBA.

- The **Care Team Assignments** tab is for assigning a utilization of hours authorized for a certain authorization service to a practitioner. [Read more about Care Team Assignments](../Scheduling/CareTeamAssignments).

- The **Encounters** tab lists the scheduled encounters for the practitioner. This tab is divided into 2 sub grids: 
    - *Recurring Encounters* - The top subgrid displays encounters that are recurring for a period of time. [Read more about Recurring Encounters](../Scheduling/RecurringEncounters.md).
    - *Single Encounters* - The bottom subgrid displays individual encounters (encounter occurrences). [Read more about Single Encounters](../Scheduling/SingleEncounters.md). The default view is set to 'Upcoming Encounters' - all Encounters where the Start Date/Time is in the future and the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.

- The **Calendar** tab displays the practitioner's calendar of encounter services scheduled for them. [Read more about the practitioner's Calendar](Calendar.md).

- The **Payroll** tab is for tracking the practitioner's contract and payroll information.  This tab is divided into 2 sub grids:
    - *Payroll Items* - The left subgrid displays payroll items for the practitioner. The default view is set to 'Payroll Items - Current Payroll Periods' - all payroll items in the open payroll period. [Read more about Payroll Items](../Payroll/PayrollItems.md).
    - *Practitioner Contracts* - The right subgrid displays the [Practitioner's contracts](../Payroll/Contracts.md). 

## Search Contacts

Select 'Contacts' on the left navigation bar in the Clinical Area to open the Contact Main Grid. The Contact Main Grid has 4 views related to Practitioner contacts. All views display the First Name, Last Name, Known As, Date of Birth, Address and Status Reason.  
- Active Practitioners
    - The Active Practitioners view displays Practitioner Contact records that are Active.
- Active BCBAs
    - The Active BCBAs view displays Practitioner Contact records that are Active and have a [Practitioner Role](PractitionerRoles.md) that is current with the Practitioner Role Code 'BCBA.'
- Active BTs
    - The Active BTs view displays Practitioner Contact records that are Active and have a [Practitioner Role](PractitionerRoles.md) that is current with the Practitioner Role Code 'Behavior Technician.'
- All Practitioners
    - The All Practitioners view displays all the Practitioners in the system. This includes Active and Inactive records. (This is helpful when a Practitioner stops servicing clients at your organization and their record is deactivated but later wants to continue servicing. You can reactivate their contact record from this view.)


