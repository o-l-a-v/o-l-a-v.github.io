---
title: Frequently asked questions
keywords:
  - faq
  - google wifi
  - nest wifi
last_update:
  date: 2025-08-02T00:00:00Z
toc_max_heading_level: 3
---

## Intro

After answerering hundreds of questions in the Google Community forums, I've noticed a lot of the questions are the same. I created and maintained a F.A.Q. for myself which I used to answer these commond questions.

Then I thought it'd be much better to just store those answers here instead, making them available to everyone and easy to refer to.

## Frequently asked questions with answers

### How to delete devices from the device list?

It's not possible to delete devices from the device list, but they should disappear after being offline/disconnected for 30 days or so, according to:

* <https://www.googlenestcommunity.com/t5/Nest-Wifi/Wifi-How-to-delete-previously-connected-devices/m-p/22776/highlight/true#M2133>

The only way for force delete the whole list is to delete the Nest Wifi from the Google Home app and set up the whole network from scratch.

### Why do clients not connect to the closest Nest Wifi unit?

It's the client device that decides what access point to connect to, as these replies explains more in depth:

* 2023-12-18: <https://www.googlenestcommunity.com/t5/Nest-Wifi/Google-wifi-units-connect-worst-wifi-point/m-p/564782/highlight/true#M49858>
* 2023-12-14: <https://www.googlenestcommunity.com/t5/Nest-Wifi/Nest-Wifi-Set-a-Dedicated-Point/m-p/562259#M49820>

### Google Home won't accept the setup code

Try to force close the Google Home app, clear cache, and try to start the setup process again. Sometimes the Google Home app gets what device it's requesting a code for wrong.

You can also try from a different device (Android, iOS, iPadOS) with the Google Home app using the same Google account.

The setup code can be hard to see, I've read about people mistaking a C for a G for instance. It's worth double checking that you got it right.

### The Wi-Fi icon is gone from the Google Home app

Make sure you're logged into the Google Home app with the Google account that set up the Nest Wifi units initially, or with a Google account that has access to the Google Home home where the Nest Wifi units were added to:

* <https://support.google.com/googlenest/answer/9155535?hl=en>

Try to force close the Google Home app, delete app cache and open the Google Home again. If that makes no difference, try to uninstall the Google Home app and reinstall it again; Google Home data is tied to a Google account and will come back once you log in.

I've read in the past that performing a Google account "security checkup", which can make you remove "Nest" from "Third-party apps & services" ( <https://myaccount.google.com/connections> ) can cause devices to disappear from the Google Home app. If you recently did a Google account security check; this could be related.

* <https://www.googlenestcommunity.com/t5/Nest-Wifi/x/m-p/198228#M20890>

Last resort is to factory reset all Nest Wifi units using the physical button ( <https://support.google.com/googlenest/troubleshooter/13816290?hl=en> ), then set up the network from scratch ( <https://support.google.com/googlenest/answer/7183148?hl=en> ). If one reuse the network name (SSID) and password, all devices should reconnect automatically.

### Why must I do daily reboots for my network to be stable?

This does not happen to most Nest Wifi users, me included, so the fix is to figure out what's unique about your particular set up.

The basic questions to ask here is:

* How many and what Nest Wifi units do you have, how are they connected?
* Do you have one or more switch(es) in your setup? What brand and model, and how+where are they connected?
* Is your ISP equipment in bridge mode / bypass mode / IP passthrough mode, or do you run double NAT? Double NAT with Nest Wifi is known to often be problematic.
* Do you have other wireless devices that can interfere, like a wireless surround system, bluetooth gear placed close to any the Nest Wifi units etc.?
* Have you tried to isolate the problem, by disconnecting all devices (mainly wired devices are of interest here), then connect one by one? Could be a bad wired client device, a bad switch, a bad Nest Wifi unit.

If you do not manage to find what the problem is, the permanent fix is to get a different home Wi-Fi system.

### How can I send feedback to Google?

Feedback to Google can be provided through this form:

* <https://google.qualtrics.com/jfe/form/SV_2aStd8wsbcLGvwG>

And/or through the Google Home app:

* <https://support.google.com/googlenest/answer/7071494?hl=en>

The only new or improved features added to Nest Wifi since I bought it in 2018 that I can think of are 1) WPA3 and 2) preferred activities for some VOIP products. So, new features aren't added on a regular basis, as you also can see from the firmware changelog.

* <https://support.google.com/googlenest/answer/13800967?hl=en-US>
* Release notes even further back in time: <https://web.archive.org/web/20210305204441/support.google.com/googlenest/topic/6318633>

