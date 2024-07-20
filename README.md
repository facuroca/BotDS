# G1P Bot for Discord

The G1P Bot is a newly programmed bot that its sole purpose is to do everything that i want. :) still looking for new fun things to implement

## Contents

- [Features](#features)
- [Usage](#usage)
  - [Dependencies](#dependencies)
  - [Hosting Requirements](#hosting-requirements)
  - [Running](#running)

## Features

- [x] Command for transforming text to ascii `/ascii text`
- [x] Command for showing 1024px avatars of discord users `/avatar user`
- [x] Command for clearing messages (up to 99 messages and only for Administrator users) `/clear 50`
- [x] Command for showing up to date criptocurrency prices like BTC,ETH,SOL,Etc. `/crypto Bitcoin`
- [x] Command for emojifying text up to 2000 length `/emojify text`
- [x] Command for showing up to date different fiat prices for argentina `/fiat Dolar`
- [x] Command for impersonating another user `/impersonate user text`
- [x] Command for echoing arguments `/say text`
- [x] Command for text to speech `/tts text`
- [x] Command for interactive calculator `/calculator`
- [x] Welcome automessage for new members on general text channel

### Dependencies

The bot requires **Node.JS to work**.

The bot will download libraries such as `discord.js`, `axios`, `dotenv`, `eslint`, `prettier`, `mathjs`, `figlet` and `puppeeteer` to the `node_modules` directory
other libraries will be directly injected to the bot

We use Node.JS to manage the dependencies.

### Hosting requirements

- Node.JS
- Discord Bot Token
- VSCode Extensions
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

### Running

To start running you need to initialize the bot using `node .`
