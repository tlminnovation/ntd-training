# Module 4: Absolute Anonymization Protocols
## Comprehensive Content Document for Clinical Specialists

### Learning Objectives
By the end of this module, participants will be able to:
1. Explain the "zero-source" anonymization requirement for machine learning datasets.
2. Execute framing protocols for facial lesions while perfectly obscuring identity.
3. Identify often-missed metadata identifiers (jewelry, tattoos, clinical tags).
4. Understand the technical risk of facial leprosy being excluded from global training sets.

---

## Section 1: The Standard of Anonymity

Standard clinical photography for a patient file is private. Photography for a global AI initiative must be **absolutely anonymized at the source.** Because these images will be moved across international servers and reviewed by data scientists, any link to a specific human identity is a critical failure.

### Protecting Patient Identity
The core rule is simple: **The patient must not be identifiable from the photograph alone.** This protects them from the significant stigma often associated with leprosy and skin NTDs.

---

## Section 2: The Facial Lesions Protocol

Leprosy frequently presents on the face (cheeks, forehead, chin). We cannot ignore this data, but we cannot compromise anonymity.

### Framing Solutions
- **Physical Framing:** The algorithm analyzes skin texture, color, and elevation. It does not need the entire face. Move the camera so that identifying features like the eyes, eyebrows, nose bridge, and mouth are physically outside the frame.
- **Physical Obscuring:** If the lesion's size makes framing impossible, provide the patient with opaque clinical glasses or a sterile drape mask to cover their defining features **prior to capture.**

---

## Section 3: Excluding Peripheral Metadata

Identifiers are not always in the pathology. Check for and exclude:
- **Clinical Identifiers:** Hospital wristbands with names or QR codes.
- **Biometric Markers:** Distinctive non-pathological tattoos or scars.
- **Personal Items:** Unique jewelry, religious symbols, or specific name tags.
- **Background:** Ensure no other staff members or family members are visible.

---

## Section 4: Knowledge Check

**Question:** A patient has a large hypopigmented plaque spanning their left cheek and extending near their eye. You must capture this for the dataset. What is your procedure?

A) Take a standard clinical full-face portrait to ensure the AI grasps facial geometry, trusting the data scientists to crop it later.
B) Physically frame the smartphone camera to cut off the eyes while capturing the plaque, or apply a sterile medical drape over the patient's eyes/nose to obscure recognizable structure.
C) Discard the case entirely; facial lesions violate dataset rules.

**Correct Answer:** B
**Explanation:** Identity must be protected at the moment of capture, before the image hits device memory. Facial lesions are vital but require meticulous framing to obscure identity.

---

## Section 5: Module Summary

### Key Takeaways
1. **Source Anonymization:** Obscure identity at the moment of capture.
2. **Facial Lesions:** Frame the image to exclude the eyes, nose, and mouth.
3. **Medical Draping:** Use physical coverings (glasses/masks) if framing is impossible.
4. **Metadata Cleanliness:** Exclude tattoos, jewelry, and wristbands from every frame.

Proceed to **Module 5: Sensitive Safeguarding** to learn about genitalia, buttocks, and professional clinical draping.
