//comando say repite los argumentos que le des
const {EmbedBuilder} = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'Realiza un display del avatar de un usuario',
    run: async (message)    => {
        const target = message.mentions.users.first() || message.author;
        const member = await message.guild.members.fetch(target.id);
        if(!member) return message.reply('No se ha encontrado al usuario');
        const avatar = member.user.displayAvatarURL({dynamic: true, size: 1024});
        const embed = new EmbedBuilder()
            .setTitle(`Avatar de ${member.user.username}`)
            .setImage(avatar)
            .setColor('RANDOM')
            .setTimestamp();
        message.reply({embeds: [embed]});
    }
}
