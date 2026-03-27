# Module 4: Anonymization & Privacy Protection
## Comprehensive Content Document

### Learning Objectives
By the end of this module, participants will be able to:
1. Identify all types of identifying information that must be removed
2. Apply proper anonymization techniques
3. Understand data security protocols
4. Recognize and prevent privacy breaches
5. Follow institutional data protection policies

---

## Section 1: Why Anonymization Matters

### The Privacy Imperative

Even with patient consent, protecting identity is critical because:

**1. Prevent Stigma and Discrimination**
- Leprosy carries significant social stigma in many communities
- Diagnosis can affect:
  - Employment opportunities
  - Marriage prospects
  - Social standing
  - Family relationships
- Photos identifying someone could cause serious harm

**2. Legal Requirements**
- Most jurisdictions require de-identification for research
- Data protection laws mandate privacy safeguards
- WHO policies require highest standards
- Institutional policies obligate protection
- Violations may carry legal penalties

**3. Ethical Obligations**
- Beneficence: Do no harm
- Respect for persons: Protect dignity
- Justice: Fair treatment
- Professional duty: Confidentiality

**4. Trust Preservation**
- Patients must trust the system
- Future participation depends on current protection
- One breach damages entire project
- Reputation of organization and WHO

**5. Project Integrity**
- Dataset must be ethically sound
- AI training requires clean data
- Publications must protect identity
- Long-term data utility depends on trust

### What Anonymization Means

**Anonymization:**
- Removing all information that could identify a person
- Making it impossible to trace back to individual
- Protecting privacy while maintaining clinical value

**Pseudonymization vs. Anonymization:**
- **Pseudonymization:** Replacing identifiers with codes (can be reversed)
- **Anonymization:** Permanent removal (irreversible)
- **This project requires anonymization**

**De-identification:**
- General term for removing identifiers
- Includes both anonymization and pseudonymization
- Must be complete and irreversible

---

## Section 2: What Must Be Removed

### Patient Identifiers

**Physical Identifiers:**

1. **Faces and Facial Features**
   - Entire face
   - Eyes
   - Nose
   - Mouth
   - Ears
   - Facial hair patterns
   - Scars on face
   - Birthmarks on face

2. **Names and Text**
   - Hospital wristbands
   - Name tags
   - Handwritten names
   - Patient labels
   - Any text identifying patient

3. **Unique Physical Features**
   - Tattoos (unless tattoo IS the lesion)
   - Distinctive scars (not related to condition)
   - Unusual birthmarks
   - Prosthetics
   - Amputations

4. **Jewelry and Personal Items**
   - Rings with engravings
   - Bracelets with names
   - Watches
   - Glasses (if identifying)
   - Hearing aids

5. **Body-Specific Identifiers**
   - Fingerprints
   - Palm prints
   - Toe prints
   - Foot shape
   - Distinctive moles patterns

### Location and Context Identifiers

**Institutional Identifiers:**
- Hospital logos
- Clinic name tags
- Institutional signage
- Room numbers
- Bed numbers
- Equipment with institutional labels

**Geographic Identifiers:**
- Window views with landmarks
- Distinctive local scenery
- Recognizable buildings
- Unique landscape features
- Specific vegetation

**Environmental Identifiers:**
- Date stamps on photos
- Clocks showing time
- Calendars
- Newspapers
- Season-specific decorations
- Local events visible

### Technical Identifiers

**Metadata to Remove:**
- EXIF data (camera info, GPS, timestamps)
- File names with patient info
- Geolocation tags
- Device serial numbers
- Software watermarks

**Digital Identifiers:**
- Embedded patient data
- Hidden layers
- Comments in files
- Thumbnails with identifying info

---

## Section 3: Before and After Examples

### Example 1: The Hand Photo

**Scenario:** Photographing lesions on a patient's hand.

**BEFORE (Incorrect):**
- Shows patient's hand with wedding ring visible
- Patient's wristband in background
- Hospital bed visible
- Patient's nail polish with distinctive design

**AFTER (Correct):**
- Patient removes jewelry
- Wristband removed or covered
- Photo framed to show only hand with lesion
- Neutral background (drape)
- Clear view of lesion

### Example 2: The Leg Photo

**Scenario:** Photographing lesions on lower leg.

**BEFORE (Incorrect):**
- Patient's foot visible with unique mole pattern
- Hospital gown with institutional logo
- Patient's shoes visible in corner
- Bed with room number visible

