---
id: Authorization
title: Authorizations
---

# Authorizations 
Authorizations are the force behind the entire scheduling and billing workflow. Each encounter is validated against an authorization, to ensure it is scheduled correctly and will be able to be billed. 

## Create an Authorization  

To create a new Authorization, click 'New Authorization' on the Authorization subgrid (on a Patient Contact Form) or click the 'New' button on the Authorization Main Grid to open the Authorization Main Form.

**Authorization Information**
- *Patient* - prepopulated as the patient whose profile you are navigating from when entering the authorization.
- *Episode of Care* - prepopulated with the Active Episode of Care record for this Patient. 
- *Coverage* - Populated with the Active Coverage record with the latest End Date (or no End Date) for this Patient.
    - If a patient has more than one active coverage, ensure that the selected coverage is the one the authorization is covered as, otherwise select the correct coverage.
- *Authorization Number* - enter the authorization number. This will be included on the claims created against this authorization.
- *Period Start Date* - enter the start date that the authorization is valid from.
- *Period End Date* - enter the end date that the authorization is valid until. The End Date is prepopulated to 6 months after the Start Date. 
- *Practitioner* - select the practitioner on the authorization.

Once the Authorization is saved, [Authorization Services](../Patients/AuthorizationServices.md) can be added. 

## Claim Settings

This section displays fields related to billing Claims.

- *Rendering Provider* - This field determines who should be used as the Rendering Provider for billing. Some Payers require that only a properly credentialed provider (the one that is on top of the case) should be entered as the Rendering Provider. Other Payers require that the provider who actually rendered the services during the Encounter be entered. Since the Rendering Provider is Payer based, the Account Main Form has a field to determine where to pull the Rendering Provider from (see [Payer Claim Settings](../AdminSetup/Account.md/#claim-settings)). Because it is possible to have exceptions, there is a field on the Authorization and Authorization Service as well to override the Account or Authorization setting. We have 2 options for the Rendering Provider: 
    1. Practitioner on Authorization 
    2. Practitioner on Encounter Service
- *Account Rendering Provider* - This field displays the Rendering Provider field from the Account Main Form, this way it is easy to see what the setting is on the Account. 
- *Billing Provider* - This field determines who should be used as the Billing Provider for billing. Every organization has their rules about which provider should be on the Claim Line as the Billing Provider. Therefore, we have 3 options for the Billing Provider: (Default populated with Business Unit.)
    1. Practitioner on Authorization
    2. Business Unit
    3. Select New Practitioner
- *Business Unit Billing Provider* - If the Billing Provider field is set to 'Business Unit', this field displays the Billing Provider field from the Business Unit Main Form.
- *Billing Provider on Claim* - If the Billing Provider field is set to 'Select New Practitioner', this field displays the Billing Provider on Claim field. Any Practitioner can be selected as the Billing Provider. 

Every Claim has a *Billing Provider*. This is the Practitioner with the correct credentials for the services rendered.        

## Search Authorizations

Select 'Authorizations' on the left navigation bar in the Clinical Area of the sitemap, to open the Authorizations Main Grid. The Authorizations Main Grid is a nested grid; upon clicking on the arrow on the Authorization record, the children Authorization Service records will display. The Authorizations Main Grid has 3 different views:
- The **Active Authorizations** (default) view displays all the Active Authorization records in the system. The view is sorted by the Period Start Date with the newer dates displaying first. 
- The **All Authorizations** view displays all the Authorization records in the system. The view is sorted by the Period Start Date with the newer dates displaying first.
- The **Expiring Authorizations** view displays all the Active Authorization records in the system where the Period End Date is in the next 30 days. The view is sorted by the Period End Date with the older dates displaying first.

The nested Authorization Service are sorted by the Start Date with the newer dates displaying first.
