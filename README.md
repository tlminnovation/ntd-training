# SkinApp Training Course - README
## WHO SkinNTD AI Image Collection Initiative

---

## 📋 COURSE OVERVIEW

This is a **complete interactive training course** for medical staff participating in the WHO SkinNTD AI Image Collection Initiative. The course prepares clinicians to:

- ✅ Collect high-quality clinical images
- ✅ Obtain proper informed consent
- ✅ Maintain patient dignity and privacy
- ✅ Follow safeguarding principles
- ✅ Contribute to AI training ethically

**Total Duration:** 45-60 minutes  
**Format:** Interactive H5P modules (can run locally)  
**Target Audience:** Medical staff, clinicians, healthcare workers  
**Pass Rate:** 80% (16/20) required for certification

---

## 📁 FILE STRUCTURE

### Root Directory Files

| File | Description | Size |
|------|-------------|------|
| `index.html` | **MAIN FILE** - Standalone course interface | 17 KB |
| `course-overview.html` | Visual course overview | 8.3 KB |
| `course-structure.json` | Course structure definition | 1.1 KB |
| `implementation-guide.txt` | Technical setup instructions | 4.8 KB |
| `quick-reference-guide.txt` | Quick training reference | 4.6 KB |
| `course-creation-summary.txt` | Detailed creation summary | 6.7 KB |

### H5P Module Files

| File | Module | Type |
|------|--------|------|
| `module1-overview.h5p.json` | Project Overview | Course Presentation |
| `module2-photography.h5p.json` | Clinical Photography | Course Presentation |
| `module3-consent-branching.h5p.json` | Informed Consent | Branching Scenario |
| `module4-privacy.h5p.json` | Anonymization | Course Presentation |
| `module5-safeguarding.h5p.json` | Safeguarding | Course Presentation |
| `final-assessment.h5p.json` | Final Assessment | Question Set | (20 questions) |

### Content Directory (`/content/`)

| File | Content | Size |
|------|---------|------|
| `module1-complete-content.md` | Project Overview (full text) | 13 KB |
| `module2-complete-content.md` | Photography guidelines | 17 KB |
| `module3-complete-content.md` | Consent procedures | 18 KB |
| `module4-complete-content.md` | Privacy protection | 18 KB |
| `module5-complete-content.md` | Safeguarding principles | 22 KB |
| `final-assessment-complete.md` | 20 assessment questions | 14 KB |
| `content-summary.txt` | Content overview | 7.5 KB |

---

## 🚀 QUICK START - RUN LOCALLY

### Option 1: Double-Click (Easiest)
1. Navigate to the **Training course** folder
2. Double-click `index.html`
3. Opens in your default browser
4. Click "Start Course"

### Option 2: Open with Browser
1. Right-click `index.html`
2. Select "Open with" → Chrome/Firefox/Safari
3. Course loads with navigation

### Option 3: Local Web Server
```bash
# Navigate to Training course folder
cd "Training course"

# Start Python server
python3 -m http.server 8000

# Open browser to:
# http://localhost:8000
```

---

## 📚 COURSE MODULES

### Module 1: Project Overview & Objectives (10 min)
**What You'll Learn:**
- Project goals and AI training process
- Governance structure (WHO → TLM → Partners → You)
- Your roles and responsibilities
- Ethical principles

**Key Points:**
- Patient welfare always comes first
- You are part of Level 4 (direct patient responsibility)
- 10,000+ images needed for diverse AI training

### Module 2: Clinical Photography Best Practices (12 min)
**What You'll Learn:**
- 10 required metadata fields (memorize these!)
- Photography techniques (Do's and Don'ts)
- Image quality standards
- Special considerations for private areas

**Key Points:**
- Use macro mode, good lighting, proper focus
- Remove all identifying information
- Fitzpatrick Scale ensures skin tone diversity
- Delete images from device after upload

### Module 3: Informed Consent Procedures (15 min)
**What You'll Learn:**
- Consent is continuous, not one-time
- Handling language barriers
- Recognizing coercion
- Responding to withdrawal