**AFTER (Correct):**
- Photo cropped to show only lesion area
- Neutral background
- No identifying features
- Scale included if needed

### Example 3: The Back Photo

**Scenario:** Photographing lesions on patient's back.

**BEFORE (Incorrect):**
- Patient's distinctive birthmark visible on shoulder
- Patient's hair visible (if distinctive)
- Tattoo on upper arm
- Background shows window with recognizable landmark

**AFTER (Correct):**
- Photo framed to show only back lesion area
- Birthmark cropped out
- Tattoo covered or cropped
- Neutral background
- No window view

### Example 4: Multiple Lesions

**Scenario:** Patient has multiple lesions across body.

**BEFORE (Incorrect):**
- Series of photos shows progression that could identify patient
- Same background in all photos (identifiable location)
- Patient's watch visible in multiple photos
- Tattoos visible in some shots

**AFTER (Correct):**
- Each photo individually reviewed
- Identifying features removed from each
- Varied backgrounds or neutral drapes
- No linking identifiers across photos

---

## Section 4: Anonymization Techniques

### Method 1: Cropping

**When to Use:**
- When identifying features are at edges
- When you need closer view of lesion
- When context is not essential

**How to Crop:**
1. Open image in editing software
2. Select crop tool
3. Adjust frame to exclude identifying features
4. Keep clinically important area
5. Maintain aspect ratio if possible
6. Save as new file

**Best Practices:**
- Don't crop too tightly (lose clinical context)
- Leave some surrounding skin
- Ensure lesion is fully visible
- Check final image

### Method 2: Covering/Blacking Out

**When to Use:**
- When identifier is in middle of important area
- When cropping would remove too much
- For tattoos, birthmarks, scars

**How to Cover:**
1. Use rectangle or brush tool
2. Select solid black or skin-tone color
3. Cover identifying feature
4. Make coverage complete
5. Ensure no outline visible
6. Blend edges if possible

**Tools:**
- Photo editing software
- Phone editing apps
- Online tools
- Ensure secure deletion of originals

### Method 3: Blurring

**When to Use:**
- When you need to keep some surrounding context
- When complete removal would look unnatural
- For backgrounds or peripheral areas

**How to Blur:**
1. Select blur tool or filter
2. Apply to identifying areas
3. Use sufficient blur (not just slight blur)
4. Check that identification is impossible
5. Save as new file

**Caution:**
- Some blurs can be reversed
- Use strong blur or pixelation
- Prefer covering/cropping when possible

### Method 4: Background Replacement

**When to Use:**
- When entire background is problematic
- When creating composite images
- When standardized background needed

**How to Replace:**
1. Select background area
2. Replace with solid color or neutral image
3. Ensure seamless edges
4. Check final image

---

## Section 5: Step-by-Step Anonymization Process

### Step 1: Immediate Review After Photography

**Right After Taking Photos:**
1. Review images on camera/phone
2. Check for obvious identifying features
3. Delete any photos with clear identifiers
4. Retake if necessary
5. Select best images for submission

**What to Check:**
- [ ] No faces visible
- [ ] No wristbands
- [ ] No tattoos
- [ ] No jewelry with engravings
- [ ] No institutional logos
- [ ] No background identifiers
- [ ] Good clinical quality

### Step 2: Transfer and Edit

**Secure Transfer:**
- Transfer to secure device
- Use encrypted methods
- Don't email or message
- Delete from camera after transfer

**Editing Process:**
1. Open in editing software
2. Create working copy
3. Apply anonymization
4. Review multiple times
5. Get second opinion if unsure
6. Save final anonymized version

**Editing Checklist:**
- [ ] Faces cropped or covered
- [ ] Wristbands removed
- [ ] Tattoos covered (unless lesion)
- [ ] Jewelry removed or covered
- [ ] Backgrounds neutralized
- [ ] Text blurred or covered
- [ ] Unique features obscured
- [ ] Metadata stripped

### Step 3: Verification

**Before Submission:**
1. View final image at full size
2. Check all corners and edges
3. Look for subtle identifiers
4. Ask colleague to review
5. Compare with original (if needed)
6. Confirm anonymization complete

**Questions to Ask:**
- Could I identify this patient from this photo?
- Could someone who knows them identify them?
- Is there any unique feature visible?
- Would this photo cause harm if public?
- Is the clinical information preserved?

