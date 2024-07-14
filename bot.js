//requerimientos 
require('dotenv').config();
const {Client, Events} = require('discord.js'); //requerir discord.js



//definir cliente de discord
const client = new Client({
    intents: 3276799
});


//contenido del bot
client.on(Events.ClientReady, async () => {
    console.log(`El bot esta conectado como ${client.user.username}`);
});

//conectar el bot
client.login(process.env.DISCORD_BOT_TOKEN);

//responder al primer mensaje recibido en el canal
client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return
    if (message.content === 'facu') { 
        message.reply('crack')
    }
    if (message.content === 'mariano') { 
        message.reply('bondar')
    }
    if (!message.content.startsWith('-')) return

    const args = message.content.slice(1).trim().split(' ')[0]
     
    try {
        const command = require(`./commands/${args}`);
        command.run(message);
    } catch (error) {
        console.log(`ha ocurrido un error al intentar responder el mensaje -${args}`, error.message);
    }
});