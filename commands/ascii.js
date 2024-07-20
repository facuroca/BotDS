const { SlashCommandBuilder } = require("discord.js");
const figlet = require("figlet");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ascii")
    .setDescription("Convertir texto a ASCII")
    .addStringOption((option) =>
      option
        .setName("texto")
        .setDescription("El texto que queres convertir")
        .setRequired(true)
    ),
  async execute(interaction) {
    const text = interaction.options.getString("texto");
    figlet(text, function (err, rendered) {
      if (err) {
        console.error(err);
        return interaction.reply({
          content: "Hubo un error al convertir el texto a ASCII",
          ephemeral: true,
        });
      }
      if (rendered.length > 2000) {
        return interaction.reply({
          content: "El texto es muy largo para ser convertido a ASCII",
          ephemeral: true,
        });
      }
      interaction.reply("```" + rendered + "```");
    });
  },
};
