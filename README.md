# G1P Bot for Discord

The G1P Bot is a newly programmed bot that its sole purpose is to do everything that i want. :) still looking for new fun things to implement

## Contents

* [Features](#features)
* [Usage](#usage)
  * [Dependencies](#dependencies)
  * [Hosting Requirements](#hosting-requirements)
  * [Running](#running)

## Features

- [X] Command for showing 1024px avatars of discord users `/avatar user`
- [X] Command for clearing messages in a text channel up to 99 messages and only for Administrator users `/clear 50`
- [X] Command for showing up to date criptocurrency prices like BTC,ETH,SOL,Etc. `/crypto Bitcoin`
- [X] Command for emojifying text up to 2000 length `/emojify text`
- [X] Command for showing up to date different fiat prices for argentina `/fiat Dolar`
- [X] Command for impersonating another user `/impersonate user text`
- [X] Command for echoing arguments `/say text`
- [X] Command for text to speech `/tts text`
- [X] Welcome automessage for new members on general text channel


### Dependencies

The bot requires **Node.JS to work**.

The bot will download libraries such as `discord.js`, `axios`, `dotenv` and `puppeeteer` to the `node_modules` directory
other libraries will be directly injected to the bot

We use Node.JS to manage the dependencies.

### Hosting requirements

* Node.JS
* Discord Bot Token

### Running

To start running you need to initialize the bot using `node .`
