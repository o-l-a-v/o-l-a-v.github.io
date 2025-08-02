---
title: Wired backhaul diagrams
keywords:
  - google wifi
  - nest wifi
---

## About

Here are some diagrams I've made to show how one should do wired backhaul with Google / Nest Wifi. The goal was to show it as simple as possible, with the audience being community users at [googlenestcommunity.com](https://www.googlenestcommunity.com/t5/Nest-Wifi/bd-p/Nest-Wifi).

Diagrams were made using [draw.io](https://www.drawio.com/) with the [IBM color blind safe color palette](https://lospec.com/palette-list/ibm-color-blind-safe).

## Best practice

### All secondaries wired with central unmanaged switch

[![all-wired](./img/Nest%20Wifi%20-%20Backhaul%20-%20Best%20practice%20-%20All%20wired.png)](./img/Nest%20Wifi%20-%20Backhaul%20-%20Best%20practice%20-%20All%20wired.png)

### All secondaries as wireless

[![all-wireless](./img/Nest%20Wifi%20-%20Backhaul%20-%20Best%20practice%20-%20All%20wireless.png)](./img/Nest%20Wifi%20-%20Backhaul%20-%20Best%20practice%20-%20All%20wireless.png)

## Works but not recommended

### Mixed backhaul with switch

[![mixed-with-switch](./img/Nest%20Wifi%20-%20Backhaul%20-%20Works%20but%20not%20recommended%20-%20Mixed%201.png)](./img/Nest%20Wifi%20-%20Backhaul%20-%20Works%20but%20not%20recommended%20-%20Mixed%201.png)

### Mixed backhaul without switch

[![mixed-no-switch](./img/Nest%20Wifi%20-%20Backhaul%20-%20Works%20but%20not%20recommended%20-%20Mixed%202.png)](./img/Nest%20Wifi%20-%20Backhaul%20-%20Works%20but%20not%20recommended%20-%20Mixed%202.png)

### Daisy chain with no switch

[![daisy-chain-no-switch](./img/Nest%20Wifi%20-%20Backhaul%20-%20Works%20but%20not%20recommended%20-%20Wired%20daisy%20chain%202.png)](./img/Nest%20Wifi%20-%20Backhaul%20-%20Works%20but%20not%20recommended%20-%20Wired%20daisy%20chain%202.png)

### Daisy chain with switch at the end

![daisy-chain-with-switch](./img/Nest%20Wifi%20-%20Backhaul%20-%20Works%20but%20not%20recommended%20-%20Wired%20daisy%20chain%201.png)

## Does not work

### Modem as hub/main

[![modem-as-hub](./img/Nest%20Wifi%20-%20Backhaul%20-%20Common%20mistake%20-%20Multimodem%20as%20hub%20for%20Nest%20Wifi.png)](./img/Nest%20Wifi%20-%20Backhaul%20-%20Common%20mistake%20-%20Multimodem%20as%20hub%20for%20Nest%20Wifi.png)

### Switch before primary/main unit

[![switch-before-main](./img/Nest%20Wifi%20-%20Backhaul%20-%20Common%20mistake%20-%20Switch%20before%201st%20Nest%20Wifi%20unit.png)](./img/Nest%20Wifi%20-%20Backhaul%20-%20Common%20mistake%20-%20Switch%20before%201st%20Nest%20Wifi%20unit.png)
