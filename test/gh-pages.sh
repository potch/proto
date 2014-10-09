echo 'updating gh-pages'
git remote rm origin
git remote add origin https://potch:$GITHUB_TOKEN@github.com/potch/proto.git
git push -fq origin master:gh-pages
