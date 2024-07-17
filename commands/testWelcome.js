const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { PermissionFlagsBits } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("welcome")
    .setDescription("testea el mensaje de bienvenida")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const images = [
        "https://i.imgur.com/hb1pJt4.png",
        "https://i.imgur.com/VlgcMO7.png",
        "https://i.imgur.com/VaKK7cN.png",
        "https://i.imgur.com/VJ05UHa.png",
        "https://i.imgur.com/MtPMpgP.png",
        "https://i.imgur.com/WByJ5js.png",
        "https://i.imgur.com/i5va6tT.jpeg",
        
      ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    const embed = new EmbedBuilder()
        .setTitle("¡Bienvenido!")
        .setDescription(`👋Bienvenido al servidor PAPAAA, USERNAME👋`)
        .setImage(selectedImage)
        .setColor("Red");
    return interaction.editReply({ embeds: [embed] });
  },
};
