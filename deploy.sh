#!/bin/bash

# Clean output directory
rm -rf .output

# Generate the static site
npm run generate

# Clean the deploy branch
git checkout docs
git rm -r .
git clean -df

# Pull remote code
git pull origin docs

# Copy the generated files to the root directory
cp -R .output/public/* .
git add .
git commit -m "Update portfolio site #1"
git push origin docs

# Switch back to the main branch
git checkout master
