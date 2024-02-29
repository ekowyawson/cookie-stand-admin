# LAB - Class 38

## Project: Cookie Stand Admin

- Author: Ekow Yawson

### Collaborators

- Stephanie Johnson
- Latherio Kidd

### Overview

We have been working with Django for the last few labs. This time; however, we will be switching to the **Next.js** stack (which builds on top of React) and styling our app with Tailwind CSS.

The task is to continue work on the `Cookie Stand Admin` app using `Next.js` and `Tailwind CSS` styling.

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

- The spec for this lab is a screen shot of and [Cookie Stand Admin Version 2](https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-version-2.png) and [Cookie Stand Admin No Stands](https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-no-stands.png)

- ![Cookie Stand Admin Version 2](https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-version-2.png)
- ![Cookie Stand Admin No Stands](https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-no-stands.png)

- [x] The pages/Index.js should return top level component `<CookieStandAdmin>`
- [x] `<CookieStandAdmin>` should contain the following components that match the spec:
  - [x] `<Head>`
  - [x] `<Header>`
  - [x] `<main>`
  - [x] `<CreateForm>`
  - [x] `<ReportTable>`
  - [x] `<Footer>`
- [x] Import **time slot data** from supplied `data.js` file.
- [x] `<CreateForm>` component details…
- [x] Object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
- [x] `<ReportTable>` details:
  - [x] If reports is empty, then render `<h2>No Cookie Stands Available</h2>`
  - [x] If reports is not empty, then render a table with `thead`,`tbody` and `tfoot` components.
- [x] Components should render to match the spec.
- [x] Style all components using **TailwindCSS utility classes** to per the spec.

#### Implementation

- Continue work within the **Cookie Stand Admin** app

#### Stretch Goals

- [ ] Flesh out Overview page to do more
- [x] Remove hard coding from `<CreateForm>` and properly calculate hourly sales per cookie stand.
- [ ] Add **delete** icons.
- [ ] Really stretch out and make **delete** icons functional.
- [ ] Persist Cookie Stand data.

### Tests

N/A
