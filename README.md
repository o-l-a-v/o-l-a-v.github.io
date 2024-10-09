# Readme

## About

Here I'll maybe, eventually, create docs, guides and a blog. Created with [Docusaurus](https://docusaurus.io/), hosted in [GitHub Pages](https://pages.github.com/).

## Project help

### Maintain

Upgrade packages and dependencies using Yarn. Try to run locally _and_ build before pushing the changes.

```bash
# Navigate to the website folder
cd website

# Update NodeJS with fnm
fnm install --lts --corepack-enabled
fnm default <new_version>
fnm use <new_version>
fnm list
fnm uninstall <old_version(s)>

# Update package manager with Corepack
corepack up

# Update Node packages in packages.json
yarn upgrade-interactive

# Update all Node packages, not only those in packages.json, but those in yarn.lock too
yarn up --recursive '*'

# Deduplicate
yarn dedupe --check

# Update vulnearble package
## Regular update first
yarn upgrade-interactive
## If that did not help - Find out what uses it
yarn why '<package_name>'
## Upgrade packages using it, if update is available. Check npmjs.com.
yarn up --recursive '<package_name>'
```

### Run locally

See edits to pages live.

```powershell
# If building clean from what's in Git
git clean --force -d -x
yarn install

# Run
yarn start

# Build, also to check for broken anchors and links
yarn build
```

### Deploy to GitHub pages from local

```powershell
# If building clean from what's in Git
git clean --force -d -x
yarn install

# Deploy
yarn docusaurus clear; $env:GIT_USER = [string] 'o-l-a-v'; yarn deploy
```
