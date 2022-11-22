---
id: MedicalInfo
title: Medical Info
---
# Overview

The Medical Info tab contains 2 sub grids with the medical information you need to track about a Patient. 1 sub grid displays the different medical conditions the Patient has been diagnosised with. The other sub grid displays the episodes of care for the Patient. 

 <br />

# Medical Info

## General Information 

The first step in creating a Patient is populating the 'General Information' section. This contains some general information about the Patient. 

The fields in the 'General Information' are:
- * First Name
- * Last Name
- Known As
- Date Of Birth
  - Validation: You cannot save a Practitioner if the DOB is in the future or if the DOB is 120 years before todays date.
  - Error Message: 
    - If you populate the DOB field with a DOB in the future, the following error message will display "Birth Date cannot be in the future." 
    - If you populate the DOB field with a DOB 120 years before todays date, the following error message will display "Birth Date cannot be more than 120 years in the past."
- Gender 

 <br />

## Patient Addresses 

Another section which should be populated to properly setup a Patient in the system is the 'Patient Addresses' section.

### <u> Add New Location </u> 

To create a new Location, click on the 3 dots on the Patient Addresses sub grid. Then click the 'New Location' button. This will open up the New Location Main Form.

<br />

> ### Location
> 
> ### Summary
> ### Address Information 
> The 'Address Information' section contains the basic information to differenciate locations.
>
> - Description - This required field can be populated to give the location a clear name. i.e. Steven's summer home 
> - Location Type - Home, School, Office, Telecare, Other (Required field.)
>  - Address Type - If the Location Type is 'Home' this field must be populated with 'Billing Address' 'Service Address' or both. A Patient can only have 1 address as their 'Billing Address'. 
> - Patient - Once the record is saved, the Patient field locks. 
>
> <br />
> 
> ### Address Details 
> The 'Address Details' section contains the address.
> 
> - Street Address
> - Apt, Unit, Floor
> - City
> - State
> - Zip Code
> - Additional Directions 
 <br />
 <br />

## Related Contacts 

The 'Related Contacts' sub grid displays all the different contacts on file for this Patient i.e. a mother or father. 

### <u> Add New Related Contact </u> 

To create a new Connection, click on the 3 dots on the Related Contacts sub grid. Then click the 'New Related COntact' button. This will open up the New Connection Main Form.

<br />

> ### <u> Connection </u>
> 
> ### Summary
> ### Connect From 
> The 'Connect From' section contains the Patient with whom this contact should be connected to.
>
> - Patient - This field is prepopulated and locked when navigating from the Patient Main Form. It is a required field. 
>
> <br />
> 
> ### Connect To 
> The 'Connect To' section contains the information about the Contact the Patient should be connected to.
> 
> - Related Contact
> - Related To Patient As - This explains the relationship between Contact and Patient. i.e. mother, father, babysitter etc. Many relationships will be in the system, but you can add more connection roles by clicking 'New COnnection Role'. See below for more information. 
> - Patient's Primary Contact? - This can be 'yes' or 'no'. This way the agency will know who to be in contact with about the Patient. 
>
>
> ### <u> Connection Role </u>
>
> ### General 
> ### Description
> - Name 
> - Connection Role Category - This must be set to 'Contact Relationship'.
> - Description
 <br />
 <br />

 <br />

## Patient Preferences 

The 'Patient Preferences' section should be populated when a Patient has specific preferences regarding what Practitioner they would like to work with. I.e. If a Patient speaks english and would like to work with a Practitioner who speaks English, you would populate the 'Preferred Languages' field with 'English'. When a Scheduler matches the Patient to a Practtiioner, they would match this Patient with a Practitioner who speaks English.  

- Preferred Languages - This field is a multi select option set. Every organization can manage this option set according to their needs. 
- Provider Gender Preference
- Case Management Notes

 <br />

## Timeline

The 'Timeline' section displays activities related to this Patient for easy follow-up and tracking. 
By clicking on the '+' sign, all different activities can be performed. i.e. new emails can be created and sent out, new tasks can be assigned, and new notes can be added.    
- Email 
  - From - populated with the current User.
  - To - populated with the Practitioner navigating from. 
- Tasks 
  - Owner - populated with the current User.
  - Regarding - populated with the Practitioner navigating from.
  - Duration - default is set at '30 minutes'.
  - Priority - default is set as 'normal'.
- Notes