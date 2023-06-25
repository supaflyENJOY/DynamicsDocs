---
id: CareTeamParticipants
title: Care Team Participant
---

# Care Team Participant
The Care Team Participants section displays a list of all practitioners that are currently servicing the patient. These practitioners have access to view (and for BCBA's to edit) the patient’s care plan, as well as conduct sessions – between the start and end date of the care team participant record. 

##  Auto-created Care Team Participants 
A practitioner is automatically added to a patient’s care team when:
1.	The practitioner is populated on the patient’s authorization. The care team participant start and end dates will be based on the authorization dates.
    - If a care team participant already exists for that Patient/Practitioner combination, the dates of the care team participant will be updated to match the widest date range between all of the authorizations.
2.	An assignment is created for the practitioner. The care team participant start and end dates will be based on the dates on the assignment.
3.	An encounter is scheduled for the practitioner. The care team participant start and end dates will be based on the dates of the authorization.
    - If a care team participant already exists for that Patient/Practitioner combination, the dates of the care team participant will be updated to match the widest date range between all of the authorizations.

A care team participant record can be edited – for example, if the dates need to be extended or shortened. Care team participant records can also be added manually. 

## Create a Care Team Participant  

To create a new Care Team Participant, click on the 'Add New Care Team Participant' button on the Care Team Participants subgrid (on a Patient Contact Form) to open the Care Team Participants Main Form.

- *Patient* - prepopulated when navigating from a Patient Contact record.
- *Care Team* - prepopulated when navigating from a Patient Contact record.
    - Populated with the most recent Patients's Care Team. 
    - Field is locked until the Patient field is populated.  
- *Practitioner* - locked on existing record. 
- *Period Start* - enter the start date the practitioner should have access to the patient's care plan.
- *Period End* - enter the end date the practitioner should have access to the patient's care plan.

