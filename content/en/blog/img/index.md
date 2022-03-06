---
title: "Add Images In Doks Posts 📎"
description: "Notes when adding images in doks posts."
lead: "Notes when adding images in doks posts."
date: 2022-03-06T20:24:33+08:00
lastmod: 2022-03-06T20:24:33+08:00
draft: false
weight: 50
images: ["img.jpg"]
contributors: ["Tech", "Doks"]
---

It's quite confusing that if I add images directly with perlink in markdown file and run preview, I will get a error like this

```shell
ERROR 2022/03/06 19:13:27 Image not found
If you feel that this should not be logged as an ERROR, you can ignore it by adding this to your site config:      
ignoreErrors = ["image-not-found"]
```

And I compare the existing posts and find out that only if I set the markdown file name `index.md` can I avoid this error. So the images and markdown file will at the same folder under the `blog` or other parent folders. We can create like this

```shell
npm run create blog/img/index.md
```

The images format is the same as markdown files, and we can add a description

```markdown
![Image](file.jpg "Image uploaded.")
```

And we will get the image display as follow

![Image](1.jpg "Image uploaded.")

Oops, the description does not show up. That's because the width of the image is less than the `smallLimit` in the `./config/_default/params.toml`, so this is captured as a `<Image>`, if I add a bigger image which captured as `<Figure>`, the description will show up.

![Images](2.JPG "Bigger image uploaded")

Other options see [Doks Add-Images](https://getdoks.org/tutorial/add-images/).
