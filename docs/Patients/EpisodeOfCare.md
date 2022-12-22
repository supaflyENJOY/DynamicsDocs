---
id: EpisodeOfCare
title: Episode Of Care
---

# Episode Of Care 

## Episode Of Care Main Grid

Currently, there is no main grid displaying Episode Of Care records since no need was expressed. To view all Episode Of Care records, utilize Advanced Find (which is OOB from Dynamics.)   

## Episode Of Care Main Form

By selecting a record from the Episode Of Care sub grid (on a Patient Contact Form), the Episode Of Care Main Form will open. The Episode Of Care Main Form has 1 tab to display all information needed. 

- The Summary tab is made up of 2 sections.
    - Episode Of Care Information
        - Patient
        - Period Start Date - The Period Start Date cannot be after the Period End Date. 
        - Period End Date
- Header: 
    - Status Reason - The Status Reason cannot be edited. To change the Status Reason, create a new Episode Of Care History record from the Status Updates sub-grid on the form. Read more below. 
- Name - The Name is set as the Patient Name followed by the Start Date and then the End Date. The Name field is set when any of those fields are updated.

## <u> Add New Episode Of Care </u> 

To create a new Episode Of Care, click on the 'Add New Episode Of Care' button on the Episode Of Care sub grid (on a Patient Contact Form). This will open up the New Episode Of Care Quick Create.

*** The Patient field is prepopulated and locked with the Patient navigating from.

*** The Status Reason can be populated with 1 of the following values: Active, Planned, Wait List, On-Hold, Cancelled or Finished. 

## <u> Edit Episode Of Care </u> 

To edit an Episode Of Care, select an Episode Of Care record from the Episode Of Care sub grid (on a Patient Contact Form). This will open up the Episode Of Care Main Form.

*** The Patient field cannot be edited. 

### Episode Of Care Validation

Episode Of Care Validation ensures the data integrity of Encounters.

1. Period Start Date cannot be modified to be after the start date of any related Encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'.
2. Status Reason cannot be "Entered in Error" if a scheduled or completed Encounters exist.
3. Period End Date cannot be before the end date of any related encounters with a Validation Status of 'Passed', or a Care Team Assignment with a Status Reason of 'Active'.

<br />

# Episode Of Care History

The Episode Of Care History exists to update the Status Reason of the Episode Of Care and keep track of when the status was updated.

## Episode Of Care History Main Form

By selecting a record from the Status Updates sub grid (on an Episode Of Care), the Episode Of Care History Main Form will open. The Episode Of Care History Main Form has 1 tab to display all information needed. 

- The Summary tab has 1 section.
    - Status Update Information
        - Status - Planned, Waitlist, Active, On Hold. (Required.)
        - Start Date - (Required.)
        - End Date

## <u> Add New Episode Of Care History</u> 

To create a new Episode Of Care History, click on the 'Add New Episode Of Care History' button on the Status Updates sub grid (on the Episode Of Care Main Form). This will open up the New Episode Of Care History Quick Create.

*** The Status and Start Date are required.

*** Upon creating a new Episode Of Care History record, the End Date on the previous Episode Of Care History record is set as the day before this Episode Of Care History's Start Date. The previous Episode Of Care History is the record with the latest Start Date and no End Date. 

## <u> Edit Episode Of Care History</u> 

To edit an Episode Of Care History, select an Episode Of Care History record from the Status Updates sub grid (on the Episode Of Care Main Form). This will open up the Episode Of Care History Main Form.

### Episode Of Care Validation

1. Start Date cannot be before the Period Start Date on the related Episode Of Care record.
2. Start Date cannot be after the Period End Date on the related Episode Of Care record.
3. End Date cannot be before the Period End Date on the related Episode Of Care record.
