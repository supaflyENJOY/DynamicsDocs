---
id: AuthorizationServices
title: Authorization Services
---

# Authorization Services 
Authorization Servies track the number of hours/units that were authorized per service. 

##  Create an Authorization Service

To create a new Authorization Service, click 'New Authorization Service' on the Authorization Services subgrid (on an Authorization Form) to open the Authorization Service Quick Create.

**Authorization Information**
- *Authorization Name* - prepopulated with the Authorization you are adding this service to.
- *Service Code* - select the Insurance Plan Benefit for the authorized service. All scheduling for this authorization service will be validated against the rules set up on the related insurance plan benefit. Select from Insurance Plan Benefits within the plan that the authorization is covered under.
- *Start Date* - prepopulated with the Authorization Period Start Date and can be changed if necessary.
- *End Date* - prepopulated with the Authorization Period End Date and can be changed if necessary.

**Authorized Units**
- *Authorized As* - choose how the hours/units were authorized – Hours per week, Hours per month, Units per week, Units per month, or Total units. 
    - This affects how the [Authorization Service Utilization](../Scheduling/Utilization.md/#authorization-service-utilizations) will be created.
- *Amount Authorized* - enter the number or hours/units authorized for this service, according to the 'Authorized As' selected above.

**Claim Settings** - This section displays fields related to billing Claims. 
- *Rendering Provider* - This field determines who should be used as the Rendering Provider for billing. Every Payer has their rules about which provider should be on the Claim Line as the Rendering Provider. Some Payers require that only a properly credentialed provider (the one that is on top of the case) should be entered as the Rendering Provider. Other Payers require that the provider who actually rendered the services during the Encounter be entered. Since the Rendering Provider is Payer based, the Account Main Form has a field to determine where to pull the Rendering Provider from. Because it is possible to have exceptions, there is a field on the Authorization and Authorization Service as well to override the Account or Authorization setting. We have 2 options for the Rendering Provider: 
    1. Practitioner on Authorization
    2. Practitioner on Encounter Service
- *Authorization Rendering Provider* - This field displays the Rendering Provider field from the Authorization Main Form, so it is easy to see what the setting is on the Authorization. 



