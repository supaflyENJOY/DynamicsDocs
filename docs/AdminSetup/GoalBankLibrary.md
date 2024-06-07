---
id: GoalBankLibrary
title: Goal Bank Library
---

# Goal Bank Library

Your organization can choose to import a goal bank to provide a library of pre-written goals and targets for your BCBAs to use when creating care plans in the Note app.

[Learn more about Goal and Target Libraries in Note](https://notedocs.chorus.cloud/docs/CarePlan/GoalTargetLibraries).

To view the goal bank library, click 'Goal Bank Library' on the Care Plan section of the Setup area of the sitemap.

You will be able to view the domains imported by your organization. Each domain is given a Domain Description that is included on Assessment Reports generated from the Note app.

Under each domain, you can view the subdomains.

:::note
The domain and subdomains are consistent across all care plans in your organization. Edits made to the names of domains or subdomains will apply to all patient care plans in your organization.
:::

You can select a subdomain to view the library goals that will be available to your BCBAs as pre-written goals in the Note app.

<img src ="/img/domain.png" width="850"/>

You can select a goal to view the library targets that will be available to you BCBAs as pre-written targets in the Note app.

You can select a target to view and edit the default configurations that will be available on this library target when imported to a Patient's care plan.
[Learn more about Default Configurations in Note](https://notedocs.chorus.cloud/docs/CarePlan/DefaultConfiguration).


:::note
Edits made to the goal name, target name, and default target configurations will only affect the goal/target libraries. Edits will not be applied to goals/targets that have been imported from the library to existing patient care plans.
:::

<img src ="/img/targetlibrary.png" width="850"/>




## Assessment Report Templates

Your organization can choose to provide report templates for initial and follow-up assessment reports. The template is a word document that is stored on the System Contact in Dynamics.

To view your organization's templates, or upload new ones:

1. Search "System" and open the contact with the name "System."
2. On the timeline, there are two notes: "InitialAssessment-Report-Template" and "Reassessment-Report-Template". *Do not modify the titles of the notes*.
    - The inital assessment report template will be available from sessions in Note that are created for [healthcare services](../AdminSetup/HealthcareService.md) with service type "initial assessment".
    - The reassessment report template will be available from sessions in Note that are created for healthcare services with service type "follow-up assessment".

<img src ="/img/assessmentreport.png" width="900"/>

3. To upload or switch a template, click the pencil icon on the note of the template you'd like to upload/switch.
4. Remove the current attachment if there is one, and upload your updated template.


:::note
In order for the Note app to insert data into the assessment report, the following placeholders have to be present in the Word document:
- {{Skill Acquisition}}
- {{Behaviors}}

Read about the data that is inserted into the report on our [Note Documentation](https://notedocs.chorus.cloud/docs/Reports/AssessmentReport#assessment-data).
:::