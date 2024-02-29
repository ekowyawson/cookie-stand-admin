# LAB - Class 37

## Project: Cookie Stand Admin

- Author: Ekow Yawson

### Collaborators

- Stephanie Johnson
- Latherio Kidd

### Overview

We have been working with Django for the last few labs. This time; however, we will be switching to the **Next.js** stack (which builds on top of React) and styling our app with Tailwind CSS.

The task is to create a **Cookie Stand Admin** app using this Next.js.

### Links and Resources

#### Next.js

- [Next.js](https://nextjs.org/)
- [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Next.js `next/font` - Auto-optimize and load `Inter`, a Google Font](https://nextjs.org/docs/basic-features/font-optimization)
- [Next.js Documentation - learn about Next.js features and API](https://nextjs.org/docs)
- [Learn Next.js - an interactive Next.js tutorial](https://nextjs.org/learn)
- [The Next.js GitHub repository](https://github.com/vercel/next.js/)

#### Deploying a Next.js App With Vercel

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Vercel - Next.js deployment documentation](https://nextjs.org/docs/deployment)

### Feature Tasks and Requirements

- The spec for this lab is a screen shot of [Cookie Stand Admin Version 1](https://codefellows.github.io/seattle-code-python-401d24/class-37/lab/cookie-stand-admin-version-1.png)
![Cookie Stand Admin Version 1](https://codefellows.github.io/seattle-code-python-401d24/class-37/lab/cookie-stand-admin-version-1.png)

- The `pages/Index.js` should…
  - [ ] Have `<Head>` component with **page title** set to `Cookie Stand Admin`
  - [ ] Have a `<header>` component that matches the spec above.
  - [ ] Have a `<main>` component containing `<form>` and a `placeholder` component showing **JSON string** of `last created Cookie Stand`.
  - [ ] Have a `<footer>` component that matches the spec above.

- Styling:
  - [ ] Style app using **TailwindCSS** ***utility*** ***classes***.

#### Implementation

1. Initialize Next.js project with the following command.

    ```js
    npx create-next-app@latest --js --no-app
    ```

   - *NOTE: there is no need to create a containing folder.*

2. Name your project `cookie-stand-admin`
3. Accept defaults for remaining options.
4. Strip out unused files
   - The app won’t break if they get left in, but it is good practice to remove files that you’re not using.

##### Pro tips

- Tailwind CSS Extension Pack
- React, Etc. Snippets

#### Stretch Goals

- [ ] Refactor to move components to own functions.
- [ ] Refactor to move components to own files.
- [ ] Add more styling
- [ ] Link to another page within the app

### Tests

N/A

### To run the app...
