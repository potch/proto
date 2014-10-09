gulp connect&
mkdir screenshots
slimerjs test/capture.js
git add screenshots -f
git commit -m "updated screenshots $(date)"
