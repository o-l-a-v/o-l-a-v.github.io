---
title: Hello Cloudflare Pages
authors: olav
tags:
  - changelog
  - docusaurus
---

## Hello Cloudflare Pages

The site is now deployed to Cloudflare Pages as well as GitHub Pages. Currently DNS points to GitHub Pages, but Cloudflare Pages will be the primary going forward.

## Warning - Don't use GoDaddy

I previously chose GoDaddy as registrar and DNS provider for my `.no` TLD. Big mistake.

To more easily utilize Cloudflare features like reverse proxy and WAF I wanted to move the page content to Cloudflare Pages, and thus DNS management to Cloudflare too. I tried changing nameservers in GoDaddy, it failed with error "Data management policy violation". Very describing. I then remembered I had DNSSEC enabled. I disabled it in the web GoDaddy web GUI, it reported success.

I then waited days and weeks, tried to change nameservers multiple times which always resulted in the same error. Not only that, I noticed DNS propagation had stopped working too. As in, my DNS records did not propagate to many public DNS providers, like Google, Quad9 and Cloudflare. Thus, my domain and this webpage was down.

I then called GoDaddy support, they said DNSSEC was still enabled according to their backend. An incident was made, claims of DNSSEC finally being disabled too, but the problem was not solved. After being in contact with three support reps in a timespan of over a week, I still had no progress. We're now 2.5 weeks in since I disabled DNSSEC in GoDaddy.

Let that sink in: **Two and a half weeks with DNS not working/propagating, and not being able to change nameservers to a different DNS provider**.

Luckily this is a lab/test domain, so I don't really care. But 2.5 weeks downtime with no progress is unacceptable for a registrar.

I finally tried to move my domain to a different registrar. It was a quick process, and now I'm finally done with GoDaddy.

Lesson learned: Never trust GoDaddy for anything.
