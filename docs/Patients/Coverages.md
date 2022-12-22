---
id: Coverages
title: Coverages
---

# Coverages 

## Coverages Main Grid

By clicking on 'Coverages' on the left navigation bar in the Clinical Area, the Coverages Main Grid will open up. The Coverages Main Grid has 3 different views.
- Active Coverages (default)
    - The Active Coverages view displays all the Active Coverage records in the system. The view displays the Name, Beneficiary, Policy Start Date, Policy End Date and Plan. The view is sorted by the Policy End Date with the older dates displaying first. 
- Draft Coverages
    - The Draft Coverages view displays all the Draft Coverage records in the system. The view displays the Name, Beneficiary, Policy Start Date, Policy End Date and Plan. The view is sorted by the Policy End Date with the older dates displaying first.
- Expiring Coverages 
    - The Expiring Coverages view displays all the Coverage records in the system where the Policy End Date is in the next 30 days. The view displays the Name, Beneficiary, Policy Start Date, Policy End Date and Plan. The view is sorted by the Policy End Date with the older dates displaying first.

## Coverages Main Form
By selecting a record from the Coverages sub grid (on a Patient Contact Form) or from the Coverages Main Grid, the Coverages Main Form will open. The Coverages Main Form has 1 tab to display all information needed. 

- The Summary tab has 1 section.
    - Coverage Information
        - Patient
        - Member ID
        - Relationship
        - Policy Holder
        - Start Date
        - End Date
        - Plan - Upon creating or updating the Plan field on the Coverage record, the Payor field (below) is updated with the value of the Issuer field on the Plan selected.
        - Payer - We want to be able to track which Payer and Plan a Patient is on so that we can understand how their schedules should be created and billed. When setting up a Patient's Coverage record the User should be able to associate it with a Payor and a Plan so that when creating an Authorization it's tracked back to the plan. 
- Header: 
    - Status Reason - Active, Cancelled or Draft. 
- Name -  The Coverage Name is the Payer and the Member Id. For example, United Healthcare 911-87726-04. The name is set when a Coverage record is created or when the Plan or Member ID are updated.

## <u> Add New Coverage </u> 

To create a new Coverage, click on the 'Add New Coverage' button on the Coverages sub grid (on a Patient Contact Form). This will open up the New Coverage Quick Create. Or clicking the 'New' button on the Coverages Main Grid will open the Coverages Main Form.

### Coverage Quick Create

- Status Reason
- Member
- Member ID
- Relationship
- Policy Holder
- Start Date
- End Date
- Plan

*** The Member and Policy Holder field is prepopulated with the Patient navigating from. 

## <u> Edit Coverages </u> 

To edit a Coverage record, select a Coverage record from the Coverages sub grid (on a Patient Contact Form) or from the Coverages Main Grid. This will open up the Coverage Main Form.