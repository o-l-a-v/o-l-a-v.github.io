---
title: Naming scheme
keywords:
  - Azure
---

:::warning
This is a work in progress / not battle tested naming scheme. I use components from it from time to time.

Feel free to use it, but don't blame me if it turns out it does not work.
:::

## Introduction

In this doc I try to suggest alterations to the Microsoft CAF naming scheme it fit my needs based on my experience working in Azure.

Throughout this doc I'll use following terms in the following way:

|Word|Meaning
|:--|:--
|Scheme     |Agreed and documented strategy and practices when it comes to how to name Azure resources.
|Convention |Interchangable with "scheme", but I'll try to write "scheme" only.
|Prefix     |Pattern of the name: Components and the order of those.

## Why have a naming scheme?

### General

* Names in Azure can't be altered after creation.
  * Thus naming scheme/convention should be thought of before creating Azure resources, not after.
* Avoid human error:
  * Without uniformity and telling names, it's hard to get an overview, and easy to delete the wrong Azure resource.
* Avoid wasting time:
  * Without a well documented naming scheme/convention, it's impossible to keep track of all rules, restrictions, limitations and special cases when creating names for Azure resources.
  * Avoid wasting time to delete and recreate resources when you find out that one of the last resources created can't have the name you want.
* Avoid duplicate names.
  * Some Azure resource types only require the name to be unique within the resource group.
    * Thus when viewing all resources in Azure, some resources could end up with the same name.

### Summarized

* Uniformity.
* Avoid naming conflict in as few characters as possible.

## Baseline - The Microsoft CAF naming scheme

Instead of starting from scratch, let's reuse the already great baseline Microsoft provides in CAF.

* [Abbreviations](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations)
* [Develop naming and tagging strategy](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging)
* [Define naming convention](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming)
* [Resource name rules and restrictions](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules)

## Why alter the Microsoft CAF naming scheme?

### Azure resources naming limitations

Many Azure resources have naming limitations, like what kind of characters can be used, and length (total amount of characters).

* Every character counts, so don't bloat the naming scheme or convention with padding.

Some Azure resources' naming limitations is so strict that it requires a special naming scheme, which Microsoft hasn't already defined.

* Like Storage Accounts.

### Group resources that share lifecycle when sorting alphabetically

The Microsoft naming scheme defines the resource type as the first component in the prefix, which makes it so that resources that share lifecycle does not get grouped when sorting Azure resources alphabetically.

* Tagging, searching and filtering can make this experience better without altering the Microsoft naming convention though.

### Other benefits

* Same length / number of characters for as many of the components in the prefix as possible, makes any list of resources more tidy and readable.

## Unofficial abbreviations

Abbreviations that are missing in the [Microsoft CAF abbreviation list](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations).

* Some of these resources can't actually be named in the Azure portal, but the abbreviation can still be used for documentation, diagrams and similar.

|Provider and resource |Human friendly name |Suggested abbreviation |Note
|:--|:--|:--|:--
|`Microsoft.Insights/activityLogAlerts`      |Activity log alerts      |alar |
|`Microsoft.Insights/metricAlerts`           |Metric alerts            |mar  |
|`Microsoft.OperationsManagement/solutions`  |Sentinel                 |sent |Can't name this resource, but useful for diagrams. Sentinel inherits the name of the Log Analytics Workspace it's tied to.
|`Microsoft.OperationsManagement/solutions`  |Update Management        |aaum |Can't name this resource, but useful for diagrams.
|?                                           |Update Management Center |umc  |Does not seem one creates these as an Azure resource?
|`Microsoft.Web`?                            |On-premises Data Gateway |odgw |Does not seem one creates these as an Azure resource?

## Microsoft CAF naming scheme alterations

### Prefix

#### Microsoft

* Prefix: `<resource_type_abbreviation>-<workload/application>-<environment>-<region>-<instance:3>`
* Example: `pip-sharepoint-prod-westus-001`
  * Length: 30 characters.

#### Altered

* Prefix: `<workload/application>-<environment:3>-<azure_region:4>-<instance:2>-<resource_type>`
* Example: `sharepoint-prd-weeu-01-pip`
  * Length: 26 characters.

### Prefix components

#### Environment

Three characters for every environment.

|Microsoft naming convention |3ch |2ch
|:--|:--|:--
|dev      |dev |dv
|platform |plf |pf
|preprod  |ppd |pp
|prod     |prd |pd
|stage    |stg |st
|test     |tst |ts

### Instance

Cut a leading zero: How likely are we to reach more than 99 (01-99) instances?

|Microsoft naming convention |Altered
|:--|:--
|001 |01
|002 |02
|... |..
|055 |55
|... |..
|099 |99

### Region

#### About

Microsoft suggested abbreviation for region is problematic, because:

