# TeachDH Test Site

To build a live searchable FAQ as a companion to the second edition of [*Using Digital Humanities in the Classroom*](https://www.bloomsbury.com/uk/using-digital-humanities-in-the-classroom-9781350029750/), a combination of [Jekyll](https://github.com/jekyll/jekyll) and [Create React App](https://github.com/facebook/create-react-app) was used. The React App, located in `teachdh-app-dev/` folder, renders the content and coordinates the fuzzy search and filtering of questions. Jekyll, which is the main app, handles post creation and site building.

## Updating the Site Layout

The main styles for the page are located in `assets/css/site.scss`. This [Sass](https://sass-lang.com/) file has style hooks for all the page elements in the site. Editing it will update page styles.

The layout for the site is located in `_layouts/teachdh.html`. The `{{ content }}` tag will be replaced with the questions.

## Adding Questions

We use Jekyll's [blogging features](https://jekyllrb.com/docs/posts/) to handle questions. To create a post, add a new Markdown file (`.md` extension) or HTML file (`.html` extension) to the `_posts/` directory. The file must be named in the following form:

~~~
YEAR-MONTH-DAY-TITLE.MARKUP
~~~

The dates don't matter for the purposes of this site, but earlier dates will display before later dates, so you can use the date of the post to sort questions on the main page. `TITLE` can be anything in this context. It's easier to set the title in YAML front matter of the post (see an example below).

Here's a sample Markdown question file:

~~~
---
title: "Is This a Question?"
categories:
	- Chapter 1
	- FAQ
---
This is the answer to the above question.

It is a question!
~~~

## Building the Site

### Basic Mode

To build the site, run `jekyll build` and upload the contents of the `_site` directory to your desired static host.

Or, push to a GitHub repository and [set the Pages setting to `master`](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source).

### Advanced Mode

If you would like to compress assets and HTML files and generally build a smaller version of the site, you have to have Node.js installed.

When you do, run `npm install` to install the required libraries. You will also need to install rake, with `gem install rake`.

Then, instead of running `jekyll build` as above, run `rake build` to build the site and upload the contents of `_site` to your desired static host. The Rake file will also deploy to the `gh-pages` branch for GitHub Pages using `rake deploy`.

For deployment to GitHub Pages to work, [the repository's publishing source must be set to `gh-pages`](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source).
