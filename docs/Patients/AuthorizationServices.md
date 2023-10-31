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
- *Service Code* - Select the Insurance Plan Benefit for the authorized service. All scheduling for this authorization service will be validated against the rules set up on this insurance plan benefit.  This option-set displays  Insurance Plan Benefits within the plan that the authorization is covered under.
- *Start Date* - prepopulated with the Authorization Period Start Date and can be changed if necessary.
- *End Date* - prepopulated with the Authorization Period End Date and can be changed if necessary.

**Authorized Units**
- *Authorized As* - Choose how the hours/units were authorized – Hours per week, Hours per month, Units per week, Units per month, or Total units. 
    - This affects how the [Authorization Service Utilization](../Scheduling/Utilization.md/#authorization-service-utilizations) will be created.
- *Amount Authorized* - Enter the number or hours/units authorized for this service, according to the 'Authorized As' selected above.
- *Validate Encounters* - Select how you want the validations for this service to be calculated. They can either be validated as authorized, meaning that sessions exceeding the amount of hours/units for the frequency selected will be rejected. Or, they can be validated by total units for the authorization period, meaning that sessions exceeding the amount of hours/units for the frequency selected will only be rejected if it exceeds the total amount of hours/units for the entire authorization period. The selection here affects how the authorization service utilization report calculates and displays utilization.

**Claim Settings** - This section displays fields related to billing Claims. 
- *Rendering Provider* - This field determines which practitioner should be populated as the Rendering Provider on the claims for this service. By default, the rendering provider is populated based on the settings on the authorization and payer account. However, if needed, it can overridden here for an individual service. 
- *Authorization Rendering Provider* - This field displays the Rendering Provider field from the Authorization Main Form, so it is easy to see what the setting is on the Authorization. 



