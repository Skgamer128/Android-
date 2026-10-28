# APK Download Website

A responsive single-app APK download landing page made with HTML, CSS, and JavaScript.

## Run locally
1. Open this folder in VS Code.
2. Use the Live Server extension, or run `python -m http.server 8000` in this folder.
3. Open `http://localhost:8000`.

## Add your APK
Copy your real Android APK into `downloads/` and name it `app-release.apk`, or change `apkPath` in `script.js` to match the filename.

## Customize before publishing
Edit `APP_CONFIG` in `script.js`:
- `name`
- `version`
- `developer`
- `updated`
- `apkPath`

Also update the sample feature text in `index.html`, and change the letter A in the logo/icon if desired.

## Important
This template does not scan or certify APK files. Only publish an APK you own or are authorized to distribute. Test the download link and provide accurate app details before going live. HTTPS hosting is recommended.
