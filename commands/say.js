const { SlashCommandBuilder } = require("discord.js");

//comando say repite los argumentos que le des
module.exports = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Repite lo que escribas")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("El mensaje que quieres repetir")
        .setRequired(true)
    ),
  async execute(interaction) {
    const message = interaction.options.getString("message");
    await interaction.reply(message);
  },
};
