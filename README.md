# LAB - Class 37, 38, & 39

## Project: Cookie Stand Admin

- Version: 2.1
- Author: Ekow Yawson

### Collaborators

- Stephanie Johnson
- Latherio Kidd

### Deployment URL's

[Cookie-Stands-API](https://cookie-stands-api.vercel.app/)
[Cookie-Stands-Admin](https://cookie-stand-admin-liart-ten.vercel.app/)

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

- The `pages/Index.js` should…
  - [x] Have `<Head>` component with **page title** set to `Cookie Stand Admin`
  - [x] Have a `<header>` component that matches the **Spec**.
  - [x] Have a `<main>` component containing `<form>` and a `placeholder` component showing **JSON string** of `last created Cookie Stand`.
  - [x] Have a `<footer>` component that matches the **Spec**.

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

### Changelog

#### Version 1.0

***Spec***:

![Cookie Stand Admin Version 1](https://codefellows.github.io/seattle-code-python-401d24/class-37/lab/cookie-stand-admin-version-1.png)

- Initial build
- Created `pages/Index.js` with
  - `<Head>` component containing **page title** set to `Cookie Stand Admin`.
  - `<header>` component that matches the **Spec** above.
  - `<main>` component containing `<form>` and a `placeholder` component showing **JSON string** of `last created Cookie Stand`.
  - `<footer>` component that matches the **Spec** above.
- Styling:
  - Implemented **TailwindCSS** ***utility*** ***classes***.

#### Version 2.0

***Spec-V2***:

![Cookie Stand Admin Version 2](https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-version-2.png)

![Cookie Stand Admin No Stands](https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-no-stands.png)

- Modified `pages/Index.js` to return top level component: `<CookieStandAdmin>`
- Modified `<CookieStandAdmin>` to contain the following components that match the **Spec-V2** above:
  - `<Head>`
  - `<Header>`
  - `<main>`
  - `<CreateForm>`
  - `<ReportTable>`
  - `<Footer>`
- Imported and displayed **time slot data** from a static `data.js` file.
- Modified `<CreateForm>` component details as follows:
  - Object with `hourly_sales` property and hard coded `[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]`
- `<ReportTable>` details:
  - If reports is empty, the User Interface (**UI**) renders: `<h2>No Cookie Stands Available</h2>`
  - If reports is not empty, the UI renders a table with `thead`,`tbody` and `tfoot` components.
- Modified components styling per the **Spec**.

#### Version 2.1

- Removed hard coding of `hourly_sales` data from the `<CreateForm>` component.
  - Component now calculates hourly sales dynamically per cookie stand

#### Version 3.0

***Spec-V3***:

![Cookie Stand Admin Version 3](https://codefellows.github.io/code-401-python-guide/curriculum/class-39/lab/cookie-stand-admin-version-3.png)

![Cookie Stand Admin Login](https://codefellows.github.io/code-401-python-guide/curriculum/class-39/lab/cookie-stand-admin-login.png)

1. `pages/index.js` should export a `<Home>` component.
2. `<Home>` requirements:
   - [ ] If a user is **NOT** logged in, then the `<LoginForm>` should render.
   - [ ] If a user **IS** logged in, then the `<CookieStandAdmin>` component should render.
3. `<LoginForm>` requirements:
   - [ ] The component should receive a function passed in to call when form is submitted.
   - [ ] The function should be called with `username` and `password` arguments.
4. `<CookieStandAdmin>` requirements:
   - [ ] When a user fills out the form to add a location, the data should be posted to an API.
   - [ ] When the API response is complete, the `<CookieStandTable>` should render the latest data immediately.
     - Should **NOT** require a page reload.
5. [ ] `<CookieStandTable>` requirements:
   - [ ] The component should continue to display the **Cookie Stand** info as in version 2.
   - [ ] Add a `delete` icon in each stand’s location cell.
   - [ ] Clicking the `delete` icon should immediately delete the Cookie Stand.
     - Should **NOT** require a page reload.
6. [ ] Style all components using TailwindCSS utility classes to match **Spec**.

#### Implementation V3

To run the application locally and integrate the login and registration function:

1. Make sure you install the required packages by running `npm install`.

    ```js
    npm install
    ```

2. Create a `.env.local` file at the root of the project.
3. Inside the `.env.local` file, add your Elephant SQL URL string and a JWT Secret:

    ```config
    AUTH_SECRET={JWT_SECRET}
    ELEPHANTSQL_URL={ELEPHANT_SQL_URL_STRING}
    ```

    or

    ```config
    AUTH_SECRET={JWT_SECRET}
    LOCAL_DB_URL={LOCAL_DB_URL_STRING}
    ```

4. Run your dev server:

    ```js
    npm run dev
    ```
