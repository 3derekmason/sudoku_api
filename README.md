# Vuedoku API

## Overview

REST API created for [Vuedoku](http://vuedoku.vercel.app) app.

Read about the app on medium: [Part I](https://medium.com/@derekmason/hi-there-thank-you-for-reading-1686b0f33b82), [Part II](https://medium.com/@derekmason/build-a-sudoku-app-with-vue-part-ii-game-ui-fe9163814189), [Part III](https://medium.com/@derekmason/build-a-sudoku-app-with-vue-part-iii-game-ux-19c5ced5f924)

### Puzzle Schema:

```
{
  "_id": ObjectID,
  "difficult": String,   // 'easy', 'medium', 'hard'
  "game_board": Array
}
```

#### Example:

```json
{
  "_id": "62d1974070adf6ee5d60774a",
  "difficult": "easy",
  "game_board": [
    [0, 0, 9, 0, 1, 0, 3, 0, 7],
    [0, 2, 0, 4, 0, 3, 1, 0, 8],
    [1, 0, 0, 0, 8, 0, 4, 0, 5],
    [0, 6, 0, 0, 0, 0, 0, 0, 2],
    [0, 5, 0, 7, 0, 9, 0, 3, 0],
    [7, 0, 0, 0, 0, 0, 0, 4, 0],
    [5, 0, 6, 0, 9, 0, 0, 0, 3],
    [9, 0, 2, 5, 0, 8, 0, 1, 0],
    [8, 0, 7, 0, 3, 0, 6, 0, 0]
  ]
}
```

---

## REST API Endpoints:

`GET /api/` returns an array of all puzzle boards.

`GET /api/easy` returns an array of all easy puzzle boards.

`GET /api/medium` returns an array of all medium puzzle boards.

`GET /api/hard` returns an array of all hard puzzle boards.

`GET /api/random` returns a single random puzzle board.

---

## Contributors

- Derek Mason is a developer in Denver, Colorado.
