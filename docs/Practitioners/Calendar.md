---
id: PractitionerCalendar
title: Calendar
---
# Calendar

The Calendar tab displays a calendar with the practitioner's schedule.   

The calendar displays all the sessions scheduled for this Practitioner. You can view the calendar by day, week or month.

<img src ="/img/dayWeekMonth.jpg" width="500" height="200"/>

When looking at the calendar, the session displays the service that will be provided and the patient's name. Upon clicking on the session in the calendar, a popout displays the exact time and duration of the session scheduled. 

By clicking on 'more details' on the popout, you will be navigated to the [encounter service](../Scheduling/SingleEncounters.md/#encounter-services). By clicking on 'delete' on the popout, the session will be deleted.

<img src ="/img/calendarPopout.jpg" width="400" height="200"/>

## Set Practitioner Availability

To add Practitioner availability to the schedule, click 'Set Practitioner Availability'. 

<img src ="/img/setAvailability.jpg" width="1300" height="200"/>

This will open the Practitioner Availability calendar in a new tab. (This tab is hidden until you click 'Set Practitioner Availability'.)

<img src ="/img/practitionerAvailability.jpg" width="1300" height="600"/>

Practitioner Availability is used for the [Schedule Assistance](../Scheduling/ScheduleAssistance.md) tool. Any time that is set as a Practitioner 'does not work', displays as unavailable in the tool. This helps a Scheduler schedule a session between a Patient and a Practitioner. 

The Practitioner Availability tab displays the Practitioner Availability calendar. This calendar displays the hours the Practitioner works, the hours they do not work and any time off. The Practitioner Availability calendar has the same 3 views as the Scheduling calendar. 

### Add Working Hours
 
Working Hours are the general hours when a Practitioner works (e.g., 9:00 am - 5:00 pm with a lunch break from 12:00 am - 1:00 pm). Some Practitioners can have different working hours every day or week, while others have the same work hours every day. 
 
To add the hours when a Practitioners works to the calendar, click 'new'. This will display 3 options - Working hours, Non-working, Time off.

<img src ="/img/workinghours.jpg" width="200"/>

Upon clicking 'Working hours', a form will open on the side of the screen. 
- *All Day* - This is a toggle which represents if the Practitioner is working all day or if they are working a few hours a day. 
     - By default the toggle is off and you can enter a date.
     - Upon switching the toggle to on, you can set a date range for all the days the Practitioner is working all day.

     <img src ="/img/allDayOn.jpg" width="275"/> 

- *Capacity* - This is a toggle. 
     - By default the toggle is off.
     - Upon switching the toggle to on, the capacity field displays next to the time/date range. Then you can set a capacity limit if a Practitioner can only work with a limited amount of Patients. 
- *Date* 
     - When the 'All Day' toggle is off, 1 Date field displays.
     - When the 'All Day' toggle is on, 2 Date fields display for you to set a date range.
- *Repeat* - Here you can set when the working hours should repeat.
     - Never
     - Every day - Upon selecting 'Every day', you can select which days these work hours should repeat. 
     - Every week -  Upon selecting 'Every week', you can select which day(s) each week these work hours should repeat.
     - Custom 
          - Upon selecting 'Custom', you can select day(s) and set a time for every day that these work hours should repeat.
          - When the 'Custom' option is selected, the 'All Day' and 'Capacity' toggle disappear.

          <img src ="/img/customWorkHours.jpg" width="300"/>
- *Time*
     - If the 'All Day' toggle is off, the 'Time' field displays. 
     - Upon clicking on the 3 dots next to the time, you can add a break to the work hours. 
- *Time Zone*
     
### Add Break to Working Hours
- Upon clicking 'Add break', the system will add a break to the work hours. You can edit the time range for the break by editing the start and end time of the work hours.
     - More then 1 break can be added.

     <img src ="/img/breakHours.jpg" width="300"/>

### Add Split to Working Hours
- When the Capacity toggle is on, you can add a 'split' to their day.

     <img src ="/img/addSplit.jpg" width="300"/> 

- Upon clicking 'Add split', the system will split the work hours into two. You can edit the time range by editing the start and end time of the work hours.
  - More then 1 split can be added.
  - The end time of the 1st split will be the start time of the 2nd split.

     <img src ="/img/split&Break.jpg" width="300"/> <br />


### Add Non-working Hours
 
Non-working hours are the hours when a Practitioner does not work (e.g., 2:00 pm - 4:00 pm). This can be used to schedule an appoinment or time when they will not work with Patients. 
 
To add the hours when a Practitioners does not works to the calendar, click 'new'. This will display 3 options - Working hours, Non-working, Time off. Upon clicking 'Non-working', a form will open on the side of the screen. 
 
- *All Day* - This is a toggle which represents if the Practitioner is not working all day or if they are not working a few hours a day. 
     - By default the toggle is off and you can enter a date.
     - Upon switching the toggle to on, you can set a date range for all the days the Practitioner is not working all day.
- *Date*
     - When the 'All Day' toggle is off, 1 Date field displays.
     - When the 'All Day' toggle is on, 2 Date fields display for a User to set a date range. 
- *Time* - If the 'All Day' toggle is off, the 'Time' field displays. 
- *Time Zone*

     <img src ="/img/nonWorkingHours.jpg" width="300"/>

### Time off
 
Time-off hours are the hours when a Practitioner is taking off. This can be used to schedule vacation. 
 
To add the hours when a Practitioners is taking off to the calendar, click 'new'. This will display 3 options - Working hours, Non-working, Time off. Upon clicking 'Time off', a form will open on the side of the screen. 

- *All Day* - This is a toggle which represents if the Practitioner is not working all day or if they are not working a few hours a day. 
     - By default the toggle is off and you can enter a date.
     - Upon switching the toggle to on, you can set a date range for all the days the Practitioner is not working all day. 
- *Date* 
     - When the 'All Day' toggle is off, 1 Date field displays.
     - When the 'All Day' toggle is on, 2 Date fields display for a User to set a date range.
- *Reason*
- *Time*
     - If the 'All Day' toggle is off, the 'Time' field displays. 
- *Time Zone*

     <img src ="/img/timeOff.jpg" width="250"/>