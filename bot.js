//requerimientos 
const discord = require('discord.js'); //requerir discord.js
const bot = new discord.Client();
const config = require('./config.json'); //requerir archivo de configuración
const fs = require('fs'); //requerir sistema de archivos
bot.commands = new discord.Collection(); //coleccion de comandos


//definir cliente de discord
const Client = new discord.Client({
    intents: [
        discord.Intents.FLAGS.DIRECT_MESSAGES,
        discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});


//contenido del bot
Client.on('ready', async ( client ) => {
    console.log('Bot is ready to go!');
    Client.user.setActivity('!help', { type: 'WATCHING' });
});

//conectar el bot

Client.login('MTI2MTgxNTY3MDQ2Nzk4OTYyNg.GIQnQ3.jsnP6fP7rxAOu1-whzE2wQyZplWehJ1NPcqf8o');