**Key Points:**
- Never use family interpreters
- Watch for red flags (looking to others, fear)
- Patient can withdraw at ANY time
- Children's assent matters even with parental consent

### Module 4: Anonymization & Privacy Protection (12 min)
**What You'll Learn:**
- What to remove (faces, tattoos, jewelry, backgrounds)
- Anonymization techniques (crop, cover, blur)
- Data security protocols
- Breach prevention

**Key Points:**
- Review immediately after photography
- Check multiple times before submitting
- Delete from device after secure upload
- Report breaches immediately

### Module 5: Safeguarding Principles (12 min)
**What You'll Learn:**
- Five principles of dignity
- Protecting vulnerable populations
- Mandatory reporting
- Cultural sensitivity

**Key Points:**
- STOP if any safeguarding concerns
- Report suspected abuse immediately
- Private areas require extra care
- When in doubt, consult supervisor

### Final Assessment (10 min)
- 20 comprehensive questions
- Covers all 5 modules
- 80% pass rate (16/20 correct)
- Unlimited retakes
- Certificate generated upon passing

---

## 🎯 KEY LEARNING OBJECTIVES

Upon completing this course, you will be able to:

1. **Explain** the WHO SkinNTD AI project and your role
2. **Capture** high-quality clinical images with proper metadata
3. **Obtain** meaningful informed consent
4. **Anonymize** images by removing all identifiers
5. **Protect** vulnerable patients and maintain dignity
6. **Recognize** safeguarding concerns and respond appropriately
7. **Report** suspected abuse per institutional protocols

---

## ✅ CERTIFICATION

### Requirements:
- Complete all 5 modules
- Pass final assessment (80%, 16/20)
- Certificate code generated: `SKIN-XXXXXXXX`

### Certificate Includes:
- Your name
- Completion date
- Modules covered
- Authorization statement

### Next Steps:
1. Save your certificate code
2. Enter code in KoboToolbox/REDCap
3. Gain access to image collection system
4. Begin collecting images

---

## 🔧 IMPLEMENTATION OPTIONS

### Option 1: Standalone (Local)
- Use `index.html` with any modern browser
- No server required
- Works offline (after initial load)
- Mobile responsive

### Option 2: Moodle LMS
- Import H5P files
- Track completion
- Generate certificates
- Integrate with existing systems

### Option 3: H5P.com (Cloud)
- Quick deployment
- No technical setup
- Share via link
- Basic analytics

### Option 4: WordPress + H5P Plugin
- Easy content management
- Various LMS plugins
- Full CMS features

---

## 📖 USING THE CONTENT FILES

The `/content/` folder contains complete text for all modules:

### For Instructors:
- Use as training manual
- Print for reference
- Extract for presentations
- Create discussion guides

### For Developers:
- Convert to video scripts
- Create animations
- Build additional scenarios
- Translate to other languages

### For Learners:
- Reference material
- Offline study
- Review before assessment
- Quick lookup

---

## 🛠️ TECHNICAL REQUIREMENTS

### System Requirements:
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (initial load only)
- No special plugins required

### For Mobile:
- Responsive design
- Touch-friendly
- Works on tablets
- Optimized for phone screens

---

## 🎓 PEDAGOGICAL APPROACH

### Learning Methods:
- **Course Presentations:** Information delivery with visuals
- **Branching Scenarios:** Interactive decision-making
- **Knowledge Checks:** Immediate feedback
- **Real-World Examples:** Clinical application
- **Scenario-Based:** Practical situations

### Assessment:
- Multiple choice questions
- True/False questions
- Scenario-based decisions
- Application of principles
- Ethics-based reasoning

---

## 📊 CONTENT STATISTICS

- **Total Word Count:** ~25,000 words
- **Modules:** 5 + 1 assessment
- **Scenarios:** 11 realistic clinical situations
- **Questions:** 25+ (modules + assessment)
- **Pages (if printed):** ~50 pages
- **Reading Level:** Healthcare professional

