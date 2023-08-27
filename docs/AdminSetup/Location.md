---
id: Location
title: Locations
---

# Locations
Locations are for tracking any addresses relevant to your organization, such as offices, schools, patient billing addresses, and more. 

## Create a Location

A new Location record can be created from a few places. 
1. Clinical Area - When on a [Patient](Patients/Overview.md) Contact record, the Profile Info tab has a section called 'Patient Addresses'. Clicking on the 3 dots on the Patient Addresses subgrid, displays a few options. Upon clicking 'New Location', the Location main form opens, and a new address can be added to the patient’s profile.
2. Setup Area - The setup area has a group called 'Services Setup' with Locations listed. Upon clicking 'New Locations' in the main view, the Location main form opens.

The **Address Information** section contains the basic information to differentiate locations. This section has the following fields. 
- *Description* - This field can be populated to give the location a clear name for easy reference (e.g., Steven's summer home). 
:::note
The Location Description is displayed on a practitioner's session details view in the Note app.
:::
- *Location Type* - This field defines the location type – home, school, office, or other. On the claim, the location code will be based on the value in this field, for all encounters taking place at this address.
    - *Address Type* - If the Location Type is 'Home,' the address type must be specified as 'Billing Address', 'Service Address' or both. A Patient can only have 1 address as their 'Billing Address' at any time.
- *Patient* - This field defines the patient this address is related to. This address will display as an encounter location option when an encounter is scheduled for this patient. If this Location is a general location (e.g., a school), where numerous patients are serviced, this field would be left empty. 
    - When ‘Home’ is selected as the ‘Location Type’, this field becomes required.
    - Once the record is saved, the Patient field locks and cannot be changed.

The **Address Details** section contains the address. The *Additional Directions* field can be used to record any directions that will help practitioners find their way easily (e.g., "first door on the right side of the house").  

## Search Locations

Select 'Location' on the left navigation bar in the Setup Area to open the Location Main View. The **General Service Locations** view displays active Locations which are not related to a Patient record. The **All Service Locations** view displays all the active Locations in the system.