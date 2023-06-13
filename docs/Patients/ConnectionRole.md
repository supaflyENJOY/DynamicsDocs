---
id: ConnectionRole
title: Connection Role
---

# Connection Role

Most connection roles should be included in our solution. Upon implementation, additional connection roles may be added. Connection Roles explain the relationship between a contact and a patient. 

## Connection Role Main Grid

Currently, there is no main grid displaying connection role records since no need was expressed. To view all connection role records, utilize Advanced Find (which is OOB from Dynamics.)  

## Connection Role Main Form

When creating a [Connection](Connection.md) record, 1 field is 'Related To Patient As'. This lists out all the possible relationships the contact may have to the Patient. By clicking on 1 of the options or choosing to create a new one, the Connection Role Main Form will open. The Connection Role Main Form has 1 tab to display all information needed. 

- The General tab has 1 section.
    - Description
        - Name (Required). 
        - Connection Role Category - This categories the type of connection.
        - Description

##  Add New Connection Role  

A new connection role record can be created from a [Connection](Connection.md) record. Upon clicking into the 'Related To Patient As' field, select the option 'New Connection Role Record' to open the Connection Role Main Form.

In order to ensure the Connection Role displays in the 'Related To Patient As' field on the Connection Main Form, the 'Connection Role Category' must be set as 'Contact Relationship'. 

##  Edit Connection  

A connection role record can be edited by opening the connection role record. Upon populating the 'Related To Patient As' field and clicking the connection role, the Connection Role Main Form will be opened.