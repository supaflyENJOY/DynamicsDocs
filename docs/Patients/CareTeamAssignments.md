---
id: CareTeamAssignments
title: Care Team Assignments
---

# Care Team Assignments 

## Care Team Assignments Main Grid

By clicking on 'Care Team Assignments' on the left navigation bar in the Clinical Area, the Care Team Assignments Main Grid will open up. The Care Team Assignments Main Grid has 3 different views.
- All Care Team Assignments (default)
    - The All Care Team Assignments view displays all the Care Team Assignment records in the system. The view displays the Patient, Practitioner, Authorization Service, Amount of Hours, Frequency, Period Start Date, Period End Date and Status Reason. The view is sorted by the Period Start Date with the newer dates displaying first. 
- Current Care Team Assignments
    - The Current Care Team Assignments view displays Care Team Assignment records in the system where the Period End Date is in the future. The view displays the Patient, Practitioner, Authorization Service, Amount of Hours, Frequency, Period Start Date, Period End Date. The view is sorted by the Period Start Date with the newer dates displaying first. 
- Expiring Care Team Assignments 
    - The Expiring Care Team Assignments view displays Care Team Assignments records in the system where the Period End Date is in the next 30 days. The view displays the Name, Patient, Practitioner, Period Start Date, Period End Date, AMount of Hours and Frequency.


## Care Team Assignments Main Form

By opening a Care Team Assignments record on the Patient Contact Form, the Care Team Assignments Main Form will open. The Care Team Assignments Main Form has 2 tabs to display all information needed. 

- The Summary tab has a few sections.
    - Care Team Assignment Information
        - Patient - Locked on existing record. (Required.)
        - Episode of Care - (Required.)
        - Authorization Service - (Required.)
        - Period Start Date - (Required.)
        - Period End Date - (Required.)
    - Assigned Practitioner
        - Practitioner - Locked on existing record. (Required.)
        - Practitioner Role
    - Assignment Hours
        - Amount of Hours - (Required.)
        - Frequency - (Required.)
- The Related Encounters tab displays 2 sub grids, 1 for recurring enounters and 1 for single encounters. To read more about Encounters, click here. 
    - Recurring Encounters - This view displays encounters that are recurring for a period of time. It displays the following columns: Practitioners, Patients, Related Persons, Start Date/Time, Duration, End Date/Time, Repeat, End, Location, Service and Status Reason. The view is sorted by the Start Date in ascending order. 
    - Single Encounters/ Encounter Occurrences - This displays encounters that only happen once. There are 2 views which display the following columns: Practitioners, Patients, Related Persons, Start Date/Time, Duration, End Date/Time, Location, Service and Status Reason. 
        - All Enounters - This displays all Encounters where the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.
        - Upcoming Encounters - This displays all Encounters where the Start Date/Time is in the future and the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.
- Header
    - Status Reason - (Required.)
    - Owner - (Required.)
- Name - The Name field is set as the Patient then the Practitioner then the Healthcare Service followed by the Period Start Date and Period End Date. I.e. Avrohom Tzvi Schwartz - Yossi Weiss - Direct Treatment - 6/1/2021 - 11/30/2021. The Name is set when the Care Team Assignment is created or when the Practitioner field or either Date field are updated. 

## <u> Add New Care Team Assignments </u> 

To create a new Care Team Assignments, click on the 'Add New Care Team Assignments' button on the Care Team Assignmentss sub grid (on a Patient Contact Form) to open the Care Team Assignmentss Main Form.

When navigating from a Patient Contact record, the following fields are pre-populated:
- Patient - Populated with the Patient navigating from.
- Care Team 
    - Populated with the most recent Patients's Care Team. 
    - Field is locked until the Patient field is populated.  

## <u> Edit Care Team Assignmentss </u> 

To edit a Care Team Assignments, click on a record from the Care Team Assignmentss sub grid (on a Patient Contact Form) to open the Care Team Assignmentss Main Form. 

## <U> Auto-created Care Team Assignmentss </u>

A Care Team Assignments gives the Practitioner access to the NOTE App for the Patient they work with, therefore we must have a Care Team Assignments record active in Autism Care for every Patient the Practitioner that wishes access.

1. Upon creating an Authorization, if the Practitioner is not a Care Team Assignments for the Patient, a Care Team Assignments record is created for the Practitioner.
2. Upon creating an Authorization, if a Care Team Assignments record exists related to the Patient for the Practitioner, the Care Team Assignments Period Start & End should be updated:
    - If the Period Start Date from the Authorization is before the existing Care Team Assignments 'Period Start', the Period Start is updated to the Start Date from the Authorization.
    - If the Period End Date from the Authorization is after the existing Care Team Assignments 'Period End', the Period End is updated to the End Date from the Authorization.
3. Upon creating/updating an Encounter Service, if the Practitioner is not a Care Team Assignments for the Patient, a Care Team Assignments record is created for the Practitioner.
4. Upon creating/updating an Encounter Service, if a Care Team Assignments record exists related to the Patient for the Practitioner, the Period Start & End is updated:
     - If the Period Start Date from the Authorization is before the existing Care Team Assignments 'Period Start' the Period Start is updated to the Start Date from the Authorization.
     - If the Period End Date from the Auth is after the existing Care Team Assignments 'Period End', the Period End is updated to the End Date from the Authorization.