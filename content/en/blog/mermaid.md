---
title: "Mermaid Support 🖍️"
description: ""
lead: "Test mermaid extension by doks"
date: 2022-03-06T13:24:51+08:00
lastmod: 2022-03-06T13:24:51+08:00
draft: false
weight: 50
images: ["mermaid.jpg"]
contributors: ["Tech", "Doks", "Sereinme"]
mermaid: true
---

Every time we need `mermaid` support, we add `mermaid: true` to the metadata of the page we need.

Here is a example.

```mermaid
graph TD
  A[Hard] -->|Text| B(Round)
  B --> C{Decision}
  C -->|One| D[Result 1]
  C -->|Two| E[Result 2]
```

It works good.
