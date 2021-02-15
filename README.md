# dontleaveme 😭

_🙏 Beg users to stay on your website with one line of code._

<a href="https://www.producthunt.com/posts/dontleaveme?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dontleaveme" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=284410&theme=light" alt="DontLeaveMe - Keep users on your website with one line of code. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

<img src="./assets/please-dont-go.gif" width="100%" />

## Usage

The `dontLeaveMe.init()` function has **2 parameters**.

```
dontLeaveMe.init(awayTitle, defaultTitle)
```

`awayTitle`: What the `document.title` will be once the user temporarily leaves the page.

`defaultTitle`: The `document.title` when the user is on the page.

Here is the function in action:

```
dontLeaveMe.init("Don't leave me! 😭", "My Website")
```

## Installation

### CDN

A CDN script is _perfect_ for using **dontLeaveMe** in static, HTML websites. Simply insert this script into your document's `<head>` tag:

```html
<script src="https://unpkg.com/dontleaveme/src/index.js"></script>
```

Once added, make sure to **initialize dontLeaveMe** on your page by adding this one line of JavaScript to your site:

```
dontLeaveMe.init("Don't leave me! 😭", "My Website")
```

### Are you using React?

Don't worry. I got you covered. 👍

If you are building a node-based website, simply install the following package into your project using [NPM](https://www.npmjs.com/):

```sh
npm i dontleaveme
```

Then import it into your React project.

**Make sure you wrap the function with a `useEffect()` hook or else this will not work.**

```js
import React, { useEffect } from ‘react’;
import dontLeaveMe from 'dontleaveme';

useEffect(() => {
    dontLeaveMe.init("Don't leave me! 😭", "My Website")
})
```

---

## Contributing to this project 👊

Thanks for showing interest to contribute to **dontleaveme** 💖, you rock!

Follow the directions below to setup your project and contribute to this repository.

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of [this page](https://github.com/BraydenTW/dontleaveme))

2. Clone your fork locally

```sh
git clone https://github.com/<YOUR_USERNAME>/dontleaveme
cd dontleaveme
```

3. Setup all the dependencies and packages

```sh
npm install
```

Once you submit a PR, I'll respond as soon as possible so we can take a look at what you've made!

## Making a Pull Request? 🔁

That's **awesome**! Start by following the instructions given earlier of how to run this project on your system locally.

Then, commit and push your changes:

```bash
git add .
git commit -m "My commit message"
git push
```

Once finished, you can create a pull request!

Is it your first time? Check out [this link](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) to learn how to submit a pull request.

## Think you found a bug? 🐛

Please [submit an issue](https://github.com/braydentw/dontleaveme/issues/new) and **provide a clear path to reproduction with a code example**.

The clearer you are, the easier it will be for us help!

## License

**dontleaveme** is open source software [licensed as MIT](https://github.com/braydentw/dontleaveme/blob/main/LICENSE).

---

### **Like my work?**

I would appreciate it if you gave this repo a ✨ or if you Bought Me a Coffee 👇

<a href="https://www.buymeacoffee.com/braydenw" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="200" ></a>
