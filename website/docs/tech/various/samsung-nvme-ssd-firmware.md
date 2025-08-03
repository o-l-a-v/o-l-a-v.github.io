---
title: Samsung - NVME SSD - How to update firmware if Magician fails
keywords:
  - 4B2QJXD7
  - 6B2QJXD7
---

:::note

Do you got feedback, something to add, or have I made a mistake? Feel free to create a GitHub issue over at <https://github.com/o-l-a-v/o-l-a-v.github.io>. 😊

:::

## Intro

The usual way of updating the firmware of a Samsung NVME SSD is through the [Samsung Magician](https://semiconductor.samsung.com/consumer-storage/magician/) application. Try that first.

This guide will show a short example of how to update the firmware of Samsung 990 Pro from 4B2QJXD7 to 6B2QJXD7 if Samsung Magician fails.

I assumethe process is the same for other Samsung NVME SSD models.

## Samsung 990 Pro if Samsung Magician fails

:::danger

* I take no responsibility if this goes wrong, proceed at your own risk.
* Make a backup of your data before attempting a firmware update. This is a general recommendation from Samsung, but you always run the risk of bricking a device each time you tinker with firmware updates.
* If you have BitLocker or other disk encryption enabled, make sure to write down recovery codes and temporarily disable encryption.
* If you got secure boot enabled in BIOS it will have to be disabled during this process.
  * This can prompt you for the BitLocker recovery password.
* The content of the USB memory stick used for this operation will be erased.

:::

1. Download the latest firmware version ISO file from Samsung.
   * <https://semiconductor.samsung.com/consumer-storage/support/tools/>
1. Install and open <https://rufus.ie/en/>
   * Using [Scoop](https://scoop.sh/): `scoop install extras/rufus`
   * Microsoft Store: <https://apps.microsoft.com/detail/9pc3h3v7q9ch?hl=en-us&gl=US>
1. Find a USB memory stick, insert it into the PC.
1. Use Rufus to create a bootable USB memory stick from the downloaded Samsung SSD firmware ISO file.
   * I choose FAT32 as file system, GPT partition table, for UEFI computer.
     * You might be warned by Rufus that the Samsung ISO file does not have a valid secure boot certificate.
1. If you got secure boot enabled in BIOS: Turn off secure boot.
1. Boot to the USB memory stick, either by boot order in your BIOS, or by opening BIOS boot menu.
1. The process from here is just click any key to proceed, or Y/N questions. The program included in the ISO file from Samsung will check for current firmware, and ask whether to update it if a newer firmware is available.
1. The firmware update will be very fast, only took a second for me. It will ask you to reboot. After reboot the firmware should be updated.
1. Verify firmware update:
   * Either boot your PC, go into Samsung Magician and check firmware details, or
   * Run the USB memory stick process again, if no update is available it will say so.

Remember to re-enable secure boot in BIOS and BitLocker or other disk encryption when your finished.