---

## 🌍 CULTURAL CONSIDERATIONS

The course includes:
- Cultural sensitivity guidelines
- Language barrier protocols
- Gender considerations
- Power dynamic awareness
- Respect for diverse backgrounds

**Note:** Content may need localization for specific regions.

---

## ⚖️ ETHICAL FRAMEWORK

Based on:
- WHO ethical guidelines
- International medical ethics
- Data protection standards
- Child safeguarding protocols
- Human subjects research ethics

All content reviewed for:
- Medical accuracy
- Ethical soundness
- Cultural sensitivity
- Legal compliance

---

## 🔄 UPDATES AND VERSIONS

**Current Version:** 1.0  
**Date:** March 27, 2026  
**Based on:** Technical Specification Document v1.3

**Review Schedule:**
- Annual content review recommended
- Update as policies change
- Incorporate feedback from users
- Revise based on new guidelines

---

## 🆘 TROUBLESHOOTING

### Course Won't Load:
- Check internet connection (first time only)
- Try different browser
- Clear browser cache
- Ensure all files in same folder

### Images Not Loading:
- Check file paths
- Verify .h5p.json files present
- Check browser console for errors

### Progress Not Saving:
- Enable cookies
- Check browser settings
- Use same browser session

### Certificate Not Generating:
- Must achieve 80% on assessment
- Complete all modules
- Check JavaScript enabled

---

## 📞 SUPPORT AND CONTACT

### Technical Support:
- H5P Documentation: https://h5p.org/documentation
- Platform-specific help
- IT Department

### Content Questions:
- Technical Specification Document
- Partner Organization Supervisor
- Institutional Ethics Committee
- TLM International Contact

### Feedback:
- Course improvement suggestions
- Content accuracy reports
- Technical issues
- Feature requests

---

## 📝 LICENSE AND USAGE

### Usage Rights:
- Free for WHO SkinNTD project use
- Modification allowed for local needs
- Translation encouraged
- Distribution within project permitted

### Attribution:
- Based on WHO SkinNTD Technical Specs v1.3
- Created for WHO/TLM initiative
- Credit original sources

---

## 🎉 WHAT YOU'VE CREATED

### Complete Package Includes:
- ✅ 5 comprehensive training modules
- ✅ Standalone HTML interface
- ✅ Interactive H5P content
- ✅ 20-question final assessment
- ✅ Certificate generation
- ✅ Full text content (25,000+ words)
- ✅ Implementation guides
- ✅ Reference materials
- ✅ Quick start instructions

### Ready For:
- ✅ Immediate deployment
- ✅ Local use (no hosting)
- ✅ LMS integration
- ✅ Translation
- ✅ Customization
- ✅ Scaling

---

## 🚀 NEXT STEPS

1. **Test the Course**
   - Open `index.html`
   - Navigate through modules
   - Take assessment
   - Verify certificate generation

2. **Customize (Optional)**
   - Add your organization branding
   - Include local contact information
   - Adapt scenarios for local context
   - Translate to local language

3. **Deploy**
   - Share with medical staff
   - Track completion
   - Integrate with KoboToolbox/REDCap
   - Monitor progress

4. **Maintain**
   - Gather feedback
   - Update as needed
   - Annual review
   - Continuous improvement

---

## 💡 QUICK REFERENCE

**To Start Immediately:**
1. Open `Training course/index.html`
2. Click "Start Course"
3. Complete all 5 modules
4. Pass assessment (80%, 16/20)
5. Get certificate code
6. Start collecting images!

**Total Time Investment:**
- Learner: 45-60 minutes
- Setup: 5 minutes
- Zero cost
- Maximum impact

---

**Thank you for contributing to this important global health initiative!**

Your commitment to proper training ensures patient safety while advancing leprosy and skin NTD care worldwide.

---

**Version:** 1.0  
**Date:** March 27, 2026  
**Status:** Ready for deployment
