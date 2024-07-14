//requerimientos 
require('dotenv').config();
const {Client, Events, Collection} = require('discord.js'); //requerir discord.js
const fs = require('fs'); //requerir fs



//definir cliente de discord
const client = new Client({
    intents: 3276799
});

//definir colecciones
client.commands = getCommands('./commands');
client.buttonCommands = getButtonCommands('./commands');



//contenido del bot
client.on(Events.ClientReady, async () => {
    console.log(`El bot esta conectado como ${client.user.username}`);
});

//conectar el bot
client.login(process.env.DISCORD_BOT_TOKEN);

//responder al primer mensaje recibido en el canal
client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return
    if (!message.content.startsWith('-')) return
    const args = message.content.slice(1).trim().split(' ')[0]
    try {
        const command = require(`./commandsText/${args}`);
        command.run(message);
    } catch (error) {
        console.log(`ha ocurrido un error al intentar responder el mensaje -${args}`, error.message);
    }
});

client.on('interactionCreate', async interaction => {
    if (interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);

        try {
            if (interaction.replied) return;
            await command.execute(interaction);
        } catch (error) {
            console.error(`Error al ejecutar el comando ${interaction.commandName}:`, error);
        }
    } else if (interaction.isButton()) {
        await interaction.deferUpdate();
        const buttonCommand = client.buttonCommands.get(interaction.customId);
        setTimeout(async () => {
            try {
                await buttonCommand.execute(interaction);
            } catch (error) {
                console.error(`Error al ejecutar el comando de botón: ${interaction.customId}`);
            }
        }, 1000);
    }
});

function getCommands(dir) {
    let commands = new Collection();
    const commandFiles = getFiles(dir);
    for (const file of commandFiles) {
        const command = require(file);
        commands.set(command.data.toJSON().name, command);
    }
    return commands;
}

function getButtonCommands(dir) {
    let buttonCommands = new Collection();
    const commandFiles = getFiles(dir);
    for (const file of commandFiles) {
        const command = require(file);
        buttonCommands.set(command.data.toJSON().name, command);
    }
    return buttonCommands;
}

function getFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    let commandFiles = [];

    for (const file of files) {
        if (file.isDirectory()) {
            commandFiles = [
                ...commandFiles,
                ...getFiles(`${dir}/${file.name}`) // Use path.join for cross-platform compatibility
            ];
        } else if (file.name.endsWith(".js")) {
            commandFiles.push(`${dir}/${file.name}`); // Use path.join here as well
        }
    }
    return commandFiles;
}