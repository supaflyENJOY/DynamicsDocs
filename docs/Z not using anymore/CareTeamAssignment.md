---
id: CareTeamAssignment
title: Care Team Assignments
---
# Care Team Assignments

The Care Team Assignments tab has 1 subgrid. This subgrid lists all the Care Team Assignments the Practitioner has.   

:::note
Practitioners who are assigned a care team assignment will be able to schedule and edit sessions for that Patient from the Note app. 

Practitioners who are not assigned will only see sessions scheduled for them in Autism Care, and will only be able to edit the session in Note to the same/shorter duration as the session was originally sceduled in Autism Care.
::: 

The subgrid displays the Patient Name, Authorization Service, Amount of Hours, Frequency, Period Start Date and Period End Date. There are 2 different views available. The default view is 'Current Assignments'. This view is filtered to display Care Team Assignment records related to this Practitioner where the Period End Date is equal to Today or is in the future. The other view is 'All Assignments'. This view displays all Care Team Assignments related to this Practitioner.



## Create a Care Team Assignment

To create a new Care Team Assignments, click 'New Care Team Assignments' on the subgrid. This will open the New Care Team Assignments Quick Create Form.

**Care Team Assignment Information**
- *Patient* - This field is filtered to look up Patient records. After populating the Patient field, the field is locked.  
- *Episode of Care* - Upon populating the Patient field, this field is prepopulated with the Active Episode of Care record related to the Patient. This field is locked when the Patient field has no value.
  - If more than one active Episode of Care record exists, the one most recently created is used.
- *Authorization Service* - This field is filtered to display active Authorization Services related to this patient. This field is locked when the Patient field has no value.
- *Period Start Date* - Upon populating the Authorization Service field, this field is populated with the Start Date from the Authorization Service. 
- *Period End Date* - Upon populating the Authorization Service field, this field is populated with the End Date from the Authorization Service. 

**Assignment Hours**
- *Amount of Hours*
- *Frequency* - Option Set with the values: Hours Per Day, Hours Per Week, Hours Per Month, Hours Per Assignment Period

**Assigned Practitioner**
- *Practitioner* - This field is filtered to look up Practitioner records. Upon navigating from a Practitioner record, this field is hidden and is populated with the Practitioner. Once populated, this field is locked. 
- *Practitioner Role* - This field is filtered to display [Practitioner Roles](PractitionerRoles.md) related to the Practitioner. 
  - If a Practitioner Role is found with a Start Date (Practitioner Role) before the Period Start Date (Care Team Assignment) and the End Date (Practitioner Role) is null or after the Period End Date (Care Team Assignment), this field is prepopulated with the Practitioner Role record related to the Practitioner.
