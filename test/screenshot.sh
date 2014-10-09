gulp connect&
mkdir screenshots
slimerjs test/capture.js

git config --global user.email "brick@travis.biz"
git config --global user.name "Travis"
git add screenshots -f
git commit -m "updated screenshots $(date)"
