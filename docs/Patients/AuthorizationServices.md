---
id: AuthorizationServices
title: Authorization Service
---

# Authorization Services 

## Authorization Service Main Form
By selecting a record from the Authorization Services sub grid (on an Authorization Form) or from the expanded Authorization Main Grid, the Authorization Service Main Form will open. The Authorization Service Main Form has 1 tab to display all information needed. 

The Summary tab has a few sections.
- Authorization Service Information
    - Authorization Name
    - Service Code
    - Start Date
    - End Date
- Claim Settings - This section displays fields related to billing Claims. Read more below. 
    - Rendering Provider - This field determines who should be used as the Rendering Provider for billing. Every Payer has their rules about which provider should be on the Claim Line as the Rendering Provider. Therefore, we have 2 options for the Rendering Provider: Practitioner on Authorization or Practitioner on Encounter Service. 
    - Authorization Rendering Provider - This field displays the Rendering Provider field from the Authorization Main Form, this way it is easy to see what the setting is on the Authorization. 

Every Claim has a *Rendering Provider*. Every Payer has their rules about which provider should be on the Claim Line as the Rendering Provider. Some Payers require that only a properly credentialed provider (the one that is on top of the case) should be entered as the Rendering Provider. Other Payers require that the provider that actually rendered the services during the Encounter be entered. Since the Rendering Provider is Payer based, the Account Main Form has a field to determine where to pull the Rendering Provider from. Because it is possible to have exceptions, there is a field on the Authorization and Authorization Service as well to override the Account or Authorization setting. 

- Authorized Units
    - Unit Type - (Required.)
    - Authorized As - Hours Per Week, Hours per Month, Units Per Week, Units Per Month, Total Units. (Required.)
    - Amount Authorized - (Required.)

Header: 
- Status Reason 


Name -  The Authorization Service Name is the Insurance Plan Benefit Namefollowed by the Start Date and End Date. For example, "Parent Training - 97155 - 1/1/2020 - 6/1/2020". (The Insurance Plan Benefit Name is the Service Code (Healthcare service name) and the CPT code.) The Name is set when the Authorization Service is created and when the Service Code or either Date field are updated.

##  Create an Authorization Service

To create a new Authorization Service, click on the 'Add New Authorization Service' button on the Authorization Services sub grid (on an Authorization Form) to open the Authorization Service Quick Create.

- Authorization Information: 
    - Authorization Name 
        - Pre-populated with the Authorization navigating from.
        - Filtered to display Active or Draft Authorizations.  
    - Service Code - Only displays Insurance Plan Benefits related to the Patient's Coverage. 
    - Start Date - Pre-populated with the Authorization Period Start Date navigating from. 
    - End Date - Pre-populated with the Authorization Period End Date navigating from. 
- Authorized Units
    - Authorized As
    - Amount Authorized
- Claim Settings 
    - Rendering Provider 
