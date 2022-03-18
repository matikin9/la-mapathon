# la-mapathon

[![Node.js CI](https://github.com/matikin9/la-mapathon/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/matikin9/la-mapathon/actions/workflows/node.js.yml) [![pages-build-deployment](https://github.com/matikin9/la-mapathon/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/matikin9/la-mapathon/actions/workflows/pages/pages-build-deployment)

This is a static website for the Annual LA Humanitarian Mapathon, hosted by USC & UCLA.  It uses Eleventy (11ty), a static site generator that uses Node.  Eleventy gives you a choice in templating engines.  This repository uses the Liquid templating language.

## Getting Started

### Quick Start

The website can be updated directly through the GitHub web interface.  All the content for the website is within the `src/` folder.  Each page on the website has a corresponding HTML file in the `src/` folder.  Building the site will output static HTML files in the `docs/` folder, which is also wht is published by GitHub Pages.  The site can be updated directly through the GitHub interface because of the GitHub Action that will run the command to build the site every time the repository is updated.

#### Eleventy

Each HTML file in the `src/` folder has a section at the top denoted with triple dashes `---`.  This defines the "front matter", which uses a basic markup language called [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started).  In this section you can create and define variables that get used within the page, or in any "layouts" on "includes" that the page uses.  The `index.html` page as an example:

``` yaml
---
layout: index
---
```

The `src/_includes/` folder contains Liquid files that are "partial" HTML files that are meant to be re-used within other web pages.  In the above example, but setting `layout: index`, Eleventy will look in the `src/_includes` folder for the `index.liquid` file to use as a template for this page's layout.  Here is the content of the `index.liquid` file:

``` liquid
---
layout: default
---

{{ content }}

{% include 'about' %}
```

Here we see front matter where `layout` is now set to `default`.  Layouts can be chained, so this `index.liquid` file is using `default.liquid` as *its* layout.

Continuing down, we see `{{ content }}`.  The content from `index.html` will be inserted there.  The content will continue to chain into `default.liquid` where there is also `{{ content }}`.

The next line is an include: {% include 'about' %}.  Just like with templates, Eleventy will look inside the `src/_includes/` folder to find the `about.liquid` file.  The difference with the partial being included is that Eleventy will not process any front matter in the partial.

As another example, `default.liquid` contains the following variable defined in the front matter:

``` yaml
---
siteTitle: LA Mapathon
---
```

This variable can be inserted in the page using the syntax `{{ siteTitle }}`, however it doesn't appear anywhere within the `default.liquid` file.  That's because it can be used within any of the partials included in the file.  Note the line `{% include 'head' %}`.  Inside `head.liquid` is where we see `{{ siteTitle }}` used.

### Local Development

If you clone this repository to your local environment for development, make sure you are running Node 12 or newer.

Use this command to clean the output files and build the site:

``` bash
npm run clean:build
```

Use this command to serve the resulting files:

``` bash
npm run serve
```

Or if you want to clean, build, and serve all at once, run this command:

``` bash
npm run start
```

Open [http://localhost:8080/](http://localhost:8080/) to view  the site.

## Content

Home

- Register CtA button
- About
- Slack link
- Leaderboard link

Meet the Team

- Team

Resources

- Links (HotOSM, Missing Maps)
- Tutorials
- OSM Projects
- Map Gallery

Event Page

- Agenda
- Videos
