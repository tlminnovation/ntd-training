# SkinNTD AI Training Course - Documentation

## Live Site
- **URL:** https://tlminnovation.github.io/ntd-training/
- **GitHub Repo:** https://github.com/tlminnovation/ntd-training/

## Data Collection

### Google Sheet
- **Sheet ID:** `1jPbpFc4gZ22rXwNmWg9tlLB42nyf6mjGdQDd0MMXzQo`
- **Sheet URL:** https://docs.google.com/spreadsheets/d/1jPbpFc4gZ22rXwNmWg9tlLB42nyf6mjGdQDd0MMXzQo/edit
- **Tab Name:** Training Completions
- **Columns:** Timestamp | Name | Email | Organization | Facility | Qualifications | Event | Score | Certificate Code

### Apps Script (Backend)
- **Deployment URL:** https://script.google.com/macros/s/AKfycbzm1KPLd2Ug9Ov_cWFNBWWNNp90e5k9CFwv92OLg14Wyg22so_k4zEH5GRwZdgr048U5g/exec
- **Script ID:** 1jPbpFc4gZ22rXwNmWg9tlLB42nyf6mjGdQDd0MMXzQo

## Features Implemented

### Registration
- Name, Email, Organization, Facility, Qualifications
- Validation (required fields, email format)
- Data sent to Google Sheet on registration

### Training Modules (1-5)
- Module 1: The AI Mission & Research Gaps
- Module 2: Technical Photography Protocol (with Photo Management section)
- Module 3: Ethical Governance & Consent
- Module 4: Absolute Physical Anonymization
- Module 5: Safeguarding & Dignity

### Assessment
- 20 multiple-choice questions
- Randomized answer order each time
- 80% required to pass
- Certificate generated on pass
- Data sent to sheet with score & certificate code

### Data Tracked
Events sent to sheet:
- `registration_completed` - on registration
- `assessment_passed` - on passing (includes score + certificate code)
- `assessment_failed` - on failing (includes score, no certificate)

## Key Configuration
- Removed WHO references for neutrality
- Replaced "Work Location" with "Clinical Setting/Facility"
- Added photo removal reminders in Modules 2 & 3
- Added safeguarding checklist in Module 5
- No answer reveal on assessment failure

## Future Enhancements
- Add favicon to eliminate 404 error
- Track module completion timestamps
- Add expiry/renewal for certificates