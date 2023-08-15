#!/bin/bash

# Clean output directory
rm -rf .output

# Generate the static site
npm run generate

# Clean the deploy branch
git checkout deploy
git rm -r .
git clean -df

# Copy the generated files to the root directory
cp -r .output/public/* .
git add .
git commit -m "Update portfolio site"
git push origin deploy

# Switch back to the main branch
git checkout master
