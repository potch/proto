echo 'Installing Slimer'
wget http://download.slimerjs.org/releases/0.9.3/slimerjs-0.9.3.zip -O slimerjs.zip
unzip slimerjs.zip -d slimer-temp
mv slimer-temp/slimer* slimerjs/
rm -r slimer-temp
