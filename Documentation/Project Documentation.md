# Landrup Dans - Project Documentation
Lasse Karahan Kristiansen - WU11

## Table of Contents
- [Landrup Dans - Project Documentation](#landrup-dans---project-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
    - [Site URL](#site-url)
    - [Users](#users)
  - [Project Description](#project-description)
    - [Project stack](#project-stack)
      - [Next.js](#nextjs)
      - [Typescript](#typescript)
      - [SCSS (SASS)](#scss-sass)
      - [React Icons](#react-icons)
      - [ZOD](#zod)
      - [API - landrup-dans-api](#api---landrup-dans-api)
  - [Code Snippets](#code-snippets)
  - [References](#references)
  - [Appendix](#appendix)

## Introduction

### Site URL
Host with render.com\
[https://terminspr-ve-wu11-wu11-lasse-karahan.onrender.com/](https://terminspr-ve-wu11-wu11-lasse-karahan.onrender.com/)

### Users
| id | username | password | age | role |
| --- | --- | --- | --- | --- |
| 1 | instructor1 | 1234 | 24 | instructor |
| 2 | instructor2 | 1234 | 32 | instructor |
| 3 | instructor3 | 1234 | 27 | instructor |
| 4 | instructor4 | 1234 | 31 | instructor |
| 5 | user1 | 1234 | 14 | default |
| 6 | user2 | 1234 | 17 | default |
| 7 | user3 | 1234 | 21 | default |
| 8 | user4 | 1234 | 24 | default |
| 9 | user5 | 1234 | 52 | default |
| 10 | user6 | 1234 | 51 | default |


## Project Description

### Project stack

#### [Next.js](https://nextjs.org/)
- **Why nextJS** - Next.js is a React framework that allows for server-side rendering and static site generation. This is useful for SEO and performance optimization. It also has a lot of built-in features that make it easier to work with React.
   - **Alternative** - [SvelteKit](https://github.com/sveltejs/kit) - SvelteKit is a new framework for building web applications with Svelte. It is designed to be fast and easy to use, with a focus on developer experience. SvelteKit is a good alternative to Next.js if you prefer Svelte over React.


####  [Typescript](https://www.typescriptlang.org/)
- **Why Typescript** - TypeScript is a superset of JavaScript that adds static typing to the language. This can help catch bugs early and make the code more readable and maintainable. TypeScript is especially useful in larger projects where the codebase can become hard to manage.
   - Alternative - [Flow](https://flow.org/) - Flow is a static type checker for JavaScript. It is similar to TypeScript but has a different syntax and feature set. Flow is a good alternative to TypeScript if you prefer its syntax and features.


#### [SCSS (SASS)](https://sass-lang.com/)
- **Why SCSS** - SCSS is a preprocessor for CSS that adds features like variables, nesting, and mixins. This can make the code more readable and maintainable. SCSS is especially useful in larger projects where the CSS can become hard to manage.
   - **Alternative** - [Less](https://lesscss.org/) - Less is another preprocessor for CSS that is similar to SCSS. It has a different syntax and feature set but serves the same purpose. Less is a good alternative to SCSS if you prefer its syntax and features.

#### [React Icons](https://react-icons.github.io/react-icons/)
- **Why React Icons** - React Icons is a library of popular icon packs that can be easily used in React applications. It provides a simple API for adding icons to your components and supports a wide range of icon packs. React Icons is especially useful when you need to add icons to your components without having to download and manage the icon files yourself.
   - **Alternative** - [Font Awesome](https://fontawesome.com/) - Font Awesome is a popular icon pack that provides a wide range of icons for web applications. It can be easily added to your project using a CDN or by downloading the icon files. Font Awesome is a good alternative to React Icons if you prefer its icon pack.
   - **Alternative** - [Material Icons](https://material.io/resources/icons/) - Material Icons is an icon pack from Google that provides a wide range of icons for web applications. It can be easily added to your project using a CDN or by downloading the icon files. Material Icons is a good alternative to React Icons if you prefer its icon pack.

#### [ZOD]([https://](https://zod.dev/))
  - **Why ZOD** - Zod is a TypeScript-first schema declaration and validation library. It is designed to be easy to use and type-safe. Zod allows you to define schemas for your data and validate it against those schemas. This can help catch bugs early and ensure that your data is always in the correct format.
     - **Alternative** - [Joi](https://joi.dev/) - Joi is a popular schema declaration and validation library for JavaScript. It is similar to Zod but has a different syntax and feature set. Joi is a good alternative to Zod if you prefer its syntax and features.



#### API - landrup-dans-api

[Landrup Dans API](https://github.com/rts-cmk/landrup-dans-api)
- Backend DB: sqlite3 //REVIEW - change apropiately accorning to the project stack - after review


## Code Snippets

```ts
type Weekdays = 'Mandag' | 'Tirsdag' | 'Onsdag' | 'Torsdag' | 'Fredag' | 'Lørdag' | 'Søndag'

type LandrupDansApiActivityObject = {
    id: number,
    name: string,
    description: string,
    weekday: 
        //NOTE - This is a union type of the Weekdays type with the first letter capitalized and lowercase. This is to ensure that the API returns the correct format of the weekdays and handle minor typos.
        Capitalize<Weekdays> | 
        Lowercase<Weekdays>,,
    ...
    asset: {
        id: number,
        url: string,
        createdAt: string,
        updatedAt: string
    },
    users: [ LandrupDansApiUserObject ]
}
```

## References
- Frontend framework -  [Next.js](https://nextjs.org/)
-  - [Typescript](https://www.typescriptlang.org/)
- insert - [SCSS (SASS)](https://sass-lang.com/)
- insert - [React Icons](https://react-icons.github.io/react-icons/)
- insert - [ZOD](https://zod.dev/)


## Appendix
