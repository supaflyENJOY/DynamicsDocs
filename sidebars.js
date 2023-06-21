module.exports = {
  sidebars:{
    'Getting Started': [
      'Overview/Welcome',
      'Overview/Dynamics365',
      'Overview/ViewsDashboards'
     ],
    'Admin Setup': [
    'AdminSetup/Account', 
    'AdminSetup/BusinessUnit',
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
  'Scheduling/CareTeamAssignments',
  'Scheduling/ScheduleAssistance',
  'Scheduling/SingleEncounters',
  'Scheduling/RecurringEncounters',
  'Scheduling/EncounterValidations',
  'Scheduling/DeactivateEncounters',
 ],
//  'Billing':[
//   'Billing/ChargeItems',
//  ],
//  'Payroll':[
//   'Payroll/PayrollItems',
//  ],
//  'CRM':[
//   'CRM/Lead',
//   'CRM/Opportunity',
//  ],

  },
};