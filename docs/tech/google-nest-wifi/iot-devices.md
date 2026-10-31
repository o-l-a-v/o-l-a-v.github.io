---
title: How to - Connect IoT devices
keywords:
  - internet of things
  - 2.4
---

:::note

Do you got feedback, something to add, or have I made a mistake? Feel free to create a GitHub issue over at <https://github.com/o-l-a-v/o-l-a-v.github.io>. 😊

:::

## Precaution

Google Wifi, Nest Wifi and Nest Wifi Pro combines all bands into one single SSID, and there are no settings available to us to change that. Thus you can't set SSIDs per band (2.4GHz for instance). More about that here:

* <https://support.google.com/googlenest/answer/6293481?hl=en>

Things to make sure, before trying various workarounds:

* Make sure that the IoT device(s) in question supports the amount and type of characters used in your chosen network name (SSID) and password; some IoT devices might have limitations here. In general avoid anything but a-z in the network name. I've heard of devices not supporting whitespace in network name (SSID) or password for instance.
* Some IoT devices have alternative set up procedures if the regular way does not work, which could help.

## Workarounds

### METHOD 1: Windows or MacOS temp hotspot

The simplest workaround I can think of: Use a Windows or MacOS machine as temporarily 2.4GHz only hotspot with the exact same SSID (network name) and password as the Google Nest Wifi network.

Temporarily rename the SSID (network name) of the Nest Wifi network that you want the IoT device(s) to connect to. Plug your laptop into Nest Wifi by ethernet cable and host a 2.4GHz only hotspot with the exact same SSID and password as the Nest Wifi network you just temporarily renamed.

* Important 1: Make sure the hotspot is 2.4GHz only.
* Important 2: SSID and password must be exactly the same as the Nest Wifi network you want the IoT devices to connect to afterwards. You'll know you got it right if devices that was connected to Nest Wifi before you temporarily renamed the SSID starts connecting to your hotspot.

Connect your phone to this hotspot, then connect and set up the IoT devices in question to this hotspot too. When done, rename the Nest Wifi network name back to what it was, and disable the temp hotspot: The IoT device(s) should now jump over to Nest Wifi.

### METHOD 2: Old router or other access point as temp 2.4GHz only hotspot

Temp additional 2.4GHz only access point/hotspot, using the exact same wireless network name (SSID) and password as the Nest Wifi.

First turn off your Nest Wifi network by removing the power. Then:

* Using an old router with Wi-Fi that supports 2.4GHz only SSID: Feed it internet to the WAN port, create a 2.4GHz only SSID with the exact same SSID and password as the Nest Wifi network.
* Using two phones: Use one of the phones to broadcast a 2.4GHz only hotspot, and the other phone to setup IoT devices to it. 1st phone must be connected to internet somehow (SIM card), 2nd phone must connect to the wireless network broadcasted by the 1st phone.
* Using a PC: Feed your laptop (Windows or Mac) an internet connection, either by ethernet cable from your modem, or by mobile network tethering + USB. Then use your laptop to host a 2.4GHz only Wi-Fi.

Then get your IoT devices connected to the temp hotspot/access point. After that, disable temp hotspot/access point and plug in Nest Wifi, and the IoT devices should jump to the Wi-Fi provided by Nest Wifi.

### METHOD 3: Use old Android or iOS device that only supports 2.4GHz

Use an old iOS, iPadOS or Android device that only supports 2.4GHz to set up the IoT device. Must be new enough to support the Google Home app though.

### METHOD 4: Be so far from Nest Wifi that only 2.4GHz reaches you during setup

Force a 2.4GHz only connection by walking far enough from the Nest Wifi puck(s) to make sure your phone/ whatever device used for setting up the device in question connects to the 2.4GHz network, then start setting up the device.

### METHOD 5: Permanent additional dedicated 2.4GHz only access point with different SSID from Nest Wifi

Buy a cheap access point or repurpose a wireless router, range extender or similar to broadcast a 2.4GHz only SSID with a different name than your Nest Wifi network name. Connect it by ethernet cable to the primary/main/master Nest Wifi unit preferably.

* Add more ethernet ports by using an unmanaged switch if need be ( <https://support.google.com/googlenest/answer/6274262?hl=en> ).

Avoid connecting it upstream from the primary/main/master Nest Wifi unit, else you might not be able to reach the device(s) in question from a device connected to your Nest Wifi network due to double NAT.

Make sure this additional Wi-Fi broadcasting device works as an access point only, else you might not be able to connect to the device(s) in question from a device connected to your Nest Wifi network, also due to double NAT.

More on double NAT:

* <https://dongknows.com/double-nat-vs-single-nat/>
* <https://support.google.com/googlenest/answer/6277579?hl=en>