### How to do port forwarding

What do you have in front of the main/primary/master Nest Wifi unit? A modem I guess, but is is put into bridge mode / bypass mode / IP passthrough mode? If no, you have to either bridge it, or configure port forwarding on that too.

Some ISPs use CGNAT (carrier grade network address translation), which means you don't get a static public IP on your network. This can further complicate the setup.

Could also be that the ISP blocks some common ports, like 22 (SSH), 443 (HTTPS), 445 (SMB), 3389 (RDP). I've also heard of ISPs that requires customers to pay extra to get a static public IP capable of any port forwarding. So check with your ISP too.

Some other best practice advice: It's recommended to make sure MAC randomization is disabled for the device you are port forwarding to.

* Apple: [1] <https://support.apple.com/en-us/guide/security/secb9cb3140c/web>, [2] <https://support.apple.com/en-us/HT211227>
* Google / Android: <https://source.android.com/docs/core/connect/wifi-mac-randomization-behavior>
* Microsoft Windows: <https://support.microsoft.com/en-us/windows/ac58de34-35fc-31ff-c650-823fc48eb1bc>

Then make sure target device has static IP by DHCP IP reservation on Nest Wifi:

* <https://support.google.com/googlenest/answer/6274660?hl=en>

Then port forward.

### How do I force a firmware update?

You can't. But if an update is pending and you reboot it, it will update. You can see firmware update status by going to the IP of the unit in a web browser, then /api/v1/status. Example for my Nest Wifi router main unit:

* <http://192.168.86.1/api/v1/status>

More about how firmware updates is done on Nest Wifi:

* <https://support.google.com/googlenest/answer/6273871?hl=en>

### Wired - Ethernet LAN port not working

This could mean that you have a defective unit, bust just in case check the following things:

* Connect a PC directly to the primary Nest Wifi unit LAN port. Trigger a reboot of the Nest Wifi unit from the Google Home app if the PC does not detect anything.
* Try different ethernet cables. A bad cable can often be the cause of issues like this. Some have had problems with CAT6a cables, likely because of their stifness vs. Nest Wifi tight cable routing. So try some flexible CAT5e if you can.
* Inspect all the RJ-45 ports involved, to check if any of them are defective. Bent pins etc. I've read that this has caused issues like this previously.

### Wired - Speeds are slow

There is this existing thread:

* <https://www.googlenestcommunity.com/t5/Nest-Wifi/Nest-WiFi-Pro-wired-connection-is-about-10-of-what-it-was-on/td-p/269709>

The only things I can think of you can check is:

1. What exact switch model? If it has conflicting features like loop detection (spanning tree protocol, stp, is an example of such a mechanism), disable it.

   * <https://www.reddit.com/r/GoogleWiFi/comments/qpurq8>
   * <https://www.reddit.com/r/GoogleWiFi/comments/ghkqnz/comment/fq9uwnx/>

1. Do you run double NAT? It can cause strange problems and speed degradation. Make sure any ISP equipment in front is out in bride mode or bypass mode.

   * <https://dongknows.com/double-nat-vs-single-nat/>
   * <https://support.google.com/googlenest/answer/6277579?hl=en>

1. Disable all "preferred activities", no need for that QoS capability with such speeds from your ISP.

* <https://support.google.com/googlenest/answer/9541371?hl=en>

Other than that: Wait some days for Nest Wifi to settle, I've read that it can take some time for it to adjust to the actual WAN speed. There are some built in QoS, fq_codel, that should be disabled at a certain threshold. But those settings are not exposed to us customers.

### Wireless - Stability

The stability of the wireless network can be impacted by a lot of things.

For Nest Wifi, the first thing to look at is the amount of Nest Wifi units, and placement of those. Let's take the question about amount of units first. More Nest Wifi units does not neccessarily equal better speeds and stability. In fact, more units introduces more overhead (traffic going between Nest Wifi units, which "steals" actual capacity for the clients), and wireless interference. Which also is why a maximum of 5 wirelessly meshed Nest Wifi units is the recommended maximum.

* <https://support.google.com/googlenest/answer/7182840?hl=en>

It's also smart to consider how mesh, 802.11s for Nest Wifi, works, and set up the devices accordingly. While mesh can do multiple jumps, it prefers fewer. So, a 3rd unit will not go through a 2nd unit if it can reach the 1st one directly, even with weak signal strength. Thus, one should try to place the primary unit centrally in the house, so all other wirelessly meshed units only need to make one jump. More about that in earlier posts:

