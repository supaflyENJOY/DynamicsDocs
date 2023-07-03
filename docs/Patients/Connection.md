---
id: Connection
title: Connections
---

# Connection 
A connection record specifies the relationship between 2 other records (e.g. a Related Contact to a Patient Contact).

## Create a Connection

A new connection record can be created from a Patient Contact record. The Profile Info tab has a section called 'Related Contacts'. Clicking on the 3 dots on the Related Contacts subgrid, displays a few options. Upon clicking 'New Related Contact', the Connection Main Form opens.

**Connect From**
- *Patient*: Upon creating a Connection from the Related Contacts subgrid on a Patient Contact Form, this field is populated with the Patient navigating from and cannot be changed. 

**Connect To** - This section lists information about the Contact that should be related to the Patient:
- *Related Contact*: select an existing Related Contact record, if it already exists (e.g., a Parent Related Contact that is already in the system from when you serviced this Patient's sibling). Otherwise, create a new contact record.
    - Contact Type – ‘Related Person’ is selected by default.
    - General Information – Enter the name, gender, and marital status of the contact person.
    - Contact Information – enter phone numbers, email address, and preferred contact method.
    Once the record is saved it is automatically selected as the ‘Related Contact’ on the connection record.
- *Related To Patient As* - This field is populated with the relationship between contact and patient (e.g. mother, father, babysitter etc.). This field only displays connection roles that are a 'contact relationship'. See [connection roles](#2). 
- Patient's Primary Contact? - This field has 2 options: Patient's Primary Contact or Other Related Contact. This helps a company know who to be in touch with about the Patient. 

## Connection Role {#2}

Most connection roles should be included in our solution. Upon implementation, additional connection roles may be added. Connection Roles explain the relationship between a contact and a patient. 

A new connection role record can be created from a Connection record. Upon clicking into the 'Related To Patient As' field, select the option 'New Connection Role Record' to open the Connection Role Main Form.
- *Name* (Required). 
- *Connection Role Category* - This categories the type of connection.
- *Description*

In order to ensure the Connection Role displays in the 'Related To Patient As' field on the Connection Main Form, the 'Connection Role Category' must be set as 'Contact Relationship'. 

