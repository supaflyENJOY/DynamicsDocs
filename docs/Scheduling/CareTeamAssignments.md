---
id: CareTeamAssignments
title: Care Team Assignment
---

# Care Team Assignments 
To enable practitioners to self-schedule their sessions in the Note app, you can assign a practitioner a total number of hours per week/month/period of a certain service. Based on the care team assignments, practitioners will have access to schedule sessions for those patients in the Note app and the sessions will be validated against the care team assignment.

:::note
Practitioners who are given a care team assignment for a patient will only see the patient's sessions scheduled for them in Autism Care, and will only be able to edit the session in Note to the same/shorter duration as the session was originally sceduled in Autism Care.
::: 

## Create a Care Team Assignment
To create a new Care Team Assignments:
1. Click the 'New' button on the Care Team Assignments Main Grid to open the Care Team Assignment Main Form.
2. Click the 'Add New Care Plan Activity' button on the Care Team Assignments sub grid (on a Patient Contact Form) to open the Care Team Assignment Quick Create.

<img src ="/img/careTeamAssignmentSubgrid.jpg" width="900"/>

**Care Team Assignment Information**
- *Patient* - pre-populated with the Patient navigating from.
- *Episode of Care* - pre-populated with current Episode of Care for this Patient.
- *Authorization Service* - select the authorization service this assignment is based on. This will ensure that the assignment (together with all other assignments for this authorization service) is not going over the maximum authorized hours.
- *Period Start Date* - pre-populated with Authorization Service Start Date and can be changed if necessary.. The Period Start Date of the Care Team Assignment cannot be before the Start Date on the related Authorization Service.
- *Period End Date* - pre-populated with Authorization Service End Date and can be changed if necessary. The Period End Date of the Care Team Assignment cannot be before the Start Date on the related Authorization Service.

**Assigned Practitioner**
- *Practitioner* - select the practitioner you are assigning these hours to. This field is locked after the Care Team Assignment is saved.
- *Practitioner Role* - auto-populated as the active practitioner role for the practitioner selected above and can be changed if necessary.

**Assignment Hours**
- *Amount of Hours* - enter the number of hours being assigned to this practitioner for this service.
- *Frequency* - select the frequency that the amount of hours above can be scheduled at (Hours Per Day, Hours Per Week, Hours Per Month, Hours Per Assignment Period).

**Related Encounters** 
The Related Encounters tab displays 2 sub grids, 1 for recurring enounters and 1 for single encounters. [Read more about Encounters](SingleEncounters).

Name - The Name field is set as the Patient then the Practitioner then the Healthcare Service followed by the Period Start Date and Period End Date. E.g. Alice Smith - John Doe - Direct Treatment - 6/1/2021 - 11/30/2021. The Name is set when the Care Team Assignment is created or when the Practitioner field or either Date field are updated. 

When a care team assignment is created, the practitioner is added to the ‘Care Team Participants’ sub-grid.

Once there are related Encounter Services created against a Care Team Assignment, following fields are locked to prevent the Encounter Service from becoming invalid.
- Authorization Service
- Period Start Date
- Amount of Hours
- Frequency

If needed, update the end date on this record, and create a new Care Team Assignment with the updated information.

## Search Care Team Assignments

Click on 'Care Team Assignments' on the left navigation bar in the Clinical Area of the sitemap to open the Care Team Assignments Main Grid. The Care Team Assignments Main Grid has 3 different views.
- All Care Team Assignments (default)
    - The All Care Team Assignments view displays all the Care Team Assignment records in the system. The view is sorted by the Period Start Date with the newer dates displaying first. 
- Current Care Team Assignments
    - The Current Care Team Assignments view displays Care Team Assignment records in the system where the Period End Date is in the future. The view is sorted by the Period Start Date with the newer dates displaying first. 
- Expiring Care Team Assignments 
    - The Expiring Care Team Assignments view displays Care Team Assignments records in the system where the Period End Date is in the next 30 days. The view is sorted by the Period End Date with the older dates displaying first.