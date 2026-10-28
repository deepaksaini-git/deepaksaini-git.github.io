# deepaksaini-git.github.io

Jekyll site (GitHub Pages). Sab kuch ek hi jagah se control hota hai:

| Kya badalna hai | Kahan |
|---|---|
| Email / Telegram / YouTube / LinkedIn | `_config.yml` (khali = link hide) |
| Menu links | `_data/nav.yml` |
| Post categories | `_data/categories.yml` |
| Themes (price, preview, download links) | `_data/themes.yml` |
| Header / Footer | `_includes/header.html`, `_includes/footer.html` |
| Saari CSS | `style.css` (koi inline CSS nahi) |

## Naya post
`_posts/YYYY-MM-DD-slug.md`:

```
---
title: "Post title"
date: 2026-10-28
category: latest-jobs      # latest-jobs | results | admit-cards
description: "1-2 line summary (SEO + cards)"
image: "/assets/img/banner.jpg"   # optional
---
(content)
```
`layout` likhne ki zaroorat nahi, posts ko `post` layout apne aap milta hai.
Post ke andar title `<h1>` mat rakho, layout khud title dikhata hai.
