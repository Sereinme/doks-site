---
title: "Date Format Configuration in CTEX ⌚"
description: "Custom date configuration in ctex documents."
lead: "Custom date configuration in ctex documents."
date: 2022-03-05T20:20:24+08:00
lastmod: 2022-03-05T20:20:24+08:00
draft: false
weight: 50
images: ["date_latex.jpg"]
contributors: ["Tech", "Latex"]
---

## Display date in English

```latex
\CTEXoptions[today=old]
```

## Custom date format

```latex
\renewcommand{\today}{\number\year-\number\month-\number\day}
```