**When in Doubt:**
- Don't submit
- Retake the photo
- Consult with supervisor
- Better safe than sorry

### Step 4: Metadata Removal

**EXIF Data to Remove:**
- GPS coordinates
- Date and time taken
- Camera serial number
- Device information
- Software used
- Editing history

**How to Remove:**
- Use EXIF removal tools
- "Export for web" settings
- Save as new format
- Use privacy settings in camera
- Check with metadata viewer

**Tools:**
- Built-in phone settings
- Photo editing software
- Online EXIF removers
- Batch processing tools

---

## Section 6: Data Security Protocols

### Secure Storage

**On Your Device:**
- Use encrypted storage
- Password protect device
- Enable remote wipe
- Keep minimal copies
- Delete after upload

**During Transfer:**
- Use secure upload system only
- Encrypted connections (HTTPS)
- No email or messaging
- No cloud services (Dropbox, etc.)
- No USB transfers to unsecured devices

### Upload Process

**Step-by-Step:**
1. Ensure secure connection
2. Log into authorized system
3. Select anonymized images
4. Complete metadata fields
5. Verify upload successful
6. Log out
7. Clear browser cache

**Never:**
- Upload to personal accounts
- Use public WiFi without VPN
- Leave system logged in
- Share login credentials

### Post-Upload Security

**Delete from Device:**
- Remove from camera
- Delete from phone
- Clear from computer
- Empty trash/recycle bin
- Remove from cloud sync folders

**Why Delete:**
- Reduces breach risk
- Follows data minimization
- Required by policy
- Protects patient
- Maintains compliance

### What Happens to Uploaded Data

**Secure Server Process:**
1. **Encrypted transmission** to server
2. **Secure storage** with access controls
3. **Quality review** by authorized personnel
4. **Anonymization verification**
5. **Metadata validation**
6. **Inclusion in training dataset**
7. **Audit trail** maintained

**Access Controls:**
- Only authorized personnel
- Role-based permissions
- Audit logs of access
- Regular security reviews
- Compliance monitoring

---

## Section 7: Privacy Breach Prevention

### Common Privacy Risks

**Risk 1: Device Theft/Loss**
- Phones with patient photos stolen
- Computers accessed by others
- USB drives lost
- Cameras misplaced

**Prevention:**
- Delete photos promptly
- Use encrypted devices
- Enable remote wipe
- Report loss immediately

**Risk 2: Unauthorized Access**
- Others viewing your device
- Shoulder surfing
- Shared computers
- Lost passwords

**Prevention:**
- Lock devices
- Privacy screens
- Strong passwords
- Never share credentials

**Risk 3: Accidental Sharing**
- Wrong email address
- Wrong phone number
- Social media upload
- Cloud sync

**Prevention:**
- Double-check recipients
- Disable auto-upload
- Review before sending
- Use secure channels only

**Risk 4: Insufficient Anonymization**
- Missing identifying features
- Reversible blurring
- Linkable information
- Context clues

**Prevention:**
- Thorough review
- Second opinion
- Check linkability
- Conservative approach

### If a Breach Occurs

**Immediate Actions:**
1. **Stop** - Don't make it worse
2. **Assess** - What was exposed?
3. **Contain** - Prevent further exposure
4. **Report** - Notify supervisor immediately
5. **Document** - Record what happened
6. **Review** - How to prevent recurrence

**Reporting Chain:**
1. Immediate supervisor
2. Partner organization
3. TLM International
4. Ethics committee (if required)
5. Affected patient (if required)

**Never:**
- Hide the breach
- Try to fix it alone
- Delay reporting
- Minimize the impact

---

## Section 8: Institutional Policies

### Your Institution's Policies

**You Must Follow:**
- Data protection policies
- Photography policies
- Patient privacy rules
- IT security protocols
- Research ethics requirements
- Reporting procedures

**Know Your Institution's:**
- Data retention periods
- Security requirements
- Breach reporting procedures
- Training requirements
- Audit processes
- Penalties for violations

### Compliance Requirements

**WHO Standards:**
- Follow WHO data policies
- Maintain highest standards
- Regular compliance checks
- Training documentation

**Local Regulations:**
- Data protection laws
- Medical privacy laws
- Research regulations
- Photography restrictions

**Professional Standards:**
- Medical ethics
- Professional codes
- Institutional policies
- Project agreements

