# Chat GPT Telegram Bot

This is a chat GPT telegram bot(s) service, that provides a simple way to monitor all bots with an admin panel.

## Screenshots

TODO

## Features

- [x] Running multiple instances of ChatGPT telegram bots
- [x] Admin Panel for managing messages, bots, users, and groups.
- [ ] Simple ChatGPT telegram bot for groups and channels

## Technologies

- Pocketbase
- Grammy
- Node.js
- Express

## Getting Started

### Configuration

Customize the configuration by copying `.env.example` and renaming it to `.env`, then editing the required parameters as desired:

| Parameters   | Description    |
|--------------- | --------------- |
| OPENAI_API_KEY | Your OpenAI API key, you can get it from [here](https://platform.openai.com/account/api-keys) |
| PB_ADMIN_EMAIL   | Email used to register to pocketbase first time. |
| PB_ADMIN_PASSWORD  | Password used to register to pocketbase first time. |

### Installing

Clone the repository and navigate to the project directory:

```
git clone https://github.com/Hereugo/ChatGPT-Telegram-Service.git 
cd ChatGPT-Telegram-Service
```

#### Running Locally

Run pocketbase

```
./pocketbase/pocketbase serve 
```

Run server in root.

```
npm run start
```

### Running using Docker Compose

TODO

## Disclaimer

This is a personal project and is not affiliated with OpenAI in any way.

## Authors

- Amir Nurmukhambetov [github link](https://github.com/hereugo)
