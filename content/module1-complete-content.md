# Module 1: Building Ground Truth Data
## Comprehensive Content Document for Clinical Specialists

### Learning Objectives
By the end of this module, participants will be able to:
1. Understand the specialist's role as the provider of "ground truth" labels for machine learning.
2. Explain the objective of the 1,200-image expert dataset for leprosy and skin NTDs.
3. Differentiate between the role of the specialist (data source) and the peripheral worker (app end-user).
4. Recognize the technical necessity for expert-verified diagnostic consistency.

---

## Section 1: The Global AI Initiative

### Expert Contribution to Triage Support
Welcome to the WHO SkinNTD AI Image Collection Initiative. As an expert clinician or dermatologist, your advanced diagnostic capability is the most critical asset in this project. While you already possess the expertise to diagnose these complex pathologies, thousands of primary health workers in resource-limited settings do not.

The goal of this initiative is to build a reliable **Artificial Intelligence (AI) Triage Support Tool**. This tool is designed to assist frontline workers by providing them with a **differential diagnosis** based on clinical images, enabling earlier detection and more accurate referrals for specialized leprosy care.

### The Role of Ground Truth
Machine learning models are only as accurate as the data they are trained on. 
- **Expert Labels:** Your definitive clinical diagnoses, linked to the images you capture, provide the "ground truth" the algorithm needs to learn.
- **Triage, Not Absolute Diagnosis:** It is vital to remember that the final application is a triage support tool. It provides possibilities to support human judgment; it does not replace the clinician.

---

## Section 2: Project Objectives and Target

### The 1,200 Image Metric
To achieve a high degree of sensitivity and specificity, the project has a refined initial target:
- **Primary Goal:** 1,200 verified, high-resolution images.
- **Specific Focus:** We urgently require more images of **leprosy lesions** across all classifications.
- **Diversity:** Images must represent the full spectrum of Fitzpatrick skin types (I-VI) and diverse geographic regions to ensure the AI is equitable and accurate for all populations.

---

## Section 3: Why Specialists Must Adapt
Taking a clinical photograph for a machine learning algorithm is different from taking one for a patient record or a case study. Algorithms analyze pixel matrices and are prone to "spurious correlations." If training data is inconsistent, the AI may learn to identify the clinic background or medical tools instead of the pathology.

### Your Position of Authority
As a contributor at the specialist level, you hold the direct ethical relationship with the patient. Your expert judgment ensures that the data is not only technically sound but ethically captured.

---

## Section 4: Knowledge Check

**Question 1:** Why is the expert clinician's role critical in the image collection phase for the SkinNTD app?

A) Because the UI of the SkinNTD app is designed solely for use by dermatologists in referral hospitals.
B) Because neural networks require accurate "ground truth" labels. A specialist's confirmed diagnosis linked to a clean image ensures the model learns the correct pathological features to support future frontline workers.
C) Because only specialists are legally allowed to use smartphone cameras in a hospital setting.

**Correct Answer:** B
**Explanation:** The AI relies entirely on the accuracy of the labels provided by experts during this phase to support non-specialists in the future.

**Question 2:** What is the primary role of the final SkinNTD AI application?

A) To provide a definitive, legally-binding diagnosis of leprosy.
B) To act as a triage support tool providing differential diagnoses for peripheral health workers.
C) To replace the need for dermatologists in rural areas.

**Correct Answer:** B
**Explanation:** The app is a triage tool providing a list of differential possibilities to assist frontline judgment and referral.

---

## Section 5: Module Summary

### Key Takeaways
1. **Ground Truth:** Specialists provide the verified labels that train the AI.
2. **Target:** 1,200 high-quality leprosy and skin NTD images.
3. **App Function:** A triage support tool for frontline workers, not a replacement for specialists.
4. **Consistency:** Technical consistency in photography is required to prevent algorithmic errors.

Proceed to **Module 2: Algorithmic Photography Constraints** to learn about the specific technical requirements for machine learning datasets.
