const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const fs = require("fs");
require("dotenv").config();

// Function to recursively get command files
function getFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let commandFiles = [];

  for (const file of files) {
    if (file.isDirectory()) {
      commandFiles = [...commandFiles, ...getFiles(`${dir}/${file.name}`)];
    } else if (file.name.endsWith(".js")) {
      commandFiles.push(`${dir}/${file.name}`);
    }
  }
  return commandFiles;
}

let commands = [];
const commandFiles = getFiles("./commands");

for (const file of commandFiles) {
  console.log(`Cargando comando desde: ${file}`); // Imprime la ruta del archivo
  try {
    const command = require(file);
    if (command.data) {
      commands.push(command.data.toJSON());
    }
  } catch (error) {
    console.error(`Error al cargar el comando ${file}:`, error);
  }
}

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_BOT_TOKEN
);

rest
  .put(Routes.applicationCommands(process.env.APPLICATION_ID), {
    body: commands,
  })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
