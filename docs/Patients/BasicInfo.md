---
id: BasicInfo
title: Basic Info
---
# Overview

The Patient Main Form is divided into different tabs and sections. Every Tab & Section Name reflects the information on that form/section to help you navigate through creating a Practitioner. Some fields are required to save the Practitioner in the system i.e. First Name, while other fields can be added to the system later on. Any time a field is required a red star will display next to the field. See below. 

<img src ="/static/img/requiredFields.jpg" width="500"/>

 <br />

# Profile Info 

## Header
The header contains the Contact Type and the Owner. 

- Contact Type 
  - Upon changing the Contact Type, the form will change. 
  - Contact Type options - Patient, Practitioner, Related Person. 
- Owner

 <br />

## General Information 

The first step in creating a Patient is populating the 'General Information' section. This contains some general information about the Patient. 

The fields in the 'General Information' are:
- * First Name
- * Last Name
- Known As
- Date Of Birth
  - Validation: You cannot save a Practitioner if the DOB is in the future or if the DOB is 120 years before todays date.
  - Error Message: 
    - If you populate the DOB field with a DOB in the future, the following error message will display "Birth Date cannot be in the future." <br />
 <img src ="/static/img/DOBError.jpg" width="500"/> <br />
    - If you populate the DOB field with a DOB 120 years before todays date, the following error message will display "Birth Date cannot be more than 120 years in the past."
- Gender 

 <br />

## Patient Addresses 

Another section which should be populated to properly setup a Patient in the system is the 'Patient Addresses' section.

LOCATIONS

 <br />

## Related Contacts 

The 'Contact Information' section contains all the ways to contact the Practitioner as well as their preferred method of contact.

CONNECTIONS

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
<img src ="/static/img/Timeline.jpg" width="500"/>