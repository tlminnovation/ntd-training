# InfinityFree Setup Guide for SkinApp Training Course
## Complete Installation Instructions

---

## IMPORTANT LIMITATIONS

**InfinityFree has restrictions that may prevent H5P from working fully:**
- Free hosting often blocks external scripts/CDNs
- H5P requires specific server capabilities
- May need alternative approaches

**ALTERNATIVE RECOMMENDATION:** 
I'll provide instructions for a simpler HTML-based course that WILL work on InfinityFree.

---

## OPTION 1: Simple HTML Course (RECOMMENDED - Works on InfinityFree)

### Step 1: Prepare Files

1. **Download these files from your computer:**
   - `course-complete.html` (created above)
   - All images/assets (if any)

2. **Rename for hosting:**
   - Rename `course-complete.html` to `index.html`

### Step 2: Upload to InfinityFree

**Using File Manager (easiest):**

1. Log into your InfinityFree account
2. Go to Control Panel
3. Click "File Manager" or "Online File Manager"
4. Navigate to `htdocs` folder
5. Upload the `index.html` file
6. Your site will be live at: `ntdskinapptraining.42web.io`

**Using FTP (alternative):**

1. Download FileZilla (free FTP client)
2. Get FTP credentials from InfinityFree control panel
3. Connect to your server
4. Upload `index.html` to `/htdocs/` folder

---

## OPTION 2: Full H5P Setup (May Not Work on Free Hosting)

### Prerequisites Check

**Before starting, verify your InfinityFree account supports:**
- PHP 7.4 or higher
- MySQL database
- File uploads > 10MB
- External CDN access (h5p.org)

### Step-by-Step H5P Installation

#### Step 1: Create Database

1. Log into InfinityFree Control Panel
2. Go to "MySQL Databases"
3. Create new database:
   - Database name: `h5p_training`
   - Note down the credentials

#### Step 2: Download H5P

1. Go to: https://h5p.org/setup
2. Download H5P for your platform (WordPress/Drupal/Moodle)
3. For simple hosting, use WordPress + H5P plugin

#### Step 3: Install WordPress (if not already installed)

1. In InfinityFree Control Panel
2. Go to "Softaculous Apps Installer"
3. Select WordPress
4. Install in your domain root
5. Note down admin credentials

#### Step 4: Install H5P Plugin

1. Log into WordPress admin
2. Go to Plugins → Add New
3. Search "H5P"
4. Install "H5P" plugin by Joubel
5. Activate it

#### Step 5: Configure H5P

1. Go to H5P → Settings
2. Enable "Save content state"
3. Set "H5P export" to enabled
4. Save settings

#### Step 6: Import Training Content

1. Go to H5P → Content
2. Click "Add New"
3. For each module:
   - Upload the .h5p.json files
   - Or manually recreate using the text content

---

## OPTION 3: Best Alternative - Static HTML Site

### Why This is Better for InfinityFree:

✅ No database required  
✅ No PHP needed  
✅ Works on any hosting  
✅ Fast loading  
✅ No maintenance  
✅ No security updates needed  

### Complete Implementation

I've created `course-complete.html` with:
- Full Module 1 content
- Interactive navigation
- Working quiz with feedback
- Progress tracking
- Certificate generation
- Professional styling

#### To Deploy:

**Files to Upload:**

**Required (Minimum):**
```
htdocs/
└── index.html          (rename course-complete.html)
```

**Recommended (Complete):**
```
htdocs/
├── index.html          (main course)
├── css/
│   └── styles.css      (if separated)
├── js/
│   └── course.js       (if separated)
└── assets/
    └── (any images)
```

#### Upload Instructions:

**Method 1: File Manager (Recommended)**
1. Log into `https://app.infinityfree.net`
2. Username: `if0_41489599`
3. Password: `vPJQVYo81cpK`
4. Go to "File Manager"
5. Navigate to `/htdocs/`
6. Upload `course-complete.html`
7. Rename to `index.html`
8. Visit: `https://ntdskinapptraining.42web.io`

**Method 2: FTP**
1. Open FileZilla
2. Host: `ftpupload.net`
3. Username: `if0_41489599`
4. Password: `vPJQVYo81cpK`
5. Port: `21`
6. Connect
7. Upload to `/htdocs/` folder

---

## TESTING YOUR SITE

### After Upload:

1. **Clear browser cache** (Ctrl+Shift+R)
2. Visit: `https://ntdskinapptraining.42web.io`
3. Test all buttons
4. Try the quiz questions
5. Check navigation
6. Verify certificate generation

### Troubleshooting:

**If site doesn't load:**
- Wait 10-15 minutes (DNS propagation)
- Check file is named `index.html`
- Verify file in `/htdocs/` folder
- Clear browser cache

**If content doesn't display:**
- Check browser console (F12 → Console) for errors
- Verify JavaScript enabled
- Check for ad blockers blocking scripts

**If quiz doesn't work:**
- Disable browser extensions
- Try different browser
- Check console for JavaScript errors

---

## COMPLETE COURSE CONTENT AVAILABLE

You have ALL content ready in `/content/` folder:

**Module 1:** Project Overview (13 KB) ✅  
**Module 2:** Clinical Photography (17 KB)  
**Module 3:** Informed Consent (18 KB)  
**Module 4:** Privacy & Anonymization (18 KB)  
**Module 5:** Safeguarding (22 KB)  
**Final Assessment:** 20 Questions (14 KB)  

### To Add Remaining Modules:

I can create a complete HTML file with ALL modules embedded. This would be a single file (~200 KB) containing the entire course.

**Would you like me to:**
1. Create a single HTML file with ALL 5 modules + assessment?
2. Create separate HTML files for each module?
3. Create a simple site structure with multiple pages?

---

## SECURITY NOTES

**Never commit these to public repositories:**
- Database passwords
- Admin credentials
- API keys
- Personal information

**Your credentials shared above should be:**
- Changed after setup
- Not shared publicly
- Stored securely

---

## MAINTENANCE

**With HTML-only approach:**
- No updates needed
- No security patches
- No database backups
- No plugin updates
- No hosting maintenance

**Content updates:**
- Edit HTML file locally
- Re-upload to server
- Changes are immediate

---

## SUPPORT

**For InfinityFree issues:**
- https://forum.infinityfree.net
- Check their knowledge base
- Contact their support

**For course content questions:**
- Refer to the technical specification document
- Contact your partner organization
- Consult institutional policies

---

## QUICK START CHECKLIST

- [ ] Log into InfinityFree
- [ ] Open File Manager
- [ ] Navigate to /htdocs/
- [ ] Upload course-complete.html
- [ ] Rename to index.html
- [ ] Visit your domain
- [ ] Test the course
- [ ] Share URL with staff

**Estimated Time:** 10 minutes  
**Technical Skill:** Basic (uploading files)  
**Cost:** Free  
**Result:** Working training course online

---

## NEXT STEPS

**Tell me which option you prefer:**

**Option A:** Single file with all modules (easiest)
**Option B:** Multiple files (one per module)
**Option C:** WordPress + H5P (if InfinityFree supports it)

And I'll create the exact files you need to upload!
