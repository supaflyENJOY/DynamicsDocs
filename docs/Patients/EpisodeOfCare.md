---
id: EpisodeOfCare
title: Episodes of Care
---

# Episodes of Care 
The Episode of Care is a complete period that a patient is receiving health care. It generally begins with the patient’s referral or expressed interest in care, and ends with their discharge. 

An Episode of Care includes all the services provided to the patient to treat their clinical condition during that time period. Tracked on the Episode of Care record, are the start/end dates that the patient was in each stage of intake and when active services began. 

(Patients in Autism Care usually have just one Episode of Care record, unless they leave the organization and later return to reinitiate services with the organization.)

A patient’s episode of care is automatically created when an opportunity record for that patient is created. Further managing and updating statuses happens on the patient’s profile, using the Episode of Care Status History records.

## Create an Episode of Care

To create a new Episode Of Care, click 'New Episode Of Care' on the Episode Of Care subgrid (on a Patient Contact Form). This will open up the New Episode Of Care Quick Create.

**Episode Of Care Information**
- *Patient*- The Patient field is prepopulated with the Patient you are navigating from, and cannot be edited.
- *Period Start Date* - The Period Start Date cannot be after the Period End Date. 
- *Period End Date*

## Episode Of Care Validation

Episode Of Care Validation ensures the data integrity of Encounters.

1. Period Start Date cannot be modified to be after the start date of any related Encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'.
2. Status Reason cannot be 'Entered in Error' if scheduled or completed Encounters exist.
3. Period End Date cannot be before the end date of any related encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'.

## Episode Of Care History

The Episode Of Care History exists to update the Status Reason of the Episode Of Care and keep track of when the status was updated.

To update the status of an episode of care, click 'New Episode Of Care History' on the Status Updates subgrid (on the Episode Of Care Main Form). This will open up the New Episode Of Care History Quick Create. The system will automatically end the previous status history and populate the end date as one day before the new status began.

**Status Update Information**
- *Status* – select the status that the Episode of Care is being updated to. Options are Planned, Waitlist, Active, or On hold.
- *Start Date* – set the date that this status began or is set to begin.
- *End Date* – can either be set manually, otherwise it is prepopulated based on the start date of a new status.
*** Upon creating a new Episode Of Care History record, the End Date on the previous Episode Of Care History record is set as the day before this Episode Of Care History's Start Date. The previous Episode Of Care History is the record with the latest Start Date and no End Date. 

