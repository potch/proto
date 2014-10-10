
echo "starting server"
gulp connect&
mkdir screenshots
echo "running screenshot script"
node test/sauce.js

echo "setting up git"
git config --global user.email "brick@travis.biz"
git config --global user.name "Travis"
git add screenshots -f
git commit -m "updated screenshots $(date)"