* <https://www.googlenestcommunity.com/t5/Nest-Wifi/Do-I-mis-understand-mesh/m-p/28836/highlight/true#M2600>

And then there is placement. Part of why Nest Wifi units looks so sleek, is to prevent them being tucked away in a closet.

* <https://support.google.com/googlenest/answer/7183150?hl=en>

Then there are external factors to consider, like other wireless equipment, neighbours, bluetooth, microwaves.
For even more info on finding rogue wireless devices that can impact Wi-Fi in your house, like wireless surround systems and IoT devices on Zigbee, see following video:

* <https://youtu.be/Paabqb7IxG4>

### Wireless - IoT devices

#### PRECAUTIONARY

Google Wifi, Nest Wifi and Nest Wifi Pro combines all bands into one single SSID, and there are no settings available to us to change that. Thus you can't set SSIDs per band (2.4GHz for instance). More about that here:

* <https://support.google.com/googlenest/answer/6293481?hl=en>

Things to make sure, before trying various workarounds:

* Make sure that the IoT device(s) in question supports the amount and type of characters used in your chosen network name (SSID) and password; some IoT devices might have limitations here. In general avoid anything but a-z in the network name. I've heard of devices not supporting whitespace in network name (SSID) or password for instance.
* Some IoT devices have alternative set up procedures if the regular way does not work, which could help.

#### WORKAROUNDS

##### METHOD 1: Windows or MacOS temp hotspot

The simplest workaround I can think of: Use a Windows or MacOS machine as temporarily 2.4GHz only hotspot with the exact same SSID (network name) and password as the Google Nest Wifi network.

Temporarily rename the SSID (network name) of the Nest Wifi network that you want the IoT device(s) to connect to. Plug your laptop into Nest Wifi by ethernet cable and host a 2.4GHz only hotspot with the exact same SSID and password as the Nest Wifi network you just temporarily renamed.

* Important 1: Make sure the hotspot is 2.4GHz only.
* Important 2: SSID and password must be exactly the same as the Nest Wifi network you want the IoT devices to connect to afterwards. You'll know you got it right if devices that was connected to Nest Wifi before you temporarily renamed the SSID starts connecting to your hotspot.

Connect your phone to this hotspot, then connect and set up the IoT devices in question to this hotspot too. When done, rename the Nest Wifi network name back to what it was, and disable the temp hotspot: The IoT device(s) should now jump over to Nest Wifi.

##### METHOD 2: Old router or other access point as temp 2.4GHz only hotspot

Temp additional 2.4GHz only access point/hotspot, using the exact same wireless network name (SSID) and password as the Nest Wifi.

First turn off your Nest Wifi network by removing the power. Then:

* Using an old router with Wi-Fi that supports 2.4GHz only SSID: Feed it internet to the WAN port, create a 2.4GHz only SSID with the exact same SSID and password as the Nest Wifi network.
* Using two phones: Use one of the phones to broadcast a 2.4GHz only hotspot, and the other phone to setup IoT devices to it. 1st phone must be connected to internet somehow (SIM card), 2nd phone must connect to the wireless network broadcasted by the 1st phone.
* Using a PC: Feed your laptop (Windows or Mac) an internet connection, either by ethernet cable from your modem, or by mobile network tethering + USB. Then use your laptop to host a 2.4GHz only Wi-Fi.

Then get your IoT devices connected to the temp hotspot/access point. After that, disable temp hotspot/access point and plug in Nest Wifi, and the IoT devices should jump to the Wi-Fi provided by Nest Wifi.

##### METHOD 3: Use old Android or iOS device that only supports 2.4GHz

Use an old iOS, iPadOS or Android device that only supports 2.4GHz to set up the IoT device. Must be new enough to support the Google Home app though.

##### METHOD 4: Be so far from Nest Wifi that only 2.4GHz reaches you during setup

Force a 2.4GHz only connection by walking far enough from the Nest Wifi puck(s) to make sure your phone/ whatever device used for setting up the device in question connects to the 2.4GHz network, then start setting up the device.

##### METHOD 5: Permanent additional dedicated 2.4GHz only access point with different SSID from Nest Wifi

Buy a cheap access point or repurpose a wireless router, range extender or similar to broadcast a 2.4GHz only SSID with a different name than your Nest Wifi network name. Connect it by ethernet cable to the primary/main/master Nest Wifi unit preferably.

