mkdir scoobies
mkdir vamps
cd scoobies/
touch buffy.txt
touch angel.txt
touch giles.txt
cd ..
cd vamps/
mv ../scoobies/angel.txt .
cd ..
rm -r vamps/
