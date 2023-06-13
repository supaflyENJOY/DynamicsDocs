---
id: CareTeamAssignments
title: Care Team Assignments
---

# Care Team Assignments 

Care Team Assignments are used by Care Coordinators for the following:
- Scheduling, viewing and editing sessions between Practitioners and Patients.
- Tracking assignments between Practitioner and Patient.
- Recording amount of hours and frequency assigned.

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
        - Episode of Care - Only displays Episodes of care related to the patient. (Required.)
        - Authorization Service - Only displays Active Authorization Services related to the Patient. (Required.)
        - Period Start Date - Auto-populated with Authorization Service Start Date. To help prevent error, we have a validation on this field. The Period Start Date of the Care Team Assignment cannot be before the Start Date on the related Authorization Service. (Required.)
        - Period End Date - Auto-populated with Authorization Service End Date. To help prevent error, we have a validation on this field. The Period End Date of the Care Team Assignment cannot be before the Start Date on the related Authorization Service.(Required.)
    - Assigned Practitioner
        - Practitioner - Locked on existing record. (Required.)
        - Practitioner Role - (Required.)
    - Assignment Hours
        - Amount of Hours - (Required.)
        - Frequency - Hours Per Day, Hours Per Week, Hours Per Month, Hours Per Assignment Period. (Required.)
- The Related Encounters tab displays 2 sub grids, 1 for recurring enounters and 1 for single encounters. To read more about Encounters, click here. 
    - Recurring Encounters - This view displays encounters that are recurring for a period of time. It displays the following columns: Practitioners, Patients, Related Persons, Start Date/Time, Duration, End Date/Time, Repeat, End, Location, Service and Status Reason. The view is sorted by the Start Date in ascending order. 
    - Single Encounters/ Encounter Occurrences - This displays encounters that only happen once. There are 2 views which display the following columns: Practitioners, Patients, Related Persons, Start Date/Time, Duration, End Date/Time, Location, Service and Status Reason. 
        - All Enounters - This displays all Encounters where the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.
        - Upcoming Encounters - This displays all Encounters where the Start Date/Time is in the future and the Schedule Type is 'Single Encounter' or 'Encounter Occurrence'.
- Header
    - Status Reason - (Required.)
    - Owner - (Required.)
- Name - The Name field is set as the Patient then the Practitioner then the Healthcare Service followed by the Period Start Date and Period End Date. I.e. Avrohom Tzvi Schwartz - Yossi Weiss - Direct Treatment - 6/1/2021 - 11/30/2021. The Name is set when the Care Team Assignment is created or when the Practitioner field or either Date field are updated. 

##  Add New Care Team Assignments  

1. Clicking the 'New' button on the Care Team Assignments Main Grid will open the Care Team Assignment Main Form.
2. Clicking on the 'Add New Care Plan Activity' button on the Care Team Assignments sub grid (on a Patient Contact Form) will to open the Care Team Assignment Quick Create.


### Care Team Assignment Quick Create

- Care Team Assignment Information
    - Patient - Populated with the Patient navigating from. Field is locked. (Required.)
    - Episode of Care - Pre-populated with current Episode of Care. (Only displays Episodes of Care related to the Patient.) (Required.)
    - Authorization Service - (Required.)
    - Period Start Date - (Required.)
    - Period End Date - (Required.)
    - Assigned Practitioner
        - Practitioner - Locked on existing record. (Required.)
        - Practitioner Role - (Required.)
    - Assignment Hours
        - Amount of Hours - (Required.)
        - Frequency - (Required.)

##  Edit Care Team Assignments  

To edit a Care Team Assignments, click on a record from the Care Team Assignments sub grid (on a Patient Contact Form) to open the Care Team Assignmentss Main Form. 

Once their are related Encounter Service created against the Care Team Assignment, following fields are locked:
- Authorization Service
- Period Start Date
- Amount of Hours
- Frequency

A Message is displayed on the top of the form stating:

"Fields are locked to prevent the related Encounter Service from becoming invalid. If needed, update the end date on this record, and create a new Care Team Assignment with the updated information."