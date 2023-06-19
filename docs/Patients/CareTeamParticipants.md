---
id: CareTeamParticipants
title: Care Team Participants
---

# Care Team Participant 

## Create a Care Team Participant  

To create a new Care Team Participant, click on the 'Add New Care Team Participant' button on the Care Team Participants sub grid (on a Patient Contact Form) to open the Care Team Participants Main Form.

- *Patient* - auto-populated when navigating from a Patient Contact record.
- *Care Team* - auto-populated when navigating from a Patient Contact record.
    - Populated with the most recent Patients's Care Team. 
    - Field is locked until the Patient field is populated.  
- *Practitioner* - Locked on existing record. (Required.)
- *Period Start* - (Required.)
- *Period End* - (Required.)

##  Auto-created Care Team Participants 

A Care Team Participant gives the Practitioner access to the NOTE App for the Patient they work with, therefore we must have a Care Team Participant record active in Autism Care for every Patient the Practitioner that wishes access.

1. Upon creating an Authorization, if the Practitioner is not a Care Team Participant for the Patient, a Care Team Participant record is created for the Practitioner.
2. Upon creating an Authorization, if a Care Team Participant record exists related to the Patient for the Practitioner, the Care Team Participant Period Start & End should be updated:
    - If the Period Start Date from the Authorization is before the existing Care Team Participant 'Period Start', the Period Start is updated to the Start Date from the Authorization.
    - If the Period End Date from the Authorization is after the existing Care Team Participant 'Period End', the Period End is updated to the End Date from the Authorization.
3. Upon creating/updating an Encounter Service, if the Practitioner is not a Care Team Participant for the Patient, a Care Team Participant record is created for the Practitioner.
4. Upon creating/updating an Encounter Service, if a Care Team Participant record exists related to the Patient for the Practitioner, the Period Start & End is updated:
     - If the Period Start Date from the Authorization is before the existing Care Team Participant 'Period Start' the Period Start is updated to the Start Date from the Authorization.
     - If the Period End Date from the Auth is after the existing Care Team Participant 'Period End', the Period End is updated to the End Date from the Authorization.
5. Upon creating/updating a Care Team Assignment, if the Practitioner is not a Care Team Participant for the Patient, a Care Team Participant record is created for the Practitioner.