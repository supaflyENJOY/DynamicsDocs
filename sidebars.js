module.exports = {
  sidebars:{
    'Getting Started': [
      'Overview/Welcome',
      'Overview/Dynamics365',
      'Overview/ViewsDashboards'
     ],
    'Setup': [
    'AdminSetup/Account', 
   'AdminSetup/BusinessUnit',
   'AdminSetup/FeeSchedules',
 //   'AdminSetup/GoalBankLibrary',
    'AdminSetup/HealthcareService',
    'AdminSetup/InsurancePlan',
    'AdminSetup/Location',
    'AdminSetup/QualificationDefinition',
  ],
  // 'Clinical Setup':[
  //   'ClinicalSetup/Coverage',
  //   'ClinicalSetup/Authorizations',
  //   'ClinicalSetup/CareTeamAssignment',
  //   'ClinicalSetup/Contacts',
  // ],
  'Patients':[
    'Patients/PatientOverview',
   // 'Patients/Location',
    'Patients/Connection',
    'Patients/Conditions',
    'Patients/EpisodeOfCare',
    'Patients/Coverages',
    'Patients/Authorization',
    'Patients/AuthorizationServices',
    'Patients/CareTeamParticipants',
    //'Patients/CareTeamAssignments',
    //'Patients/PatientEncounters',
    'Patients/PatientCalendar',
  ],
  'Practitioners':[
    'Practitioners/BasicInfo',
    'Practitioners/PractitionerRole',    
    'Practitioners/Qualifications',
    //'Practitioners/CareTeamAssignment',
   // 'Practitioners/PractitionerEncounters',
    'Practitioners/PractitionerCalendar',

   ],
 'Scheduling':[
  'Scheduling/SingleEncounters',
  'Scheduling/RecurringEncounters',
  'Scheduling/ScheduleAssistance',
  'Scheduling/CareTeamAssignments',
  'Scheduling/EncounterValidations',
  'Scheduling/DeactivateEncounters',
  'Scheduling/Utilization',
 ],
 'Billing':[
  'Billing/ClaimSettings',
  'Billing/ChargeItems',
 ],
 'Payroll':[
  'Payroll/PayrollItems',
 ],
 'CRM':[
  'CRM/Lead',
  'CRM/Opportunity',
 ],
  },
};