---
id: CareTeamParticipants
title: Care Team Participants
---

# Care Team Participant 

## Care Team Participant Main Grid

Currently, there is no main grid displaying Care Team Participant records since no need was expressed. To view all Care Team Participant s records, utilize Advanced Find (which is OOB from Dynamics.)  

## Care Team Participant Main Form

By opening a Care Team Participant record on the Patient Contact Form, the Care Team Participant Main Form will open. The Care Team Participant Main Form has 1 tab to display all information needed. 

- The Summary tab has 1 section.
    - Care Team Participant Information
        - Patient - Locked on existing record. (Required.)
        - Practitioner - Locked on existing record. (Required.)
        - Care Team
        - Period Start - (Required.)
        - Period End - (Required.)
- Header
    - Status Reason
    - Owner
- Name - The Name is set as the Practitioner then the Patient followed by the Period Start and Period End. I.e. Alex Medick - Theresa Streich - 5/30/2022 - 6/3/2022. 

##  Add New Care Team Participant  

To create a new Care Team Participant, click on the 'Add New Care Team Participant' button on the Care Team Participants sub grid (on a Patient Contact Form) to open the Care Team Participants Main Form.

When navigating from a Patient Contact record, the following fields are pre-populated:
- Patient - Populated with the Patient navigating from.
- Care Team 
    - Populated with the most recent Patients's Care Team. 
    - Field is locked until the Patient field is populated.  

##  Edit Care Team Participants  

To edit a Care Team Participant, click on a record from the Care Team Participants sub grid (on a Patient Contact Form) to open the Care Team Participants Main Form. 

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