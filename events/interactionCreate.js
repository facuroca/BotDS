const { Client, Collection } = require("discord.js");
const fs = require("fs");
const client = new Client({ intents: 3276799 });

//definir colecciones
client.commands = getCommands("./commands");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);

    try {
      if (interaction.replied) return;
      await command.execute(interaction);
    } catch (error) {
      console.error(
        `Error al ejecutar el comando ${interaction.commandName}:`,
        error
      );
    }
  },
};

function getCommands(dir) {
  let commands = new Collection();
  const commandFiles = getFiles(dir);
  for (const file of commandFiles) {
    const command = require("." + file);
    commands.set(command.data.toJSON().name, command);
  }
  return commands;
}
function getFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let commandFiles = [];

  for (const file of files) {
    if (file.isDirectory()) {
      commandFiles = [
        ...commandFiles,
        ...getFiles(`${dir}/${file.name}`), // Use path.join for cross-platform compatibility
      ];
    } else if (file.name.endsWith(".js")) {
      commandFiles.push(`${dir}/${file.name}`); // Use path.join here as well
    }
  }
  return commandFiles;
}
