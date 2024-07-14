//comando say repite los argumentos que le des
module.exports = {
    name: 'say',
    description: 'Repite lo que escribas',
    run: async (message)    => {
        const args = message.content.split(' ').slice(1).join(' ');
        if(args.length < 1) return message.reply('Debes escribir algo para que pueda repetirlo');
        await message.reply(args); 
        await message.delete();
    }
}
