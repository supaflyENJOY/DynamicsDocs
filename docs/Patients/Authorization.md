---
id: Authorization
title: Authorization
---

# Authorizations 

## Authorizations Main Grid

By clicking on 'Authorizations' on the left navigation bar in the Clinical Area, the Authorizations Main Grid will open up. The Authorizations Main Grid is a nested grid; upon clicking on the arrow on the Authorization record, the children Authorization Service records will display. The Authorizations Main Grid has 3 different views.
- Active Authorizations (default)
    - The Active Authorizations view displays all the Active Authorization records in the system. The view displays the Plan, Patient Name, Authorization Number, Period Start Date, Period End Date, Status Reason. The view is sorted by the Period Start Date with the newer dates displaying first. 
- All Authorizations
    - The All Authorizations view displays all the Authorization records in the system. The view displays the Plan, Patient Name, Authorization Number, Period Start Date, Period End Date, Status Reason. The view is sorted by the Period Start Date with the newer dates displaying first.
- Expiring Authorizations 
    - The Expiring Authorizations view displays all the Active Authorization records in the system where the Period End Date is in the next 30 days. The view displays the Name, Patient Name, Episode of care, Coverage, Authorization Number, Period Start Date, Period End Date, Practitioner. The view is sorted by the Period End Date with the older dates displaying first.

The nested Authorization Service records display the following columns: Service Code, Amount Authorized, Authorized As, Start Date and End Date. The records are sorted by the Start Date with the newer dates displaying first.

## Authorization Main Form
By selecting a record from the Authorization sub grid (on a Patient Contact Form) or from the Authorization Main Grid, the Authorization Main Form will open. The Authorization Main Form has 1 tab to display all information needed. 

- The Summary tab has a few sections.
    - Authorization Information
        - Patient - On an existing record, this field is locked. 
        - Authorization Number
        - Period Start Date
        - Period End Date
        - Practitioner
    - Claim Settings - This section displays fields related to billing Claims. Read more below. 
        - Rendering Provider - This field determines who should be used as the Rendering Provider for billing. Every Payer has their rules about which provider should be on the Claim Line as the Rendering Provider. Therefore, we have 2 options for the Rendering Provider: Practitioner on Authorization or Practitioner on Encounter Service. 
        - Account Rendering Provider - This field displays the Rendering Provider field from the Account Main Form, this way it is easy to see what the setting is on the Account. 
        - Billing Provider - This field determines who should be used as the Billing Provider for billing. Every Company has their rules about which provider should be on the Claim Line as the Billing Provider. Therefore, we have 3 options for the Billing Provider: Practitioner on Authorization or Business Unit or Select New Practitioner. (Default populated with Business Unit.)
            - Business Unit Billing Provider - If the Billing Provider field is set to 'Business Unit', this field displays the Billing Provider field from the Business Unit Main Form.
            - Billing Provider on Claim - If the Billing Provider field is set to 'Select New Practitioner', this field displays the Billing Provider on Claim field. Any Practitioner can be selected as the Billing Provider. 

    Every Claim has a *Rendering Provider*. Every Payer has their rules about which provider should be on the Claim Line as the Rendering Provider. Some Payers require that only a properly credentialed provider (the one that is on top of the case) should be entered as the Rendering Provider. Other Payers require that the provider that actually rendered the services during the Encounter be entered. Since the Rendering Provider is Payer based, the Account Main Form has a field to determine where to pull the Rendering Provider from. Because it is possible to have exceptions, there is a field on the Authorization and Authorization Service as well to override the Account or Authorization setting.

    Every Claim has a *Billing Provider*. This is the Practitioner with the correct credentials for the services rendered.         
    - Timeline
    - Authorization Services - This sub grid displays all the Authorization Services on this Authorization. The columns displayed are: Service Code, Amount Authorized, Authorized As, Start Date and End Date. To read more about Authorization Services, click here. 

- Header: 
    - Status Reason 
- Name -  The Authorization Name is "Auth" followed by the Patient Full Name then the Period Start Date and Period End Date. For example, Auth John Smith 01/02/2021-02/03/2021. The Name is set when the Authorization is created and when the Date fields or Patient field is updated.

## <u> Add New Authorization </u> 

To create a new Authorization, click on the 'Add New Authorization' button on the Authorization sub grid (on a Patient Contact Form) or clicking the 'New' button on the Authorization Main Grid will open the Authorization Main Form.

When navigating from a Patient Contact record, the following fields are pre-populated:
- Patient - Populated with the Patient navigating from.
- Episode of Care - Populated with the Active Episode of Care record for this Patient. 
- Coverage - Populated with the Active Coverage record with the latest End Date (or no End Date) for this Patient.
- Start Date - On populate (including update) of the Start Date, the End Date is auto-populated with 6 months after Start Date. 

When opening a new Authorization Main Form from the Main Grid,
- Episode of Care 
    - This field is hidden when the Patient field does not have a value.
    - Upon populating the 'Patient' field, this field is populated with the Active Episode of Care record for this Patient. 
- Coverage 
    - This field is hidden when the Patient field does not have a value.
    - Upon populating the 'Patient' field, this field is populated with the Active Coverage record with the latest End Date (or no End Date) for this Patient. 

## <u> Edit Authorization </u> 

To edit an Authorization record, select an Authorization record from the Authorization sub grid (on a Patient Contact Form) or from the Authorization Main Grid. This will open up the Authorization Main Form.

*** The Episode of Care and Coverage fields only display active records. 
