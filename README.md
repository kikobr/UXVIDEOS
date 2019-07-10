# UXVIDEOS

[See it with your eyes](https://kikobr.github.io/UXVIDEOS/)

## What is this nonsense?
UXVIDEOS is just a parody where we merge the identity of XVIDEOS (interface and writing) with content from the UX Design world. The objective is just to level up this name proximity joke.

#### "My video was listed and I want it out of this awful site"
I'm sorry about that. Please, send an e-mail to [kiko.herrschaft@gmail.com](mailto:kiko.herrschaft@gmail.com) or open an issue here in Github and I'll remove it as soon as possible.

---

## How to suggest a video
You just have to place a pull request, but that is really easy to do! Fork this repository, add a markdown page (.md) inside /videos folder following the pattern bellow. If you want to set a custom image, just add one inside /static/img folder.

Take some time to think about a funny title, it's really important! It needs to be a little suggestive, but without pornographic nor explicit language!

### Defining a new /videos page
Below are the properties you can use when defining a new page:
- **layout**: it should be always equal to "videos". Don't change it
- **title**: your creative title
- **duration**: invent one, respecting the pattern XXmin
- **views**: invent one, respecting the pattern 300,500k, 1.2M
- **channel**: invent one
- **youtube** *(optional)*: place the video id. When you open a video, in a URL that ends with "watch?v=0EVYTGYywX5", this code would be "0EVYTGYywX5"
- **image** *(optional)*: the name of the image inside /static/img you want to use as thumbnail. If not present, we'll try to get the image from YouTube video (if possible)
- **tags**: invent. list by line all tags

The file needs to be in the pattern bellow:
```markdown
---
layout: video
title: my hot title
duration: 10min
views: 500k
channel: Jon54
youtube: 0EVYTGYywX5
image: my-image.jpg
tags:
    - ux
    - design
---
```

### Previewing it on my local server
You don't need to preview it since it's just about creating one file. But if you wan't to preview it, you need to install nodejs, clone our repository and run the project, that uses 11ty library.

```bash
git clone https://github.com/kikobr/UXVIDEOS.git
cd UXVIDEOS/
npm install
npm run dev
```
(Then open your browser in the URL [http://localhost:8080](http://localhost:8080/))

## Have fun!

"HUE HUE BR" - GUY, Brazilian (2017)
