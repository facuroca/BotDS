const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Realiza un display del avatar de un usuario')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('El usuario del que quieres ver el avatar')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();

        const target = interaction.options.getUser('usuario') || interaction.user;
        if (!interaction.guild) {
            return interaction.editReply('Este comando solo se puede usar en un servidor.');
        }
        let member;
        try {
            member = await interaction.guild.members.fetch(target.id);
        } catch (error) {
            return interaction.editReply('No se ha encontrado al usuario');
        }
        if (!member) {
            return await interaction.editReply('No se ha encontrado al usuario');
        }
        const avatar = member.user.displayAvatarURL({ dynamic: true, size: 1024 });
        const embed = new EmbedBuilder()
            .setTitle(`Avatar de ${member.user.username}`)
            .setImage(avatar)
            .setColor('Blurple')
            .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
    },
};
