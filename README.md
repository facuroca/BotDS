# G1P Bot for Discord

The G1P Bot is a newly programmed bot that its sole purpose is to do everything that i want. :)

## Contents

* [Features](#features)
* [Usage](#usage)
  * [Dependencies](#dependencies)
  * [Hosting Requirements](#hosting-requirements)
  * [Running](#running)

## Features

- [X] Commands for echoing arguments
- [X] Commands for showing 1024px avatars of discord users
- [X] Commands for showing up to date different currency prices

## Installation

To know how to use other features of the Bot please head to the [Wiki](N/A). This guide is
strictly to learn how to use the bot

### Dependencies

The bot requires **Node.JS to work**.

The bot will download libraries such as `discord.js`, `axios` to the `Libs` directory
other libraries will be directly injected to the bot

We use Node.JS to manage the dependencies.

* [JDA](https://github.com/DV8FromTheWorld/JDA)
  * Version: **4.1.1_137**
  * Documentation: [Javadoc](https://ci.dv8tion.net/job/JDA/javadoc/)
* [JDA-Command-Framework](https://github.com/xChevy/JDA-Command-Framework)
  * Version: **1.12-Snapshot**
* [Gson](https://github.com/google/gson)
  * Version: **2.8.6**
  * Documentation: [Javadoc](https://www.javadoc.io/doc/com.google.code.gson/gson)
* [mongo-java-driver](https://github.com/mongodb/mongo-java-driver)
  * Version: **3.12.3**
  * Documentation: [Javadoc](https://mongodb.github.io/mongo-java-driver/3.12/javadoc/)
* [Addons](https://github.com/xChevy/Addons)
  * Version: **1.0.0_0**
  
### Hosting requirements

* Node.JS
* Discord application token

### Running

To start running you need to initialize the bot using `node registerCommands.js` and `node bot.js`