---

## Section 9: Knowledge Check

### Scenario 1: The Ring

**Situation:** You're reviewing a hand photo before submission. You notice the patient is wearing a wedding ring with what appears to be engraving inside.

**What should you do?**

A) Submit anyway - rings are personal items
B) Crop the photo to remove the hand with the ring
C) Ask the patient to remove the ring and retake
D) Cover the ring with black box in editing

**Correct Answer: C or D**

**Best Practice:** Ask patient to remove and retake. If that's not possible, edit to cover. Rings with engravings can be identifying.

### Scenario 2: The Tattoo

**Situation:** Photographing a lesion on a patient's upper arm. There's a large, distinctive tattoo nearby, but not touching the lesion.

**What should you do?**

A) Include it - tattoos are common
B) Crop to show only lesion, excluding tattoo
C) Ask patient to cover tattoo with bandage
D) Photograph from angle that hides tattoo

**Correct Answer: B, C, or D**

**Explanation:** Distinctive tattoos can identify individuals. Crop, cover, or angle to exclude while maintaining clinical value.

### Multiple Choice Questions

**Question 1:** Which of the following should NOT be removed from clinical photos?

A) Patient's hospital wristband
B) Clinical lesion being documented
C) Distinctive tattoo near lesion
D) Background showing recognizable landmark

**Answer: B**

**Explanation:** The clinical lesion is the subject and must be visible. All identifying features must be removed.

**Question 2:** True or False: You should keep copies of patient photos on your phone for reference.

**Answer: False**

**Explanation:** Delete all photos from personal devices after secure upload. This is a security requirement.

**Question 3:** What is the first step in the anonymization process?

A) Apply digital blurring
B) Review immediately after photography
C) Upload to secure system
D) Remove metadata

**Answer: B**

**Explanation:** Immediate review allows you to delete bad photos and retake if needed, before editing.

**Question 4:** If you discover a privacy breach, what should you do first?

A) Try to fix it yourself
B) Report to supervisor immediately
C) Delete the evidence
D) Ignore it if it's minor

**Answer: B**

**Explanation:** Report immediately. Don't try to handle alone. Breaches must be reported per institutional policy.

**Question 5:** Which is the safest anonymization technique?

A) Slight blurring
B) Heavy blurring
C) Cropping out the identifier
D) Pixelation

**Answer: C**

**Explanation:** Cropping removes the identifier completely. Some blurs can be reversed. Cropping is irreversible and most secure.

---

## Section 10: Module Summary

### Key Principles

**1. Anonymization is Mandatory**
   - Protect patient identity
   - Prevent harm
   - Meet legal requirements
   - Maintain trust

**2. Remove All Identifiers**
   - Faces
   - Names
   - Tattoos
   - Jewelry
   - Background clues

**3. Multiple Techniques**
   - Cropping
   - Covering
   - Blurring
   - Background replacement

**4. Verify Before Submitting**
   - Check multiple times
   - Get second opinion
   - When in doubt, don't submit

**5. Security Throughout**
   - Secure storage
   - Encrypted transfer
   - Delete after upload
   - Report breaches

### Anonymization Checklist

Before submitting ANY image:
- [ ] No faces or facial features
- [ ] No wristbands or name tags
- [ ] No tattoos (unless lesion)
- [ ] No jewelry with engravings
- [ ] No institutional logos
- [ ] No location identifiers
- [ ] No metadata (GPS, timestamps)
- [ ] Background is neutral
- [ ] Unique features obscured
- [ ] Clinical quality maintained
- [ ] Reviewed by second person
- [ ] Deleted from device

### Privacy Security Checklist

Throughout process:
- [ ] Photos encrypted on device
- [ ] Device password protected
- [ ] Upload via secure system only
- [ ] No email or messaging
- [ ] Delete from device after upload
- [ ] Clear browser history
- [ ] Report any concerns immediately
- [ ] Follow institutional policies

### Remember

**Golden Rules:**
1. **Anonymize completely**
2. **Verify thoroughly**
3. **Secure always**
4. **Delete promptly**
5. **Report breaches**

**When in Doubt:**
- Don't submit
- Retake photo
- Consult supervisor
- Better safe than sorry

---

**Module Duration:** 12-15 minutes
**Assessment:** Scenario-based questions included
**Pass Rate:** 80% required to proceed
