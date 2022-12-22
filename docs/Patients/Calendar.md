---
id: PatientCalendar
title: Calendar
---
# Overview

The Calendar tab displays a calendar with the Patients schedule.   

# Calendar

The Calendar displays all the Sessions scheduled for this Patient. There are 3 views - Day, Week or Month. When on the Day view, you can select which day you would like to view. When on the Week view, you can select which week you would like to view. When on the Month view, you can select which Month you would like to view.

When looking at the calendar, the Session displays the Service that will be provided and the Patient's Name. Upon clicking on the Session in the Calendar, a popout displays the exact time and duration of the session scheduled. 

By clicking on 'more details' on the popout, you will be navigated to the Encounter Service. By clicking on 'delete' on the popout, the Session will be deleted.

 ## <u> Set Patient Availability </u>
 
 To add Patient availability to the schedule, click 'Set Patient Availability'. 
 
 This will open up the Patient Availability calendar in a new tab. (This tab is hidden until a User clicks 'Set Patient Availability'.)

Patient Availability is used for the [Schedule Assistance](../Scheduling/ScheduleAssistance.md) tool. Any time that is set as a Patient 'does not work', displays as unavailable in the tool. This helps a Scheduler schedule a session between a Patient and a Practitioner. 

# Patient Availability

The Patient Availability tab displays the Patient Availability calendar. This calendar displays the hours the Patient works/can be serviced, the hours they do not work/cannot be serviced and any time off. The Patient Availability calendar has the same 3 views as the Scheduling calendar. 


## <p style={{ textAlign: 'center' }}><i> Working Hours </i> </p>
  
Working Hours are the general hours when a Patient can be serviced. I.e. 9am - 5pm with a lunch break from 12am - 1pm. Some Patient can have different working hours every day or week, while others have the same work hours every day. 

### Add Working Hours

To add the hours when a Patient works to the calendar, click 'new'. This will display 3 options - Working hours, Non-working, Time off. 

Upon clicking 'Working hours', a form will open on the side of the screen. 

- All Day - This is a toggle which represents if the Patient is working all day or if they are working a few hours a day. 
    - By default the toggle is off and you can enter a date.
    - Upon switching the toggle to on, you can set a date range for all the days the Patient is working all day.
- Capacity - This is a toggle. 
    - By default the toggle is off.
    - Upon switching the toggle to on, the capacity field displays next to the time/date range. Then you can set a capacity limit.
    - When the Capacity toggle is on, you can add a 'split' to their day.Read more below.
- Date 
    - When the 'All Day' toggle is off, 1 Date field displays.
    - When the 'All Day' toggle is on, 2 Date fields display for you to set a date range.
- Repeat - Here you can set when the working hours should repeat. The options are: Never, Every day, Every week or Custom. 
    - Never
    - Every day - Upon selecting 'Every day', you can select which days these work hours should repeat. 
    - Every week -  Upon selecting 'Every week', you can select which day(s) each week these work hours should repeat.
    - Custom 
        - Upon selecting 'Custom', you can select day(s) and set a time for every day that these work hours should repeat.
        - When the 'Custom' option is selected, the 'All Day' and 'Capacity' toggle disappear.
- Time
    - If the 'All Day' toggle is off, the 'Time' field displays. 
    - Upon clicking on the 3 dots next to the time, you can add a break or a split to the work hours. Read more below.
- Time Zone

### Add Break to Working Hours

Beside the field used to populate the time range, 3 dots display. Upon clicking on the 3 dots next to the time, you can add a break to the work hours. By clicking 'Add break', the system will add a break to the work hours. You can edit the time range for the break by editing the start and end time of the work hours. More then 1 break can be added.

### Add Split to Working Hours
When the Capacity toggle is on, you can add a 'split' to the Patients day. Beside the field used to populate the time range, 3 dots display. By clicking on the 3 dots next to the time, you can add a spliy to the work hours. Upon clicking 'Add split', the system will split the work hours into two. You can edit the time range by editing the start and end time of the work hours. More then 1 split can be added. The end time of the 1st split will be the start time of the 2nd split. 

## <p style={{ textAlign: 'center' }}><i> Non-working </i> </p>

Non-working hours are the hours when a Practitioner does not work. I.e. 2pm - 4pm. This can be used to schedule an appoinment or time when they will not work with Patients. 

### Add Non-working

To add the hours when a Patient does not works to the calendar, click 'new'. This will display 3 options - Working hours, Non-working, Time off. Upon clicking 'Non-working', a form will open on the side of the screen. 

- All Day - This is a toggle which represents if the Patient is not working all day or if they are not working a few hours a day. 
    - By default the toggle is off and you can enter a date.
    - Upon switching the toggle to on, you can set a date range for all the days the Practitioner is not working all day.
- Date 
    - When the 'All Day' toggle is off, 1 Date field displays.
    - When the 'All Day' toggle is on, 2 Date fields display for a User to set a date range. 
- Time
    - If the 'All Day' toggle is off, the 'Time' field displays. 
- Time Zone


## <p style={{ textAlign: 'center' }}><i> Time off </i> </p>

 Time-off hours are the hours when a Practitioner is taking off. This can be used to schedule vacation. 

### Add Time off

To add the hours when a Patient is taking off to the calendar, click 'new'. This will display 3 options - Working hours, Non-working, Time off. Upon clicking 'Time off', a form will open on the side of the screen. 

- All Day - This is a toggle which represents if the Patient is not working all day or if they are not working a few hours a day. 
    - By default the toggle is off and you can enter a date.
    - Upon switching the toggle to on, you can set a date range for all the days the Practitioner is not working all day. 
- Date 
    - When the 'All Day' toggle is off, 1 Date field displays.
    - When the 'All Day' toggle is on, 2 Date fields display for a User to set a date range.
- Reason
- Time
    - If the 'All Day' toggle is off, the 'Time' field displays. 
- Time Zone