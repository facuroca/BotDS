const {ButtonBuilder, ActionRowBuilder, EmbedBuilder} = require('discord.js');

    const usernameButton = new ButtonBuilder()
        .setStyle(1)
        .setLabel('Mostrar nombre de usuario.')
        .setCustomId('username')
        .setEmoji('📝')

    const avatarButton = new ButtonBuilder()
        .setStyle(2)
        .setLabel('Mostrar avatar de usuario.')
        .setCustomId('avatar')
        .setEmoji('🖼️')

module.exports = {
    name: 'button',
    description: 'envia dos botones para mostrar el nombre y el avatar de un usuario',
    run: async (message) => {
        
        const actionRow = new ActionRowBuilder()
            .addComponents(usernameButton, avatarButton);
    
        const reply = await message.reply({
            content: 'Selecciona una opción:',
            components: [actionRow]
        });

        //crear un recolector de mensajes para esperar la interaccion del usuario
        const collector = message.channel.createMessageComponentCollector({
            filter: (interaction) => interaction.user.id === message.author.id && interaction.message.id === reply.id,
            time: 60 * 1000 // 1 minuto
        });

        //cuando el recolector este activo
        collector.on('collect', async (interaction) => {
            if (interaction.customId === 'username') {
                await interaction.reply({ content: `Tu nombre de usuario es ${interaction.user.username}` }).catch(console.error);
            } else if (interaction.customId === 'avatar') {
                const avatarEmbed = new EmbedBuilder()
                    .setTitle(`${interaction.user.username}'s Avatar`)
                    .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 1024 }))
                    .setColor('Blurple'); // Puedes cambiar el color del embed si lo deseas
            
                await interaction.reply({ embeds: [avatarEmbed] }).catch(console.error);
            }
        });

        //cuando el recolector termine
        collector.on('end', () => {
            reply.edit({components: [] }).catch(console.error);
        });
    }
}