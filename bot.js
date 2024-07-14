//requerimientos 
require('dotenv').config();
const discord = require('discord.js'); //requerir discord.js
discord.commands = new discord.Collection(); //coleccion de comandos


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
Client.login(process.env.DISCORD_BOT_TOKEN);

//responder al primer mensaje recibido en el canal
Client.on(Events.MessageCreate, async (message) => {
    if (message.content === 'facu') {
        message.reply('crack');
    }
    if (message.content === 'g1help') {
        message.reply('Puedes recibir ayuda abriendo un ticket en el canal de soporte');
    }
    if (message.content === 'mariano') {
        message.reply('bondar');
    }
});