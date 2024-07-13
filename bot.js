//requerimientos 
require('dotenv').config();
const discord = require('discord.js'); //requerir discord.js
const bot = new discord.Client();
const config = require('./config.json'); //requerir archivo de configuración
const fs = require('fs'); //requerir sistema de archivos
bot.commands = new discord.Collection(); //coleccion de comandos


//definir cliente de discord
const Client = new discord.Client({
    intents: [37123]
});


//contenido del bot
Client.on('ready', async ( client ) => {
    console.log('Bot is ready to go!');
    Client.user.setActivity('!help', { type: 'WATCHING' });
});

//conectar el bot
Client.login('secrets.env.DISCORD_BOT_TOKEN');
