echo 'Installing Slimer'
wget http://download.slimerjs.org/v0.8/0.8.5/slimerjs-0.8.5.zip -O slimerjs.zip
unzip slimerjs.zip -d slimer-temp
mv slimer-temp/slimer* slimerjs/
rm -r slimer-temp
