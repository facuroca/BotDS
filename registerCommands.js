require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
    new SlashCommandBuilder()
        .setName('say')
        .setDescription('Repite tu mensaje')
        .addStringOption(option => 
            option.setName('mensaje')
                .setDescription('El mensaje a repetir')
                .setRequired(true)),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.APPLICATION_ID, process.env.DISCORD_GUILD_ID), { body: commands })
    .then(() => console.log('Comando /say registrado con éxito.'))
    .catch(console.error);