---
title: "Deploy and Update 🎈"
description: "How to deploy and update the site using doks"
lead: "How to deploy and update the site using doks."
date: 2022-03-05T19:44:49+08:00
lastmod: 2022-03-05T19:44:49+08:00
draft: false
weight: 50
images: ["update.jpg"]
contributors: ["Tech", "Git", "Sereinme"]
---

## First time deploy

When deploying the site for the first time, make sure you have a Github or other online repositories, then we can go to the dploy part.

First need to initialize the static git repository. We should at the doks site folder.

```shell
cd my-doks-site
npm run init
```

Here we clean the git repository before and create a new one.

Then we get a remote of our online repository. We should replace the `<remote repository URL>` by our personal url.

```shell
git remote add origin <remote repository URL>
```

We can check the remote status using following command.

```shell
git remote -v
```

Finally, we commit all things down and push them online.

```shell
git add .
git commit -m "First commit"
git push -u origin main
```

## Update

First thing to do is to build the local site. Make sure the directory is your site, like `my-doks-site`.

```shell
npm run build
```

Then commit the changes and push files online.

```shell
git add .
git commit -m "update"
git push -u origin main
```