* Add more ethernet ports by using an unmanaged switch if need be ( <https://support.google.com/googlenest/answer/6274262?hl=en> ).

Avoid connecting it upstream from the primary/main/master Nest Wifi unit, else you might not be able to reach the device(s) in question from a device connected to your Nest Wifi network due to double NAT.

Make sure this additional Wi-Fi broadcasting device works as an access point only, else you might not be able to connect to the device(s) in question from a device connected to your Nest Wifi network, also due to double NAT.

More on double NAT:

* <https://dongknows.com/double-nat-vs-single-nat/>
* <https://support.google.com/googlenest/answer/6277579?hl=en>

### Wireless - 5GHz channel selection can't be changed

That's just how it is and how it's always been with Nest Wifi. For 2.4GHz, Nest Wifi automatically chooses channels based on some built in logic, while for 5GHz it uses static channel selection which varies per region. More info from earlier threads:

* <https://www.reddit.com/r/GoogleWiFi/comments/dutfng/channel_selection/f789hqm>
* <https://www.reddit.com/r/GoogleWiFi/comments/vbbp80/5GHz_channel_selection/ic7cc2g>

Related info from Google:

* <https://support.google.com/googlenest/answer/6293481?hl=en>
* <https://support.google.com/googlenest/answer/6373726?hl=en>

### Wireless - Apple devices are unstable on Nest Wifi

MacOS, iOS and iPadOS devices sometimes have issues with wireless reliability and Nest Wifi if MAC randomization is enabled, and HTTP proxy is set to automatic. These settings can affect VPN reliability as well. So try the following.

HTTP Proxy: Set to "none".

* <https://www.expressvpn.com/support/troubleshooting/disable-proxy-safari>

Private IP Address (Mac randomization): Disable.

* <https://support.apple.com/en-us/guide/security/secb9cb3140c/web>
* <https://support.apple.com/en-us/HT211227>

### Mesh path selection

Nest Wifi uses 802.11s for meshing. It prefers fewer hops; if secondary units can reach the primary unit directly, even with weak signal strength, they will.

For more details, see:

* <https://www.reddit.com/r/GoogleWiFi/comments/youiuw/comment/ivfykdj/>
* 230711 by MichaelP: <https://www.googlenestcommunity.com/t5/Nest-Wifi/Hub-and-spoke-vs-multi-hop/m-p/449484/highlight/true#M45612>

### Where should I place Nest Wifi units?

First of all: More units isn't neccessarily better.

* <https://support.google.com/googlenest/answer/7182840?hl=en>

Check out following resources about placement:

* <https://support.google.com/googlenest/answer/7183150?hl=en>
* <https://youtu.be/_NMS4bs8_II>

### How can I do building to building with Nest Wifi?

This has been asked and answered many times before. Instead if answering it again, take a look at following replies from the past:

* 2022-12-01 <https://www.googlenestcommunity.com/t5/Nest-Wifi/Goggle-Wifi-Placement-Question/m-p/299066/highlight/true#M33623>
* 2022-11-26: <https://www.googlenestcommunity.com/t5/Nest-Wifi/Google-Wi-Fi-Functionality-Feature-Question/m-p/294543/highlight/true#M33219>

More threads from the past:

* <https://www.google.com/search?q=%28site%3Agooglenestcommunity.com%2Ft5%2FNest-Wifi+OR+site%3Areddit.com%2Fr%2Fgooglewifi+OR+site%3Areddit.com%2Fr%2Fnestwifi+OR+site%3Areddit.com%2Fr%2FOnHub%29+building+directional>

### Nest Wifi Pro - Wireless speeds are slow

The real speed benefits with Nest Wifi Pro is Wi-Fi 6E / 6GHz. If you have devices that support it, make sure to enable WPA3 in the Google Home app (Wi-Fi -> Settings -> Advanced networking), and reconnect devices making sure you do so using WPA3.

* <https://support.google.com/googlenest/answer/12367191?hl=en>

Wi-Fi 6E / 6GHz requires WPA3, but WPA3 is unfortunately disabled by default when setting up a new Nest Wifi Pro network.

* <https://kb.netgear.com/000064271/What-is-required-to-use-WiFi-6E>

For 5GHz, Nest Wifi Pro has 2x2 MU-MIMO, so not the fastest of it's kind. Especially if your clients can't do Wi-Fi 6 / 802.11ax. If most of your devices are Wi-Fi 5 / 802.11ac, the older Nest Wifi router with 4x4 MU-MIMO for 5GHz would likely be faster. Compare specs:

* <https://support.google.com/googlenest/answer/6280668?hl=en>

One tip: For wireless speeds it could help to disable "preferred activities":

* <https://support.google.com/googlenest/answer/9541371?hl=en>

### Nest Wifi Pro - Wireless stability is poor

For stability it often helps to make sure the client device does not use MAC randomization. This is especially true for Apple devices, but could affect other devices too.

* <https://support.apple.com/en-ca/guide/security/secb9cb3140c/web>
* <https://source.android.com/docs/core/connect/wifi-mac-randomization-behavior>
* <https://support.microsoft.com/en-us/windows/ac58de34-35fc-31ff-c650-823fc48eb1bc>

Wi-Fi 6E / 6GHz requires the use of WPA3, so make sure that is enabled. After enabling WPA3, delete the saved network from your client device, then re-add the network again, making sure 1. MAC randomization still is disabled and 2. you connect using WPA3:

* <https://support.google.com/googlenest/answer/6309220?hl=en>
* <https://support.google.com/googlenest/answer/6293481?hl=en>
* <https://kb.netgear.com/000064271/What-is-required-to-use-WiFi-6E>

For speed it could also help to disable "preferred activities", the built in QoS that tries to prioritise certain type of traffic.

* <https://support.google.com/googlenest/answer/9541371?hl=en>

### Nest Wifi Pro - 6GHz

Nest Wifi Pro uses 6GHz as wireless backhaul, but also makes 6GHz available for client devices.

First, you'll need devices that supports 6GHz. One important thing to know is that "Wi-Fi 6" without the "E" does not include 6GHz, that first came with "Wi-Fi 6E". So if your device is "Wi-Fi 6", it does not mean it supports 6GHz. More on that:

* <https://support.google.com/googlenest/answer/12367191?hl=en>

There has also been reports of devices that support 6GHz not being able to see the 6GHz network, like Pixel 7 Pro. So make sure drivers and firmware are up to date. Examples:

* <https://support.google.com/pixelphone/thread/186204570?hl=en>
* <https://www.googlenestcommunity.com/t5/Nest-Wifi/x/m-p/307061>

Second, make sure WPA3 is enabled for your Nest Wifi Pro network. 6GHz requires WPA2, and WPA3 is disabled by default. Devices can jump between frequencies/bands (2.4GHz, 5GHz, 6GHz), but not between encryption methods (WPA2, WPA3). So make sure WPA3 is enabled (Google Home app -> Wi-Fi -> Settings -> Advanced networking), and make sure your client device is connected using WPA3, not WPA2. Forget the saved network after enabling WPA3, and connect again.

### Setup - VLAN tags on WAN

VLAN support built in to Nest Wifi is very limited. Here is the official guidance:

* <https://support.google.com/googlenest/answer/9798157?hl=en>

It supports some tags, but PPPoE combined with VLAN it does not seem to support at all.

A workaround is to use a managed/smart switch with VLAN tag support, put it between your ISP equiment and Nest Wifi, and make it untag VLAN before traffic hits Nest Wifi. More info on this:

* <https://superuser.com/questions/1148268/how-to-ditch-centurylink-fiber-modem>

### Setup - Bridge mode / access point only

Google Wifi, Nest Wifi router and Nest Wifi Pro supports being used as an access point only, but there are some caveats.

Here is the official guidance on the topic:

* <https://support.google.com/googlenest/answer/6240987?hl=en>

Caveats:

* You loose all other functionality, including wireless mesh. Bridge mode = Standalone access point. So each unit must be connected by ethernet cable to something that gives it network access.
* One can only have one bridged Nest Wifi unit per Google Home home. A workaround is to create one Google Home home per unit you'll have in access point mode.

There are mesh systems that support wireless mesh in bridge mode/ AP mode, like:

* Asus AiMesh: <https://www.asus.com/support/FAQ/1043044/>
* Netgear Orbi: <https://kb.netgear.com/000061927/What-is-the-difference-between-router-mode-and-AP-mode>
* TP Link Deco: <https://www.tp-link.com/us/support/faq/1842/>
* Ubiquiti AmpliFi: <https://help.amplifi.com/hc/en-us/articles/220979347-Enabling-Bridge-Mode>

### Setup - I have a new ISP, how do I move Nest Wifi to it?

ew ISP often requires you to factory reset all Nest Wifi units ( <https://support.google.com/googlenest/answer/6246619?hl=en> ) and set up the Nest Wifi network from scratch ( <https://support.google.com/googlenest/answer/9548301?hl=en> ).

* Reuse your existing wireless network name (SSID) and password so your client devices reconnect to the new network automagically.

This is due to how Nest Wifi is designed in regards to management; unlike most other home router systems, Nest Wifi can only be managed through Google servers, even if the Nest Wifi unit(s) fails to reach the internet. And if Nest Wifi can't reach the internet, you can't tell it to change its' WAN type. You can get lucky and have Nest Wifi just work when connecting it to the new ISP equipment, but that depends on what WAN type both your old and new ISP have.

If you have to set up Nest Wifi from scratch it's also a good idea to make sure the ISP equipment is put in bridge mode to avoid double NAT, _before_ setting up Nest Wifi from scratch again. Double NAT is known to cause random problems and performance degradation with Nest Wifi, so avoid that if possible.

* <https://dongknows.com/double-nat-vs-single-nat>
* <https://support.google.com/googlenest/answer/6277579?hl=en>

If you still haven't got Nest Wifi online after reading above information, check whether your ISP provides WAN in a way Nest Wifi supports:

* <https://support.google.com/googlenest/answer/6246630?hl=en>

Also check if your ISP uses VLAN tags. Nest Wifi supports some few commonly used ones:

* <https://support.google.com/googlenest/answer/9798157?hl=en>

If your ISP uses none of thosea common VLAN tags, a workaround is to use a managed switch between your ISP equipment and the main/primary Nest Wifi unit to untag the WAN before it hits Nest Wifi. More on that:

* <https://superuser.com/questions/1148268/how-to-ditch-centurylink-fiber-modem>

Above workaround can be especially helpful if your ISP uses both WAN type "PPPoE" _and_ VLAN tags. That specific combination has caused trouble for Nest Wifi users earlier.

More tips and tricks is best found by going back in time:

* <https://www.google.com/search?q=%28site%3Agooglenestcommunity.com%2Ft5%2FNest-Wifi+OR+site%3Areddit.com%2Fr%2Fgooglewifi+OR+site%3Areddit.com%2Fr%2Fnestwifi+OR+site%3Areddit.com%2Fr%2FOnHub%29+%28%22change+isp%22OR%22new+isp%22%29>

### Setup - How to do DHCP and DNS outside Nest Wifi

Reasons not to:

* If DNS goes down or is miscondigured, Nest Wifi becomes unmanagable from Google Home, and must be factory reset and set up from scratch.
* You lose the guest network.

How to:

* <https://www.reddit.com/r/GoogleWiFi/comments/11n4854/nest_wifi_and_pihole_dns/jbltm0m>

### Setup - Can I run the Google Home app without an iOS or Android device?

If an Android device with too old Android version:

* Use Google Home from a different Android, iOS or iPadOS device, just log in with the same Google account.
Look for 3rd party ROMs for your tablet, like LineageOS if it's supported. Then you might be able to run newer and safer Android.

If no smartphone or tablet:

* There exists an Android ROM that can run on PCs named "Android x86". Try to install that on hardware with Wi-Fi and Bluetooth, and see if Google Home can run from it. ( <https://www.android-x86.org/> ).
* Chrome OS is said to be able to run Android apps. If you don't have a Chromebook, try the free version of Chrome OS, "Chrome OS Flex" on hardware with Wi-Fi and Bluetooth, and see if you can get the Google Home app working from there.
( <https://chromeenterprise.google/os/chromeosflex/> ).
* MacOS running og Apple Silicon (ARM) is said to be able to run iOS and iPadOS apps. If you got a Mac with Apple M1, M2 etc., try to install the Google Home app on it.
* For Linux there exists Android as a container named "Waydroid", maybe it can be used with the Google Home app. ( <https://waydro.id/> ).
* Windows has "Windows Subsystem for Android", WSA for short. See if you can sideload the Google Home app with that. Not too sure this would work though, as WSA do not currently support Blietooth. (
<https://www.reddit.com/r/WSA/comments/suxa1n/google_home_app_listed_as_incompatible_on_wsa/> ).
* Run official Android LineageOS on Raspberry Pi 4 ( <https://konstakang.com/devices/rpi4/> ) or 3 ( <https://konstakang.com/devices/rpi3/> ).

Last resort:

* By a cheap, used, 2nd hand Android or iOS device with a recent enough OS version to just run the Google Home app. ( <https://support.google.com/googlenest/answer/7035987?hl=en> ).

Resources:

* <https://www.googlenestcommunity.com/t5/Nest-Wifi/The-Google-Home-app-no-longer-works-with-Android-7-So-i-now-have/m-p/250253/highlight/true#M27389>
* <https://www.googlenestcommunity.com/t5/Nest-Wifi/Setup-Google-Wifi-older-iOS/m-p/157528/highlight/true#M16740>

### Setup - Common setup issues with iOS or iPadOS

See following Google Support guide for "Troubleshoot setup with iOS":

* <https://support.google.com/googlenest/answer/12961504?hl=en>

Make sure the device used for the setup process with the Google Home app have no VPN enabled/ connected; not any 3rd party product, nor the "Apple iCloud Private Relay" ( <https://support.apple.com/en-us/HT212614> ).

Make sure the Google Home app has been granted permission for "local network access" ( <https://support.google.com/chromecast/answer/7172427?hl=en> ).

While connected to the Google Wifi/ Nest Wifi wireless network with your iPhone or iPad and doing work with the Google Home app, make sure following settings is disabled:

* "HTTP Proxy" ( <https://www.expressvpn.com/support/troubleshooting/disable-proxy-safari/#ios> ).
* "Limit IP Address Tracking".
* "Private IP Address", also known as "MAC randomization" ( <https://support.apple.com/en-ca/guide/security/secb9cb3140c/web> ).

When adding additional points: IPv6 on Nest Wifi has caused strange problems lately. One thing to try is to disable IPv6 ( <https://support.google.com/googlenest/answer/6361450?hl=en> ), add new Nest Wifi unit, then leave IPv6 off or enable it again.

If nothing of the above works, try from a different iOS, iPadOS or Android device, using the Google Home app with the same Google account, or a Google account that has been granted access to the specific Google Home home ( <https://support.google.com/googlenest/answer/9155535?hl=en> ).

### Setup - Can't add additional Nest Wifi units to the network

Here is some general advice if you're having problems with adding additional units to the network.

The general set up guidance walk you through how to add additional units:

* <https://support.google.com/googlenest/answer/9548301?hl=en>

If you're using an iOS or iPadOS device for the setup, see the following:

* <https://support.google.com/googlenest/answer/12961504?hl=en>
Make sure "HTTP Proxy" is set to "none".
* <https://www.expressvpn.com/support/troubleshooting/disable-proxy-safari>
And make sure "Private IP Address" (Mac randomization) is disabled.
* <https://support.apple.com/en-us/guide/security/secb9cb3140c/web>
* <https://support.apple.com/en-us/HT211227>

For whatever device you use for setup (iOS, iPadOS or Android), make sure any VPN are disabled, and that Wi-Fi and Bluetooth are enabled. Also make sure to use the latest version of the Google Home app.

Some other tips that can help:

* Tro to restart all working Nest Wifi units by using the "Restart entire network" inside the Google Home app -> Wi-Fi (icon) -> Network settings -> Restart entire network. Then try to set up the additional unit.
* Place the unit you're trying to add close to the primary unit during the setup process. When setup is done and unit has updated itself and rebooted, unplug its' power and move it where you want it.
* Power off all other units but the primary/main/master unit. Try to set up the additional unit. If success, let it update and reboot before powering on all the other units. All units should now come back online.
* If the additional unit also has ethernet ports, try to connect its' WAN port to the primary/main/master unit's LAN port with an ethernet cable during setup.
* IPv6 has caused trouble in the past when adding additional units. Try to disable IPv6 in the Google Home app -> WiFi (icon) -> Network settings -> Advanced networking. Keep it disabled until unit is added. Enable IPv6 again if you need it.
* If the unit you're trying to add isn't brand new, make sure it's factory reset ( <https://support.google.com/googlenest/answer/6246619?hl=en> ) and ready for setup.
* Try the setup process from a different iOS, iPadOS or Android unit. Make sure to use the same Google account inside the Google Home app.
* Make sure not to run double NAT, as it can cause strange problems and performance degradation ( <https://dongknows.com/double-nat-vs-single-nat/> ). Disable the routing functionality, DHCP, firewall and Wi-Fi in any equipment in front of the first/main/master Nest Wifi unit.
* Don't mix the new Nest Wifi Pro with older Google Wifi and Nest Wifi, as it's not backwards compatible.

Be aware that Nest Wifi units are made for different countries/regions in order to comply with Wi-Fi regulations (frequencies, channels and signal strength). Mixing units made for different regions are not supported. The Google Home app should warn you if that's the case, but it doesn't always do that.

### Wired backhaul - Managed switch

The recommendation is to use a unmanaged switch with no fancy features, like:

* Loop detection/ prevention: Nest Wifi has this built in.
* BPDU forwarding prevention.

Example of known good switches for use inside a Google Nest Wifi network:

* Netgear GS108
* TP-Link TL-SG108

There exists unmanaged switches with features that a) will not work well with Nest Wifi and b) can't be turned off because it's unmanaged, like some switches from QNAP. These should be avoided.

If you want to use a managed switch, sometimes called a smart switch, behind
be sure to do the following:

* Disable any loop detection / prevention feature, like 802.1d STP (spanning tree protocol).
* Disable any BPDU forwarding guard / prevention / protection.

More info on use of managed switches with Nest Wifi:

* <https://www.reddit.com/r/GoogleWiFi/comments/qpurq8>
* <https://www.reddit.com/r/GoogleWiFi/comments/ghkqnz/comment/fq9uwnx/>

### MAC randomization and Family Wi-Fi

This is due to a privacy related feature of newer OSes (Android, iOS, Windows) known as MAC randomization, which makes it look like a new/different device connects to your Nest Wifi.

Both the Family Wi-Fi/parental control and the pausing functionality has been broken by design ever since MAC randomization became a thing years ago. More on MAC randomization from:

* Apple: [1] <https://support.apple.com/en-us/guide/security/secb9cb3140c/web>, [2] <https://support.apple.com/en-us/HT211227>
* Google / Android: <https://source.android.com/docs/core/connect/wifi-mac-randomization-behavior>
* Microsoft Windows: <https://support.microsoft.com/en-us/windows/ac58de34-35fc-31ff-c650-823fc48eb1bc>

You could look into controlling access on a different level, for instance the device itself. With products like:

* Apple -> Family Sharing -> Screen time: <https://www.apple.com/family-sharing>
* Google Family Link: <https://families.google/familylink>
* Microsoft Family Safety: <https://www.microsoft.com/en-us/microsoft-365/family-safety>

MAC randomization aside, if you have temporary/recent problems with parental control and/or pausing of devices, I've read that factory reset and set the whole network up again from scratch could fix strange problems with pausing and unpausing devices. Reuse the network name (SSID) and password, then devices should reconnect automagically.

## Frequent issues

### Network appears as offline

This is an issue many have been experiencing lately. Based on previous threads it seems to be related to IPv6 in Nest Wifi, but I don't know for sure what causes it. Hopefully we'll have a firmware update that fixes it soon, but no word on that from Google yet.

Least to most "destructive" things to test:

* Pull down to refresh inside the Google Home app on the home screen, make sure the refresh wheel appear.
* Try to power cycle at least the main/ master puck.
* Try to disable then enable "Nest Wifi Cloud Services" from the Google Home app. Wi-Fi (icon) -> Settings (icon) -> Privacy settings -> Nest Wifi Cloud Services.
* Try to disable IPv6. Wi-Fi (icon) -> Settings (icon) -> Advanced networking -> IPv6.

Other relevant things to check:

* While using the Google Home app for Nest Wifi, make sure you don't have any VPN services connected. This includes "Apple iCloud Private Relay" ( <https://support.apple.com/en-us/HT212614> ).
* If on iPhone, make sure the Google Home app has been granted permission for "local network support" ( <https://support.google.com/chromecast/answer/7172427?hl=en> ).
* Make sure you don't run double NAT: Any router in front of Nest Wifi should be in bridge mode, as Nest Wifi itself is a router with NAT, firewall and DHCP.

### Unnamed duplicate devices in the device list

One reason for the ever growing list of unknown devices could be MAC randomization, a privacy feature built in to most OS-es to make devices harder to track across networks.

* Apple: [1] <https://support.apple.com/en-us/guide/security/secb9cb3140c/web>, [2] <https://support.apple.com/en-us/HT211227>
* Google / Android: <https://source.android.com/docs/core/connect/wifi-mac-randomization-behavior>
* Microsoft Windows: <https://support.microsoft.com/en-us/windows/ac58de34-35fc-31ff-c650-823fc48eb1bc>

It can help to make sure this is disabled for all devices connected to your Nest Wifi network.

## Feature requests

### 2.4GHz network for IoT devices

How to provide feature requests to Google: [Feature requests](#feature-requests).

That being said; doing something to make it easier to use 2.4GHz only devices with Nest Wifi is probably _the_ most requested feature, but Google shows great resilliency against doing anything about it.

## Other

### General best practices for wireless performance and stability

Read on recommendations for placement of the Nest Wifi units:

* <https://support.google.com/googlenest/answer/7183150?hl=en>

And how many you should have:

* <https://support.google.com/googlenest/answer/7182840?hl=en>

And also make sure the ISP equipment in front of Nest Wifi is put into bridge mode, sometimes called bypass mode, to avoid double NAT. Not doing this can cause performance and reliability issues:

* <https://dongknows.com/double-nat-vs-single-nat/>
* <https://support.google.com/googlenest/answer/6277579?hl=en>
