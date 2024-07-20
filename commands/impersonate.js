const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("impersonate")
    .setDescription("Hacete pasar por otro usuario")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("El usuario que queres imitar")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("El mensaje que queres enviar")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const message = interaction.options.getString("message");
    await interaction.channel
      .createWebhook({
        name: user.username,
        avatar: user.displayAvatarURL({ dynamic: true }),
      })
      .then((webhook) => {
        webhook.send({ content: message });
        setTimeout(() => {
          webhook.delete();
        }, 3000);
      });
    await interaction.reply({
      content: "Acabo de imitar al usuario xD!",
      ephemeral: true,
    });
  },
};
