const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("emojify")
    .setDescription("Convierte un texto en emojis")
    .addStringOption((option) =>
      option
        .setName("texto")
        .setDescription("Texto a convertir")
        .setMaxLength(2000)
        .setRequired(true)
    ),
  async execute(interaction) {
    const text = interaction.options.getString("texto").toLowerCase();
    var emojified = text
      .split("")
      .map((char) => {
        if (char === " ") {
          return " ";
        } else {
          return `:regional_indicator_${char}:`;
        }
      })
      .join("");
    if (emojified.length > 2000) {
      return interaction.reply({
        content: "El texto es demasiado largo para ser emojificado",
      });
    }
    await interaction.reply({ content: emojified });
  },
};
