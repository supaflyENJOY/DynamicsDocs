---
id: BasicInfo
title: Basic Info
---
# Overview

The Practitioner Main Form is divided into different tabs and sections. Every Tab & Section Name reflects the information on that form/section to help a User navigate through creating a Practitioner. Some fields are required to save the Practitioner in the system i.e. First Name, while other fields can be added to the system later on. Any time a field is required a red star will display next to the field. See below. 

<img src ="/img/requiredFields.jpg" width="200"/>

<br>

# Profile Info 
## General Information 

The first step in creating a Practitioner is populating the 'General Information' section. This contains some general information about the Practitioner. 

The fields in the 'General Information' are:
- <span style="color:red"> * </style>First Name
- <span style="color:red"> * </style>Last Name
- Known As
- Date Of Birth
  - <span style="color:navy"> Validation: </style>A User cannot save a Practitioner if the DOB is in the future or if the DOB is 120 years before todays date.
  - Error Message: 
      - If a User populates the DOB field with a DOB in the future, the following error message will display "Birth Date cannot be in the future."
      - If a User populates the DOB field with a DOB 120 years before todays date, the following error message will display "Birth Date cannot be more than 120 years in the past."
- Gender
- Marital Status
- NPI Number

<br>

## Address Information 

Another section which should be populated to properly setup a Practitioner in the system is the 'Address Information' section.

- Street Address
- Apt, Unit, Floor
- City
- State
- Zip Code

<br>

## Contact Information 

The 'Contact Information' section contains all the ways to contact the Practitioner as well as their preferred method of contact.

- Cell Phone
- Home Phone
- Work Phone
- Email Address
- Preferred Contact Method

<br>

## Provider Preferences 

The 'Provider Preferences' section should be populated when a Practitioner has specific preferences regarding what Patient they would like to work with. I.e. If a Practitioner speaks english and would like to work with a Patient who speaks english, the Intake Rep would populate the 'Preferred Languages' field with 'english'. When a Scheduler matches the Practitioner to a Patient, they would match this Practitioner with a Patient who speaks english.  

- Preferred Languages - This field is a multi select option set. Every organization can manage this option set according to their needs. 
- Patient Gender Preference

<br>

## Roles

The 'Roles' section displays all the roles the Practitioner has. I.e. BCBA, Supervisor. The Practitioner's role information is displayed in a grid with the Role Name as well as the Period Start and Period End of the Role. 

### Add New Practitioner Role

To create a new Practitioner Role, click on the 3 dots on the Roles sub grid. This will open up the New Practitioner Role Main Form.
<img src ="static/img/addPractitionerRole.png" width="200"/>

To read more about Practitioner Role, [click here.](PractitionerRoles.md)