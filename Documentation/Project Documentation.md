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
      - [Packages and tools](#packages-and-tools)
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
- Frontend: Next.js


#### Packages and tools
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- SASS (SCSS)
- ZOD (for validation)


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

## Appendix
