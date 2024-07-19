const {
  EmbedBuilder,
  SlashCommandBuilder,
  PermissionsBitField,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tts")
    .setDescription("Envía un mensaje de texto a voz.")
    .addStringOption((option) =>
      option.setName("texto").setDescription("Texto a enviar").setRequired(true)
    ),
  async execute(interaction) {
    if (
      !interaction.member.permissions.has(
        PermissionsBitField.Flags.SendTTSMessages
      )
    ) {
      return interaction.reply({
        content: "No tienes permisos para enviar mensajes de texto a voz.",
      });
    }
    const text = interaction.options.getString("texto");

    await interaction.reply({ content: `${text}`, tts: true, ephemeral: true });
  },
};
