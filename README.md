# Readme

## About

Here I'll maybe, eventually, create docs, guides and a blog. Created with [Docusaurus](https://docusaurus.io/), hosted in [Cloudflare Pages (primary)](https://pages.cloudflare.com/) and [GitHub Pages (secondary)](https://pages.github.com/).

The ultimate goal is learning and testing.

### Lint and format

This project uses [EditorConfig](https://editorconfig.org/) for general enforcement of formatting, line breaks, encoding, indents.

In addition to that, this project uses following tools for code analysis, linting and formatting:

* GitHub workflows: [Zizmor](https://zizmor.sh/) for static code analysis for security best practices
* Markdown: [rumdl](https://rumdl.dev/) for linting and formatting
* TypeScript: VSCode built in lint and formatting
* YAML: [ryl](https://ryl-docs.pages.dev/) for linting and formatting

These are configured to run in VSCode while developing, but also to run on PR to GitHub before merge to main.

### Security

This project builds a static web page which then gets served by SaaS services by Cloudflare and GitHub. The attack surface is minimal, as there is no web server for this project to maintain, and all files served are static.

Protection against dependency chain attacks:

* Minimal release age of 2 days wherever this is configurable (Yarn, Renovate, uv).
* Commit hash pinning wherever this is configurable.

## Contribute - Windows + PowerShell + fnm

### Install requirements

I recommend using [fnm](<https://github.com/Schniz/fnm>) for Node.js version management.

Can be installed with Scoop or WinGet:

```bash
scoop install main/fnm
winget install --silent --id Schniz.fnm
```

fnm must then be added to the PowerShell profile:

* Must be added to be able to modify PATH on the fly for managing Node.js versions.
* On `cd` / `Set-Location`, fnm will automatically look for `.node-version` and `package.json` and install latest Node.js version matching the requirements.

```powershell
. ([scriptblock]::Create([string]::Join("`n", (fnm env --resolve-engines=true --use-on-cd))))
```

### Develop

```bash
# Install Corepack with npm if Node.js >= v25
# * This will only be "global" to the fnm managed Node.js version
# * This works because fnm sets npm config prefix, which tells npm where to install packages
npm install --global corepack

# Install packages with Yarn
# * Corepack shims `yarn`, will install correct version according to `package.json` if not already available
yarn install

# Run a live version locally which hot reloads when doing changes
node --run start
```

### Maintain

Project uses Renovate to automatically update most dependencies automatically.

Manual maintenance can be required for major version bumps or changes.

* Upgrade packages and dependencies using Yarn. Try to run locally _and_ build before pushing the changes.

Maintain Node.js versions managed by fnm:

```bash
# Install latest Node.js version matching repo requirements with fnm
# * Only required if you did not add `--use-on-cd` to your PowerShell profile.
# * Use `pwsh -NoProfile` if `error: Can't download the requested binary: Access is denied. (os error 5)`.
# * Corepack is not included with Node.js since v25, so can't use `--corepack-enabled` with fnm.
fnm install --resolve-engines=true

# fnm set default Node.js version and clean up old version
fnm default <new_version>
fnm use <new_version>
fnm list
fnm uninstall <old_version(s)>
```

Maintain Yarn version specified in `package.json`:

```bash
# Update package manager with Corepack
corepack up
```

Maintain NPM packages, managed with Yarn:

```bash
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

# Yarn NPM audit example
yarn npm audit --recursive --severity high
```

Find and fix files with wrong line ending:

```powershell
# Find
git ls-files --eol | grep "w/crlf"

# Fix .md files
Get-ChildItem -Recurse -File -Filter '*.md' | ForEach-Object {
    $content = Get-Content -Raw $_.FullName
    if ($content -match "\r\n") {
        $newContent = $content -replace "\r\n", "`n"
        [System.IO.File]::WriteAllText($_.FullName, $newContent)
        Write-Host "Converted: $($_.FullName)"
    }
}
```

### Run locally

See edits to pages live.

```powershell
# If building clean from what is in Git
git clean --force -d -x
yarn install

# Run
## Using Node.js since 22
node --run start
## Using Yarn
yarn start
```

### Build locally

```powershell
# Build, will also to check for broken anchors and links vs. running it locally
## Using Node.js since 22
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
## Using Node.js since 22
node --run clear; $env:GIT_USER = [string] 'o-l-a-v'; node --run deploy
## Using Yarn
yarn docusaurus clear; $env:GIT_USER = [string] 'o-l-a-v'; yarn deploy
```

## Other learnings

### Where is the Yarn global cache location on Windows?

`%LOCALAPPDATA%\Yarn\Berry\cache`
