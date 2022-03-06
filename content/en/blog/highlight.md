---
title: "Highlight Extension Configuration 🎨"
description: "Enable highlights of source codes and customize languages and styles."
lead: "Enable highlights of source codes and customize languages and styles."
date: 2022-03-06T13:06:44+08:00
lastmod: 2022-03-06T13:06:44+08:00
draft: false
weight: 50
images: ["highlight.jpg"]
contributors: ["Tech", "Css", "Javascript"]
---

## Preparation

Make sure that `highlight` parameter is `true` in `./config/_default/params.toml`, and your doks site must not be `doks-child-theme`, which you will lose the `assets` folder.

## Choose Highlight Style

This term the config file is `./assets/scss/app.scss`, and you need to pick one style and add to it, like

```scss
/** Import highlight.js */
@import "highlight.js/scss/monokai";
```

And the `highlight.js` styles are in the `./node_modules/highlight.js/scss` folder.

## Different Languages Supprot

To support different source code, we need to change the `./assets/highlight.js` file and add languages we want, like

```javascript
import python from 'highlight.js/lib/languages/python';
hljs.registerLanguage('python', python);
```

Notice that those two rows are not in the same block.

Finally, you can check the preview and see the beautiful highlight codes.
