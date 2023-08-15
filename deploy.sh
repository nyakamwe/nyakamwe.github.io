#!/bin/bash

# Clean output directory
rm -rf .output

# Generate the static site
npm run generate

# Copy to deployment branch
git checkout deploy
cp -r .output/public/* .
git add .
git commit -m "Update portfolio site"
git push origin deploy

# Switch back to the main branch
git checkout master
