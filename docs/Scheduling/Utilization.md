---
id: Utilization
title: Authorization Utilization
---

# Authorization Utilization

To easily monitor how many authorized units were utilized per service per authorization, click 'Utilization' on the Insights section of Clinical area of the sitemap.

Customize the filters on the report to monitor utilizations the way your organization would like to monitor them.

For example, to monitor authorizations per patient per month, adjust the Start and End Date filters to filter by 'This Month' and the Patient column to filter by the Patient you are reviewing.

## Authorization Service Utilizations

An Authorization Service Utilization record is automatically generated for every Authorized Unit on the Authorization Service. 

For example, if an Authorization Service is authorized as 2 hours per week, an Authorization Service Utlization record is generated for every week of the Authorization Period.

When an Encounter Service is created for that Authorization service, it is related to the Authorization Service Utilization and the aggregates on the Utilization are updated.

For example, when a BCBA schedules a 1 hour session on January 1st for an Authorization Service that is Authorized as 2 hours per week, the Encounter Service created gets related to the Authorization Service Utilization record that includes January 1st, and the aggregates are updated.

The following aggregates are tracked:

- *Completed* - how many authorized units were already completed this week/month.
- *Scheduled* - how many authorized units are scheduled to be completed this week/month.
- *Remaining* - how many authorized units remain to be utilized this week/month.
- *% Utilized* - percent of utilized units out of total authorized units this week/month.

:::note
The default way a week is calculated is from Sunday to Saturday.
This setting can be adjusted in Advanced Settings.
:::
>1.	Click on the ‘Settings’ icon in the app, then Advanced Settings on the drop-down menu. 
>
> <img src ='/img/Settings-AdvancedSettings.png' width='400'/> 
>
> You will be redirected to a new tab, displaying business management settings. 
>
>2.	Click on the drop-down button next to ‘Settings’ to display the settings sub-menu. Then click >>‘Administration’ in the ‘System’ group. 
>
><img src ='/img/AdvancedSettings-Administration.png' width='400'/> 
>
>The system administration settings will appear on the screen. 
>
>3.	Click ‘System Settings’. 
>
> <img src ='/img/Administration-SystemSettings.png' width='400'/> 
>
>4.	On the ‘System Settings’ dialog box that opens, navigate to the ‘Formats’ tab, and click on ‘Customize’.
>
>
><img src ='/img/System-SettingsFormats-Customize.png' width='400'/> 
>
>5.	The ‘Customize Regional Options’ dialog box will appear. Navigate to the ‘Date’ tab where you can change the ‘First Day of the Week’ to align with your organizations first day of the week. 
>
><img src ='/img/CustomizeRegionalOptions.png' width='400'/> 