* Abbreviations are not defined for all Azure regions.
* Abbreviations have variable length.
* Abbreviations are unnessesary long for some regions.
* It's not consequent: Some regions have cardinal directions first (west, east etc.), while others doesn't.
  * But it's hard to strike a balance between making a abbreviation for a geolocation agnostic/generic, vs. confusing/not maching the Azure region.

#### Suggestion

##### Within Europe: 4 letters by the actual Azure region name

* Can easily avoid naming conflict within Europe.
* Less confusing to name the region after what the actual Azure region is called, rather than by contry.
  * Example: West-Europe, which is in Amsterdam, west in the Netherlads.

##### International: `<continent:2|country:2|cardinaldirection:2>`

* Hard to avoid naming conflict with this many regions.
* Include continent to easily group Azure resources when sorted alphabetically.

#### Help abbreviations

##### Continents

|Continent |2ch
|:--|:--
|Antartica     |an
|Africa        |af
|Asia          |as
|Europe        |eu
|North America |na
|Oceania       |oc
|South America |sa

##### Cardinal directions

|Direction |2ch |1ch
|:--|:--|:--
|Central |ce |c
|East    |ea |e
|North   |no |n
|South   |so |s
|West    |we |w

#### Azure regions

##### Europe

|Region name |4ch by Azure region name |6ch `<continent:2\|country:2\|cardinal_direction:2>` | 3ch `<country:2\|cardinal_direction:1>`
|:--|:--|:--|:--
|Global                  |glob |global |glo
|France Central          |frce |eufrce |frc
|France South            |frso |eufrso |frs
|Germany North           |geno |eudeno |den
|Germany West Central    |gewc |eudewe |dew
|North Europe (Dublin)   |noeu |euieea |iee
|Norway East             |noea |eunoea |noe
|Norway West             |nowe |eunowe |now
|Sweden Central          |swce |eusece |sec
|Switzerland North       |swno |euchno |chn
|Switzerland West        |swwe |euchwe |chw
|UK South                |ukso |eugbso |gbs
|UK West                 |ukwe |eugbwe |gbw
|West Europe (Amsterdam) |weeu |eunlwe |nlw

### Special cases - Specific Azure resource types

#### Storage account

##### Justification

* Limitations: Globally unique name, no hyphens, 3-24 characters.

##### Scheme

* First two characters of each component in the the general naming prefix, except for region and resource type.

##### Example

* `shprweeu01st`

#### Subnet

##### Justification

* Subnets are not visible inside the Azure portal in the overview of Azure resources.
  * Thus naming can be short and consise.
* Subnets can have NSGs and UDRs connected to it, thus for naming such "child resources", the resource type abbreviation should be included.

##### Scheme

`<purpose>-snet`

##### Example

* `ingress-snet`

#### Virtual machine

##### Justification

* Azure resource name of a virtual machine also becomes the hostname of the VM.
* Limitations: 1-15 characters for Windows, 1-64 for Linux.

##### Scheme

* Remove hyphens
* Shorten workload/application name to an absolute max of 4 characters if it's long.

##### Example

* `spoprdweeu01vm`

### Special cases - Child resources

#### Justification

* Certain resource types is tied to some other resource.
  * Name should reflect that.
* For easier management, carent and child resources should be grouped when sorted alphabetically.

#### Example resource types

* NIC (network interface)
* NSG (network security group)
* PEP (private endpoint)
* PIP (public IP)
* SNET (VNet subnet)
* UDR (user defined routes)

#### Scheme

`<name_of_parent_resource>-<abbreviation_for_child_resource_type>`

#### Examples

##### NSG

* NSG tied to subnet: `sharepoint-prd-weeu-01-vnet-ingress-snet-nsg`
* NSG tied to a VM NIC: `spoprdweeu01-nic-nsg`

##### Private endpoint

* Storage account private endpoint for blob: `shprweeu01st-pep-blob`
  * Has multiple different endpoints, in contrast to Key Vault.
* Key Vault private endpoints for vault: `sharepoint-prd-weeu-01-kv-pep`
  * Only has one endpoint, in contrast to Storage Account.

## Resources

### Microsoft naming recommendations

* <https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations>
* <https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging>
* <https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming>
* <https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules>

### Bicep

* [Bicep functions -> String -> uniqueString](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/bicep-functions-string#uniquestring)

### Azure regions

* <https://azure.microsoft.com/en-us/explore/global-infrastructure/geographies/>
* <https://azure.microsoft.com/en-us/explore/global-infrastructure/products-by-region>
* <https://learn.microsoft.com/en-us/azure/reliability/cross-region-replication-azure>
* <https://azurespeedtest.azurewebsites.net/>
* <https://www.azurespeed.com/Azure/Latency>
* <https://www.azurespeed.com/Information/AzureGeographies>

### Geographics

* <https://www.iban.com/country-codes>
* <https://en.wikipedia.org/wiki/United_Nations_geoscheme_for_Europe>
* <https://datahub.io/core/continent-codes>

### 3rd party

* <https://www.ironstoneit.com/blog/naming-conventions-for-azure>
