const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Borra mensajes en un canal.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addIntegerOption((option) =>
      option
        .setName("cantidad")
        .setDescription("Cantidad de mensajes a borrar")
        .setMinValue(1)
        .setMaxValue(100)
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const cantidad = interaction.options.getInteger("cantidad");

    if (cantidad <= 1 || cantidad > 100) {
      return interaction.editReply({
        content: "Debes ingresar un número entre 1 y 99.",
      });
    }

    await interaction.channel.bulkDelete(cantidad, true).catch((error) => {
      console.error(error);
      interaction.editReply({
        content: "Hubo un error al intentar borrar mensajes en este canal.",
      });
    });
    const embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("Mensajes borrados")
      .setDescription(`✅ Se han borrado ${cantidad} mensajes.`)
      .setTimestamp();
    return interaction.editReply({ embeds: [embed] });
  },
};
