# Chat GPT Telegram Bot

## Description

This is a chat GPT telegram bot(s) service, that provides a simple way to monitor all bots with an admin panel.

## Tech-stack

- Pocketbase
- Grammy
- Node.js
- Express

## Authors

- Amir Nurmukhambetov [github link](https://github.com/hereugo)

## Setup locally

- Download repo

```
git clone git@github.com:
```

- Create `.env` file in the root from `.env.example`

```
cp .env.example .env
```

| VARIABLES   | Description    |
|--------------- | --------------- |
| PB_ADMIN_EMAIL   | String. Email used to register to pocketbase first time. |
| PB_ADMIN_PASSWORD  | String. Password used to register to pocketbase first time. |
| PB_HOST   | String. |
| PORT | String. |

- Run pocketbase

```
./pocketbase/pocketbase serve 
```

- Run server in root.

```
npm run start
```

## Available endpoints

Express server has these endpoints:

- GET /active/bots - returns JSON list of bot tokens that are currently running
- POST /webhook/bots - manages bots return JSON bot info and message status
