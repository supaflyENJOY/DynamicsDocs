---
id: Coverages
title: Coverages
---

# Coverages 
Coverage is the reimbursement plan that a patient is subscribed to with an insurance company, who will be paying for the services you provide to the patient. Validations on scheduled services will roll back to the coverage – to make sure the patient has active coverage for the dates of service.

##  Create a Coverage  

Create a new Coverage, by clicking on the 'Add New Coverage' button on the Coverages sub grid (on a Patient Contact Form), or clicking the 'New' button on the Coverages Main Grid.

**Coverage Information**
- *Status Reason* - Select ‘Active’ when creating a patient’s active coverage record. 
- *Member* (Patient) – auto-populated as the patient whose profile you’re on when adding this record.
- *Member ID* - Enter the Member ID as it appears on the patient’s insurance card. The member ID is transferred to the claim. It also enables you to run eligibility checks from within the Autism Care app and receive accurate responses.
- *Relationship* - Select the option that best describes the relationship of the member/patient to the policy holder. 
- *Policy Holder* - Select the contact record of the person that is the policy holder. If the relationship is ‘Self’; the ‘Policy Holder’ should be the patient him/herself, otherwise select one of the patient’s [related contacts](Connection.md).
- *Start Date* - Enter the start date for this coverage.
- *End Date* - Enter the end date for this coverage.
- *Plan* - Select the plan the patient is covered under. The plans option-set is based on the plans that you have set up in the system.
- *Payer* - Upon creating or updating the Plan field on the Coverage record, the Payer field is updated with the value of the Issuer field on the Plan selected. 

## Searching Coverages

By clicking on 'Coverages' on the left navigation bar in the Clinical Area, the Coverages Main Grid will open up. The Coverages Main Grid has 3 different views, all sorted by the Policy End Date with the older dates displaying first.

- The **Active Coverages** view displays all the Active Coverage records in the system. 
- The **Draft Coverages** view displays all the Draft Coverage records in the system. 
- The **Expiring Coverages** view displays all the Coverage records in the system where the Policy End Date is in the next 30 days.