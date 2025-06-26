# 🚀 Manual Firebase Deployment from VS Code (NO GitHub)

# 1. Navigate to your project folder
cd /path/to/Hometownwebsite

# 2. Log in to Firebase (only needed once)
firebase login

# 3. Initialize Firebase Hosting (skip GitHub setup)
firebase init hosting

# ==== PROMPT ANSWERS DURING firebase init ====
# - Select: Hosting: Configure files for Firebase Hosting
# - Use existing project: hometown-wesbsite
# - What do you want to use as your public directory? → /
# - Configure as single-page app (rewrite all URLs to /index.html)? → No
# - Set up automatic builds and deploys with GitHub? → No
# - Overwrite index.html? → No
# =================================================

# 4. Deploy to Firebase Hosting
firebase deploy

# 🎉 After successful deploy, you'll see something like:
# ✔  hosting[hometown-wesbsite]: release complete
# Hosting URL: https://hometown-wesbsite.web.app

# ✅ Done!
# Visit your site at:
# https://hometown-wesbsite.web.app
