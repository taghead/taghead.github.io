# Development Guide

This is a static website utilizing [Ruby](https://www.ruby-lang.org/en/) with [Jekyll](https://jekyllrb.com).


## Dependencies

To begin follow the official [Jekyll instructions](https://jekyllrb.com/docs/installation/).

## Folder Structure

```
│   .gitignore
│   404.html
│   Gemfile
│   Gemfile.lock
│   index.markdown
│   README.md
│   _config.yml
|
├───assets
│   ├───css
│   │       main.sass
│   │
│   └───images
│           logo_github.png
│
├───docs
│       DEVELOPMENT.md
│
├───_layouts
│       default.html
```

|Folder|Description|
|----|----|
|_site and .jekyll-cache    |  Local artifacts of serving the website. DO NOT PUSH TO REPO |
|[/assets/](/assets/)       |  Contains websites assets such as sass, scss, css and images |
|[/docs/](/docs/)           |  Contains documentation |
|[/_layouts/](/_layouts/)   |  Contains html templates used by pages in [/_pages](/_pages/) |
|[/_pages](/_pages/)        |  Contains markdown for pages and their content

Information on additional files and folders following Jekylls conventions can be found at [https://jekyllrb.com/docs/structure/](https://jekyllrb.com/docs/structure/). 

## Serving site locally

In an development environment utilize the following command to host the site locally http://localhost:4000. 

```
bundle exec jekyll serve
```

## Mentions

These are steps that have already been completed and should not be repeated unless recreating the project from scratch.

### Generate Scaffholding

Once done generate their scaffolding using the command
```
jekyll taghead.github.io
```