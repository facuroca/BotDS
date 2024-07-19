//requerimientos
require("dotenv").config();
const { Client, Events, Collection } = require("discord.js"); //requerir discord.js
const fs = require("fs"); //requerir fs
const path = require("path"); //requerir path

//definir cliente de discord
const client = new Client({
  intents: 3276799,
});

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(path.join(eventsPath, file));
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

//conectar el bot
client.login(process.env.DISCORD_BOT_TOKEN);
