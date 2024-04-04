---
id: Qualifications
title: Qualifications
---
# Qualifications

The Qualifcations subgrid displays the Qualification Name, Certification Date, Expiration Date and the Qualification Number. 

## Create a Practitioner Qualification 

To create a new Practitioner Qualification, click 'New Practitioner Qualification'. 

<img src ="/img/qualification.jpg" width="900"/>

- *Practitioner* - This field is prepopulated with the Practitioner navigating from.
- *Qualification* - Choose from [qualification definitions](../AdminSetup/QualificationDefinition.md).
- *Certification Date*
- *Expiration Date*
- *Qualification Number*

On existing practitioner qualifications, use the timeline, status reason, and application fields to track the workflow for getting this qualification credentialed by insurance:
- *Status Reasons*:
    - Active (default)
    - Application Sent to Provider
    - Provider Application Received
    - Credentialed Effectively
    - Denied
- *Application Sent* - date the application was sent to the practitioner
- *Signed Application Received* - date the signed application was returned by the practitioner
- *Submitted to Insurance* - date the credentialing application was submitted to insurance

Applications can be uploaded to the timeline on the right side of the practitioner qualification form. Relevant communications regarding credentialing for this practitioner can also be tracked here. 


## Qualifications on Insurance Plan Benefits

The Insurance Plan Benefit (related to the Encounter Service) has a list of the qualifications a Practitioner must have to receieve payment for rendering the service. 

:::note
It is important that the qualification and the dates are accurate. When scheduling a Session with a Practitioner, the system checks that the Practitioner has the required qualification for the service being provided.
:::

<img src ="/img/PractitionerQualification.jpg" width="1300" height="400"/>

[Read more about Insurance Plan Benefits](../AdminSetup/InsurancePlan.md).