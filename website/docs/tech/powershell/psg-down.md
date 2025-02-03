---
title: PowerShell Gallery is down - What now?
keywords:
  - psg
  - sla
---

## Intro

So the PowerShell Gallery is down, what now?

Here are some suggestions for proactive and reactive measures.

:::info
If you've made your business dependent on a free service with no SLA you can't blame anyone but yourself. Check the terms of use:

* <https://www.powershellgallery.com/policies/Terms>
* Archive.org in case it's down: <https://web.archive.org/web/*/www.powershellgallery.com/policies/Terms>

:::

### Why is it down?

PowerShell Gallery Status is available here\*:

* <https://aka.ms/psgallery-status/>
* Which redirects to: <https://github.com/PowerShell/PowerShellGallery/blob/master/psgallery_status.md#powershell-gallery-status>

\*PowerShell Gallery has been down for short periods with no notices or announcements from Microsoft in the past.

### What if PowerShell Gallery?

A NuGet v2 package repository with a web GUI and an API.

## Other ways

### Use pwsh.gallery

pwsh.gallery by [Justin Grote](https://github.com/JustinGrote) is a NuGet v3 static API feed (aka a pile of files) hosted on an Azure Storage Account fronted by Cloudflare for caching. The packages are hosted on a Azure Storage Account directly. An Azure Container app preiodically queries the PowerShell Gallery for new packages and add them to the repository via [Sleet](https://github.com/emgarten/Sleet).

If the PowerShell Gallery is ever 100% down, pwsh.gallery should up and be up to date to the point where PSG went down, and pwsh.gallery will pick up from the last sync timestamp when it comes back up to resume mirroring.

Example package URL:

* Metadata: <https://pwsh.gallery/registration/az.resources/index.json>
* Nupkg: <https://pwsh.gallery/flatcontainer/az.resources/7.7.0/az.resources.7.7.0.nupkg>

Resources:

* <https://github.com/PowerShell/PowerShell/discussions/24734#discussioncomment-11871246>
* <https://github.com/JustinGrote/PWSHGallery>
  * Very outdated, it's not just a NuGet v3 frontend relying on PowerShell Gallery being up anymore.
* <https://github.com/JustinGrote/ModuleFast>

Example usage with PSResourceGet:

```powershell
# Register pwsh.gallery as a PSResourceGet resource repository
Register-PSResourceRepository -Name 'pwsh.gallery' -Uri 'https://pwsh.gallery/index.json' `
    -ApiVersion 3 -Priority 60

# Find a module with it
Find-PSResource -Repository 'pwsh.gallery' -Name 'Az.Accounts' | Format-List
```

Limitations:

* PSResourceGet does not support resolving dependencies of NuGet v3 feeds.
  * <https://github.com/PowerShell/PSResourceGet/issues/1575>
* Search API endpoint does not seem to work `SearchQueryService/`, only get by exact name `RegistrationsBaseUrl/`.

### Hit CDN directly with module and version

If only PowerShell Gallery itself is down, the CDN used to serve packages (`*.nupkgs`) might still be up.

* Example URL: `https://psg-prod-eastus.azureedge.net/packages/az.accounts.4.0.2.nupkg`
  * Notice package name must be lower case.

AFAIK, PSResourceGet does not support installing packages from a URL, but if you can download the `.nupkg` file it can be installed locally like so:

```powershell
# Register file system path as a PSResourceGet resource repository
Register-PSResourceRepository -Name 'Local' -Uri 'D/some/local/path' -ApiVersion 'local'

# Install latest available version of a package you've downloaded as `.nupkg`
Install-PSResource -Repository 'Local' -Name '<module_name>'
```

Limitations:

* You must know each package and version you need, including dependencies.
* No dependency resolution, but you could download and extract a `.nupkg` and check out metadata (`<module_name>.psd1` for instance) within it.
  * Could be fixed if following PR is merged: <https://github.com/PowerShell/PSResourceGet/pull/1778>

### Proxy or host your own repository

* Some artifact registry solutions supports using other NuGet feeds as backend, like:
  * Azure DevOps Artifacts
  * JFrog Artifactory
  * SonarQube
* Or you can create automation to download and mirror latest version of modules you use into:
  * A repository supported by PSResourceGet: <https://learn.microsoft.com/en-us/powershell/gallery/powershellget/supported-repositories>
  * File based storage, which PSResourceGet also supports: <https://learn.microsoft.com/en-us/powershell/gallery/powershellget/supported-repositories>
  * Blob storage or similar, download and extract modules with your own logic.

Limitations with a NuGet proxy:

* It only downloads and caches a specific version of a specific package if it already has been asked for before PowerShell Gallery went down.

### [In the future] Microsoft modules in MAR

Microsoft is working on getting their PowerShell modules to a public ACR (Azure Container Registry) instance called MAR (Microsoft Artifact Registry), also referred to as MCR (Microsoft Container Registry). PSResourceGet supports ACR as a repository.

* MAR: <https://mcr.microsoft.com/>
* Az.Accounts in MAR: <https://mcr.microsoft.com/en-us/artifact/mar/psresource/az.accounts/tags>
* Example URL for a Rest API Get request to get Az.Accounts versions: <https://mcr.microsoft.com/v2/psresource/az.accounts/tags/list>
* PSResourceGet about ACR support <https://learn.microsoft.com/en-us/powershell/gallery/powershellget/supported-repositories#azure-container-registry>

Example usage:

:::tip FYI
Requires PSResourceGet \>= v1.1.0
:::

```powershell
# Register MAR as a PSResourceGet resource repository
Register-PSResourceRepository -Name 'MAR' -Uri 'https://mcr.microsoft.com/' `
    -ApiVersion 'ContainerRegistry' -Priority 60

# Find a module with it
Find-PSresource -Repository 'MAR' -Name 'Az.Resources' | Format-List
```

Example API usage:

```powershell
# List available packages for PowerShell
(
  Invoke-RestMethod -Method 'Get' -Uri 'https://mcr.microsoft.com/v2/_catalog'
).'repositories'.Where{
    $_.StartsWith('psresource/')
} | Sort-Object

# Get available versions of Az.Resources
Invoke-RestMethod -Method 'Get' -Uri (
    'https://mcr.microsoft.com/v2/psresource/az.resources/tags/list'
)

# Get metadata from the manifest of a specific version of Az.Resources
(
    Invoke-RestMethod -Method 'Get' -Uri (
        'https://mcr.microsoft.com/v2/psresource/az.resources/manifests/7.8.0'
    ) -Headers @{
        'Accept' = [string] 'application/vnd.oci.image.manifest.v1+json'
    }
).'layers'.'annotations'.'metadata' | ConvertFrom-Json
```

## Module specific mirrors

### AWS

Hosts `.zip` mirrors.

* Announcement: <https://github.com/aws/aws-tools-for-powershell/issues/107#issuecomment-577285223>
* Links to latest:
  * <https://sdk-for-net.amazonwebservices.com/ps/v4/latest/AWS.Tools.zip>
  * <https://sdk-for-net.amazonwebservices.com/ps/v4/latest/AWSPowerShell.NetCore.zip>
  * <https://sdk-for-net.amazonwebservices.com/ps/v4/latest/AWSPowerShell.zip>

### Az

* `.tar.gz` is included in some GitHub releases.
* <https://learn.microsoft.com/en-us/powershell/azure/install-azps-offline#install-from-tar-archive>
* Feature request about creating a mirror: <https://github.com/Azure/azure-powershell/issues/27001>

Example PowerShell to get the latest `.tar.gz` from GitHub releases:

```powershell
$(
    [PSCustomObject[]](
        Invoke-RestMethod -Method 'Get' -Uri 'https://api.github.com/repos/azure/azure-powershell/releases'
    )
).ForEach{
    [PSCustomObject]@{
        'name'              = [string] $_.'name'
        'created_at'        = [string] $_.'created_at'
        'tar_download_link' = [string]($_.'assets'.'browser_download_url'.Where({$_.EndsWith('.tar.gz')},'First'))
    }
}.Where{
    $_.'name'.StartsWith('Az ',[System.StringComparison]::OrdinalIgnoreCase) -and
    -not [string]::IsNullOrWhiteSpace($_.'tar_download_link')
} | Sort-Object -Property 'created_at' -Descending | Select-Object -First 1
```

### Microsoft.Graph

* Feature request about creating a mirror: <https://github.com/microsoftgraph/msgraph-sdk-powershell/issues/3070>

### PSResourceGet

* Included in releases of PowerShell since v7.4. Can be extracted from `.zip` releases, but often won't be the latest version.
  * <https://github.com/PowerShell/PowerShell/releases>
* `.nupkgs` and `.zip` is not included in GitHub releases, but one can download the source code of a release and build it locally.
  * Releases: <https://github.com/PowerShell/PSResourceGet/releases>
  * Build instructions: <https://github.com/PowerShell/PSResourceGet?tab=readme-ov-file#build-the-project>
  * Feature request to include `.nupkg` in GitHub releases: <https://github.com/PowerShell/PSResourceGet/issues/1775>
