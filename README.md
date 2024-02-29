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
  - [x] Have `<Head>` component with **page title** set to `Cookie Stand Admin`
  - [x] Have a `<header>` component that matches the spec above.
  - [x] Have a `<main>` component containing `<form>` and a `placeholder` component showing **JSON string** of `last created Cookie Stand`.
  - [x] Have a `<footer>` component that matches the spec above.

- Styling:
  - [x] Style app using **TailwindCSS** ***utility*** ***classes***.

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

- [x] Refactor to move components to own functions.
- [x] Refactor to move components to own files.
- [x] Add more styling
- [ ] Link to another page within the app

### Tests

N/A

## About `create-next-app`

### Folder Structure

- **`/app`**: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
- **`/app/lib`**: Contains **functions** used in your application, such as reusable **utility functions** and **data fetching functions**.
- **`/app/ui`**: Contains all the **UI** **components** for your application, such as **cards**, **tables**, and **forms**.
- **`/public`**: Contains all the **static** **assets** for your application, such as **images**.
- **`/scripts`**: Contains a **seeding script** that you'll use to populate your **database**.
- **Config Files**: You'll also notice config files such as `next.config.js` at the root of your application. Most of these files are created and pre-configured when you start a new project using `create-next-app`.
