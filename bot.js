//requerimientos 
require('dotenv').config();
const {Client, Events} = require('discord.js'); //requerir discord.js
discord.commands = new discord.Collection(); //coleccion de comandos


//definir cliente de discord
const client = new discord.Client({
    intents: 3276799
});


//contenido del bot
client.on(Events.ClientReady, async () => {
    console.log('El bot esta conectado como ${client.user.tag}');
});

//conectar el bot
client.login(process.env.DISCORD_BOT_TOKEN);

//responder al primer mensaje recibido en el canal
client.on(Events.MessageCreate, async (message) => {
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