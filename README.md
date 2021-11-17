# Personal Portfolio Website 🔥
> https://ramrabadi.github.io/

[![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg)](https://github.com/ramrabadi/ramrabadi.github.io/commits/main)
[![Website shields.io](https://img.shields.io/badge/website-up-yellow)](https://ramrabadi.github.io/)
[![Ask Me Anything !](https://img.shields.io/badge/ask%20me-linkedin-1abc9c.svg)](https://www.linkedin.com/in/ramez-alrabadi/)

### Website Preview

#### Hero Section
![hero](https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/github_previews/hero.gif)

#### About Section
![about](https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/github_previews/about.png)

#### Projects Section
![about](https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/github_previews/projects.png)


## Features 📋
⚡️ Fully Responsive, built with React.\
⚡️ CI/CD pipeline through Github Actions. \
⚡️ Typing animation using `Typed.js`.\
⚡️ Highly customizable with Tailwind CSS.

## Run Locally 🏃

Clone the project

```bash
  git clone https://github.com/ramrabadi/ramrabadi.github.io
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies (legacy-peer-deps is required because npm changed the behavior of peer deps and some dependencies haven't caught up)

```bash
  npm install --legacy-peer-deps
```

Start the development server 

```bash
  npm run dev
```

## Deployment 📦
- To deploy this project, we can use [Github Pages](https://pages.github.com/).
- First, you need to create github repository with name `<your-github-username>.github.io`.
- Next, run `npm run build && npm run export` to generate your website's static files.
- Lastly, upload the contents of the `out` file to your repository and navigate to `<your-github-username>.github.io` to see your website live.
- I would recommend building a CI/CD pipeline through Github actions to automate the build and export process. [Here](https://github.com/marketplace/actions/deploy-to-github-pages) is a useful article to get started.

## Sections 📚
✔️ Home \
✔️ About \
✔️ Projects \
✔️ Contact 

## Tech Stack 🛠️
* _Node.js_
* _Next.js (React Framework)_
* _Tailwind CSS_
* _Github Pages_
* _Github Actions (CI/CD)_
