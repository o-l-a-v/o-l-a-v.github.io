# Readme

## About

Here I'll maybe, eventually, create docs, guides and a blog. Created with [Docusaurus](https://docusaurus.io/), hosted in [Cloudflare Pages (primary)](https://pages.cloudflare.com/) and [GitHub Pages (secondary)](https://pages.github.com/).

## Project help

### Maintain

Upgrade packages and dependencies using Yarn. Try to run locally _and_ build before pushing the changes.

```bash
# Navigate to the website folder
cd website

# Update NodeJS with fnm - Use `pwsh -NoProfile` if "error: Can't download the requested binary: Access is denied. (os error 5)"
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
## Using NodeJS since 22
node --run start
## Using Yarn
yarn start
```

### Build locally

```powershell
# Build, will also to check for broken anchors and links vs. running it locally
## Using NodeJS since 22
node --run build
## Using Yarn
yarn build

# Build clean and time how long it took
node --run clear; $Stopwatch = [System.Diagnostics.Stopwatch]::StartNew(); node --run build; $Stopwatch.Stop(); $Stopwatch.Elapsed.ToString()
```

### Deploy to GitHub pages from local

```powershell
# If building clean from what's in Git
git clean --force -d -x
yarn install

# Deploy
## Using NodeJS since 22
node --run clear; $env:GIT_USER = [string] 'o-l-a-v'; node --run deploy
## Using Yarn
yarn docusaurus clear; $env:GIT_USER = [string] 'o-l-a-v'; yarn deploy
```

## Other learnings

### One don't need `devDependencies` for building

One could probably save some seconds in a CI/CD pipeline if only installing the NPM packages needed for building.

With Yarn one could do: `yarn workspaces focus --all --production` instead of `yarn install`.

### Where is the Yarn global cache location on Windows?

`%LOCALAPPDATA%\Yarn\Berry\cache`
