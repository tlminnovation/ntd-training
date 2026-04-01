# Module 2: Algorithmic Photography Constraints
## Comprehensive Content Document for Clinical Specialists

### Learning Objectives
By the end of this module, participants will be able to:
1. Identify how algorithmic photography differs from standard clinical use.
2. Explaining the risks of "spurious correlations" caused by medical instruments.
3. Configure smartphone settings for maximum image quality without digital artifacts.
4. Execute the "Triplicate Rule" (Overview, Contextual, Close-up).

---

## Section 1: Algorithmic Context vs. Clinical Utility

As a specialist, you likely capture clinical photos routinely for local record-keeping or tumor boards. However, when building a dataset for machine learning, we must abandon some common habits. A neural network classifies images based on pixel data, making it prone to identifying irrelevant features as "ground truth."

### Critical Deviations from Standard Practice
- **NO Rulers or Coins:** Standard practice suggests placing a ruler next to a lesion for scale. **Do not do this.** Algorithms frequently develop false links, identifying the ruler itself as a feature of the condition.
- **Ditch "Macro Mode":** Do not press the phone lens physically against the lesion. Maintain a standard focal distance of 10-15cm so the image remains **sharply focused** without blur. 
- **No Digital Zoom:** Never pinch-to-zoom. Pixels are destroyed. Use the highest native resolution and physically move closer if needed.

---

## Section 2: Environment and Lighting

Light is the most critical metadata we capture. 
- **Natural, Diffuse Light:** Soft window light is superior.
- **Patchy Lighting Warning:** Strictly avoid placing the patient under a tree or near slatted blinds. **Patchy sunlight** creates high-contrast shadows that the AI cannot distinguish from pathology.
- **Neutral Backgrounds:** Use solid blue or green surgical drapes. A neutral background helps the algorithm's white balance stay consistent across different Fitzpatrick skin tones.

---

## Section 3: The Triplicate Collection Rule

To ensure the AI understands both morphology and anatomical orientation, each case requires three specific shots:
1. **Overview:** Shows the regional presentation (e.g., the entire full arm).
2. **Contextual:** A medium shot showing a landmark (e.g., the elbow crease or navel).
3. **Close-up:** A high-resolution, sharply focused image of the lesion itself.

---

## Section 4: Knowledge Check

**Question:** You are preparing to photograph a small lesion on a patient's leg. You want to provide a size reference for the data scientists. What is the correct protocol?

A) Place a sterile medical ruler directly below the lesion.
B) Frame the shot perpendicularly, ensuring a high-resolution, sharp focus with no tools in the frame.
C) Use digital zoom to fill the entire frame with the lesion only.

**Correct Answer:** B
**Explanation:** Physical reference objects like rulers confuse the algorithm's pattern recognition. A clean background and high-resolution focus are the primary requirements.

---

## Section 5: Module Summary

### Key Takeaways
1. **Consistency:** Avoid digital zoom and macro mode to maintain pixel integrity.
2. **No Tools:** Exclude rulers, coins, or pens from the clinical frame.
3. **Lighting:** Use diffuse natural light; avoid dappled or patchy shadows.
4. **Three Shots:** Always capture Overview, Contextual, and Close-up.

Proceed to **Module 3: Research Consent & Authority** to learn about navigating informed consent for global health initiatives.
