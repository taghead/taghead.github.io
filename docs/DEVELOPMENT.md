# Development Guide

This is a static website utilizing [Ruby](https://www.ruby-lang.org/en/) with [Jekyll](https://jekyllrb.com).


## Dependencies

To begin follow the official [Jekyll instructions](https://jekyllrb.com/docs/installation/).

## Basic Folder Structure

```
├───  assets
├───  docs
├───  _layouts
├───  _pages
├───  index.markdown
```

|Folder/File|Description|
|----|----|
|_site and .jekyll-cache              |  Local artifacts of serving the website. DO NOT PUSH TO REPO |
|[/assets/](/assets/)                 |  Contains websites assets such as sass, scss, css and images |
|[/docs/](/docs/)                     |  Contains documentation |
|[/_layouts/](/_layouts/)             |  Contains html templates used by pages in [/_pages](/_pages/) |
|[/_pages](/_pages/)                  |  Contains markdown for pages and their content
|[/index.markdown](/index.markdown)   |  Contains markdown for index page

Information on additional files and folders following Jekylls conventions can be found at [https://jekyllrb.com/docs/structure/](https://jekyllrb.com/docs/structure/). 

## Adding new pages, layout and scss

1. Create a new html file in [/_layouts/](/_layouts/)
2. Create new scss in [/assets/css](/assets/css/)
3. Create new page in [/_pages/](/_pages/)

### Example

1. Create [/_layouts/newpage.html](/_layouts/newpage.html) and populate it with

    ```html
    <!doctype html>
    <html>

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"     charset="utf-8">
        <title>{{ page.title }}</title>
        <link rel="stylesheet" href="{{ '/assets/css/newpage.css' | relative_url }}" type="text/css" />
      </head>

      <body>

        <main>
          {{ content }}
        </main>

      </body>

    </html>
    ```
    note that the stylesheet points to [/assets/css/newpage.css](/assets/css/newpage.css)


2. Create [/assets/css/newpage.sass](/assets/css/newpage.sass) and populate it with 
    ```scss
    ---
    ---
    
    // The Tripple dashes, spacing and a comment on this line is required.
    html
      background: #ffe600
    ```

3. Create [/_pages/newpage.markdown](/_pages/newpage.markdown) and populate it with 
    ```md
    ---
    permalink: /newpage/
    layout: newpage
    title: page-title-newpage
    ---
    
    HELLO WORLD
    ```

4. Test the site by serving it locally and visiting localhost:4000/newpage


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