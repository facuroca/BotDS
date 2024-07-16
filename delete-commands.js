const { REST, Routes } = require("discord.js");
require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN);

// and delete your commands GUILD OR GLOBAL!
(async () => {
  try {
    console.log(`Started refreshing application (/) commands.`);

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest
      .put(
        Routes.applicationGuildCommands(
          process.env.APPLICATION_ID,
          process.env.DISCORD_GUILD_ID
        ),
        { body: [] }
      )
      .then(() => console.log("Successfully deleted all guild commands."))
      .catch(console.error);

    console.log(`Successfully reloaded application (/) commands.`);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
