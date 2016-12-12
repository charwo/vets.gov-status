#! /usr/bin/env bash

# Get to git repo root directory
cd $(dirname $0)/..

# Get the latest version locally
git checkout master
git pull

# Create branch for the update using data to differentiate
git checkout -b "$(date -I)-ga-data"

# Create a virtual environment to run our script in to prevent any package version conflicts
python3 -m venv update_data

# move our scripts over into the venv
cp -r scripts/* update_data/

cd update_data

# Install requirements
bin/pip3 install -r requirements.txt

bin/python3 update_data.py
mv *.csv ../_data

cd ..

# Clean up venv so git doesn't pick it up
rm -rf update_data

# Push our changes up to github and clean up local branch
git add .
git commit -m "$(date -I) automated GA data pull"
git push -u origin HEAD
git checkout master
git branch -d "$(date -I)-ga-data"

GH_TOKEN=$( git config --get github.token )

# Open the pull request and store its number
ISSUE="$(curl -H "Authorization: token $GH_TOKEN" \
     --data "{
              \"title\": \"$(date -I) automated GA data pull\",
              \"body\": \"Weekly GA data pull\",
              \"head\": \"$(date -I)-ga-data\",
              \"base\": \"master\"
            }" \
     https://api.github.com/repos/department-of-veterans-affairs/vets.gov-status/pulls \
     2> /dev/null | grep \"number\": | sed 's/^\W*number\W*\([0-9][0-9]*\)\W*/\1/')"

# Assign the pull request so an email notification gets sent
curl -H "Authorization: token $GH_TOKEN" \
    --data "{
             \"assignee\": \"$(git config --get github.username)\"
           }" \
    -X PATCH \
    https://api.github.com/repos/department-of-veterans-affairs/vets.gov-status/issues/$ISSUE
