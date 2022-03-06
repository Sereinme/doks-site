---
title: "Add Contributors' Description 🧷"
description: "Add the description of every contributors in their personal page."
lead: "Add the description of every contributors in their personal page."
date: 2022-03-06T01:10:28+08:00
lastmod: 2022-03-06T01:10:28+08:00
draft: false
weight: 50
images: ["add-contributors.jpg"]
contributors: ["Tech", "Sereinme", "Doks"]
---

I have to say that although this blog is to record the description of contributors, I actually use this as my categories or tags page.

Basically all we need is to create a new page in the `content` directory as follow, and make sure the `pwd` is the root folder.

```powershell
npm run create contributors/Sereinme/_index.md
```

And then change the metadata in the `_index.md` file, actually title and the body, like

```yaml
---
title: "Sereinme"
description: "Good looking guy."
date: 2022-03-06T01:06:04+08:00
lastmod: 2022-03-06T01:06:04+08:00
draft: false
images: []
---

Good looking guy.
```

And check the preview, all the things done.
