
echo "starting server"
gulp connect&
mkdir screenshots
echo "running screenshot script"
node test/screenshots/sauce.js

echo "setting up git"
git config --global user.email "brick@travis.biz"
git config --global user.name "Travis CI"
git add screenshots -f
git commit -m "updated screenshots $(date)"

echo 'updating gh-pages'
git remote rm origin
git remote add origin https://potch:$GITHUB_TOKEN@github.com/potch/proto.git
git push -f origin HEAD:gh-pages
