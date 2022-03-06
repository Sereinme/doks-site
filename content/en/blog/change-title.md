---
title: "Customize The Title Of Doks 🖌️"
description: "Self customize the title, title addition and description of Doks on the home page."
lead: "Self customize the title, title addition and description of Doks on the home page."
date: 2022-03-06T00:43:28+08:00
lastmod: 2022-03-06T00:43:28+08:00
draft: false
weight: 50
images: ["change-title.jpg"]
contributors: ["Tech", "Doks", "Sereinme"]
---

It is easy to change the title on the home page of Doks, just edit the `title` part in the `./config/_default/params.toml`, then it's obvious to check the change on the preview.

But it's quite confusing that if I edit the `titleAddition` and `description` part in the `params.toml` file as below, the preview seems that nothing has changed at all!

And then I find out that to change this two parts, we need to edit the `title` and `lead` metadata in `./content/en/_index.md`, and that is where the home page changes its preview.

I wanna say "What a terrible design!". Luckily, I solve the problem without wasting too much time.
